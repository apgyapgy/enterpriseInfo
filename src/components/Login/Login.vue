<template>
	<div class="container">
		<div class="login_wrapper">
			<div class="login_wrapper_title">
				<span>账号登录</span>
			</div>
			<div class="input_wrapper">
				<input class="user_name" :class="{'error':loginInfo.userName.error}" type="text" 
					v-model="loginInfo.userName.value" @input="inputChange(1)"
					placeholder="请输入账号" />
				<span v-show="loginInfo.userName.error" class="check_tip">请输入合法账号</span>
			</div>
			<div class="input_wrapper">
				<input class="password" :class="{'error':loginInfo.password.error}" type="password" 
					v-model="loginInfo.password.value" @input="inputChange(2)"
					placeholder="请输入密码" />
				<span v-show="loginInfo.password.error" class="check_tip">请输入密码</span>
			</div>
			<div class="login_btn_wrapper">
				<button @click="submit" class="login_btn">登录</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				loginInfo:{
					userName:{
						value:'',
						error:false
					},
					password:{
						value:'',
						error:false
					}
				}
			}
		},
		methods:{
			submit(e){//登录，请求接口
				this.$router.push('index');
			},
			inputChange(type){
				console.log("inputChange:",type)
				if(type === 1 && this.loginInfo.userName.error === true){
					this.loginInfo.userName.error = false;
				}
				if(type === 2 && this.loginInfo.password.error === true){
					this.loginInfo.password.error = false;
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.login_wrapper{
		padding: 16px 10px 40px;
		box-sizing:border-box;
		width:420px;
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 4px 12px 0px;
		.input_wrapper{
			position:relative;
			padding:15px 20px;
			box-sizing:border-box;
			transition:all .3s;
			input{
				padding:4px 11px;
				box-sizing:border-box; background:none;
				width:100%;
				height:32px;
				font-size:14px;
			    line-height: 1.5;
			    background-color: #fff;
			    background-image: none;
			    border: 1px solid #d9d9d9;
			    color: rgba(0, 0, 0, 0.65);
			    border-radius: 2px;
			    transition: all 0.5s;
			    list-style: none;
				&.error{
					border:1px solid #f5222d;
				}
			}
			.check_tip{
				position:absolute;
				left:20px;
				bottom:-10px;
				display:block;
				width:100%;
				height:22px;
				line-height:22px;
				font-size:14px;
				color:#fff;
			}
		}
		.login_wrapper_title{
			margin-bottom: 40px;
    		border-bottom: 1px solid rgb(255, 255, 255);
    		span{
    			display: inline-block;
			    margin-left: 20px;
			    height: 46px;
			    font-size: 20px;
			    color: rgb(255, 255, 255);
			    border-bottom: 6px solid rgb(16, 142, 233);
    		}
		}
		.login_btn_wrapper{
			padding:15px 20px;
			box-sizing:border-box;
			margin-bottom: 24px;
			width: 100%;
    		height: 40px;
			button{
				width:100%;
				height:40px;
				line-height: 1.5;
				font-size: 14px;    
	    		color: rgb(255, 255, 255);
	    		border-radius: 2px;
	    		background: rgb(16, 142, 233);
	    		border-width: 0px;
	    		border-style: initial;
	    		border-color: initial;
	    		border-image: initial;
			}
    		
			
    		
			
		}
	}
	.container{
		display: flex;
    	align-items: center;
    	justify-content: center;
		width:100%;
		height:100%;
		background:url('/static/images/back.jpg') no-repeat center;
		background-size:100% 100%;
		text-align:left;
	}

</style>