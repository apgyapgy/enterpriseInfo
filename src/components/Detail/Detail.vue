<template>
	<div class="container clearfix">
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
		<div class="detail_content clearfix">
			<div class="left">
				<div class="company_header">
					<span class="title">湖南测试有限公司</span>
					<div class="company_header_basic clearfix">
						<span>法人：刘总</span>
						<span>成立日期：2014-12-20</span>
						<span>注册资本：311118万元</span>
						<span>网站：www.aa.com</span>
						<span>通讯地址：中国硅谷</span>
						<span>公司电话：0731-896532147</span>
					</div>
				</div>
				<div class="company_info_wrapper clearfix">
					<div class="company_info_header">
						<span :class="{'active':activeTab == idx}" v-for="(item,idx) in tabs"
							@click="changeTab(idx)">{{item}}</span>
					</div>
					<!-- 基本信息 -->
					<div v-show="activeTab == 0" class="basic_info">
						<div class="info_title">工商信息</div>
						<table>
							<tr>
								<td>注册号/统一社会信用码</td>
								<td>9134110065854545454A</td>
								<td>法人/负责人</td>
								<td>刘总</td>
							</tr>
							<tr>
								<td>注册资本</td>
								<td>31118万元</td>
								<td>营业期限</td>
								<td>2009-11-17至-</td>
							</tr>
							<tr>
								<td>公司类型</td>
								<td>股份有限公司</td>
								<td>所属行业</td>
								<td>农，林，牧。渔业</td>
							</tr>
							<tr>
								<td>核准日期</td>
								<td>2018-02-27</td>
								<td>注册地址</td>
								<td>中国硅谷</td>
							</tr>
							<tr>
								<td>经营范围</td>
								<td>经营范围</td>
								<td></td>
								<td></td>
							</tr>
						</table>
						<div class="info_title">资质证书</div>
						<table>
							<tr>
								<td>证书类型</td>
								<td>证书编号</td>
								<td>发证日期</td>
								<td>截上日期</td>
							</tr>
							<tr>
								<td>安防资质</td>
								<td>123455454</td>
								<td>2019-12-12</td>
								<td>2020-12-12</td>
							</tr>
							<tr>
								<td>环保资质</td>
								<td>123455454</td>
								<td>2018-1-12</td>
								<td>2019-1-12</td>
							</tr>
						</table>
						<div class="info_title">企业百科</div>
						<span class="info_desc">百度百科：始建于2002年，坐落于风景秀丽的吴江市汾湖经济技术开发区，是一家集节能环保设备开发研究、设计制造、推广应用，和承接废气，废水，固废等环保工程项目为一体的高新技术企业。</span>
					</div>
					<!-- 电子商务 -->
					<div v-show="activeTab == 1" class="basic_info">
						<div class="info_title">B2B</div>
						<table>
							<tr>
								<td>公司简述</td>
								<td colspan='3'>总部位于北京，是目前国内直营分校覆盖城市最广、教学研发实力最强、公职类职业培训规模最大的现代化职业教育机构。</td>
								<!-- <td></td> -->
								<!-- <td></td> -->
							</tr>
							<tr>
								<td>经营范围</td>
								<td colspan='3'>公职考试培训及图书</td>
								<!-- <td></td> -->
								<!-- <td></td> -->
							</tr>
							<tr>
								<td>主营产品或服务</td>
								<td colspan='3'>公务员培训，公职类考试教育培训，执业药师培训，教育培训，企业投资咨询，承办展览展示活动，会议服务。公务员培训，公职类考试教育培训，执业药师培训，教育培训，企业投资咨询，承办展览展示活动，会议服务。</td>
								<!-- <td></td> -->
								<!-- <td></td> -->
							</tr>
							<tr>
								<td>所属城市</td>
								<td>昆明企业网</td>
								<td>年进口额</td>
								<td>-</td>
							</tr>
							<tr>
								<td>企业类型</td>
								<td>私营企业</td>
								<td>开户银行</td>
								<td>-</td>
							</tr>
							<tr>
								<td>主营行业</td>
								<td>教育/科研/培训</td>
								<td>银行账号</td>
								<td>-</td>
							</tr>
							<tr>
								<td>经营模式</td>
								<td>商业服务</td>
								<td>是否提供OEM服务</td>
								<td>-</td>
							</tr>
							<tr>
								<td>经营地址</td>
								<td>北京东城区</td>
								<td>研发部门人数</td>
								<td>-</td>
							</tr>
							<tr>
								<td>员工人数</td>
								<td>1000人以上</td>
								<td>月产量</td>
								<td>-</td>
							</tr>
							<tr>
								<td>年营业额</td>
								<td>-</td>
								<td>厂房面积</td>
								<td>-</td>
							</tr>
							<tr>
								<td>经营品牌</td>
								<td>-</td>
								<td>质量控制</td>
								<td>-</td>
							</tr>
							<tr>
								<td>主要客户群</td>
								<td>所有人群</td>
								<td>管理体系认证</td>
								<td>-</td>
							</tr>
							<tr>
								<td>主要市场</td>
								<td>大陆</td>
								<td>证书及荣誉</td>
								<td>-</td>
							</tr>
							<tr>
								<td>年出口额</td>
								<td>-</td>
								<td>公司主页</td>
								<td>-</td>
							</tr>
						</table>
					</div>
					<!-- 投资关系 -->
					<div v-show="activeTab == 2" class="basic_info">
						<div class="info_title">对外投资<b>3</b></div>
						<table class="vertical">
							<thead>
								<tr>
									<th>被投资企业名称</th>
									<th>法人/负责人</th>
									<th>企业所在地</th>
									<th>成立日期</th>
									<th>出资比例</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>北京金吾创业投资中心（有限合伙）</td>
									<td>中关村兴业（北京）投资管理有限公司</td>
									<td>北京</td>
									<td>2013-09-23</td>
									<td>-</td>
								</tr>
								<tr>
									<td>北京金吾创业投资中心（有限合伙）</td>
									<td>中关村兴业（北京）投资管理有限公司</td>
									<td>北京</td>
									<td>2013-09-23</td>
									<td>-</td>
								</tr>
								<tr>
									<td>北京金吾创业投资中心（有限合伙）</td>
									<td>中关村兴业（北京）投资管理有限公司</td>
									<td>北京</td>
									<td>2013-09-23</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
						<el-pagination class="pages"
						  background
						  layout="prev, pager, next"
						  :page-size="pageSize"
						  :total = "total"
						  :current-page="page"
						  @current-change="initData">
						</el-pagination>
					</div>
					<!-- 招聘 -->
					<div v-show="activeTab == 3" class="basic_info">
						<div class="info_title">招聘概况	</div>
						<table class="vertical">
							<tbody>
								<tr>
									<td>招聘渠道</td>
									<td>招聘城市</td>
									<td>近3个月招聘岗位数</td>
								</tr>
								<tr>
									<td>2个</td>
									<td>2个</td>
									<td>3</td>
								</tr>
							</tbody>
						</table>
						<div class="info_title">招聘岗位
							<el-select v-model="selectState" placeholder="请选择">
							    <el-option 
							      v-for="item in state"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select></div>
						<table class="vertical">
							<tbody>
								<tr>
									<td>发布时间</td>
									<td>招聘职位</td>
									<td>月薪</td>
									<td>所在地</td>
									<td>招聘平台</td>
								</tr>
								<tr>
									<td>2019-5-29</td>
									<td>考研市场推广/校园经理</td>
									<td>3000-5000</td>
									<td>盐城</td>
									<td>百度招聘</td>
								</tr>
								<tr>
									<td>2019-5-29</td>
									<td>市场专员/助理</td>
									<td>3000-5000元/月</td>
									<td>盐城-亭湖</td>
									<td>58同城</td>
								</tr>
							</tbody>
						</table>
						<el-pagination class="pages"
						  background
						  layout="prev, pager, next"
						  :page-size="pageSize"
						  :total = "total"
						  :current-page="page"
						  @current-change="initData">
						</el-pagination>
					</div>
					<!-- 网络推广 -->
					<div v-show="activeTab == 4" class="basic_info">
						<div class="info_title">网络推广	
							<el-select v-model="extensionType" placeholder="推广类型" @change="extensionTypeChange">
							    <el-option 
							      v-for="item in extensionTypeArr"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
							<el-select v-model="extension" placeholder="推广平台" @change="extensionChange">
							    <el-option 
							      v-for="item in extensionArr"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						</div>
						<table class="vertical">
							<thead>
								<tr>
									<th>推广时间</th>
									<th>关键词</th>
									<th>创意文案</th>
									<th>推广平台</th>
									<th>推广类型</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>2019-7-16</td>
									<td>
										<span>maccc天津</span>
										<span>天津</span>
									</td>
									<td class="active">天津师范大学研究生</td>
									<td>百度</td>
									<td>网页</td>
								</tr>
								<tr>
									<td>2019-7-16</td>
									<td>
										<span>maccc天津</span>
										<span>天津</span>
									</td>
									<td class="active">天津师范大学研究生</td>
									<td>百度</td>
									<td>网页</td>
								</tr>
								<tr>
									<td>2019-7-16</td>
									<td>
										<span>maccc天津</span>
										<span>天津</span>
									</td>
									<td class="active">天津师范大学研究生</td>
									<td>百度</td>
									<td>网页</td>
								</tr>
							</tbody>
						</table>
						<el-pagination class="pages"
						  background
						  layout="prev, pager, next"
						  :page-size="pageSize"
						  :total = "total"
						  :current-page="page"
						  @current-change="initData">
						</el-pagination>
					</div>
					<!-- 新闻舆情 -->
					<div v-show="activeTab == 5" class="basic_info">
						<div class="info_title">微信公众号</div>
						<div class="official_accounts">
							<img src="/static/images/logo.png" alt="">
							<div class="accounts_info">
								<span class="accounts_title">中山教育</span>
								<span class="accounts_desc">微信账号：wwwoffo</span>
								<span class="accounts_desc">中公教育经过10余年发展，业务领域涵盖公职类考试，企事业...</span>
							</div>
						</div>
						<div class="info_title">新闻动态</div>
						<div class="news_wrapper">
							<div class="news_title">【周四】重庆校园招聘2018年09月27日宣讲会</div>
							<div class="news_desc">
								<span>重庆校园招聘</span>
								<span>2018年09月27日</span>
							</div>
							<div class="news_content">
								(10116)19:00俊发 集团 有限公司重庆交通大学一教报告厅（10101）19：00<span>北京中公未来教育咨询有限公司</span>重庆分公司重庆大学A区...
							</div>
						</div>	
						<div class="news_wrapper">
							<div class="news_title">【周四】重庆校园招聘2018年09月27日宣讲会</div>
							<div class="news_desc">
								<span>重庆校园招聘</span>
								<span>2018年09月27日</span>
							</div>
							<div class="news_content">
								(10116)19:00俊发 集团 有限公司重庆交通大学一教报告厅（10101）19：00<span>北京中公未来教育咨询有限公司</span>重庆分公司重庆大学A区...
							</div>
						</div>	
					</div>
					<!-- 知识产权 -->
					<div v-show="activeTab == 6" class="basic_info">
						<div class="info_title">商标信息<b>54</b></div>
						<table class="vertical">
							<thead>
								<tr>
									<th>商标</th>
									<th>商标名称</th>
									<th>商标状态</th>
									<th>申请时间</th>
									<th>注册号</th>
									<th>商标类别</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img src="/static/images/logo.png" alt="">
									</td>
									<td class="active">STG尚德机构</td>
									<td>等待受理通知书发文</td>
									<td>2018-6-8</td>
									<td>31494425</td>
									<td>41-教育娱乐</td>
								</tr>
								<tr>
									<td>
										<img src="/static/images/logo.png" alt="">
									</td>
									<td class="active">STG尚德机构</td>
									<td>等待受理通知书发文</td>
									<td>2018-6-8</td>
									<td>31494425</td>
									<td>41-教育娱乐</td>
								</tr>
								<tr>
									<td>
										<img src="/static/images/logo.png" alt="">
									</td>
									<td class="active">STG尚德机构</td>
									<td>等待受理通知书发文</td>
									<td>2018-6-8</td>
									<td>31494425</td>
									<td>41-教育娱乐</td>
								</tr>
							</tbody>
						</table>
						<el-pagination class="pages"
						  background
						  layout="prev, pager, next"
						  :page-size="pageSize"
						  :total = "total"
						  :current-page="page"
						  @current-change="initData">
						</el-pagination>
					</div>
					<!-- 招标投标 -->
					<div v-show="activeTab == 7" class="basic_info">
						<div class="info_title">招标投标
							<el-select v-model="tendering" @change="tenderingChange">
							    <el-option
							      v-for="item in tenderingArr"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						</div>
						<table class="vertical">
							<thead>
								<tr>
									<th>发布时间</th>
									<th>项目描述</th>
									<th>所属地区</th>
									<th>类型</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>2015-09-25</td>
									<td class="active">国家农业综合开发陕西省韩城市2015年度芝川镇高标准农田建设项目（第二批）-中标公告</td>
									<td>陕西</td>
									<td>中标公告</td>
								</tr>
								<tr>
									<td>2015-09-25</td>
									<td class="active">国家农业综合开发陕西省韩城市2015年度芝川镇高标准农田建设项目（第二批）-中标公告</td>
									<td>陕西</td>
									<td>中标公告</td>
								</tr>
							</tbody>
						</table>
						<el-pagination class="pages"
						  background
						  layout="prev, pager, next"
						  :page-size="pageSize"
						  :total = "total"
						  :current-page="page"
						  @current-change="initData">
						</el-pagination>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="side_content clearfix">
					<div class="side_title">联系人信息</div>
					<div class="slide_item">
						小张<span>点击查看</span>
					</div>
					<div class="slide_item">
						小张<span>点击查看</span>
					</div>
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
				headerNav:['aaa','bbb','ccc'],
				activeHeaderNav:0,
				
				tabs:['基本信息','电子商务','相关企业','招聘','网络推广','新闻舆情','知识产权','招标投标'],
				activeTab:0,
				pageSize:10,
				total:3,
				page:1,
				state:[],//招聘平台
				selectState:'',//选中的平台
				extensionArr:[],//推广平台列表
				extension:'',//选中的推广平台
				extensionTypeArr:[],//推广类型列表
				extensionType:'',//选中的推广类型
				tenderingArr:[],//招投标类型
				tendering:'',//选中的类型
			}
		},
		created(){
			this.setState();
		},
		methods:{
			changeTab(idx){
				this.activeTab = idx;
			},
			initData(){},
			setState(){
				this.state = [
					{
						label:'全部',
						value:''
					},{
						label:'拉勾网',
						value:'1'
					},{
						label:'大街网',
						value:'2'
					},{
						label:'英才网',
						value:'3'
					},{
						label:'搜狗',
						value:'4'
					},{
						label:'hunt007',
						value:'5'
					},{
						label:'职友网',
						value:'6'
					},{
						label:'36人才',
						value:'7'
					},{
						label:'看准网',
						value:'8'
					},{
						label:'赶集网',
						value:'9'
					},{
						label:'58同城',
						value:'10'
					},{
						label:'百度招聘',
						value:'11'
					},{
						label:'俊才招聘',
						value:'12'
					},{
						label:'智联招聘',
						value:'13'
					},{
						label:'51Job',
						value:'14'
					},{
						label:'百大招聘',
						value:'15'
					},{
						label:'Boss招聘',
						value:'16'
					},{
						label:'伯乐招聘',
						value:'17'
					}
				];
				this.extensionArr=[
					{
						label:'全部',
						value:'-1'
					},{
						label:'百度',
						value:'1'
					},{
						label:'360',
						value:'2'
					},{
						label:'搜狗',
						value:'3'
					}
				];
				this.extensionTypeArr=[
					{
						label:'全部',
						value:'-1'
					},{
						label:'移动端',
						value:'1'
					},{
						label:'网页',
						value:'2'
					},{
						label:'其它',
						value:'3'
					}
				];
				this.tenderingArr = [
					{
						value:'',
						label:'全部'
					},{
						value:'1',
						label:'招标公告'
					},{
						value:'2',
						label:'中标公告'
					}
				];
			},
			tenderingChange(val){//招标类型下拉列表框改变
			},
			extensionTypeChange(val){//推广类型下拉列表框改变
			},
			extensionChange(val){//推广平台下拉互敬互爱框改变
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
<style lang="less" scoped>
	.left{
		float:left;
	}
	.right{
		float:right;
		.side_content{
			float:right;
			width:300px;
			border:1px solid #eee;
			.side_title{
				width:100%;
			    height: 50px;
			    line-height:50px;
			    font-size: 16px;
			    font-weight: bold;
			    background: #fcfcfc;
			    color: #555555;
				border-bottom: 1px solid #eee;
				text-indent:15px;
				text-align:left;
			}
			.slide_item{
				float:left;
				width:100%;
				height:40px;
				line-height:40px;
				font-size:14px;
				color:#333;
				background:#fff;
				border-bottom:1px solid #eee;
				span{
					margin-left:20px;
					display:inline-block;
					cursor:pointer;
					color:#128bed;
				}
			}
		}
	}
	.company_info_wrapper{
		margin:20px auto 0;
		width:900px;
		background:#fff;
		border-radius:6px;
		.company_info_header{
			display:flex;
			width:100%;
			height:40px;
			border:1px solid #eee;
			span{
				flex:1;
				height:40px;
				line-height:40px;
				font-size:16px;
				color:#3c4144;
				text-align:center;
				background:#fcfcfc;
				&.active,&:hover{
					background:#fff;
					font-weight:bold;
					color:#128bed;
					cursor:pointer;
				}
			}
		}
		.basic_info{
			padding:20px 30px;
			box-sizing:border-box;
			width:100%;
			.official_accounts{
				padding:20px;
				box-sizing:border-box;
				margin-bottom:20px;
				width:400px;
				height:150px;
				border:1px solid #eee;
				border-radius:10px;
				img{
					margin-right:20px;
					float:left;
					width:70px;
					height:70px;
					border-radius:50%;
				}
				.accounts_info{
					text-align:left;
					float:right;
					width:260px;
					height:130px;
					.accounts_title{
						display:block;
						width:100%;
						height:40px;
						line-height:40px;
						font-size:22px;
						color:#666;
						font-weight:bold;
					}
					.accounts_desc{
						display:block;
						width:100%;
						line-height:24px;
						font-size:14px;
						color:#666;
					}
				}
			}
			.news_wrapper{
				padding:20px;
				margin-bottom:20px;
				box-sizing:border-box;
				text-align:left;
				border:1px solid #eee;
				border-radius:10px;
				.news_title{
					display: block;
				    width:100%;
				    height:40px;
				    line-height:40px;
				    font-size: 16px;
				    color: #222;
				    font-weight: 600;
				    text-indent:2;
				}
				.news_desc{
					width:100%;
					height:30px;
					line-height:30px;
					font-size:14px;
					color:#128bed;
					span{
						float:left;
						margin-right:20px;
					}
				}
				.news_content{
					width:100%;
					line-height:24px;
					font-size:14px;
					span{
						padding:0 4px;
						color:#128bed;
					}
				}
			}
			.info_title{
			    margin-top: 10px;
			    margin-bottom: 10px;
			    display: block;
			    width:100%;
			    height:40px;
			    font-size: 16px;
			    color: #222;
			    font-weight: 600;
			    line-height: 1.8;
			    text-align:left;
			    .el-select{
			    	float:right;
			    	margin-left:10px;
			    }
			    b{
			    	display:inline-block;
			    	margin-left:10px;
			    	width:20px;
			    	height:20px;
			    	line-height:20px;
			    	font-size:12px;
			    	text-align:center;
			    	background:#ddd;
			    	border-radius:50%;
			    	color:#fff;
			    }
			}
			table{
				display:block;
				border-collapse: collapse; 
				width:100%;
				border:0;
				cellpadding:0;
				cellspacing:0;
				text-align:left;
				text-indent:10px;
				margin-bottom:20px;
				table-layout: fixed;
				&.vertical{
					thead{
						tr{
							background:#F2F9FC;
						}
					}
					tbody{
						tr{
							td{
								&:nth-child(2n+1){
									background:#fff;
								}
							}
						}
					}
				}
				tr{
					width:840px;
					height:40px;
					td{
						padding:10px;
						box-sizing:border-box;
						width:210px;
						&:nth-child(2n+1){
							background:#F2F9FC;
						}
						&.col3{
							width:630px;
						}
						&.active{
							color:#128bed;
						}
						span{
							padding:5px;
							float:left;
							margin-top:10px;
							margin-right:10px;
							font-size:12px;
							border:1px solid #eee;
							border-radius:6px;
							text-indent:0;
						}
						img{
							width:30px;
							height:30px;
						}
					}
				}
				tr td,tr th{
					border:1px solid #eee;
				}
			}
			.info_desc{
				display:block;
				width:100%;
				line-height:20px;
				font-size:14px;
				text-align:left;
			}
		}
		
	}
	.detail_content{
		padding:0 20px;
		box-sizing:border-box;
		display:block;
		margin:20px auto 0;
		width:100%;
	}
	.company_header{
		margin:0 auto;
		padding:30px;
		box-sizing:border-box;
		width:900px;
		text-align:left;
		background:#fff;
		border-radius:6px;
		.title{
			width:100%;
			height:40px;
			line-height:40px;
			font-size:22px;
			color:#000;
			font-weight:bold;
		}
		.company_header_basic{
			width:100%;
			span{
				float:left;
				width:30%;
				height:30px;
				line-height:30px;
				font-size:16px;
				b{
					font-weight:normal;
					color:#004fbe;
				}
			}
		}
	}
	.container{
		padding:0 0 20px;
		margin:0 auto;
	}
</style>