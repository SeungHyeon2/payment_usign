<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%-- <%@ page import="lgdacom.common.CommonEnvProps"%>
<%@ taglib prefix="s" uri="/struts-tags" %> --%>

<input type="hidden" name="dddd" value="<%= session.toString()%>">
<input type="hidden" name="ssss" value="<%=session.getId()%>">
<input type="hidden" name="aaaa" value="<%=request.getRemoteAddr()%>">

<div id="footer">
	<!-- <h4><img src="images/main_intro/footer_logo.png" alt="LG U+ LOGO" /></h4> -->
  	<ul>
    	<li class="frist">회사소개</li>
        <li><a href="javascript:OpenCenter('PopupAgree.jsp','675','440')" >이용약관</a></li>
        <li><a href="javascript:OpenCenter('RetrieveCoUserInfo.html','675','440')" style="color: #d61185">개인정보처리방침</a></li>
        <!-- <li><a href="javascript:OpenCenter('http://www.uplus.co.kr/com/lins/lins/RetrieveCommonFooterP2.hpi','720','600')" >스팸정책</a></li> -->
  	</ul>
    <p>서울 특별시 용산구 한강대로 32 LG유플러스 빌딩 | 대표이사 황현식 | 사업자등록번호 220-81-39938 | 통신판매업신고 제 2015-서울용산00481호</p>
    <p>고객센터 : 1644-7882  |  Copyright 2012 LG Uplus Corp. All Rights Reserved.</p>
</div>

<!-- WIDERPLANET  SCRIPT START 2017.10.26 > 엘지_U+Works 타게팅 게이츠_전환 태크 설치(공통)-->
<div id="wp_tg_cts" style="display:none;"></div>