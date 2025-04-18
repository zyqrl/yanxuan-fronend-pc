/*
 * @Author: ch
 * @Date: 2022-06-12 14:04:56
 * @LastEditors: ch
 * @LastEditTime: 2022-06-13 20:27:34
 * @Description: file content
 */

import MsbIm from '@/plugins/msbIm' ;
import { ToAsyncAwait, FormatJsonSearch } from './utils';
import { ApiGetSoketTicket } from '@/plugins/api/im';
import ENV from '@/plugins/config/env';
const Im = new MsbIm({
	reconnect: true,
});
let ImInit = null;
export default ({store }) => {
	ImInit = async () => {
		const { error, result } = await ApiGetSoketTicket();
		if (error) {
			return false;
		}
		const par = FormatJsonSearch({
			client: result.client,
			ticket: result.ticket,
			// 1普通用户 2客服链接
			connect: 1,
			user: store.state.userInfo.id,
			nickname: store.state.userInfo.nickname,
			avatar : store.state.userInfo.avatar
		})
		return await ToAsyncAwait(Im.init({
			url: `${ENV.imUrl}/ws${par}`
		}))
		
	};

	Im.interceptors.dataChangeAfter = () => { 
		let data = Im.sessionData.find(i => {
			return (i.type === 4 && (typeof i.payload === 'string' ? JSON.parse(i.payload).type === 'system' : false));
		}) || {}
		let msgCount = data.unreadCount || 0;
		store.commit('setSocketMsgData', JSON.parse(JSON.stringify(data)));
		store.commit('setUnreadCount', msgCount);
	}
	
	Im.interceptors.onClose = () => {
		Im.setSessionData([]);
		Im.setCurSessionId(null);
		store.commit('setSocketMsgData', {});
		store.commit('setUnreadCount', 0);
	}

}
export {
	Im,
	ImInit
}
