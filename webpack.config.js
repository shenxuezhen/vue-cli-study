//webpack必须采用common.js写法
//以当前路径处理成一个相对路径
let path=require('path');
path.resolve();
module.exports={
	entry:'./src/main.js',
	output:{
		filename:'bundle.js',
		path:path.resolve('./dist')//必须是绝对路径
	},
	//模块解析规则 用babel-loader转义
	module:{
		rules:[
		//匹配以.js为结尾的文件，使用babel-loader将es6转成es5，排除mode_modules下的文件
		{
			test:/\.js$/,
			use:'babel-loader',
			exclude:/node_modules/
		},
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		},
		]
	}
}  