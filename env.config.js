/*
 * @Author: ch
 * @Date: 2022-05-05 14:40:00
 * @LastEditors: ch
 * @LastEditTime: 2022-06-24 14:21:20
 * @Description: 根据git分支生成对应环境的环境变量
 * 开发时如果环境变量换了，可以不用重启服务，直接运行node env.config.js即可
 */
const fs = require('fs');
const path = require('path');
const getRepoInfo  = require('git-repo-info');

const envConfig = {
	dev : {
		base_url: 'http://192.168.10.74:8090',
		imUrl : 'ws://192.168.10.74:8090'
	},
	test : {
		base_url: 'http://192.168.10.74:8090',
		imUrl : 'ws://192.168.10.74:8090'
	},
	beta : {
		base_url: 'http://192.168.10.74:8090',
		imUrl : 'ws://192.168.10.74:8090'
	},
	prod : {
		base_url: 'http://192.168.72.51:8090',
		imUrl : 'ws://192.168.72.51:8090'
	}
}
let curEnvConfig = null;
const argv = global.process.argv;
for(key in envConfig){
	if(argv.includes(`--ENV:${key}`)){
		curEnvConfig = envConfig[key];
		break;
	}
}
if(!curEnvConfig){
	curEnvConfig = envConfig.dev;
}
fs.writeFileSync(`${path.resolve(__dirname, './plugins/config')}/env.js`, 
	`const ENV = ${JSON.stringify(curEnvConfig)}; export default ENV;`);
