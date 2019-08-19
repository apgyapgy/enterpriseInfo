<template>
	<div class="container clearfix">
		<Header/>
		<div class="content">
			<div class="search">
				<ul class="navs clearfix">
					<li :class="{'active':searchInfo.activeNav == idx}" v-for="(item,idx) in navArr"
						@click="changeNav(idx)">{{item}}</li>
				</ul>
				<div class="input_wrapper">
					<input v-model="searchInfo.searchText" type="text" placeholder="请输入搜索关键词" @keyup.enter="toSearch">
					<span @click="toSearch">搜索</span>
				</div>
			</div>
		</div>
		<span class="senior_title" @click="showSenior">高级筛选</span>
		<!-- 高级筛选内容 -->
		<div v-show="showSeniorFlag" class="filter_wrapper clearfix">
			<!-- 所在地区 -->
			<div class="filter">
				<div class="label">所在地区：</div>
				<div class="filter_item_wrapper">
					<div class="filter_item"  :class="{'active':searchInfo.area == ''}">不限</div>
					<div class="filter_item">
						<el-cascader placeholder='省/市/区'
						    v-model="searchInfo.area"
						    :options="areaArr"></el-cascader>
					</div>
				</div>
			</div>
			<!-- 所属行业 -->
			<div class="filter">
				<div class="label">所属行业：</div>
				<div class="filter_item_wrapper">
					<div class="filter_item" :class="{'active':searchInfo.industry == ''}">不限</div>
					<div class="filter_item">
						<el-cascader placeholder='行业'
						    v-model="searchInfo.industry"
						    :options="industryArr"
						    ></el-cascader>
					</div>
				</div>
			</div>
			<!-- 营业状态 -->
			<div class="filter">
				<div class="label">营业状态：</div>
				<div class="filter_item_wrapper">
					<div v-for="(item,idx) in businessStatusArr" class="filter_item"
						:class="{'active':item.value == searchInfo.businessStatus}"
						@click="changeStatus(item.value)">{{item.label}}</div>
				</div>
			</div>
			<!-- 联系方式 -->
			<div class="filter">
				<div class="label">联系方式：</div>
				<div class="filter_item_wrapper">
					<div v-for="(item,idx) in concatArr" class="filter_item"
						:class="{'active':item.value == searchInfo.concat}"
						@click="changeConcat(item.value)">{{item.label}}</div>
				</div>
			</div>
			<!-- 成立年限 -->
			<div class="filter">
				<div class="label">成立年限：</div>
				<div class="filter_item_wrapper">
					<div v-for="(item,idx) in estabYearsArr" class="filter_item" 
						:class="{'active':item.value == searchInfo.estabYears}"
						@click="changeEstabYears(item.value)">{{item.label}}</div>
					<div class="filter_item"> <!-- @change="customYearChange"-->
						自定义：<el-input v-model="estabYearsCustom[0]"></el-input>
						至<el-input v-model="estabYearsCustom[1]"></el-input>年
					</div>
				</div>
			</div>
			<!-- 注册资本 -->
			<div class="filter">
				<div class="label">注册资本：</div>
				<div class="filter_item_wrapper">
					<div v-for="(item,idx) in registeredCaptialArr" class="filter_item" 
						:class="{'active':item.value == searchInfo.registeredCaptial}"
						@click="changeRegisterCaptial(item.value)">{{item.label}}</div>
					<div class="filter_item">
						<!-- @change="customYearChange" -->
						自定义：<el-input v-model="registeredCaptialCustom[0]"></el-input>
						至<el-input v-model="registeredCaptialCustom[1]"></el-input>
					</div>
				</div>
			</div>
			<!-- 企业来源 -->
			<div class="filter">
				<div class="label">企业来源：</div>
				<div class="filter_item_wrapper">
					<div class="filter_item" 
						:class="{'active': searchInfo.from==''}"
						@click="changeFrom('')">不限</div>
					<div class="filter_item from">
						<el-input placeholder="请输入内容" v-model="searchFrom" class="input-with-select">
						    <el-button @click="toSearchFrom" slot="append" icon="el-icon-search">搜索</el-button>
						  </el-input>
					</div>
				</div>
			</div>
			<!-- 高级筛选 -->
			<div class="filter">
				<div class="label">高级筛选：</div>
				<div class="filter_item_wrapper">
					<div class="filter_item">
						<el-select v-model="searchInfo.type" placeholder="企业类型">
						    <el-option
						      v-for="item in seniorArr[0]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.recruit" placeholder="招聘情况">
						    <el-option
						      v-for="item in seniorArr[1]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.webPromotion" placeholder="网络推广">
						    <el-option
						      v-for="item in seniorArr[2]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.webDomain" placeholder="网站域名">
						    <el-option
						      v-for="item in seniorArr[3]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.brand" placeholder="商标">
						    <el-option
						      v-for="item in seniorArr[4]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.patent" placeholder="专利">
						    <el-option
						      v-for="item in seniorArr[5]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.tendering" placeholder="招投标">
						    <el-option
						      v-for="item in seniorArr[6]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					<div class="filter_item">
						<el-select v-model="searchInfo.officialAccounts" placeholder="公众号">
						    <el-option
						      v-for="item in seniorArr[7]"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
				</div>
			</div>
			<div @click="hideSenior" class="close"></div>
		</div>
		<!-- 搜索的数据 -->
		<div class="search_list">
			<div class="title clearfix">
				<span class="search_list_total">共搜索到{{total}}条记录</span>
				<span class="search_list_tip">声明：本公司只提供联系方式访问链接，如若他人网站上提供的私人信息涉及侵权，本公司不负任何法律责任。</span>
			</div>
			<table class="list_item_wrapper"
				border="0" cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>
							<el-checkbox v-model="selectedAll" @change="selectAll"></el-checkbox>
						</th>
						<th>公司信息</th>
						<th>公司电话</th>
						<th>联系人</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,idx) in searchResult" class="list_item">
						<td class="select">
							<el-checkbox @change="check" v-model="item.checked"></el-checkbox>
						</td>
						<td class="company_info" @click="toDetail(idx)">
							<span class="company_name">{{item.name}}</span>
							<div class="company_registe_info clearfix">
								<span>{{item.legalPerson}}|{{item.date}}|{{item.registeredCapital}}</span>
								<span>网站：{{item.website}}</span>
								<span>地址：{{item.address}}</span>
							</div>
							<div class="company_introduce clearfix">
								简介：<span>{{item.intro}}</span>
							</div>
						</td>
						<td class="company_phone">{{item.phone}}</td>
						<td class="company_concat">
							<el-button type="primary" size="mini" round>获取联系人</el-button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="bottom">
				<span class="bottom_title">免费会员只能查看50条</span>
				<el-pagination v-show="total>pageSize" class="pages"
				  background
				  layout="prev, pager, next"
				  :page-size="pageSize"
				  :total = "total"
				  :current-page="searchInfo.page"
				  @current-change="initData">
				</el-pagination>
			</div>			
		</div>
		<Footer/>
	</div>
</template>
<script>
	import Footer from '@/components/Template/footer.vue'
	import Header from '@/components/Template/header.vue'
	export default{
		data(){
			return{
				searchInfo:{
					page:1,
					activeNav:0,
					searchText:'',//搜索框内容
					//高级筛选内容
					area:'',//地区 
					industry:'',//行业
					businessStatus:'',//营业状态
					concat:'',//联系方式
					estabYears:'',//成立年限
					registeredCaptial:'',//注册资本
					from:'',//企业来源
					type:'',//企业类型
					recruit:'',//招聘情况
					webPromotion:'',//网络推广
					webDomain:'',//网站域名
					brand:'',//商标
					patent:'',//专利
					tendering:'',//招投标
					officialAccounts:'',//公众号
				},
				areaArr:[],//地区
				industryArr:[],//行业
				businessStatusArr:[],//经营状态
				concatArr:[],//联系方式
				estabYearsArr:[],//成立年限
				estabYearsCustom:['',''],//自定义年限
				registeredCaptialArr:[],//注册资本
				registeredCaptialCustom:['',''],
				searchFrom:'',//搜索的企业来源
				seniorArr:[],//高级筛选内容
				showSeniorFlag:false,//是否显示高级筛选
				
				total:2,
				pageSize:10,

				navArr:['全部','企业名称','招聘职位','产品','经营范围'],

				checked:false,
				searchResult:[],//查询结果
				selectedAll:false,
				selectArr:[]
			}
		},
		created(){
			console.log("query:",this.$route.query)
			let query = this.$route.query;
			this.searchInfo.searchText = query.key;
			if(query.type){
				this.searchInfo.activeNav = query.type;
			}
			this.initData();
			this.setFilterInfo();
		},
		methods:{
			initData(idx){//初始化数据,idx以idx为页码查询，查询成功后再设置page的值
				console.log("initData:",idx)
				this.searchResult = [
					{
						name:'湖南测试技术有限公司',
						legalPerson:'刘总',
						date:'2012-12-20',
						registeredCapital:'18000万人民币',
						website:'https://www.baidu.com',
						address:'中国硅谷',
						intro:'湖南测试有限公司成立于2012-12-20日，在自由贸易市场。。。',
						phone:'0731-896532147',
						checked:false
					},{
						name:'广东测试技术有限公司',
						legalPerson:'王总',
						date:'2012-12-20',
						registeredCapital:'18000万人民币',
						website:'https://www.baidu.com',
						address:'中国硅谷',
						intro:'湖南测试有限公司成立于2012-12-20日，在自由贸易市场。。。',
						phone:'0731-896532147',
						checked:false
					}
				];
				this.selectArr = [];
				this.selectedAll = false;
				// if(idx){
				// 	setTimeout(()=>{
				// 		this.searchInfo.page = 2;
				// 	},2000);
				// }
			},
			selectAll(flag){//全选
				let searchResult = this.searchResult,
					selectArr = [];
				if(this.selectArr.length == this.searchResult.length){
					for(var key in searchResult){
						searchResult[key].checked = false;
					}
				}else{
					for(var key in searchResult){
						searchResult[key].checked = true;
						selectArr.push(key)
					}
				}
				this.searchResult = searchResult;
				this.selectArr = selectArr;
			},
			check(flag,idx){
				console.log("check:",idx);
				if(flag){
					this.selectArr.push(idx);
					if(this.selectArr.length == this.searchResult.length){
						this.selectedAll = true;
					}
				}else{
					let index = this.selectArr.indexOf(idx);
					let selectArr = this.selectArr;
					selectArr.splice(index,1);
					this.selectArr = selectArr;
					this.selectedAll = false;
				}
			},
			changeNav(idx){//选择nav
				this.searchInfo.activeNav = idx;
			},
			toSearch(){//点击顶部搜索按钮去搜索
				if(!(this.searchInfo.searchText.trim())){
					this.$message('请填写');
					return;
				}
				let url = `/list?key=${this.searchInfo.searchText}`;
				if(this.searchInfo.activeNav){
					url += `type=${this.searchInfo.activeNav}`;
				}
				this.$router.push({
					path:url
				});
			},
			toDetail(idx){//跳转到详情页
				//idx索引,可获取相应参数带到详情页
				this.$router.push('/detail');
			},
			currentPageChange(idx){
				this.initData(idx);
			},
			handleChange(data){
				console.log("handleChange:",data);
			},
			setFilterInfo(){//设置高级筛选的选项
				this.areaArr = [
					{
						value: 'beijing',
	          			label: '北京',
				        children: [
				        	{
					            value: 'chaoyang',
					            label: '朝阳',
					            children: [
						            {
						              value: 'anzhen',
						              label: '安贞'
						            }, {
						              value: 'balizhuang',
						              label: '八里庄'
						            }, {
						              value: 'dongbei',
						              label: '东坝镇'
						            }
					            ]
		          			}, {
					            value: 'fangshan',
					            label: '房山',
					            children: [
					            	{
						              value: 'daanshan',
						              label: '大安山乡'
						            }, {
						              value: 'dongfeng',
						              label: '东风街道'
						            }
					            ]
		          			}
		          		]
			        }, {
			          	value: 'shanghai',
			          	label: '上海',
			          	children: [
				          	{
					            value: 'baoshan',
					            label: '宝山区',
					            children: [
						            {
						              value: 'guchun',
						              label: '顾村镇'
						            }, {
						              value: 'songnai',
						              label: '淞南镇'
						            }
			            		]
			          		}, {
					            value: 'hongkou',
					            label: '虹口区',
					            children: [
						            {
						              value: 'guangzhonglu',
						              label: '广中路街道'
						            }, {
						              value: 'jiaxing',
						              label: '嘉兴路街道'
						            }, {
						              value: 'jiangwan',
						              label: '江湾镇街道'
						            }
						        ]
		          			}, {
					            value: 'huangpu',
					            label: '黄浦区',
					            children: [
						            {
						              value: 'dapuqiao',
						              label: '打浦桥街道'
						            }, {
						              value: 'laoximen',
						              label: '老西门街道'
						            }
						        ]
		          			}
					    ]
		        	}
		       	];
		       	this.industryArr = [
					{
						value: 'yiji',
	          			label: '一级行业',
				        children: [
				        	{
					            value: 'yiji1',
					            label: '一级行业1',
					            
		          			}, {
					            value: 'yiji2',
					            label: '一级行业2',
		          			}
		          		]
			        }, {
			          	value: 'erji',
			          	label: '二级行业',
			          	children: [
				          	{
					            value: 'erji1',
					            label: '二级行业1'
			          		}, {
					            value: 'erji2',
					            label: '二级行业2'
		          			}
					    ]
		        	}
		       	];
		       	this.businessStatusArr = [
		       		{
		       			label:'不限',
		       			value:'',
		       		},{
		       			label:'在营/存续',
		       			value:'1',
		       		},{
		       			label:'迁入/迁出',
		       			value:'2',
		       		},{
		       			label:'吊销',
		       			value:'3',
		       		},{
		       			label:'注销',
		       			value:'4',
		       		},{
		       			label:'停业',
		       			value:'5',
		       		},{
		       			label:'其它',
		       			value:'6',
		       		}
		       	];
		       	this.concatArr = [
		       		{
		       			label:'不限',
		       			value:'',
		       		},{
		       			label:'有手机',
		       			value:'1',
		       		},{
		       			label:'有固话',
		       			value:'2',
		       		},{
		       			label:'有邮箱',
		       			value:'3',
		       		},{
		       			label:'有QQ',
		       			value:'4',
		       		},{
		       			label:'无联系方式',
		       			value:'5',
		       		}
		       	];
		       	this.estabYearsArr = [
		       		{
		       			label:'不限',
		       			value:'',
		       		},{
		       			label:'1年以内',
		       			value:'1',
		       		},{
		       			label:'1~5年',
		       			value:'1~5',
		       		},{
		       			label:'5~10年',
		       			value:'5~10',
		       		},{
		       			label:'10~15年',
		       			value:'10~15',
		       		},{
		       			label:'15年以上',
		       			value:'15',
		       		}
		       	];
		       	this.registeredCaptialArr = [
		       		{
		       			label:'不限',
		       			value:'',
		       		},{
		       			label:'20万以下',
		       			value:'200000',
		       		},{
		       			label:'20~50万',
		       			value:'200000~500000',
		       		},{
		       			label:'50~100万',
		       			value:'500000~1000000',
		       		},{
		       			label:'100~200万',
		       			value:'1000000~2000000',
		       		},{
		       			label:'200~500万',
		       			value:'2000000~5000000',
		       		},{
		       			label:'500万以上',
		       			value:'5000000'
		       		}
		       	];
		       	this.seniorArr = [
		       		[
			       		{
				          value: '1',
				          label: '民营'
				        }, {
				          value: '2',
				          label: '国有企业'
				        }, {
				          value: '3',
				          label: '外资/中外合资'
				        }, {
				          value: '4',
				          label: '港澳台投资'
				        }, {
				          value: '5',
				          label: '个体户'
				        }, {
				          value: '6',
				          label: '社会组织'
				        }, {
				          value: '7',
				          label: '其它企业'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有招聘信息'
				        }, {
				          value: '3',
				          label: '无招聘信息'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有网络推广'
				        }, {
				          value: '3',
				          label: '无网络推广'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有域名'
				        }, {
				          value: '3',
				          label: '无域名'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有商标'
				        }, {
				          value: '3',
				          label: '无商标'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有专利'
				        }, {
				          value: '3',
				          label: '无专利'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有招标'
				        }, {
				          value: '3',
				          label: '无招标'
				        }
				    ],[
			       		{
				          value: '1',
				          label: '不限'
				        }, {
				          value: '2',
				          label: '有公众号'
				        }, {
				          value: '3',
				          label: '无公众号'
				        }
				    ]
		       	]
			},
			customYearChange(){
				console.log("customYearChange:",this.estabYearsCustom)
				if(this.estabYearsCustom[0] && this.estabYearsCustom[1]){
					this.searchInfo.estabYears = this.estabYearsCustom.join('~');
					console.log("estabYears:",is.searchInfo.estabYears)
				}
			},
			changeStatus(val){//改变营业状态
				this.searchInfo.businessStatus = val;
			},
			changeConcat(val){//设置联系方式 
				this.searchInfo.concat = val;
			},
			changeEstabYears(val){
				this.searchInfo.estabYears = val;
				this.estabYearsCustom = ['',''];
			},
			changeRegisterCaptial(val){
				this.searchInfo.registeredCaptial = val;
				this.registeredCaptialCustom = ['',''];
			},
			changeFrom(val){
				this.searchInfo.from = val;
			},
			toSearchFrom(val){//点按钮搜索企业来源
			},
			showSenior(){//显示高级筛选
				this.showSeniorFlag = true;
			},
			hideSenior(){//隐藏高级筛选
				this.showSeniorFlag = false;
			},
			toLogin(){
				this.$router.push('/login');
			},
		},
		components:{
			Footer,Header
		}
	}
</script>
<style scoped lang="less">
	.filter_wrapper{
		position:relative;
		margin:20px auto;
		padding-top:30px;
		padding-bottom:30px;
		width:900px;
		border:1px solid #eee;
		.filter{
			float:left;
			width:100%;
			min-height:50px;
			line-height:50px;
			.filter_item_wrapper{
				float:left;
				width:800px;
				.filter_item{
					float:left;
					margin-right:10px;
					.el-input{
						margin:0 5px;
						width:60px;
					}
					&.from .el-input{
						width:400px;
					}
					&.active{
						color:#004fbe;
					}
				}
			}
			.label{
				float:left;
				width:100px;
				text-align:center;
			}
		}
		.close{
			position:absolute;
			left:50%;
			transform:translateX(-50%) rotate(45deg);
			bottom:0;
			width:14px;
			height:14px;
			border-top:2px solid #eee;
			border-left:2px solid #eee;
		}
	}
	.search_list{
		margin:20px auto;
		width:900px;
		box-sizing:border-box;
		.list_item_wrapper{
			display:block;
			border-collapse: collapse; 
			width:900px;
			th{
				height:30px;
			}
			tr td,tr th{
				border:1px solid #eee;
			}
			.list_item{
				box-sizing:border-box;
				text_align:center;
				.company_info{
					padding:5px;
					text-align:left;
					cursor:pointer;
					.company_name{
						display:block;
						width:100%;
						line-height:30px;
						font-size:14px;
						color:rgb(0,79,190);
						font-weight:bold;
					}
					.company_registe_info{
						width:100%;
						line-height:30px;
						font-size:14px;
						span{
							float:left; 
							margin-right:30px;
						}
					}
					.company_introduce{
						display:block;
						line-height:30px;
						font-size:14px;
						color:#333;
						text-align:left;
						span{
							color:rgb(0,79,190);
						}
					}
					&.table_header{
						text-align:center;
					}
				}
				.select{
					margin:auto;
					padding:5px;
					width:20px;
				}
				.company_phone{
					margin:auto;
					padding:5px;
					width:110px;
					color:rgb(0,79,190);
					font-size:12px;
				}
				.company_concat{
					margin:auto;
					padding:5px;
					width:140px;
				}
			}
		}
		.title{
			display:block;
			width:100%;
			line-height:30px;
			font-size:14px;
			.search_list_total{
				float:left;
			}
			.search_list_tip{
				float:right;
				color:#f00;
			}
		}
	}
	.bottom{
		padding-top:20px;
		padding-bottom:20px;
		display:block;
		margin:0 auto;
		width:900px;
		.bottom_title{
			float:left;
			width:200px;
			height:30px;
			line-height:30px;
			font-size:14px;
			color:#f00;
		}
		.pages{
			float:right;
		}
	}
	.senior_title{
		display:block;
		margin:10px auto 0;
		position:relative;
		width:140px;
		height:30px;
		line-height:30px;
		font-size:16px;
		text-align:center;
		&::after{
			position:absolute;
			top:8px;
			right:20px;
			content:'';
			box-sizing:border-box;
			width:10px;
			height:10px;
			border-left:2px solid #eee;
			border-bottom:2px solid #eee;
			transform:rotate(-45deg);
		}
	}
	.container{
		display:inline-block;
		width:100%;
		min-height:100%;
		background:#fff;
	}

</style>