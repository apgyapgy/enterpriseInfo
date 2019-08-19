<template>
	<div>
		<div class="header_wrapper">
			<div class="header">
				<img class="logo" src="/static/images/logo.png" alt="">
				<ul class="nav_before">
					<li v-for="(item,idx) in headerNav" @click="changeHeaderNav(idx)"
						:class="{'active':activeHeaderNav==idx}">{{item}}</li>
				</ul>
				<ul class="nav">
					<li @click="toLogin" class="border_right">登录</li>
					<li @click="toRegister">注册</li>
				</ul>
			</div>
		</div>
		<div class="padding_56"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				headerNav:['aaa','bbb','ccc'],
				activeHeaderNav:0,
			}
		},
		methods:{
			changeHeaderNav(idx){
				this.activeHeaderNav = idx;
				//后续操作可以写在下面
			},
			toLogin(){
				this.$router.push('/login');
			},
			toRegister(){
				this.$router.push('/register');
			},
		}
	}
</script>
<style lang="less" scoped>
	
</style>