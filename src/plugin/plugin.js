/**
 * 弹窗插件
 * @authors Your Name (you@example.org)
 * @date    2018-10-23 17:43:16
 * @version $Id$
 */
import modal from './plugin.vue';
let notify={//在此对象有一个install方法

};
notify.install=function (Vue,options={delay:3000}) {
	Vue.prototype.$notify=function(message,opt={}){
		options={...options,...opt};//对象赋值
		let V = Vue.extend(modal)//返回的是构造函数的子类，参数是包含数组选项的对象
		let vm=new V;
		let oDiv=document.createElement('div');//创建div是为了挂载vm实例
		vm.$mount(oDiv);
		document.body.appendChild(vm.$el);
		setTimeout(function(){
			document.body.removeChild(vm.$el);
		},options.delay)
	}
}

export default notify;