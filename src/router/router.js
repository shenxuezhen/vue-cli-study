/**
 * 路由配置
 * @authors Your Name (you@example.org)
 * @date    2018-10-23 17:32:37
 * @version $Id$
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import List from '../components/list.vue';
Vue.use(VueRouter);
export default new VueRouter({
	routes:[
	{path:'/home',component:Home},
	{path:'/list',component:List}
	]
})

