<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 계약작성 - 통합 양식 보관함
</body>
<!-- 자바스크립트 추가 영역 -->


</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<link rel="stylesheet" href="/css/bizdocu.css">

<!-- 자바스크립트 추가 영역  -->
<form id="frm1" name="frm1" method="post" action="bizdocu.ContractDocumentList.do">
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
					<li class="last">계약서 양식보관함</li>
				</ul>
			</div>
			<!--//NAVI AREA :: END -->
			<!-- 편집영역 START  -->
			<div class="webtaxCon">
				<h3>계약서 양식보관함</h3>
				<!-- FORM START  -->
				<div class="formArea">
					<p style="font-family: 돋움; font-size:12px;color:#000;">
					* 회사에서 필요한 양식을 등록하고 관리할 수 있습니다.
					</p>								
					<div class="formBox" style="text-align:center;">
						<table class="noneTable" style="width:515px;">
							<colgroup>
							<col width="15%" />
							<col width="*" />
							<col width="*" />
							</colgroup>
							<tr>
								<th>양식이름</th>
								<td>
									<input type="text" id="searchBy" name="contTypeVo.title" value="${contTypeVo.keyVal }" class="textArea" maxlength="50" style="width:330px; height:17px;"/>
								</td>
								<td>&nbsp;<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;검색&nbsp;</a></span></td>
							</tr>
						</table>
					</div>
					<div style="margin:20px 0 5px 0;">
						<div style="float:left;">
							목록수
							<select id="blockCount" name="blockCount" style="width:50px; ">		
								<option value="10" <c:if test="${contTypeVo.pageVsize==10}">selected</c:if>>10</option>
								<option value="20" <c:if test="${contTypeVo.pageVsize==20}">selected</c:if>>20</option>
								<option value="50" <c:if test="${contTypeVo.pageVsize==50}">selected</c:if>>50</option>
								<option value="100" <c:if test="${contTypeVo.pageVsize==100}">selected</c:if>>100</option>
						   	</select>
							조회건수 :  <span style="font-weight:bold; color:#ff9a00;">${contTypeVo.totalCount}</span>
						</div>
						<c:if test="${sessionVo.accountVo.accnt_cd=='UB'}">										
							<div style="float:right;"> 
								<span class="buttonFormOrange"><a href="#none" id="addTpContType">양식 등록</a></span>
							</div>
						</c:if>
					</div>
					<table class="listStyleTop" >
						<colgroup>												
							<col width="*" />
							<col width="10%" />							
							<col width="13%" />
							<col width="15%" />
							<col width="10%" />
							<col width="15%" />
						</colgroup>
						<tr>
							<th class="first">양식이름</th>
							<th>양식구분</th>							
							<th>상대 계약자 수</th>
							<th>계약서 사용 여부</th>
							<th>등록일</th>
							<th class="last">미리보기</th>
						</tr>
						<c:if test="${contTypeVo.totalCount == 0}">
							<tr>
								<td colspan="6" align="center" >등록된 내용이 없습니다.</td>
							</tr>
						</c:if>
						<c:forEach items="${contTypeVoList }" var="contTypeVoList" varStatus="cnt">
							<tr>
								<!-- <td>${(contTypeVo.currentPage-1)*contTypeVo.pageVsize+cnt.index+1}</td> -->
								<td style="text-align:left; line-height:20px;"><a href="#none" id="viewContType" onClick="javascript:ContractDocumentListAction.viewContType('${contTypeVoList.type_seq }');" >${contTypeVoList.title }</a></td>
								<td>
								<c:if test="${contTypeVoList.share_range == 3}">공통양식</c:if>
								<c:if test="${contTypeVoList.share_range == 15}">일반양식</c:if>
								</td>								
								<td>${contTypeVoList.company_cnt - 1}</td>
								<td>
									<c:choose>
										<c:when test="${contTypeVoList.deploy_yn == 'Y' }"><span style="font-weight:bold; color:#ff9a00;">사용</span></c:when>
										<c:otherwise>미사용</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:set var="dateFmt" value="${contTypeVoList.entrydt}" />
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
								<td><span class="buttonFormGray"><a href="#none" style="color:#4f4f4f; text-decoration:none;" id="preview" onClick="javascript:ContractDocumentListAction.preview('${contTypeVoList.type_seq }');" >미리보기</a></span></td>
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
<form id="frm2" name="frm2" method="post" target="_self">
	<input type="hidden" name="contTypeInfoVo.type_seq" id="type_seq"/>
</form>

<script src="/js/common/js_util.js"></script>
<script src="/js/common/js_xsl.js"></script>
