<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ���񽺾ȳ� - ��ݾȳ�
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!-- U+���ڹ��� BODY ����-->
<div class="contentBox">
	<div class="contentMiddle">
	
<!-- TITLE Bar AREA :: START -->
<div class="taxHistory">
	<ul>
		<li class="first">������</li>
		<li>���񽺾ȳ�</li>
		<li class="last">���� ���</li>
	</ul>
</div>
<!--//TITLE Bar AREA :: END -->

		<!-- ///////////////////////////////// 220728 ���� ���� ���� ���� -->
		<div style="width:949px; margin-top:15px; ">
			<div>
				<img src="images/biz_img/servicePrice.gif" alt="U+���ڹ��� ���� ��� �ȳ�" border="0" usemap="#map1" />
				<map name="map1">
					<area shape="rect" coords="798,111,940,174" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Gen','750','800');" alt="�⺻�� ���� ��û" style="cursor: pointer;" />
					<area shape="rect" coords="798,195,940,244" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Hub','750','800');" alt="�ְŷ�ó ���� ��û"  style="cursor: pointer;"/>
					<area shape="rect" coords="798,549,940,598" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Per','750','800');" alt="������ ���� ��û"  style="cursor: pointer;"/>
					<area shape="rect" coords="798,619,940,668" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Rcv','750','800');" alt="���������� ���� ��û"  style="cursor: pointer;"/>
				</map>
			</div>
		</div>
		<!-- ///////////////////////////////// 220728 ���� ���� ���� �� -->

  	</div>
</div>
<!-- //U+���ڹ��� BODY �� -->  