<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 계약진행 - 계약서 완료보관함
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<link rel="stylesheet" href="/css/bizdocu.css" />

<%--
- Author: 
- Description : 계약서 완료보관함
--%>
<script type="text/javascript" src="js/mobile/common/jquery.form.min.js" charset="utf-8"></script>
<script src="js/common/jquery.blockUI.js" language="JavaScript" ></script>
<script src="js/common/calendar_ko.js" language="JavaScript" ></script>
<script src="js/common/jquery.toSep.js" language="javascript"></script>
<script src="js/bizdocu/ContractCompleteAction.js" language="javascript"></script>
<!-- 자바스크립트 추가 영역  -->

<form id="frm1" name="frm1" method="post" action="bizdocu.ContractComplete.do">
	<input type="hidden" name="processing" id="processing" value="${sessionVo.staffVo.processing }" />
	<input type="hidden" name="contSearchInfoVo.currentPage" id="currentPage" value="${contSearchInfoVo.currentPage }">
	<input type="hidden" name="contSearchInfoVo.pageVsize" id="pageVsize" value="${contSearchInfoVo.pageVsize }">
	<input type="hidden" name="contSearchInfoVo.cont_cd" id="cont_cd" value="${contSearchInfoVo.cont_cd }">		
	<input type="hidden" name="contSearchInfoVo.trans_div" id="trans_div" value="${contSearchInfoVo.trans_div }">
	<input type="hidden" name="contSearchInfoVo.status" id="docState" value="${docState }">
	<input type="hidden" name="contSearchInfoVo.prvgcd" id="prvgcd" value="${sessionVo.staffVo.prvg_cd}" />

	
	<input type="hidden" name="pdfdown" id="pdfdown" value="N">
	
	
		<div class="contentWrap">
				<!-- MAIN BODY AREA :: START -->
				<div class="content">
						<!-- NAVI AREA :: START -->
						<div class="webHistory">
								<ul>
										<li class="first">전자계약</li>
										<li>계약진행</li>
										<li class="last">계약서 완료보관함</li>
								</ul>
						</div>
						<!--//NAVI AREA :: END -->
						<!-- 편집영역 START  -->
						<div class="webtaxCon">
								<h3>계약서 완료보관함</h3>
								<!-- FORM START  -->
								<div class="formArea">
										<div class="formBox">
												<table cellpadding="0" cellspacing="0" cellpadding="0"  class="noneTable" style="width:85%;">
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
		<option value="d.company" <c:if test="${contSearchInfoVo.key=='d.company'}">selected</c:if>>계약자명</option>
		<option value="d.venderno" <c:if test="${contSearchInfoVo.key=='d.venderno'}">selected</c:if>>사업자번호/생년월일</option>
	</select>															
	<input type="text" name="contSearchInfoVo.keyVal" value="${contSearchInfoVo.keyVal}" id="textfield" class="textArea" maxlength="30" style="width:50%;"/>
														</td>
														<td valign="bottom"></td>
												</tr>												
												<tr>
														<th style="text-align:right; padding:5px;">날 짜&nbsp;&nbsp;</th>
														<td>
	<select name="contSearchInfoVo.date_key" id="select" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="signdt" <c:if test="${contSearchInfoVo.date_key=='signdt'}">selected</c:if>>계약완료일자</option>
		<option value="dt" <c:if test="${contSearchInfoVo.date_key=='dt'}">selected</c:if>>작성일자</option>
		<option value="contract_dt" <c:if test="${contSearchInfoVo.date_key=='contract_dt'}">selected</c:if>>계약일자</option>
		<option value="start_dt" <c:if test="${contSearchInfoVo.date_key=='start_dt'}">selected</c:if>>계약시작일자</option>
		<option value="expire_dt" <c:if test="${contSearchInfoVo.date_key=='expire_dt'}">selected</c:if>>계약종료일자</option>		
	</select>
						
	<input type="text" name="contSearchInfoVo.start_dt" id="textfield2" value="${contSearchInfoVo.start_dt}" class="textArea" style="width:80px;"/>
	<script language="JavaScript">
		new tcal ({
			// form name
			'formname': 'frm1',
			// input name
			'controlname': 'contSearchInfoVo.start_dt'
		});
	</script>
																~
	<input type="text" name="contSearchInfoVo.end_dt" id="textfield2" value="${contSearchInfoVo.end_dt}" class="textArea" style="width:80px;"/>
	<script language="JavaScript">
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
												</table>
										</div>
										<div style="margin:20px 0 5px 0;">
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
												<!-- <span class="buttonFormOrange" ><a href="#none" id="checkTs">타임스탬프 검증</a></span> -->
												<span class="buttonFormOrange" ><a href="#none" id="popupEmailSend">이메일 발송</a></span>
												<c:if test="${sessionVo.accountVo.accnt_cd != 'UR'}" >
													<span class="buttonFormOrange" ><a href="#none" id="faxSend">FAX 발송</a></span>
												</c:if>
												<span class="buttonFormOrange" ><a href="#none" id="pdflistdown">PDF 다운로드</a></span>
												<span class="buttonFormOrange" ><a href="#none" id="exceldown">엑셀전체 다운로드</a></span> 
											</div>
										</div>
										<table cellpadding="0" cellspacing="0" class="listStyleTop2" >
										<colgroup>				
											<col width="5%" />						
											<col width="*" />
											<col width="20%" />
											<col width="10%" />						
											<col width="10%" />						
											<col width="10%" />
											<col width="10%" />						
										</colgroup>										
												<tr>
														<th class="first"><input name="allSel" type="checkbox" value="" id="allSel"/></th>
														<th>계약명</th>
														<th>계약자정보</th>
														<th>작성일<br />계약일</th>														
														<th>계약시작일<br />계약종료일</th>														
														<th>계약완료일</th>
														<th class="last">계약금액</th>
												</tr>
												<c:if test="${contSearchInfoVo.totalCount == 0}">
														<tr>
																<td colspan="7" align="center" >등록된 내용이 없습니다.</td>
														</tr>
												</c:if>
												<c:forEach items="${contSearchInfoVoList }" var="contSearchInfoVoList" varStatus="cnt">
														<tr>
																<td>
<input name="pdfdownList[${cnt.index}].seq" class="svc_mng_no" id="${cnt.index}" type="checkbox" value="${contSearchInfoVoList.seq}" />
<input name="pdfdownList[${cnt.index}].staff_no" type="hidden" value="0" />
<input name="pdfdownList[${cnt.index}].venderno" type="hidden" value="${sessionVo.staffVo.corp_id}" />
																</td>
																<td style="text-align:left; line-height:20px; padding-left:10px; ">
<a href="#none" id="viewCont" onClick="javascript:ContractCompleteAction.viewCont('${contSearchInfoVoList.seq }','${contSearchInfoVoList.gubun }');" <c:if test="${contSearchInfoVoList.expire_yn == 'Y'}">style="color:#7f7f7f;"</c:if>>${contSearchInfoVoList.title }</a>
																</td>
																<td style="line-height:20px;">${contSearchInfoVoList.company }<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> 외  ${contSearchInfoVoList.mem_cnt - 1} </c:if>
																<br />${contSearchInfoVoList.venderno}<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> 외  ${contSearchInfoVoList.mem_cnt - 1} </c:if></td>
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
																<td style="line-height:20px;">${contSearchInfoVoList.start_dt }</br>${contSearchInfoVoList.expire_dt }</td>																
																<td><font color="red">
																<c:set var="dateFmt" value="${contSearchInfoVoList.signdt}" />						
		      													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/></font>
																</td>
																<td style="text-align:right;  padding-right:10px; "><fmt:formatNumber value="${contSearchInfoVoList.contract_money}" pattern="#,###.##"/></td>																
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

<form id="frm2" name="frm2" method="post" action="bizdocu.ContractViewSg.do">
	<input type="hidden" name="contSearchInfoVo.seq" id="seq2" />
	<input type="hidden" name="contSearchInfoVo.gubun" id="gubun2" />
	<input type="hidden" name="previousLink" id="previousLink" value="COM" />
	
	<!-- 검색 key start -->
	<input type="hidden" name="contSearchInfoVo.key" value="${contSearchInfoVo.key}" />
	<input type="hidden" name="contSearchInfoVo.keyVal" value="${contSearchInfoVo.keyVal}" />
	<input type="hidden" name="contSearchInfoVo.date_key" value="${contSearchInfoVo.date_key}" />
	<input type="hidden" name="contSearchInfoVo.start_dt" value="${contSearchInfoVo.start_dt}" />		
	<input type="hidden" name="contSearchInfoVo.end_dt" value="${contSearchInfoVo.end_dt}" />
	<input type="hidden" name="contSearchInfoVo.currentPage" value="${contSearchInfoVo.currentPage }">
	<input type="hidden" name="contSearchInfoVo.pageVsize" value="${contSearchInfoVo.pageVsize }">
	
	<input type="hidden" name="docState0" value="" />
	<input type="hidden" name="docState10" value="" />
	<input type="hidden" name="docState20" value="" />
	<input type="hidden" name="docState30" value="" />
	<input type="hidden" name="docState40" value="" />
	<input type="hidden" name="docState50" value="" />
	<input type="hidden" name="docState51" value="" />
	<input type="hidden" name="docState60" value="" />
	
</form>
<form id="frm3" name="frm3" method="post" action="bizdocu.ContractPreview.do">
	<input type="hidden" name="contTypeContactVo.type_seq" id="type_seq3"/>
</form>
<form id="frmf" name="frmf" method="post">
	<input type="hidden" name="svc_mng_no" id="svc_mng_no" value="${sessionVo.accountVo.login_id }"/>
	<input type="hidden" name="seq_no" id="seq_no" />
	<input type="hidden" name="att_file_nm" id="att_file_nm" />
</form>
<div class="popupWrap" title="PDF변환중" id="convertRslt" style="display:none" align="center">
	<img src="images/biz_img/pdfconvert.gif" width="300" height="156" alt="pdf 변환중" />
</div>

<!-- 이메일 발송 -->
<div class="popupWrapComplete" title="이메일 발송" id="EmailSendForm" style="display:none">
	<form name="frmEmail" id="frmEmail" >
		<input type="hidden" name="" id="" value="" />
		<div class="popupCon">
			<div class="popupBox">
				<table>
					<colgroup>
						<col width="*" />
					</colgroup>
					<tr>
						<td><div id="contMembInfoList"></div></td>
					</tr>
					<tr>
						<td>
							<input type="text" name="emailAddress" id="emailAddress" class="textArea" style="width:95%;" placeholder="수신자 이메일주소 입력" />
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" name="secret" id="secret" class="textArea" maxlength="6" style="width:95%;" placeholder="인증 비밀번호 입력(4~6자리 이내)" />
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" name="ctn" id="ctn" class="textArea" maxlength="30" style="width:95%;" placeholder="휴대전화번호 입력('-' 없이 입력)" />
						</td>
					</tr>
					<tr>
						<td><br/>
							* 휴대전화번호로 이메일 열람 비밀번호가 발송됩니다.<br/>
							* 계약서 확인에 필요한 인증비밀번호로 설정해 주세요.<br/>
							<span style="color:#c8299d;">* 영문, 숫자 조합으로 4~6자이내로 입력하세요.</span>
						</td>
					</tr>
				</table>
			</div>
			<div style="width:100%;margin:10px;text-align:center;font-size:12px;">
				<span class="buttonFormOrange"><a href="#none" id="emailSend" onClick="javascript:ContractCompleteAction.emailSend();">이메일 발송 및 인증번호 SMS 발송</a></span>
			</div>
		</div>
	</form>
</div>

<!-- 팩스 발송 -->
<div class="popupWrapComplete" title="FAX 발송" id="FaxSendForm" style="display:none">
	<form name="frmFax" id="frmFax" >
		<input type="hidden" name="" id="" value="" />
		<div class="popupCon">
			<div class="popupBox">
				<table>
					<colgroup>
						<col width="*" />
					</colgroup>
					<tr>
						<td><div id="contMembInfoList"></div></td>
					</tr>
					<tr>
						<td>
							<input type="text" name="fax" id="fax" class="textArea" style="width:95%;" placeholder="수신자 FAX번호 입력 ('-' 없이 입력)" />
						</td>
					</tr>
				</table>
			</div>
			<div style="width:100%;margin:10px;text-align:center;font-size:12px;">
				<span class="buttonFormOrange"><a href="#none" id="faxSend" onClick="javascript:ContractCompleteAction.faxSend();">FAX 발송</a></span>
			</div>
		</div>
	</form>
</div>

<!-- PDF 업로드 -->
<div class="popupWrap" title="PDF문서 검증" id="tsViewer" style="display:none">
	<form name="frmts" id="frmts"  method="post"  enctype="multipart/form-data">	
		
		<div class="popupCon">
			<div class="popupBox" style="text-align:center;">
				<table cellpadding="0" cellspacing="0" >
					<colgroup>
						<col width="120" />
						<col width="*" />
						<col width="120" />						
					</colgroup>
					<tr>
						<td align="center" height="45" style="font-weight: bold;">PDF 문서 </td>
						<td align="left">
							<input type="file" name="upload" id=upload" class="textArea"  style="width: 380px; height: 24px;" />								
						</td>
						<td align="center" >							
							<a style='cursor:pointer;' onClick="uploadTsPDF();"><img src="images/main_intro/verification_btn.png" alt="타임스탬프 검증" /></a>
						</td>
					</tr>
					<tr>
						<td colspan="3" style="padding-top: 10px; padding-bottom: 10px;">
							<img src="images/main_intro/menu_shortcut_03_popup.png" alt="타임스탬프 설명" />
						</td>
					</tr>
				</table>
			</div>
		</div>
	</form>
</div>

<!-- 자바스크립트 추가 영역  -->

