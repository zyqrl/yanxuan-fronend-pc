/*
 * @Author: ch
 * @Date: 2022-05-18 14:54:47
 * @LastEditors: ch
 * @LastEditTime: 2022-06-14 11:49:08
 * @Description: file content
 */
import { CreateUUID, FormatDate, ToAsyncAwait } from "@/plugins/utils";
import './potoReq';
import './protoRsp';
const connect = Symbol('connect');
const send = Symbol('send');
const onMessage = Symbol('onMessage');
const fromatPotoReq = (traceId, traceType, content) => {
        let messageModel = new proto.ReqModel();
        messageModel.setTraceid(traceId);
        messageModel.setTracetype(traceType);
        content && messageModel.setContent(JSON.stringify(content));
        return messageModel.serializeBinary();
    },
    fromatPotoRsp = (data) => {
        const res = proto.RspModel.deserializeBinary(new Uint8Array(data));
        let ctx = res.getContent();
        ctx = ctx ? JSON.parse(ctx) : {};
        if (ctx.payload) {
            ctx.payload = JSON.parse(ctx.payload);
        }
        return {
            content: ctx,
            traceId: res.getTraceid(),
            traceType: res.getTracetype(),
            code: res.getCode(),
            message: res.getMessage(),
        };
    };
    
class MsbIm {
    defaultOption = {
        ioKey: 'traceId',
        reconnect: true,
    };
    socket = null;
    isOpen = false;
    queue = {};
    interceptors = {
        dataChangeBefore: null,
        dataChangeAfter: null,
        onClose: null,
        onMessage: null,
    };
    sessionData = [];
    curSessionId = null;
    constructor(option) {
        this.option = {
            ...this.defaultOption,
            ...option,
        };
    }

    /**
     * 创建连接返回一个Promise 创建成功并成功打开连接算连接成功
     * @param {*} option
     */
    [connect](option) {
        return new Promise((resolve, reject) => {
            const open = () => {
                console.log('[im] open');
                this.isOpen = true;
                resolve(this.socket);
            };
            const message = async (res) => {
                const result = fromatPotoRsp(res.data);
                this.interceptors.onMessage && this.interceptors.onMessage(result);
                // 处理服务端主动推送的消息
                this[onMessage](result);

                // 如果再消息堆里有此消息回调，则执行回调，并删除
                const cbk = this.queue[result[this.option.ioKey]];

                if (cbk) {
                    cbk(result.code !== 200 ? { error: result } : { result: result });
                    delete this.queue[result[this.option.ioKey]];
                }
            };
            const close = () => {
                console.log('[im] close');
                this.interceptors.onClose && this.interceptors.onClose();
            };
            let isUni = false;
            try {
                isUni = uni;
            } catch (e) {
                isUni = false;
            }
            if (isUni) {
                this.socket = uni.connectSocket({
                    ...this.option,
                    fail(e) {
                        reject(e);
                    },
                });
                this.socket.onOpen(() => {
                    open();
                    this.socket.onMessage((res) => {
                        message(res);
                    });
                });
                this.socket.onClose(() => {
                    close();
                });
            } else if (WebSocket) {
                try {
                    this.socket = new WebSocket(this.option.url);
                    this.socket.binaryType = 'arraybuffer';
                    this.socket.onopen = () => {
                        open();
                    };
                    this.socket.onmessage = (res) => {
                        message(res);
                    };
                    this.socket.onclose = () => {
                        close();
                    };
                } catch (e) {
                    reject(e);
                }
            }
        });
    }
    /**
     * 向服务端发送消息||请求，返回一个Promise对象，收到ioKey对应的消息会算一个同步完成
     * @param {*} data
     */
    [send](data) {
        return new Promise((resolve, reject) => {
            if (!this.isOpen) {
                return reject('连接未打开');
            }
            this.queue[data[this.option.ioKey]] = ({ result, error }) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            };

            const par = fromatPotoReq(data.traceId, data.traceType, data.content);

            let isUni = false;
            try {
                isUni = uni;
            } catch (e) {
                isUni = false;
            }
            if (isUni) {
                this.socket.send({
                    data: par,
                    fail(e) {
                        reject({ error: e });
                    },
                });
            } else if (WebSocket) {
                this.socket.send(par);
            }
        });
    }
    /**
     * 服务端推送消息，只处理服务端主动推送的消息
     * @param {*} data
     */
    [onMessage](data) {
        // 判断非服务端主动推送消息不做处理
        if (data[this.option.ioKey] || data.code !== 200) {
            return false;
        }
        console.log('[im] 主动接收的消息', data);
        let ctx = data.content;
        let historyData = [...this.sessionData],
            newData = [];
        const hisIndex = historyData.findIndex((i) => i.id === ctx.sessionId);
        if (hisIndex >= 0) {
            // 存在会话往现有会话增加一条消息,并修改最后一条消息为当前消息
            const curHisData = historyData[hisIndex];
            curHisData.messageList.push(ctx);
            curHisData.lastMessage = ctx;
            // 不在当前会话窗口则向会话消息加1条未读
            if (ctx.sessionId !== this.curSessionId) {
                curHisData.unreadCount++;
            } else {
                this.setRead({
                    content: {
                        sessionId: this.curSessionId,
                    },
                });
            }
            newData = historyData;
        } else {
            // 会话列表不存在，则创建一个会话
            newData = [
                ...historyData,
                {
                    fromAvatar: ctx.session.fromAvatar,
                    fromId: ctx.fromId,
                    fromNickname: ctx.session.fromNickname,
                    id: ctx.sessionId,
                    lastMessage: ctx,
                    messageList: [ctx],
                    updateTimeStamp: ctx.createTimeStamp,
                    unreadCount: 1,
                },
            ];
        }
        this.setSessionData(newData);
    }
    init(config) {
        return new Promise((resolve, reject) => {
            const heart = () => {
                // 要优化 心跳没回复需要重连
                setTimeout(async () => {
                    if (this.isOpen) {
                        await this[send]({
                            traceId: CreateUUID(),
                            traceType: 0,
                            content: { text: 'ping' },
                        });
                    }
                    heart();
                }, 1000);
            };
            this.option = {
                ...this.option,
                ...config,
            };
            this[connect]()
                .then((res) => {
                    resolve(res);
                    heart();
                })
                .catch((e) => {
                    console.log('eeeee', e);
                });
        });
    }
    /**
     * 设置数据
     */
    setSessionData(data) {
        let newData = JSON.parse(JSON.stringify(data));
        this.interceptors.dataChangeBefore && this.interceptors.dataChangeBefore(newData, this.sessionData);
        this.sessionData = newData;
        this.interceptors.dataChangeAfter && this.interceptors.dataChangeAfter(this.sessionData);
    }
    /**
     * 设置当前聊天窗口
     * Data为Session数据
     * @param {*} data
     */
    setCurSessionId(id) {
        this.curSessionId = id;
    }
    /**
     * 获取会话列表
     * @param {*} params
     */
    async getSessionList(params) {
        const par = {
            traceId: CreateUUID(),
            traceType: 1,
            ...params,
        };

        console.log('[im] 获取会话列表--start', par);
        let { error, result } = await ToAsyncAwait(this[send](par));
        console.log('[im] 获取会话列表--end', result, error);
        if (error) {
            return Promise.reject(error);
        }
        const { content } = result;
        // let newData = [];

        content.sessionVOS.forEach((item) => {
            if (item.lastMessage) {
                item.lastMessage.payload = JSON.parse(item.lastMessage.payload || {});
            }
            let historyData = this.sessionData;
            let hisIndex = historyData.findIndex((i) => i.id === item.id);
            if (hisIndex < 0) {
                item.messageList = [];
            }
            //     let historyData = this.sessionData;
            //     let hisIndex = historyData.findIndex((i) => i.id === item.id);
            //     if (hisIndex >= 0) {
            //         historyData[hisIndex].lastMessage = item.lastMessage;
            //         historyData[hisIndex].unreadCount++;
            //         newData.push(historyData[hisIndex]);
            //     } else {
            //         item.messageList = [];
            //         newData = [...newData, item];
            //     }
        });
        this.setSessionData(content.sessionVOS);
        return Promise.resolve(result);
    }
    /**
     * 获取会话的历史消息记录
     * @param {*} params
     */
    async getHistoryMsg() {
        const curSessionIdx = this.sessionData.findIndex((i) => i.id === this.curSessionId);
        const curSession = this.sessionData[curSessionIdx];
        console.log(curSession, this.curSessionId,'this.curSessionId');
        const msgList = curSession.messageList || [];
        const par = {
            traceId: CreateUUID(),
            traceType: 2,
            content: {
                sessionId: this.curSessionId,
                topMessageId: msgList.length ? msgList[0].id : null,
            },
        };
        console.log('[im] 获取会话历史消息--start', par);
        const { error, result } = await ToAsyncAwait(this[send](par));
        console.log('[im] 获取会话历史消息--end', result, error);
        if (error) {
            return Promise.reject(error);
        }
        const { content } = result;
        if (content.length) {
            let newData = this.sessionData;
            content.forEach((item) => {
                item.payload = JSON.parse(item.payload);
            });
            newData[curSessionIdx].messageList = content.concat(newData[curSessionIdx].messageList);
            this.setSessionData(newData);
        }
        return Promise.resolve(result);
    }
    /**
     * 会话已读
     * @param {*} params
     */
    async setRead(params) {
        const par = {
            traceId: CreateUUID(),
            traceType: '6',
            ...params,
        };
        console.log('[im] 会话已读--start', par);
        const { error, result } = await this[send](par);
        console.log('[im] 会话已读--end', result, error);

        let newData = this.sessionData.map((item) => {
            if (item.id == params.content.sessionId) {
                item.unreadCount = 0;
            }
            return item;
        });

        this.setSessionData(newData);
    }
    /**
     * 发送消息
     * @param {*} params
     */
    async sendMsg(params) {
        const index = this.sessionData.findIndex((i) => i.id === this.curSessionId);
        let curSession = this.sessionData[index];
        // 临时消息体
        let par = {
            ...params,
            traceId: CreateUUID(),
            traceType: 3,
        };
        let msgCtx = {
            ...params.content,
            ...par,
            createTimeStamp: new Date().getTime(),
            sendStatus: 'loading',
        };
        if (typeof msgCtx.payload === 'string') {
            msgCtx.payload = JSON.parse(msgCtx.payload);
        }
        // 点发送，立即把消息加入消息列表，标记为发送中状态
        curSession.messageList.push(msgCtx);
        this.setSessionData(this.sessionData);

        // 超过时间未返回视为发送失败
        this.timerStatus(msgCtx);

        console.log('[im] 发送消息--start', par);
        const { error, result } = await ToAsyncAwait(this[send](par));
        console.log('[im] 发送消息--end', result, error);
        // 接到通知，标记消息是否发送成功
        for (let i = curSession.messageList.length; i--; ) {
            const item = curSession.messageList[i];
            if (item[this.option.ioKey] === par[this.option.ioKey]) {
                curSession.messageList[i].sendStatus = msgCtx.sendStatus = error ? 'fail' : 'success';
                break;
            }
        }
        let newData = [...this.sessionData];
        newData[index] = curSession;
        this.setSessionData(newData);
        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve(result);
    }
    /**
     * 发送失败时，重新发送
     * @param {*} params
     */
    async resend(params) {
        params.sendStatus = 'loading';
        this.timerStatus(params);

        console.log('[im] 重新发送消息--start', params);
        const { error, result } = await ToAsyncAwait(
            this[send]({
                traceId: params.traceId,
                traceType: params.traceType,
                content: params.content,
            })
        );
        console.log('[im] 重新发送消息--end', result, error);
        params.createTimeStamp = result.createTimeStamp;
        if (error) {
            params.sendStatus = 'fail';
            return Promise.reject(error);
        }
        params.sendStatus = 'success';
        return Promise.resolve(result);
    }
    timerStatus(msg) {
        setTimeout(() => {
            if (msg.sendStatus === 'loading') {
                msg.sendStatus = 'fail';
                delete this.queue[msg.traceId];
            }
        }, 3000);
    }
    /**
     * 主动创建会话
     * @param {*} params
     */
    async createSession(params) {
        const par = {
            traceId: CreateUUID(),
            traceType: 9,
            ...params,
        };
        console.log('[im] 主动创建会话--start', par);
        const { result, error } = await ToAsyncAwait(this[send](par));
        console.log('[im] 主动创建会话--end', result, error);
        if (error) {
            return Promise.reject(error);
        }
        const { content } = result;
        let historyData = this.sessionData;
        let curSession = historyData.find((i) => i.id === content.id);
        if (!curSession) {
            curSession = {
                ...content,
                unreadCount: 0,
                messageList: [],
            };
            const newData = [...historyData, curSession];
            this.setSessionData(newData);
        }
        return Promise.resolve(result);
    }
    close() {
        this.socket.close();
        this.socket = null;
        this.isOpen = false;
        this.setSessionData([]);
    }
}
export default MsbIm;