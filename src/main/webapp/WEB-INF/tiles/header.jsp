<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<br/>
<style type="text/css">
	/* ��ü�������� ������ ������ */
	* {
		margin: 0;
		padding: 0;
	}
	/* ul li�±׿� ����Ʈ ��Ÿ���� ���� */
	ul li{
		list-style: none;
	}
	/* a�±׿� �ؽ�Ʈ ������ ���ְ� ������ #333 */
	a {
		text-decoration: none;
		color:#333;
	}
	/* ����ũ�⸦ 16px ���� ��� �����ϰ� width���� 700, ���� 50��ŭ ������ #ccc, ���ڻ��� ������, ���γ���50px
	menu�ڽ� �������, ���ڰ�� ���� */
	#menu {
		font:bold 16px "malgun gothic";
		width:570px;
		height:50px;
		background: #ccc;
		color:black;
		line-height: 50px; 
		margin:0 auto;
		text-align: center;
	}

	/* menu�±� �ڽ��� ul�� �ڽ� li�� �������İ� ���� 140���� */
	#menu > ul > li {
		float:left;
		width:140px;
		position:relative;
	}
	
	/* ���� �޴� ���߱� */
	#menu > ul > li > ul {
		width:130px;
		display:none;
		position: absolute;
		font-size:14px;
		background: skyblue;
	}
	/* ���콺 ȣ�� �� ���� �޴��� ���̵��� */
	#menu > ul > li:hover > ul {
		display:block;
	}
</style>

<h3>���ڰ�� �׽�Ʈ</h3>

<div id="menu">
	<ul>
		<li><a href="#">����ۼ�</a>
			<ul>
				<li><a href="/bizdocu/ContractDocumentList">���� ��ĺ�����</a></li>
				<li><a href="/bizdocu/ContractList">��༭ �ۼ�</a></li>
			</ul>
		</li>
		<li><a href="#">�������</a>
			<ul>
				<li><a href="/bizdocu/ContractSend">��༭ �۽���</a></li>
				<li><a href="/bizdocu/ContractReceive">��༭ ������</a></li>
				<li><a href="/bizdocu/ContractComplete">��༭ �ϷẸ����</a></li>
			</ul>
		</li>
		<li><a href="#">ȯ�漳��</a>
			<ul>
				<li><a href="/bizdocu/Preferences">ȯ�漳��</a></li>
				<li><a href="/bizdocu/ContractAddrList">�ּҷϰ���</a></li>
				<li><a href="/bizdocu/Department">�μ�����</a></li>
				<li><a href="/bizdocu/BankAccount">���°���</a></li>
				<li><a href="/bizdocu/Category">ī�װ�����</a></li>
			</ul>
		</li>
		<li><a href="#">���񽺾ȳ�</a>
			<ul>
				<li><a href="https://lguplus1.signra.com:4433/web-signra/main.sg" target="_blank">����������</a></li>
				<li><a href="/main/intro/Definition">���񽺼Ұ�</a></li>
				<li><a href="/main/intro/Charge">��ݾȳ�</a></li>
			</ul>
		</li>
	</ul>
</div>

<br/> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="/css/intro/main.css"/>
<link rel="stylesheet" href="/css/intro/new_gnb_01.css"/>
<link href="css/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<link href="css/common.css" rel="stylesheet" type="text/css"/>
<link href="css/calendar_new.css" rel="stylesheet" type="text/css"/>
<link href="css/layout.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="/css/bizdocu.css"/>
<link rel="stylesheet" href="/css/style.css" />

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://js.tosspayments.com/v1"></script>
<!--GNB����-->
<style>
	#head2{
		padding-top : 25px;
		padding-left : 25px;
	}
</style>
<h2 id="head2"><a href="/">U���� �׽�Ʈ</a></h2>
<!-- <script src="js/common/biz_menu.js"></script>  -->
		<div class="gnbArea">
				<ul>
					<li class="main_menu n1" id="menu_01"><a href="#" class="bigMenu" onclick="return pagemover(this.href,'http');" id="smeMenu1" onmouseover="showGmb('submenu1');" onmouseout="hideGmb('submenu1');">����ۼ�</a>
							<div class="submenu" id="submenu1" onmouseover="showGmb('submenu1');" onmouseout="hideGmb('submenu1');">
									<div class="submenuWrap">
											<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																		<dd><a href="/bizdocu/ContractDocumentList">���� ��ĺ�����</a></dd>
																	
																		<dd><a href="/bizdocu/ContractList">��༭ �ۼ�</a></dd>
																																	
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n2" id="menu_02"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu2" onmouseover="showGmb('submenu2');" onmouseout="hideGmb('submenu2');">�������</a>
								<div class="submenu" id="submenu2" onmouseover="showGmb('submenu2');" onmouseout="hideGmb('submenu2');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">																		
																		<dd><a href="/bizdocu/ContractSend">��༭ �۽���</a></dd>
																		<dd><a href="/bizdocu/ContractReceive">��༭ ������</a></dd>
																		<dd><a href="/bizdocu/ContractComplete">��༭ �ϷẸ����</a></dd>																		
																																	
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n3" id="menu_03"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu3" onmouseover="showGmb('submenu3');" onmouseout="hideGmb('submenu3');">ȯ�漳��</a>
								<div class="submenu" id="submenu3" onmouseover="showGmb('submenu3');" onmouseout="hideGmb('submenu3');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																	
																		<dd><a href="/bizdocu/Preferences">ȯ�漳��</a></dd>
																			
																		<dd><a href="/bizdocu/ContractAddrList">�ּҷϰ���</a></dd>
																																																			
																		<dd><a href="/bizdocu/Department">�μ�����</a></dd>
																	
																		<dd><a href="/bizdocu/BankAccount">���°���</a></dd>
																		<dd><a href="/bizdocu/Category">ī�װ�����</a></dd>
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n4" id="menu_04"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu4" onmouseover="showGmb('submenu4');" onmouseout="hideGmb('submenu4');">���񽺾ȳ�</a>
								<div class="submenu" id="submenu4" onmouseover="showGmb('submenu4');" onmouseout="hideGmb('submenu4');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																		<dd><a href="https://lguplus1.signra.com:4433/web-signra/main.sg" target="_blank">����������</a></dd>
																		<dd><a href="/main/intro/Definition">���񽺼Ұ�</a></dd>
																		<dd><a href="/main/intro/Charge">��ݾȳ�</a></dd>
																		<dd><a href="bizdocu.OrderInfo.do">�̿�ȳ�</a></dd>
																		<dd><a href="bizdocu.ContractManual.do">�޴���</a></dd>
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
				</ul>
		</div>
		
<!---------- //nav---------->   

<!-- quick list ó�� -->

