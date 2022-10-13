<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 계약작성 - 계약서 작성
</body>
</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<link rel="stylesheet" href="/css/bizdocu.css">

<%--
- Author: 
- Description : 계약서 작성
--%>
<!-- 자바스크립트 추가 영역  -->

<form id="frm1" name="frm1" method="post" action="bizdocu.ContractList.do">
	<input type="hidden" name="contTypeVo.currentPage" id="currentPage" value="${contTypeVo.currentPage }">
	<input type="hidden" name="contTypeVo.pageVsize" id="pageVsize" value="${contTypeVo.pageVsize }">
	<input type="hidden" name="contTypeVo.keyVal" id="keyVal">
	<div class="contentWrap">
		<!-- MAIN BODY AREA :: START -->
		<div class="content">
			<!-- NAVI AREA :: START -->
			<div class="webHistory">
				<ul>
					<li class="first">전자계약</li>
					<li>계약작성</li>
					<li class="last">계약서 작성</li>
				</ul>
			</div>
			<!--//NAVI AREA :: END -->
			<!-- 편집영역 START  -->
			<div class="webtaxCon">
				<h3>계약서 작성</h3>
				<!-- FORM START  -->
				<div class="formArea">
					<p style="font-family:돋움; font-size:12px;color:#000;">
						<span style="font-weight:bold; color:#ff9a00;">* 계약서작성</span> : 1:1 계약서 발행, <span style="font-weight:bold; color:#ff9a00;"> 다중계약서</span> : 동일한 계약서를 여러 거래업체에게 동시에 계약서 발행
					</p>
					<div class="formBox" style="text-align:center;">
						<table class="noneTable" style="width:515px;">
							<colgroup>
								<col width="15%" />
								<col width="*" />
								<col width="*" />
							</colgroup>
							<tr>
								<th> 양식이름 </th>
								<td>
									<input type="text" id="searchBy" name="contTypeVo.title" value="${contTypeVo.keyVal }" class="textArea" maxlength="50" style="width:330px; height:17px;"/>
								</td>
								<td>&nbsp;<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;검색&nbsp;</a></span></td>
							</tr>
						</table>
					</div>
					<div style="margin:20px 0 10px 0;">
						<div style="float:left; margin-bottom:7px;">
							목록수
							<select id="blockCount" name="blockCount" style="width:50px; ">		
								<option value="10" <c:if test="${contTypeVo.pageVsize==10}">selected</c:if>>10</option>
								<option value="20" <c:if test="${contTypeVo.pageVsize==20}">selected</c:if>>20</option>
								<option value="50" <c:if test="${contTypeVo.pageVsize==50}">selected</c:if>>50</option>
								<option value="100" <c:if test="${contTypeVo.pageVsize==100}">selected</c:if>>100</option>
							</select>
     						조회건수 :  <span style="font-weight:bold; color:#ff9a00;">${contTypeVo.totalCount}</span>      												 								
						</div>
					</div>
					<table class="listStyleTop" >
						<colgroup>											
							<col width="*" />
							<col width="10%" />							
							<col width="10%" />
							<col width="10%" />
							<col width="27%" />												
						</colgroup>
						<tr>
							<th class="first">양식이름</th>
							<th>양식구분</th>							
							<th>계약상대수</th>
							<th>등록일</th>
							<th>계약서작성</th>
						</tr>
						<c:if test="${contTypeVo.totalCount == 0}">
							<tr>
								<td colspan="5" align="center">등록된 내용이 없습니다.</td>
							</tr>
						</c:if>
						<c:forEach items="${contTypeVoList }" var="contTypeVoList" varStatus="cnt">
							<tr>
								<!-- <td>${(contTypeVo.currentPage-1)*contTypeVo.pageVsize+cnt.index+1}</td> -->
								<td style="text-align:left; line-height:20px;">${contTypeVoList.title }</td>
								<td>
									<c:if test="${contTypeVoList.share_range == 3}">공통양식</c:if>
									<c:if test="${contTypeVoList.share_range == 15}">일반양식</c:if>
								</td>								
								<td>${contTypeVoList.company_cnt -1 }</td>
								<td>
									<c:set var="dateFmt" value="${contTypeVoList.entrydt}" />
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
								<td style="text-align:center;">
									<c:if test="${sessionVo.accountVo.accnt_cd=='UB'}">
										<span class="buttonFormOrange"><a href="#none" style="color:#4f4f4f; text-decoration:none;" id="addContract" onClick="javascript:ContractListAction.addContract('${contTypeVoList.type_seq}','${contTypeVoList.doc_type}');" >계약서작성</a></span>
										<span class="buttonFormGray"><a href="#none" style="color:#4f4f4f; text-decoration:none;" id="multiUpload" onClick="javascript:ContractListAction.addMultiUpload('${contTypeVoList.type_seq}','${contTypeVoList.company_cnt}');">다중계약서</a></span>
									</c:if>
								</td>
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
<form id="frm2" name="frm2" method="post" action="bizdocu.Contract.do">
		<input type="hidden" name="contTypeInfoVo.type_seq" id="type_seq2"/>
</form>
<form id="frm3" name="frm3" method="post" action="bizdocu.ContractPreview.do">
		<input type="hidden" name="contTypeContactVo.type_seq" id="type_seq3"/>
</form>
<form id="frm4" name="frm4" method="post" action="bizdocu.ContractUpload.do">
		<input type="hidden" name="contTypeInfoVo.type_seq" id="type_seq4"/>
</form>

<form id="frm5" name="frm5" method="post" action="bizdocu.ContractMultiUpload.do">
	<input type="hidden" name="contTypeInfoVo.type_seq" id="type_seq5"/>
	<input type="hidden" name="contTypeInfoVo.company_cnt" id="company_cnt"/>
</form>
<!-- 자바스크립트 추가 영역  -->
<script src="/js/bizdocu/ContractList.js"></script>
