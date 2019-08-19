<template>
	<div class="footer"> 
		<div class="footer-container"> 
			<div class="footer-top clearfix"> 
				<div class="about" style=""> 
					<h4>关于我们</h4> 
					<ul class="list-unstyled"> 
						<li>
							<a rel="nofollow"  href="">联系我们</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">用户协议</a>
						</li> 
						<li>
							<a rel="nofollow" href="">用户隐私权</a>
						</li> 
						<li>
							<a  href="">友情链接</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">关于我们</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">用户帮助</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">名词百科</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">产品标签</a>
						</li> 
						<li>
							<a rel="nofollow"  href="">安全问题反馈</a>
						</li> 
					</ul> 
				</div> 
				<div class="contact"> 
					<h4>联系方式</h4> 
					<ul class="list-unstyled"> 
						<li>企查查官方客服：400-928-2212</li> 
						<li>工作时间: 周一至周五 9:00-20:00</li> 
						<li>在线客服：
							<a data-toggle="modal" data-target="#loginModal" @click="getCaptcha()">点击在线咨询</a>
						</li> 
						<li>客服邮箱：
							<a href="mailto:kf@qichacha.com">kf@qichacha.com</a>
						</li> 
						<li>微信公众号：qcc365</li> 
						<li>地址：江苏省苏州市工业园区东长路88号2.5产业园C1幢5楼</li> 
					</ul> 
				</div> 
				<div class="service" style=""> 
					<h4>查查服务</h4> 
					<ul class="list-unstyled"> 
						<li> 
							<a rel="nofollow"  href="" target="_blank">企业问答</a> 
							<a href="" target="_blank">500强企业</a> 
							<a  href="" target="_blank">疫苗查查</a> 
							<a  href="" target="_blank">融资查询</a> 
							<a  href="" target="_blank">企业风控</a> 
							<a href="" target="_blank">企业库</a> 
							<a  href="" target="_blank">裁判文书查询</a> 
							<a  href="" target="_blank">新三板企业查询</a> 
							<a  href="" target="_blank">上市企业查询</a> 
							<a  href="" target="_blank">企查查企业查询</a> 
							<a  href="" target="_blank">企查查移动版</a> 
							<a href="" target="_blank">企查查社区</a> 
							<a  href="" target="_blank">企业风险搜索</a> 
							<a href="" target="_blank">商标专利搜索</a> 
							<a href="" target="_blank">企业网址导航</a> 
							<a href="" target="_blank">企业高管查询</a> 
							<a href="" target="_blank">企业税号查询</a> 
							<a href="" target="_blank">企业新闻头条</a> 
							<a rel="nofollow" href="" target="_blank">企查查下载</a> 
							<a href="" target="_blank">企业失信查询</a> 
							<a rel="nofollow" href="" target="_blank">企查查接口平台</a> 
							<a href="">公司黄页</a> 
							<a href="">人员名录</a> 
							<a rel="nofollow" href="" target="_blank"> 开放平台</a> 
						</li> 
					</ul> 
				</div> 
				<div class="qrcode"> 
					<div class="qrcode-item"> 
						<img src="/static/images/logo.png" alt="企查查APP下载"> 
						<span class="ma_xcx">小程序</span> 
					</div> 
					<div class="qrcode-item"> 
						<img src="/static/images/logo.png" alt="企查查APP下载"> 
						<span class="ma_app">扫码下载APP</span> 
					</div> 
					<div class="qrcode-item"> 
						<img src="/static/images/logo.png" alt="企查查微信公众号"> 
						<span class="ma_wx">微信公众号</span> 
					</div> 
				</div> 
			</div> 
			<div class="footer-link"> 
				<div class="footer-row clearfix"> 
					<div class="footer-row-head">
                    数据来源：</div> 
                    <div class="footer-row-content"> 
                    	<span class="item">全国企业信用信息公示系统</span> 
                    	<span class="item">中国裁判文书网</span> 
                    	<span class="item">中国执行信息公开网</span> 
                    	<span class="item">国家知识产权局</span> 
                    	<span class="item">商标局</span> 
                    	<span class="item">版权局</span> 
                    </div> 
                </div> 
            </div> 
        </div> 
        <div class="footer-copy-bg"> 
        	<div class="footer-container"> 
        		<div class="footer-copy clearfix"> 
        			<div class="pull-left"> 
        				<div class="m-t-xs font-13"> 
        					<a href="javascript:void(0)" title="企查查">©2014-2019</a> 
        					<a href="http://www.beian.miit.gov.cn/" rel="nofollow" target="_blank"> 苏ICP备15042526号-4</a>
                        	版权所有&nbsp;苏州朗动网络科技有限公司
                        	&nbsp;增值电信业务经营许可证：
                        	<a href="http://www.beian.miit.gov.cn/" rel="nofollow" target="_blank">苏ICP证B2-20180251</a>
                        	&nbsp;企业征信备案号：
                        	<a href="http://nanjing.pbc.gov.cn/nanjing/117542/117601/117604/3862817/index.html" rel="nofollow" target="_blank">04005</a> 
                        	<br>
                        	违法和不良信息举报电话：400-928-2212&nbsp;&nbsp;举报邮箱：
                        	<a href="mailto:jubao@qichacha.com">jubao@qichacha.com</a> 
                        </div> 
                    </div> 
                    <div class="auth"> 
                    	<a style="margin-left: 0px;" href="https://ss.knet.cn/verifyseal.dll?sn=e17091132050068868mhtm000000&amp;comefrom=trust" rel="nofollow" target="_blank"> 
                    		<img class="m-l-sm" style="width: 98px;height:50px;" src="/static/images/logo.png"> 
                    	</a> 
                		<a href="http://www.jsdsgsxt.gov.cn/mbm/entweb/elec/certView.shtml?siteId=2f2c5b85a5154355a56eb3dee98ad8a3" rel="nofollow" target="_blank"> 
                			<img class="m-l-sm" style="width: 30px" src="/static/images/logo.png"> 
                		</a> 
                		<a href="https://v.yunaq.com/certificate?domain=www.qichacha.com" rel="nofollow" target="_blank"> 
                			<img class="m-l-sm" style="width: 106px;height:50px;" src="/static/images/logo.png"> 
                		</a> 
                	</div> 
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
	export default{
		methods:{
			zhugeTrack(){},
			getCaptcha(){}
		}
	}
</script>
<style lang="less" scoped>
	.footer {
	    margin-top: 50px;
	    position: relative;
	    background: #2d3237;
	    color: #7281AD;
	    font-size: 13px;
	    padding: 0px;
	    text-align:left;
	    .footer-container{
		    padding-right: 15px;
		    padding-left: 15px;
		    box-sizing:border-box;
		    margin-right: auto;
		    margin-left: auto;
	    	width:1250px;
	    	.footer-top {
			    margin-top: 20px;
			    margin-bottom: 20px;
			    padding-bottom: 15px;
			    border-bottom: solid 1px #7281AD;
			    .about {
				    float: left;
				    width: 132px;
				    h4 {
					    font-size: 14px;
					    color: #677D8B;
					}
				}
				.contact {
				    float: left;
				    width: 220px;
				    margin-right: 30px;
				}
				.service {
				    float: left;
				    width: 372px;
				    a {
					    margin-right: 15px;
					    display: inline-block;
					}
				}
				.qrcode {
				    padding-top: 40px;
				    float: left;
				    width: 455px;
				    .qrcode-item {
					    float: right;
					    text-align: center;
					    margin-left: 50px;
					    img {
						    width: 100px;
						    height:100px;
						    display: block;
						    margin-bottom: 6px;
						}
					}
				}
			}
			.list-unstyled {
			    padding-left: 0;
			    list-style: none;
			}
	    }
	    .footer-row {
		    padding-left: 72px;
		    .footer-row-head {
			    margin-left: -72px;
			    float: left;
			}
		    .item {
			    float: left;
			    margin-right: 12px;
			    position: relative;
			    &:not(:last-child):after {
				    content: " ";
				    position: absolute;
				    height: 12px;
				    width: 1px;
				    background: #7281AD;
				    right: -7px;
				    top: 3px;
				}
			}
		}
		.footer-copy-bg {
		    padding-top: 5px;
		    padding-bottom: 10px;
		    margin-top: 20px;
		    width:100%;
		    box-sizing:border-box;
		    background: #202427;
		    .footer-copy {
			    font-size: 14px;
			    .pull-left {
				    float: left;
				    .font-13 {
					    font-size: 13px;
					}
				}
			}
		}
		.auth {
		    float: right;
		    margin-top: 15px;
		}
	    h4 {
		    font-size: 14px;
		    color: #fff !important;
		}
		a {
			color: #7281AD;
			cursor:pointer;
		    text-decoration: none;
		    background: transparent;
		    &:hover{
		    	color:#fff;
		    }
		}
	}
	@media (min-width: 1281px){
		.footer-container {
		    margin-left: calc(50vw - 625px);
		}
	}
	@media (min-width: 1200px){
		.footer-container {
		    width: 1170px;
		}
	}
	@media (min-width: 992px){
		.footer-container {
		    width: 970px;
		}
	}
	@media (min-width: 768px){
		.footer-container {
		    width: 750px;
		}
	}
</style>