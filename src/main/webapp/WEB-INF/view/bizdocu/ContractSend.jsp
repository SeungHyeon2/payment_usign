<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 계약진행 - 계약서 송신함
</body>
</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<link rel="stylesheet" href="/css/bizdocu.css">
<%--
- Author: 
- Description : 계약서 송신함
--%>
<script src="js/common/jquery.blockUI.js"></script>
<script src="js/common/calendar_ko.js"></script>
<script src="js/common/jquery.toSep.js"></script>
<script src="js/bizdocu/ContractSendAction.js"></script>
<!-- 자바스크립트 추가 영역  -->

<form id="frm1" name="frm1" method="post" action="bizdocu.ContractSend.do">
	<!-- multi sign 진행 상황 -->
	<input type="hidden" name="processing" id="processing" value="${sessionVo.staffVo.processing}" />
	
	<input type="hidden" name="login_id" id="login_id" value="${sessionVo.accountVo.login_id}" />
	<input type="hidden" name="corp_id" id="corp_id" value="${sessionVo.companyVo.corp_id}" />
	<input type="hidden" name="contSignInfoVo.cert_seq" id="cert_seq" value="${contCertificateVo.cert_seq}" />
	<input type="hidden" name="contSignInfoVo.cert_sn" id="cert_sn" value="${contCertificateVo.cert_sn}" />
	<input type="hidden" name="contSignInfoVo.signfile" id="signfile" value=""/>	
	<input type="hidden" name="contSignInfoVo.user_dn" id="user_dn" value=""/>	
	<input type="hidden" name="contSignInfoVo.certificate" id="certificate" value=""/>
	<input type="hidden" name="contSignInfoVo.expire_dt" id="expire_dt" value=""/>	
	
	<input type="hidden" name="contSearchInfoVo.currentPage" id="currentPage" value="${contSearchInfoVo.currentPage }">
	<input type="hidden" name="contSearchInfoVo.pageVsize" id="pageVsize" value="${contSearchInfoVo.pageVsize }">
	<input type="hidden" name="contSearchInfoVo.cont_cd" id="cont_cd" value="${contSearchInfoVo.cont_cd }">		
	<input type="hidden" name="contSearchInfoVo.trans_div" id="trans_div" value="${contSearchInfoVo.trans_div }">
	<input type="hidden" name="contSearchInfoVo.prvgcd" id="prvgcd" value="${sessionVo.staffVo.prvg_cd}" />	

		<div class="contentWrap">
				<!-- MAIN BODY AREA :: START -->
				<div class="content">
						<!-- NAVI AREA :: START -->
						<div class="webHistory">
								<ul>
										<li class="first">전자계약</li>
										<li>계약진행</li>
										<li class="last">계약서 송신함</li>
								</ul>
						</div>
						<!--//NAVI AREA :: END -->
						<!-- 편집영역 START  -->
						<div class="webtaxCon">
								<h3>계약서 송신함</h3>
								<!-- FORM START  -->
								<div class="formArea">
										<div class="formBox">
												<table class="noneTable" style="width:98%; ">
												<colgroup>
												<col width="15%" />
												<col width="*%" />
												<col width="13%" />
												</colgroup>
												<tr>
														<th style="text-align:right; padding:5px;">검색조건&nbsp;&nbsp;</th>
														<td>
	<select name="contSearchInfoVo.key" id="select3" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="b.title" <c:if test="${contSearchInfoVo.key=='b.title'}">selected</c:if>>계약명</option>
		<option value="b.seq" <c:if test="${contSearchInfoVo.key=='b.seq'}">selected</c:if>>계약번호</option>
		<option value="d.company" <c:if test="${contSearchInfoVo.key=='d.company'}">selected</c:if>>계약자</option>
		<option value="d.venderno" <c:if test="${contSearchInfoVo.key=='d.venderno'}">selected</c:if>>사업자번호/생년월일</option>
	</select>														
	<input type="text" name="contSearchInfoVo.keyVal" value="${contSearchInfoVo.keyVal}" id="textfield" class="textArea" maxlength="30" style="width:50%;"/>
														</td>
														<td>&nbsp;</td>
												</tr>												
												<tr>
														<th style="text-align:right; padding:5px;">날짜&nbsp;&nbsp;</th>
														<td>
	<select name="contSearchInfoVo.date_key" id="select" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="dt" <c:if test="${contSearchInfoVo.date_key=='dt'}">selected</c:if>>작성일자</option>
		<option value="contract_dt" <c:if test="${contSearchInfoVo.date_key=='contract_dt'}">selected</c:if>>계약일자</option>
		<option value="start_dt" <c:if test="${contSearchInfoVo.date_key=='start_dt'}">selected</c:if>>계약시작일자</option>
		<option value="expire_dt" <c:if test="${contSearchInfoVo.date_key=='expire_dt'}">selected</c:if>>계약종료일자</option>		
		<option value="signdt" <c:if test="${contSearchInfoVo.date_key=='signdt'}">selected</c:if>>서명완료일자</option>
	</select>
						
	<input type="text" name="contSearchInfoVo.start_dt" id="textfield2" value="${contSearchInfoVo.start_dt}" class="textArea" style="width:80px;"/>
	<script>
		new tcal ({
			// form name
			'formname': 'frm1',
			// input name
			'controlname': 'contSearchInfoVo.start_dt'
		});
	</script>
																~
	<input type="text" name="contSearchInfoVo.end_dt" id="textfield2" value="${contSearchInfoVo.end_dt}" class="textArea" style="width:80px;"/>
	<script>
		new tcal ({
			// form name
			'formname': 'frm1',
			// input name
			'controlname': 'contSearchInfoVo.end_dt'
		});
	</script>
														</td>
														<td>&nbsp;<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;검 색&nbsp;</a></span></td>
												</tr>	
												<tr>
														<th style="text-align:right; padding:5px;">카테고리&nbsp;&nbsp;</th>
														<td>
	<select name="cate_seq" id="cate_seq" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="">선택</option>
	<c:forEach items="${contCategoryVoList }" var="contCategoryVoList">
		<option value="${contCategoryVoList.cate_seq }" <c:if test="${contSearchInfoVo.cate_seq== contCategoryVoList.cate_seq}">selected</c:if>/>${contCategoryVoList.category }</option>
	</c:forEach>	 
	</select>
														</td>
														<td>&nbsp;</td>
												</tr>																						
												<tr>
														<th style="text-align:right;  padding:5px;">계약서상태&nbsp;&nbsp;</th>
														<td style="text-align:left;" colspan="2">
	<table style="width:100%;">
		<tr>
			<td><input type="checkbox" id="docState0" name="docState0" value="0"  <c:if test="${docState0=='0'}">checked</c:if>> 미전송</td>
			<td><input type="checkbox" id="docState10" name="docState10" value="10" <c:if test="${docState10=='10'}">checked</c:if>> 검토대기</td>
			<td><input type="checkbox" id="docState20" name="docState20" value="20" <c:if test="${docState20=='20'}">checked</c:if>> 검토반려</td>
			<td><input type="checkbox" id="docState30" name="docState30" value="30" <c:if test="${docState30=='30'}">checked</c:if>> 검토완료</td>
		</tr>
		<tr>
			<td><input type="checkbox" id="docState51" name="docState51" value="51" <c:if test="${docState51=='51'}">checked</c:if>> 결재반려</td>					
			<td><input type="checkbox" id="docState40" name="docState40" value="40" <c:if test="${docState40=='40'}">checked</c:if>> 결재대기</td>			
			<td><input type="checkbox" id="docState50" name="docState50" value="50" <c:if test="${docState50=='50'}">checked</c:if>> 결재완료</td>
			<td><input type="checkbox" id="docState60" name="docState60" value="60" <c:if test="${docState60=='60'}">checked</c:if>> 전자서명진행</td>	
		</tr>
	</table>

												
												</table>
												
												
										</div>

<!-------------------- //전자서명 -------------------->

<!--------------------전자서명 -------------------->	
  										
										<div style="margin:10px 0 5px 0;">
											<div style="float:left;">
		목록수
		<select id="blockCount" name="blockCount" style="width:50px; ">		
			<option value="10" <c:if test="${contSearchInfoVo.pageVsize==10}">selected</c:if>>10</option>
			<option value="20" <c:if test="${contSearchInfoVo.pageVsize==20}">selected</c:if>>20</option>
			<option value="50" <c:if test="${contSearchInfoVo.pageVsize==50}">selected</c:if>>50</option>
			<option value="100" <c:if test="${contSearchInfoVo.pageVsize==100}">selected</c:if>>100</option>
	   	</select>
      	조회건수 :  <span style="font-weight:bold; color:#ff9a00;">${contSearchInfoVo.totalCount}</span>
											</div>										
											<div style="float:right;">
												<span class="buttonFormOrange" ><a href="#none" id="multiSndState">검토요청</a></span>&nbsp;											
											<c:if test="${sessionVo.accountVo.accnt_cd != 'UR'}" >
												<span class="buttonFormOrange" ><a href="#none" id="multiAckState">전자서명</a></span>&nbsp;
											</c:if>
												<span class="buttonFormOrange" ><a href="#none" id="exceldown">&nbsp;&nbsp;엑셀 다운로드&nbsp;&nbsp;</a></span> 
											</div>
										</div>
									
										<table class="listStyleTop2" >
										<colgroup>
											<col width="5%" />
											<col width="*" />
											<col width="10%" />
											<col width="20%" />						
											<col width="10%" />						
											<col width="10%" />
											<col width="10%" />						
										</colgroup>
												<tr>
														<th class="first"><input name="allSel" type="checkbox" value="" id="allSel"/></th>
														<th>계약명</th>
														<th>담당자</th>
														<th>계약자정보</th>
														<th>작성일<br />계약일</th>
														<th>계약금액</th>														
														<th class="last">계약서상태</th>
												</tr>
												<c:if test="${contSearchInfoVo.totalCount == 0}">
														<tr>
																<td colspan="7" align="center" >등록된 내용이 없습니다.</td>
														</tr>
												</c:if>
												<c:forEach items="${contSearchInfoVoList }" var="contSearchInfoVoList" varStatus="cnt">												
													<tr>														
<input type="hidden" name="contSearchInfoVoList[${cnt.index}].nowstat" id="nowstat${cnt.index}" value="${contSearchInfoVoList.a_stat}" />
																<td>
<input name="contSearchInfoVoList[${cnt.index}].seq" class="svc_mng_no" id="${cnt.index}" type="checkbox" value="${contSearchInfoVoList.seq}" />																
																</td>
																<td style="text-align:left; line-height:20px;">
<a href="#none" id="viewCont" onClick="javascript:ContractSendAction.viewCont('${contSearchInfoVoList.seq }','${contSearchInfoVoList.gubun }');" >${contSearchInfoVoList.title }
																</td>
																<td>${contSearchInfoVoList.users }</td>
																<td style="line-height:20px;">
<!-- 다자간 계약 시 거래업체명 배열처리 -->																
${contSearchInfoVoList.company }<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> 외  ${contSearchInfoVoList.mem_cnt - 1} </c:if>
																<br />${contSearchInfoVoList.venderno}<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> 외  ${contSearchInfoVoList.mem_cnt - 1} </c:if>
																</td>
																<td style="line-height:20px;">
<c:choose>
<c:when test="${contSearchInfoVo.date_key=='dt'}"><strong>${contSearchInfoVoList.dt }</strong></c:when>
<c:otherwise>${contSearchInfoVoList.dt }</c:otherwise>
</c:choose>
</br>
<c:choose>
<c:when test="${contSearchInfoVo.date_key=='contract_dt'}"><strong>${contSearchInfoVoList.contract_dt }</strong></c:when>
<c:otherwise>${contSearchInfoVoList.contract_dt }</c:otherwise>
</c:choose>
																</td>
																<td style="text-align:right; "><fmt:formatNumber value="${contSearchInfoVoList.contract_money}" pattern="#,###.##"/></td>
																<!-- <td>${contSearchInfoVoList.a_stat }</td>
																<td>${contSearchInfoVoList.b_stat }</td> -->
																<td>${contSearchInfoVoList.nowstat }</td>
														</tr>
												</c:forEach>
										</table>
										<div class="paging"> ${pagingHtml} </div>
								</div>
								<!--//FORM END  -->
						</div>
						<!--//편집영역 END  -->
				</div>
				<div style="width:100%;">
						<div class="footerLine">&nbsp;</div>
				</div>
				<!--//MAIN BODY AREA :: END -->
		</div>
</form>

<form id="frm2" name="frm2" method="post">
	<input type="hidden" name="contSearchInfoVo.seq" id="seq2" />	
	<input type="hidden" name="contSearchInfoVo.gubun" id="gubun2" />
	<input type="hidden" name="previousLink" id="previousLink" value="SUP" />
	<input type="hidden" name="contSearchInfoVo.staff_no" id="staff_no2" value="${sessionVo.staffVo.staff_no}" />
	<input type="hidden" name="contSearchInfoVo.venderno" id="venderno2" value="${sessionVo.companyVo.corp_id}" />

	<!-- WIZVERA Delfino 인증모듈 추가 영역  -->
	<textarea name="PKCS7" style="display:none"></textarea>
	<textarea name="VID_RANDOM" style="display:none"></textarea>
	<input type="hidden" name="IDN" value="${sessionVo.companyVo.corp_id}" /><!--인증서 사업자번호(주민번호)-->
	<textarea name="contSignInfoVo.org_str" id="org_str" style="display:none"></textarea>
	<textarea name="contSignInfoVo.org_str_hash" id="org_str_hash" style="display:none"></textarea>
							
	<!-- 검색 key start -->
	<input type="hidden" name="contSearchInfoVo.key" value="${contSearchInfoVo.key}" />
	<input type="hidden" name="contSearchInfoVo.keyVal" value="${contSearchInfoVo.keyVal}" />
	<input type="hidden" name="contSearchInfoVo.date_key" value="${contSearchInfoVo.date_key}" />
	<input type="hidden" name="contSearchInfoVo.start_dt" value="${contSearchInfoVo.start_dt}" />		
	<input type="hidden" name="contSearchInfoVo.end_dt" value="${contSearchInfoVo.end_dt}" />
	<input type="hidden" name="contSearchInfoVo.currentPage" value="${contSearchInfoVo.currentPage }">
	<input type="hidden" name="contSearchInfoVo.pageVsize" value="${contSearchInfoVo.pageVsize }">
	
	<input type="hidden" name="docState0" value="${docState0}" />
	<input type="hidden" name="docState10" value="${docState10}" />
	<input type="hidden" name="docState20" value="${docState20}" />
	<input type="hidden" name="docState30" value="${docState30}" />
	<input type="hidden" name="docState40" value="${docState40}" />
	<input type="hidden" name="docState50" value="${docState50}" />
	<input type="hidden" name="docState51" value="${docState51}" />
	<input type="hidden" name="docState60" value="${docState60}" />
	<!-- 검색 key end -->
</form>
<form id="frm3" name="frm3" method="post" action="bizdocu.ContractPreview.do">
	<input type="hidden" name="contTypeContactVo.type_seq" id="type_seq3"/>
</form>
<div id="div_upload" style="display:none;cursor:default;" align="left">
	<div id="progress"></div>
</div>

<div class="popupWrap" title="전자서명처리중" id="signloading" style="display:none">
	전자서명 처리중입니다.
</div>

<!-- 자바스크립트 추가 영역  -->
