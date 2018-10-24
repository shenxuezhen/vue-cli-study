<template>
	<div>
		<div class="notify">{{value}}</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				value:'你好'
			}
		},
		methods:{},
		computed:{},
		components:{}
	}
</script>
<style scoped>
	.notify{
		width: 100px;
		height: 100px;
		background: #ccc;
		font-size: 14px;
		text-align: center;
		line-height: 100px;
	}
</style> 