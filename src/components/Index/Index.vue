<template>
	<div class="container_index">
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
		<div class="padding_56"></div>
		<div class="content">
			<img class="content_logo" src="../../assets/logo.png" alt="">
			<div class="search">
				<ul class="navs clearfix">
					<li :class="{'active':activeNav == idx}" v-for="(item,idx) in navArr"
						@click="changeNav(idx)">{{item}}</li>
				</ul>
				<div class="input_wrapper">
					<input v-model="searchText" type="text" placeholder="请输入搜索关键词">
					<span @click="toSearch">搜索</span>
				</div>
			</div>
		</div>
		<div class="desc_wrapper clearfix">
			<div class="desc_item clearfix" v-for="(item,idx) in introArr">
				<img :src="item.icon" alt="">
				<div class="desc_item_right">
					<div class="title">{{item.title}}</div>
					<div class="desc">{{item.desc}}</div>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
</template>
<script>
	import Footer from '@/components/Template/footer.vue'
	export default{
		data(){
			return{
				navArr:['全部','企业名称','招聘职位','产品','经营范围'],
				activeNav:0,
				headerNav:['aaa','bbb','ccc'],
				activeHeaderNav:0,
				searchText:'',//搜索框内容
				introArr:[
					{
						title:'海量数据检索',
						desc:'覆盖互联网所有主流公开数据源；汇集1亿条经营主体信息；内含超5亿有效联系方式；超过数百个业务维度，不仅仅是工商数据。',
						icon:'/static/images/logo.png'
					},{
						title:'AI智能算法推荐',
						desc:'有一套智能搜索方案，基于AI智能算法这些行为数据都会被记录下来构建预测模型。',
						icon:'/static/images/logo.png'
					},{
						title:'高质量线索池',
						desc:'不仅仅是工商数据，并涵盖了72个维度全面展开客情，帮助销售快速判断潜客级别，找准意向客户。',
						icon:'/static/images/logo.png'
					},{
						title:'稳定可套的客户源',
						desc:'大规模数据采集，励销搜客宝每日更新300万条经营主体信息，覆盖上千目标数据源站点，商机池商机涌动。',
						icon:'/static/images/logo.png'
					}
				]
			}
		},
		methods:{
			changeNav(idx){//选择nav
				this.activeNav = idx;
			},
			toSearch(){
				if(!(this.searchText.trim())){
					this.$message('请填写');
					return;
				}
				let query = {
					key:this.searchText
				};
				if(this.activeNav){
					query.type = this.activeNav;
				}
				this.$router.push({
					path:'list',
					query:query
				});
			},
			toLogin(){
				this.$router.push('/login');
			},
			toRegister(){
				this.$router.push('/register');
			},
			changeHeaderNav(idx){
				this.activeHeaderNav = idx;
				//后续操作可以写在下面
			}
		},
		components:{
			Footer
		}
	}
</script>
<style lang="less">
	.container_index{
		width:100%;
		background:#fff;
	}
	.desc_wrapper{
		margin:100px auto 0;
		width:900px;
		.desc_item{
			padding:10px;
			float:left;
			width:330px;
			height:220px;
			.desc_item_right{
				float:left;
				width:270px;
				text-align:left;
				.title{
					width:100%;
					height:30px;
					line-height:30px;
					font-size:16px;
					font-weight:bold;
					color:#3B426B;
				}
				.desc{
					width:100%;
					line-height:24px;
					font-size:16px;
					color:#3B426B;
				}
			}
			img{
				float:left;
				margin-right:10px;
				margin-top:20px;
				width:50px;
				height:50px;
			}
		}
	}
</style>