<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%-- <%@ page import="lgdacom.common.CommonEnvProps"%>
<%@ taglib prefix="s" uri="/struts-tags" %> --%>

<input type="hidden" name="dddd" value="<%= session.toString()%>">
<input type="hidden" name="ssss" value="<%=session.getId()%>">
<input type="hidden" name="aaaa" value="<%=request.getRemoteAddr()%>">

<div id="footer">
	<!-- <h4><img src="images/main_intro/footer_logo.png" alt="LG U+ LOGO" /></h4> -->
  	<ul>
    	<li class="frist">ȸ��Ұ�</li>
        <li><a href="javascript:OpenCenter('PopupAgree.jsp','675','440')" >�̿���</a></li>
        <li><a href="javascript:OpenCenter('RetrieveCoUserInfo.html','675','440')" style="color: #d61185">��������ó����ħ</a></li>
        <!-- <li><a href="javascript:OpenCenter('http://www.uplus.co.kr/com/lins/lins/RetrieveCommonFooterP2.hpi','720','600')" >������å</a></li> -->
  	</ul>
    <p>���� Ư���� ��걸 �Ѱ���� 32 LG���÷��� ���� | ��ǥ�̻� Ȳ���� | ����ڵ�Ϲ�ȣ 220-81-39938 | ����Ǹž��Ű� �� 2015-������00481ȣ</p>
    <p>������ : 1644-7882  |  Copyright 2012 LG Uplus Corp. All Rights Reserved.</p>
</div>

<!-- WIDERPLANET  SCRIPT START 2017.10.26 > ����_U+Works Ÿ���� ������_��ȯ ��ũ ��ġ(����)-->
<div id="wp_tg_cts" style="display:none;"></div>