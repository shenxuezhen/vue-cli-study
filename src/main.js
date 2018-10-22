import Vue from 'vue/dist/vue.js';
import $ from 'jQuery';
import App from './App.vue';
console.log(App);
new Vue({
	render:(h)=>h(App)
}).$mount('#app')