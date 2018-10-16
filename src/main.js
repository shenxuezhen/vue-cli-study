import './index.css';
import './a.js';
import 'jQuery';
promise.then(function(val){
	return new Promise(function(res,rej){
		console.log(1111);
	})
})
.then(function(){
	console.log(2222222);
})