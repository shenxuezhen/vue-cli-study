import Vue from 'vue';
import $ from 'jQuery';
import App from './App.vue';
import router from './router/router.js';
import notify from './plugin/plugin.js';
Vue.use(notify,{
	delay:2000
});//使用自定义插件
new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')