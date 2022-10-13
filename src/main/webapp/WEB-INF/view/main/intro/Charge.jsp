<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 서비스안내 - 요금안내
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>

<!-- U+전자문서 BODY 시작-->
<div class="contentBox">
	<div class="contentMiddle">
	
<!-- TITLE Bar AREA :: START -->
<div class="taxHistory">
	<ul>
		<li class="first">고객지원</li>
		<li>서비스안내</li>
		<li class="last">서비스 요금</li>
	</ul>
</div>
<!--//TITLE Bar AREA :: END -->

		<!-- ///////////////////////////////// 220728 수정 적용 영역 시작 -->
		<div style="width:949px; margin-top:15px; ">
			<div>
				<img src="images/biz_img/servicePrice.gif" alt="U+전자문서 서비스 요금 안내" border="0" usemap="#map1" />
				<map name="map1">
					<area shape="rect" coords="798,111,940,174" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Gen','750','800');" alt="기본형 서비스 신청" style="cursor: pointer;" />
					<area shape="rect" coords="798,195,940,244" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Hub','750','800');" alt="주거래처 서비스 신청"  style="cursor: pointer;"/>
					<area shape="rect" coords="798,549,940,598" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Per','750','800');" alt="개인형 서비스 신청"  style="cursor: pointer;"/>
					<area shape="rect" coords="798,619,940,668" href="javascript:OpenCenter('main.SmeUserStep2.do?accnt_type=Rcv','750','800');" alt="수신정용형 서비스 신청"  style="cursor: pointer;"/>
				</map>
			</div>
		</div>
		<!-- ///////////////////////////////// 220728 수정 적용 영역 끝 -->

  	</div>
</div>
<!-- //U+전자문서 BODY 끝 -->  