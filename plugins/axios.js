

/*
 * @Author: ch
 * @Date: 2022-05-03 23:04:45
 * @LastEditors: ch
 * @LastEditTime: 2022-06-12 14:35:43
 * @Description: file content
 */
let axios = null;
import { UUID_KEY } from "@/constants";
import { CreateUUID } from "@/plugins/utils";
export default function ({ app, $axios, store, req }) {
	let uuid = store.state.uuid;
	if (!uuid && req.headers.cookie) {
		uuid = req.headers.cookie.split(';').find(i => i.includes(UUID_KEY));
		uuid = uuid && uuid.replace(`${UUID_KEY}=`,'')
	}
	if (!uuid) {
		uuid = CreateUUID(16, 2);
		store.commit('setUUID', uuid);
	}
		
	$axios.onRequest( config =>{
		config.headers.uid = uuid;
		return config;
	});
	
	$axios.onResponse(response => {
		const result = response.data;
		if(response.status === 200){
			if(result.code === 'SUCCESS'){
				return result.data;
			}
			return Promise.reject(result);
		}
		return Promise.reject({message:'请求出错'});
		
	});
	$axios.defaults.timeout = 3000;
	axios = $axios;
}
export { axios }