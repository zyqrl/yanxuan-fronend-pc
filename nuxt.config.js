/*
 * @Author: ch
 * @Date: 2022-05-03 22:14:16
 * @LastEditors: ch
 * @LastEditTime: 2022-07-15 11:39:08
 * @Description: file content
 */
export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: '马士兵严选',
		htmlAttrs: {
			lang: 'zh'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
		]
	},
	router: {
		extendRoutes(routes, resolve) {
			routes.push({
				name: 'custom',
				path: '/',
				component: resolve(__dirname, 'pages/index/index.vue')
			})
		},
		middleware: ['redirect']
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@assets/scss/global.scss',
		'element-ui/lib/theme-chalk/index.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/element-ui',
		'@/plugins/axios',
		'@/plugins/axiosTk.js',
		'@plugins/vue-inject.js',
    	'@/plugins/v-distpicker', 
		'@/plugins/router', 
		'@/plugins/im',
		'@/plugins/chat'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

  build: {
    vendor: ['v-distpicker']
  },

	styleResources: {
		scss: '@/assets/scss/global.scss'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'cookie-universal-nuxt',
		'@nuxtjs/style-resources'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: [/^element-ui/],
	},
	axios: {
		// 表示开启代理
		// proxy: true,
	},
	proxy: {
		// '/mall/': {
		// 	target: 'https://you-gateway.mashibing.com/', // 目标接口域名
		// 	// target: 'https://k8s-horse-gateway.mashibing.cn/', // 目标接口域名
		// 	pathRewrite: {
		// 		changeOrigin: true, // 表示是否跨域
		// 	},
		// },
	},
	server: {	
		port: 3000, 
		host: '0.0.0.0' 
	},
}
