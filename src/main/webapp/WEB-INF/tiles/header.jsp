<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<br/>
<style type="text/css">
	/* 전체영역에서 여백을 없애줌 */
	* {
		margin: 0;
		padding: 0;
	}
	/* ul li태그에 리스트 스타일을 없앰 */
	ul li{
		list-style: none;
	}
	/* a태그에 텍스트 밑줄을 없애고 색상을 #333 */
	a {
		text-decoration: none;
		color:#333;
	}
	/* 글자크기를 16px 맑은 고딕 굵게하고 width넓이 700, 높이 50만큼 배경색은 #ccc, 글자색은 검정색, 라인높이50px
	menu박스 가운데정렬, 글자가운데 정렬 */
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

	/* menu태그 자식의 ul의 자식 li를 왼쪽정렬과 넓이 140설정 */
	#menu > ul > li {
		float:left;
		width:140px;
		position:relative;
	}
	
	/* 하위 메뉴 감추기 */
	#menu > ul > li > ul {
		width:130px;
		display:none;
		position: absolute;
		font-size:14px;
		background: skyblue;
	}
	/* 마우스 호버 시 하위 메뉴가 보이도록 */
	#menu > ul > li:hover > ul {
		display:block;
	}
</style>

<h3>전자계약 테스트</h3>

<div id="menu">
	<ul>
		<li><a href="#">계약작성</a>
			<ul>
				<li><a href="/bizdocu/ContractDocumentList">통합 양식보관함</a></li>
				<li><a href="/bizdocu/ContractList">계약서 작성</a></li>
			</ul>
		</li>
		<li><a href="#">계약진행</a>
			<ul>
				<li><a href="/bizdocu/ContractSend">계약서 송신함</a></li>
				<li><a href="/bizdocu/ContractReceive">계약서 수신함</a></li>
				<li><a href="/bizdocu/ContractComplete">계약서 완료보관함</a></li>
			</ul>
		</li>
		<li><a href="#">환경설정</a>
			<ul>
				<li><a href="/bizdocu/Preferences">환경설정</a></li>
				<li><a href="/bizdocu/ContractAddrList">주소록관리</a></li>
				<li><a href="/bizdocu/Department">부서관리</a></li>
				<li><a href="/bizdocu/BankAccount">계좌관리</a></li>
				<li><a href="/bizdocu/Category">카테고리관리</a></li>
			</ul>
		</li>
		<li><a href="#">서비스안내</a>
			<ul>
				<li><a href="https://lguplus1.signra.com:4433/web-signra/main.sg" target="_blank">공동인증서</a></li>
				<li><a href="/main/intro/Definition">서비스소개</a></li>
				<li><a href="/main/intro/Charge">요금안내</a></li>
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
<!--GNB영역-->
<style>
	#head2{
		padding-top : 25px;
		padding-left : 25px;
	}
</style>
<h2 id="head2"><a href="/">U싸인 테스트</a></h2>
<!-- <script src="js/common/biz_menu.js"></script>  -->
		<div class="gnbArea">
				<ul>
					<li class="main_menu n1" id="menu_01"><a href="#" class="bigMenu" onclick="return pagemover(this.href,'http');" id="smeMenu1" onmouseover="showGmb('submenu1');" onmouseout="hideGmb('submenu1');">계약작성</a>
							<div class="submenu" id="submenu1" onmouseover="showGmb('submenu1');" onmouseout="hideGmb('submenu1');">
									<div class="submenuWrap">
											<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																		<dd><a href="/bizdocu/ContractDocumentList">통합 양식보관함</a></dd>
																	
																		<dd><a href="/bizdocu/ContractList">계약서 작성</a></dd>
																																	
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n2" id="menu_02"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu2" onmouseover="showGmb('submenu2');" onmouseout="hideGmb('submenu2');">계약진행</a>
								<div class="submenu" id="submenu2" onmouseover="showGmb('submenu2');" onmouseout="hideGmb('submenu2');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">																		
																		<dd><a href="/bizdocu/ContractSend">계약서 송신함</a></dd>
																		<dd><a href="/bizdocu/ContractReceive">계약서 수신함</a></dd>
																		<dd><a href="/bizdocu/ContractComplete">계약서 완료보관함</a></dd>																		
																																	
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n3" id="menu_03"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu3" onmouseover="showGmb('submenu3');" onmouseout="hideGmb('submenu3');">환경설정</a>
								<div class="submenu" id="submenu3" onmouseover="showGmb('submenu3');" onmouseout="hideGmb('submenu3');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																	
																		<dd><a href="/bizdocu/Preferences">환경설정</a></dd>
																			
																		<dd><a href="/bizdocu/ContractAddrList">주소록관리</a></dd>
																																																			
																		<dd><a href="/bizdocu/Department">부서관리</a></dd>
																	
																		<dd><a href="/bizdocu/BankAccount">계좌관리</a></dd>
																		<dd><a href="/bizdocu/Category">카테고리관리</a></dd>
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
						<li class="main_menu n4" id="menu_04"><a href="#" class="bigMenu"  onclick="return pagemover(this.href,'http');" id="smeMenu4" onmouseover="showGmb('submenu4');" onmouseout="hideGmb('submenu4');">서비스안내</a>
								<div class="submenu" id="submenu4" onmouseover="showGmb('submenu4');" onmouseout="hideGmb('submenu4');">
										<div class="submenuWrap">
												<dl class="subFirst">
														
														<dd>
																<dl class="subList">
																		<dd><a href="https://lguplus1.signra.com:4433/web-signra/main.sg" target="_blank">공동인증서</a></dd>
																		<dd><a href="/main/intro/Definition">서비스소개</a></dd>
																		<dd><a href="/main/intro/Charge">요금안내</a></dd>
																		<dd><a href="bizdocu.OrderInfo.do">이용안내</a></dd>
																		<dd><a href="bizdocu.ContractManual.do">메뉴얼</a></dd>
																</dl>
														</dd>
												</dl>
										</div>
								</div>
						</li>
				</ul>
		</div>
		
<!---------- //nav---------->   

<!-- quick list 처리 -->

