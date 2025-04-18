/*
 * @Author: ch
 * @Date: 2022-05-20 09:59:06
 * @LastEditors: ch
 * @LastEditTime: 2022-05-27 10:51:44
 * @Description: file content
 */
import Vue from "vue";
import { TOKEN_KEY } from "@/constants";
import ENV from '@/plugins/config/env';

function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

Vue.prototype.$startWebSockets = function () {
  let token = this.$cookies.get(TOKEN_KEY);
  if (token && !Vue.prototype.Socket) {
    let url = `${ENV.imUrl}/ws?client=${token}&type=1`;
    Vue.prototype.Socket = new WebSocket(url);
    Vue.prototype.Socket.onopen = () => {
      let traceId = guid();
      Vue.prototype.Socket.send(
        `{"traceId":"${traceId}",traceType:1,"content":{"size": 100}}`
      );
    };
    Vue.prototype.Socket.onclose = () => {
      Vue.prototype.Socket = null;
    };
    // Vue.prototype.Socket.onerror = () => {
    //   if (Vue.prototype.Socket.readyState !== 3) {

    //   }
    // };
    Vue.prototype.Socket.onmessage = (e) => {
      if (e.data == `pong`) {
        return;
      }
      let msg = JSON.parse(e.data);
      console.log("websocket收到消息", msg);

      // 获取会话
      if (msg.traceType == 1) {
        let traceId = guid();
        let sys = msg.content.sessionVOS.find((item) => item.type != 3);
        if (sys) {
          let str = `{"traceId":"${traceId}",traceType:2,"content":{"sessionId":${sys.id}}}`;
          Vue.prototype.Socket.send(str);
          this.$store.commit("setUnreadCount", msg.content.totalUnreadCount);
        }
      }

      // 获取消息列表
      if (msg.traceType == 2) {
        this.$store.commit("setSocketMsgData", msg.content);
        setTimeout(() => {
          console.log(this.$store.state);
        }, 500);
      }

      // 接收消息
      if (msg.traceType == 3) {
        let traceId = guid();
        Vue.prototype.Socket.send(
          `{"traceId":"${traceId}",traceType:1,"content":{"size": 100}}`
        );
      }
    };
  }
};
