<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 서비스안내 - 서비스소개 
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" type="text/css" href="/css/new/default2.css" />
<%
String info = request.getParameter("info");if(info == null || "".equals(info)) info = "NON";
%>
<script type="text/javascript">

	$(function () {
		//lnb setting
		var depth1 = 1;//활성화된 lnb group index
		var depth2 = 0;//활성화된 lnb sub index
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('> a').addClass('on');
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('.sub').find('> li:nth-child(' + depth2 + ') a').addClass('on');
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('.sub').show();

		$('#lnb').find('> ul > li > a').click(function () {
			$('#lnb').find('> ul > li > a').removeClass('on');
			$('#lnb .sub').slideUp();
			$(this).addClass('on');
			$(this).next('.sub').slideDown();
			//return false;
		});
		//lnb setting end
	});
	
	function ed_intro(chk) {
		if(chk==0){
			$('#ed_intro_0').show();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			$('#sub_title').addClass('on');
			$('#sub_title').html('U<sup>+</sup>전자문서란?');
			//$('#sub_title').html('');
			//$('#sub_title').removeClass('on');
			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 0 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==1){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').show();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+전자문서란?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('전자세금계산서');
			$('#sub_title').addClass('on');
			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==2){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').show();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+전자문서란?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('전자수발주');
			$('#sub_title').addClass('on');
						
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==3){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').show();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+전자문서란?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('전자계약');
			$('#sub_title').addClass('on');

			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');			
		}else{
			$('#ed_intro_0').show();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();

			$('#sub_title').html('U<sup>+</sup>전자문서란?');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 0 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}
		
	}
	
	//모바일앱 소개페이지
	function mobile() {
		$('#mobile_intro').show();
		$('#ed_intro_0').hide();
		$('#ed_intro_1').hide();
		$('#ed_intro_2').hide();
		$('#ed_intro_3').hide();
		
		$('#sub_title').addClass('on');
		$('#sub_title').text('전자문서 모바일앱 이란?');
		//$('#sub_title').html('');
		//$('#sub_title').removeClass('on');
	}
	
	$(document).ready(function(){
		$('#ed_intro_0').show();
		$('#ed_intro_1').hide();
		$('#ed_intro_2').hide();
		$('#ed_intro_3').hide();
		$('#mobile_intro').hide();
		
		//2016-06-07 서비스 자세히보기 선택 
		var chkInfo =  "<%=info%>";
		if(chkInfo=="TAX"){			
			ed_intro(1);
		}else if(chkInfo=="EDI"){
			ed_intro(2);
		}else if(chkInfo=="BIZ"){
			ed_intro(3);
		}else if(chkInfo=="MOB"){
			mobile();
			
			var depth0=2;
			$('#lnb').find('> ul > li > a').removeClass('on');
			$('#lnb .sub').slideUp();
			$('#lnb').find('> ul > li:nth-child(' + depth0 + ')').find('> a').addClass('on');
			$(this).next('.sub').slideDown();
		}else{
			ed_intro(0);
		}		
				
		//2016-11-28 > .contentBox{ margin-left: 45px;}
		var sPathname =window.location['pathname'];
		if(sPathname == "/w20/main.intro.Definition.nologin.do"){
			$('#contentBox').css({"margin-left":"45px"});
		}			
		
	});
	
</script>

<!-- U+전자문서 BODY 시작-->
<div class="contentBox" id="contentBox">
	<div class="contentMiddle">

<!-- TITLE Bar AREA :: START -->
<div class="taxHistory" style="width: 1040px; margin-left: -45px; ">
	<ul>
		<li class="first">고객지원</li>
		<li>서비스 소개</li>
		<li id="sub_title" class="last">서비스 이용방법</li>
	</ul>
</div>
<!--//TITLE Bar AREA :: END -->
	
	<!-- container -->
	<div class="clearfix container" style="margin-left: -45px; ">

		<!-- path 
		<div class="path">
			<ul>
				<li >서비스 소개&nbsp;&nbsp;>&nbsp;&nbsp;</li>
				<li id="top_title" class="on">U+전자문서란?</li>
				<li id="sub_title"></li>
			</ul>
		</div>		
		 -->

 <!-------------------- contents -------------------->
		<div class="clearfix" style="margin-top:15px; ">
			<!-- left menu -->
			<div id="lnb" class="left_wrap">
				<ul>
					<li>
						<a href="#"  onclick="javascript:ed_intro(0);"><span>U<sup>+</sup>전자문서란?</span></a>
						<ul class="sub">
							<li><a href="#none"  onclick="javascript:ed_intro(1);"><span>전자세금계산서</span></a></li>
							<!-- <li><a href="#none"  onclick="javascript:ed_intro(2);"><span>전자수발주</span></a></li> 220728 삭제-->
							<li><a href="#none"  onclick="javascript:ed_intro(3);"><span>전자계약</span></a></li>
						</ul>
					</li>
					<li>
					<a href="#none"  onclick="javascript:mobile();"><span>모바일앱</span></a>					
					</li>
					<li>
					
					<c:choose>
						<c:when test="#session.sessionVo.accountVo">
							<a href="main.intro.EdService.do"><span>부가서비스</span></a>
						</c:when>
						<c:otherwise>
							<a href="main.intro.EdService.nologin.do"><span>부가서비스</span></a>
						</c:otherwise>
					</c:choose>
<%-- 	<c:if test="#session.sessionVo.accountVo">
		<a href="main.intro.EdService.do"><span>부가서비스</span></a>
	</c:if>
	<c:else>
		<a href="main.intro.EdService.nologin.do"><span>부가서비스</span></a>
	</c:else>	 --%>									
					</li>
				</ul>
				<a href="javascript:OpenCenter('main.Counsel.do','670','600')" ><img src="images/new_menu/left_btn01.gif" alt="서비스상담" /></a>
				<a href="javascript:OpenCenter('main.SmeUserStep1.do','750','800')" ><img src="images/new_menu/left_btn02.gif" alt="서비스신청" /></a>
			</div>
			<!-- //left menu -->
			
			<!-- //U+전자문서란? -->
			<div class="content_wrap" id="ed_intro_0">
				<h2>U<sup>+</sup>전자문서는?</h2>
				<p class="h2_sub">세금계산서, 발주(주문)서, 거래명세서, 계약서 등의 오프라인 문서를 공동인증서를 기반으로 전자문서화 하여<Br/> 업무시간 단축, 비용 절감 등 고객에게 편의성을 제공하는 서비스입니다.</p>
				<div class="content_img">
					<img src="images/new_menu/menu01_1_img.jpg" alt="전자세금계산서, 전자계약, 전자거래명세서 등의 오프라인 문서를 공동인증서를 기반으로 전자문서화 하여 업무시간 단축, 비용 절감등 고객에게 편의성을 제공하는 서비스입니다." style="margin:35px auto 70px auto"/>
				</div> <!-- 220728 수정 -->				
				<h3 class="ml25">서비스 특장점</h3>
				<dl class="ml25 sub_dl">
					<dt>1. 신뢰할 수 있는 대형 ASP사업자</dt>
					<dd>전자세금계산서 국세청 연계 대용량 사업자 인등 획득(2009년 10월~)</dd>
					<dd>대량 전송 인프라 구축</dd>
					<dt>2. 다양한 연계 솔루션 보유</dt>
					<dd>SMS 및 웹FAX발송 시스템 자체 보유</dd>
					<dd>다수 시스템과의 연계 사례 보유</dd>
					<dt>3. 대기업 전문 사업자</dt>
					<dd>안정적인 재무구조</dd>
					<dd>전문통신 인프라 보유</dd>
					<dd>고객 정보보호를 위한 보안정책 적용 / 전문 콜센터 보유</dd>
				</dl>
			</div>
			
			<!-- //전자세금계산서 소개 -->
			<div class="content_wrap" id="ed_intro_1"  style="display: none;">
				<h2>전자세금계산서</h2>
				<p class="h2_sub">부가세법 제 16조항 2항 및 표준전자세금계산서 개발지침에 따라 세금계산서 업무를 온라인을 통해 전자적으로 처리하여 <br/> 시간과 비용절감의 부가가치를 제공하는 서비스입니다.</p>
				<h3 class="ml25 mt30">서비스 특장점</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_2_img.jpg" alt="전자세금계산서 서비스 특장점 설명 이미지" style="margin:35px auto 70px auto"/>
				</div>
			</div>			
			
			<!-- //전자수발주 소개 -->
			<div class="content_wrap" id="ed_intro_2"  style="display: none;">
				<h2>전자수발주</h2>
				<p class="h2_sub">기존 팩스나 전화로 이루어지던 수발주관련 문서를 인터넷을 통해 빠르고 간편하게 전달하는 서비스 입니다.<Br/>수발주 문서를 통합하여 대량/동시 발송이 가능하므로 주문에서 발주까지 소요시간을 단축하고 거래의 투명성을 향상시켜<Br/> 업무 효율성과 사업 경쟁력을 확보할 수 있습니다.</p>
				<h3 class="ml25 mt30">서비스 개념</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_3_img.jpg" alt="전자수발주 서비스 개념 설명 이미지" style="margin:20px auto 50px auto"/>
				</div>
				<h3 class="ml25 mt30">도입효과</h3>
				<dl class="ml25 sub_dl">
					<dt>1. 효율적인 판매/재고 관리에 의한 생산성 향상</dt>
					<dd>발주관리 : 주문서작성 및 조회, 거래명세서조회 등</dd>
					<dd>수주관리 : 수주조회, 거래명세서 작성 및 조회</dd>
					<dd>재고관리 : 창고관리(입출고 조회, 재고조정 등)</dd>
					<dd>다양하고 편리한 문서 전달방식 제공(이메일, LMS, FAX) : 모바일을 통해 실시간 주문서 확인 가능</dd>
					<dd>카달로그를 이용한 자사상품 홍보 기능</dd>
					<dt>2. 협력업체와의 커뮤니케이션 강화로 전략적 구매 구현</dt>
					<dd>협력업체의 요구에 맞는 전자문서 제공</dd>
					<dd>인터넷을 기반으로 편리성 증대 : 시간과 장소에 관계없이 인터넷상에서 문서 조회 가능</dd>
					<dt>3. 웹 기반의 신기술 도입을 통한 정보화 추진 기반 마련</dt>
					<dt>4. 데이터 실시간 분석으로 신속 정확한 타겟 시장 대응 기반 확보 가능</dt>
				</dl>
			</div>
			
			<!-- //전자계약 소개 -->
			<div class="content_wrap" id="ed_intro_3"  style="display: none;">
				<h2>전자계약</h2>
				<p class="h2_sub">계약 당사자간 직접 대면을 통한 종이 형태의 계약서 작성/기명 날인 방식을 디지털 계약서 형태로 전환하여 <br/>계약서 작성, 전달, 수신, 관리할 수 있는 서비스 입니다.</p>
				<h3 class="ml25 mt30">서비스 개념</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_4_img.jpg" alt="전자계약 서비스 개념 설명 이미지" style="margin:20px auto 30px auto"/>
				</div>
				<h3 class="ml25">도입효과</h3>
				<dl class="ml25 sub_dl">
					<dt>1. 무서류 전자계약서 실현으로 업무 신속성 및 간소화</dt>
					<dt>2. 수정 반복, 인감 날인을 위한 방문 대면의 불편함 해소</dt>
					<dt>3. 편의성, 즉시성, 보안성 강화</dt>
					<dt>4. 계약 수행 관련 각종 부대 비용 절감 (인건비,출장비 등)</dt>
				</dl>
			</div>
			
			<!-- //모바일앱 소개 -->
			<div class="content_wrap" id="mobile_intro"  style="display: none;">
			<table>
				<colgroup>
				<col width="*" />
				</colgroup>
				<tr>
					<td><a><img src="images/biz_img/mobile_01.png" border="0" alt="모바일앱 소개1" /></a></td>	
				</tr>
				<tr>
					<td><a><img src="images/biz_img/mobile_02.gif" border="0" alt="모바일앱 소개2" /></a></td>	
				</tr>
				<tr>
					<td><img src="images/biz_img/mobile_03.gif" border="0" alt="모바일앱 소개3" usemap="#MobileMap" />
					<map name="MobileMap" id="MobileMap">
						<area shape="rect" coords="337,971,498,1007" href="https://play.google.com/store/apps/details?id=com.lgup.android.edocu" target="_blank" alt="모바일앱 설치 바로가기" />
					</map>
					</td>	
				</tr>
			</table>
			</div>			
						
		</div>

		<div style="margin: 50px auto 0 auto;">
		</div>
		
 	<!-------------------- //contents -------------------->
	</div>
	<!-- //container -->

	</div>
</div>
<!-- //U+전자문서 BODY 끝 -->