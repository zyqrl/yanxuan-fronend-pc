<!--
 * @Author: ch
 * @Date: 2022-05-05 15:39:29
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 11:39:38
 * @Description: file content
-->
# shop-pc

## 运行&打包
- 运行直接执行 npm run dev 打包执行npm run build 即可，会根据分支读取不同环境变量配置；

## 环境变量配置
- 环境变量配置文件env.config;
- 配置与分支对应关系：msb_prod -> prod  msb_beta -> beta  msb_test -> test  msb-其他 -> dev
- 输出的环境变量文件：plugins/config/env.js
- 修改环境变量配置后需要执行 “ node env.config " 输出的环境变量才会更新
``` js
// 直接引入输出的配置文件即可
import ENV from '@/plugins/config/env.js';
// 直接访问你在配置文件中定义的属性
console.log(ENV.baseUrl);

```

## 公共方法utils
- 公共方法统一放置utils文件夹内，可以按分类建方法文件 如：验证类verify.js 请求类request.js；
- 所有公共方法采用大驼峰命名法
- 所有的方法都从index.js输出，引入时统一引入index，不允许直接引入方法文件
- 所有方法文件如果导出的是多个方法，不允许在定义方法时导出，必须在文件底部一一导出，并附上方法简单的注释
``` js
// 正确
import {Req, IsPhone} from '@/common/utils';

// 错误
import {Req} from '@/common/utils/request';
import {IsPhone} from '@/common/utils/utils';

// 正确
const IsPhone = (str) => {....}
const IsEmail = (str) => {....}
export {
	// 判断手机号
	IsPhone,
	// 判断邮箱
	IsEmail
}
```
## 组件
- 根目录的components 只放置真正的组件，某个页面的业务模块应该在pages的相应目录下新建module目录放置
- 所有的自定义组件文件名以大驼峰命名，且在templet中使用也用大驼峰形式使用(包括页面内的模块组件)

## storage的使用
- 不要在页面内直接使用loaclStorage，全都放置到vuex中做一次管理


## 请求
- 项目中有两个axios请求实例，一个事nuxt自带的（不需要Token请使用这个），一个是额外封装的（需要Token请使用这个）；
- 需要Token的请求，不要写在asyncData中；
- 所有请求方法命名以（Api+请求类型+具体方） 法命名
- 所有请求使用ToAsyncAwait 包裹
- 不允许使用try catch 和 then 处理返回结果
``` js
// 使用示例
	// xxapi.js
	import {ToAsyncAwait, ReqestTk} from '@/common/utils'
	const ApiGetUserInfo = (parapms) => ToAsyncAwait(ReqestTk.get('xxxxUrl',{params}));
	exprot {
		// 获取用户信息
		ApiGetUserInfo
	}
	// user.vue
	improt {ApiGetUserInfo} from '@/common/api/xxapi.js';
	
	const getUserInfo = async () =>{
		const {error, result} = await ApiGetUserInfo();
		if(error){
			alert(error);
			return false;
		}
		app.userInfo = result;
	}

```
## css
- 采用BEM命名法

### 兼容CSS
``` css
/* 以下兼容方式的样式请使用util.css中的adj方法 */
.my-class{
   transform: translate3d(-50%, 0, 0);
   -webkit-transform: translate3d(-50%, 0, 0);
   -moz-transform: translate3d(-50%, 0, 0);
   -o-transform: translate3d(-50%, 0, 0);
   -ms-transform: translate3d(-50%, 0, 0);
}
/* 使用以下方法 */
@import "~/assets/scss/util.scss";
.my-class{
  @include adj(transform, translate3d(-50%, 0, 0));
}

```

## 登录相关
```javascript
// 访问token
this.$store.state.token
// 设置token
this.$store.commit('setToken')
// 退出登录
this.$store.commit('setLoginOut')
// 获取登录的用户信息
this.$store.state.userInfo

// 登录拦截
// 示例：点击购买课程前需要判断当前用户是否登录，未登录则弹出登录弹窗
function onPurchaseCourse() {
	if (!this.$isLoginValidate()) {
		return;
	}
	// 此处省略其他业务代码...
}

```

