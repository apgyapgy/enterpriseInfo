<template>
	<div class="container">
		<div class="login_wrapper">
			<div class="login_wrapper_title">
				<span>账号注册</span>
			</div>
			<div class="input_wrapper">
				<span class="label">用户名：</span>
				<input class="user_name" :class="{'error':registerInfo.userName.error}" type="text" 
					v-model="registerInfo.userName.value" @input="inputChange(1)"
					placeholder="请输入账号" />
				<span v-show="registerInfo.userName.error" class="check_tip">请输入用户名</span>
			</div>
			<div class="input_wrapper">
				<span class="label">密码：</span>
				<input class="password" :class="{'error':registerInfo.password.error}" type="password" 
					v-model="registerInfo.password.value" @input="inputChange(2)"
					placeholder="请输入密码" />
				<span v-show="registerInfo.password.error" class="check_tip">请输入密码</span>
			</div>
			<div class="input_wrapper">
				<span class="label">姓名：</span>
				<input class="text" :class="{'error':registerInfo.name.error}" type="password" 
					v-model="registerInfo.name.value" @input="inputChange(3)"
					placeholder="请输入姓名" />
				<span v-show="registerInfo.name.error" class="check_tip">请输入姓名</span>
			</div>
			<div class="input_wrapper">
				<span class="label">手机号码：</span>
				<input class="password phone" :class="{'error':registerInfo.phone.error}" type="text"
					v-model="registerInfo.phone.value" @input="inputChange(4)"
					placeholder="请输入手机号" />
				<span @click="sendCode" class="send_code">{{cutdownTime==60?'发送验证码':'('+cutdownTime+')秒后重新发送'}}</span>
				<span v-show="registerInfo.phone.error" class="check_tip">请输入正确的手机号</span>
			</div>
			<div class="input_wrapper">
				<span class="label">短信验证码：</span>
				<input class="password" :class="{'error':registerInfo.code.error}" type="text" 
					v-model="registerInfo.code.value" @input="inputChange(2)"
					placeholder="请输入验证码" />
				<span v-show="registerInfo.code.error" class="check_tip">请输入短信验证码</span>
			</div>
			<div class="login_btn_wrapper">
				<button @click="register" class="login_btn first">注册</button>
				<button @click="cancel" class="login_btn">取消</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				registerInfo:{
					userName:{
						value:'',
						error:false
					},
					password:{
						value:'',
						error:false
					},
					name:{
						value:'',
						error:false
					},
					phone:{
						value:'',
						error:false
					},
					code:{
						value:'',
						error:false
					}
				},
				cutdownTime:60,
			}
		},
		methods:{
			submit(e){//登录，请求接口
				this.$router.push('index');
			},
			inputChange(type){
				if(type === 1 && this.registerInfo.userName.error === true){
					this.registerInfo.userName.error = false;
				}
				if(type === 2 && this.registerInfo.password.error === true){
					this.registerInfo.password.error = false;
				}
				if(type === 3 && this.registerInfo.name.error === true){
					this.registerInfo.name.error = false;
				}
				if(type === 4 && this.registerInfo.phone.error === true){
					this.registerInfo.phone.error = false;
				}
				if(type === 5 && this.registerInfo.code.error === true){
					this.registerInfo.code.error = false;
				}
			},
			register(){//注册
			},
			cancel(){//取消
				this.$router.back();
			},
			sendCode(){
				let phone = this.registerInfo.phone.value;
				if(!(/^1[3456789]\d{9}$/.test(phone))){
					this.registerInfo.phone.error = true;
					return;
				}
				if(this.cutdownTime != 60){
					return;
				}
				let timer,_this=this;
				down();
				function down(){
					clearTimeout(timer);
					_this.cutdownTime = _this.cutdownTime -1;
					if(_this.cutdownTime == 0){
						_this.cutdownTime = 60;
						
					}else{
						timer = setTimeout(()=>{
							down();
						},1000);
					}
				}
			},
		}
	}
</script>
<style lang="less" scoped>
	.login_wrapper{
		padding: 16px 10px 40px;
		box-sizing:border-box;
		width:460px;
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 4px 12px 0px;
		.input_wrapper{
			position:relative;
			padding:15px 20px;
			box-sizing:border-box;
			transition:all .3s;
			.label{
				float:left;
				width:90px;
				font-size:14px;
				color:#fff;
			}
			input{
				padding:4px 11px;
				box-sizing:border-box; background:none;
				width:270px;
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
				&.phone{
					width:170px;
				}
			}
			.check_tip{
				position:absolute;
				left:120px;
				bottom:-10px;
				display:block;
				width:100%;
				height:22px;
				line-height:22px;
				font-size:14px;
				color:#fff;
			}
			.send_code{
				display:inline-block;
				width:110px;
				height:30px;
				line-height:30px;
				font-size:12px;
				color:#fff;
	    		background: rgb(16, 142, 233);
	    		border-radius:4px;
	    		text-align:center;
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
    		text-align:center;
			button{
				width:100px;
				height:30px;
				line-height: 1.5;
				font-size: 14px;    
	    		color: rgb(255, 255, 255);
	    		border-radius: 2px;
	    		background: rgb(16, 142, 233);
	    		border-width: 0px;
	    		border-style: initial;
	    		border-color: initial;
	    		border-image: initial;
	    		border-radius:6px;
	    		&.first{
	    			margin-right:20px;
	    		}
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