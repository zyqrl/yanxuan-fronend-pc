/*
 * @Author: ch
 * @Date: 2022-05-04 17:11:07
 * @LastEditors: ch
 * @LastEditTime: 2022-06-29 16:01:55
 * @Description: file content
 */
import { CreateUUID } from "@/plugins/utils";
import { UUID_KEY } from "@/constants";
let axiosTk = null;
export default function ({$axios, store, route, req}, inject) {
	const $axiosTk = $axios.create();
	let uuid = store.state.uuid;
	if (!uuid && req.headers.cookie) {
		uuid = req.headers.cookie.split(';').find(i => i.includes(UUID_KEY));
		uuid = uuid && uuid.replace(`${UUID_KEY}=`,'')
	}
	if (!uuid) {
		uuid = CreateUUID(16, 2);
		store.commit('setUUID', uuid);
	}

	$axiosTk.defaults.timeout = 3000;
	$axiosTk.onRequest( config =>{
		config.headers.uid = uuid;
		if(!store.state.token && !config.headers.notVerifyToken){
			location.href = '/';
			return Promise.reject({message : '要先登录才能操作哦~'});
		}
			
		delete config.headers.notVerifyToken;
		config.headers.Authorization = store.state.token;
		return config;
	});
	$axiosTk.onResponse(response => {
		const result = response.data;
		if(response.status === 200){
			if(result.code === 'SUCCESS'){
				return result.data;
			}
			if(result.code === 'TOKEN_FAIL'){
				store.commit('setLoginOut');
				store.commit('setLoginVisible');
			}
			return Promise.reject(result);
		}
		return Promise.reject({message:'请求出错'});
		
	  });
	inject('$axiosTk', $axiosTk);
	axiosTk = $axiosTk;
	
  }
export {axiosTk}