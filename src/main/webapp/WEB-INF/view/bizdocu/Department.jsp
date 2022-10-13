<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 환경설정 - 부서관리
</body>
</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<script src="js/bizdocu/DepartmentAction.js"></script>
<link rel="stylesheet" href="/css/bizdocu.css" />
<%--
- Author: 
- Description : 부서관리
--%>
<!-- 자바스크립트 추가 영역  -->

<div class="contentWrap">
		<!-- MAIN BODY AREA :: START -->
		<div class="content">
				<!-- NAVI AREA :: START -->
				<div class="webHistory">
						<ul>
								<li class="first">전자계약</li>
								<li>환경설정</li>
								<li class="last">부서관리</li>
						</ul>
				</div>
				<!--//NAVI AREA :: END -->
				<!-- 편집영역 START  -->
				<div class="webtaxCon">
						<h3>부서관리</h3>
						<!-- FORM START  -->
						<div class="formArea" style="height:580px;">
								<!--왼쪽-->
								<div style="width:400px; float:left;">
										<h4>부서목록</h4>
										<div style="margin-top:40px; float:right;"><span class="buttonFormOrange" ><a href="javascript:DepartmentAction.addDeptInfoPopOpen();">추가</a></span> <span class="buttonFormOrange" > <a href="javascript:DepartmentAction.modDeptInfoPopOpen();">수정</a></span> <span class="buttonFormOrange" > <a href="javascript:DepartmentAction.removeDeptInfo();">삭제</a></span> </div>
										
										<div style="clear:right;">													
												<table class="listStyleTop3">
														<colgroup>
														<col width="50%" />
														<col width="*" />
														</colgroup>
														<tr>
																<th  class="first">부서명</th>
																<th class="last">부서코드 </th>
														</tr>
												</table>
										</div>
										<div id="div_depart" style="float:left;position:relative;width:398px; height:500px; display:;cursor:default;overflow-x:hidden;overflow-y:scroll; border-right:1px solid #c6c6c6;border-left:1px solid #c6c6c6; border-bottom:1px solid #c6c6c6;">
										<form name="frm1" id="frm1" method="post" action="">
												<input type="hidden" name="contDeptInfoVo.dept_seq" id="frm1_dept_seq" value="" />
												<input type="hidden" name="contDeptInfoVo.dprt_cd" id="frm1_dprt_cd" value="" />
												<table class="listStyleTop3">
														<colgroup>
														<col width="50%" />
														<col width="*" />
														</colgroup>
													
														<c:if test="${contDeptInfoVo.totalCount == 0}">
																<tr>
																		<td colspan="2" align="center" >등록된 부서가 없습니다.</td>
																</tr>
														</c:if>
														<c:forEach items="${contDeptInfoList }" var="contDeptInfoList" varStatus="cnt">
																<tr class="tr_dprt_cd" id="tr_${contDeptInfoList.dprt_cd}">
																		<td><a href="#none" id="listwtStaff" onClick="javascript:DepartmentAction.listWtStaffbydprt_cd('${contDeptInfoList.dept_seq}','${contDeptInfoList.dprt_cd}','${contDeptInfoList.dept_name}');" > ${contDeptInfoList.dept_name}</a></td>
																		<td>${contDeptInfoList.dprt_cd}</td>
																</tr>
														</c:forEach>
												</table>
												
										</form>
										</div>
								</div>
								<!--//왼쪽-->
								<!--오른쪽-->
								<div style="width:400px; float:right;" >
										<h4 id="title_dprt_name">부서명</h4>										
										<div  style="margin-top:20px; float:right;">
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.searchWtStaffList();">추가</a></span> 
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.removeStaff();">제외</a></span> 
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.updateApprAuth('Y');">결재권한부여</a></span> 
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.updateApprAuth('');">결재권한삭제</a></span>
										</div>
										<div  style=" float:right;">
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.updateFormAuth('Y');">공통양식등록권한부여</a></span> 
										<span class="buttonFormOrange" ><a href="javascript:DepartmentAction.updateFormAuth('');">공통양식등록권한삭제</a></span> 
										</div>
										<div style="clear:right;" >
												<table class="listStyleTop3">
														<colgroup>
														<col width="10%" />
														<col width="25%" />
														<col width="25%" />
														<col width="20%" />
														<col width="*" />
														</colgroup>
														<tr>
																<th class="first">
																		<input name="allSel" type="checkbox" value="" id="allSel"/>
																</th>
																<th >담당자명</th>
																<th >아이디</th>
																<th >양식등록</th>
																<th class="last">결재권</th>
														</tr>
												</table>
										</div>
										<div id="div_staff" style="float:right;position:relative;width:398px;height:500px;display:;cursor:default;overflow-x:hidden;overflow-y:auto; border-right:1px solid #c6c6c6;border-left:1px solid #c6c6c6; border-bottom:1px solid #c6c6c6;" >
										<form name="frm2" id="frm2" method="post" action="">
												<input type="hidden" name="wtStaffVo.dprt_cd" id="frm2_dprt_cd" value="" />
												<input type="hidden" name="wtStaffVo.appr_auth_yn" id="frm2_appr_auth_yn" value="" />
												<input type="hidden" name="wtStaffVo.form_auth_yn" id="frm2_form_auth_yn" value="" />
												<div id="staff_list"></div>
												
										</form>
								</div>
						</div>
						<!--오른쪽-->
						<!--//FORM END  -->
				</div>
				<!--//편집영역 END  -->
		</div>
		<div style="width:100%; clear:both; ">
				<div class="footerLine"></div>
		</div>
		<!--//MAIN BODY AREA :: END -->
</div>
<!-- 자바스크립트 추가 영역  -->
<div class="popupWrap" title="부서 추가" id="addDeptInfoPop" style="display:none">
		<form name="frm3" id="frm3" >
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:돋움;">
								<table class="view">
										<colgroup>
										<col width="30%" />
										<col width="*" />
										</colgroup>
										<tr >
												<th>부서명</th>
												<td>
														<input type="text" name="contDeptInfoVo.dept_name" id="frm3_dept_name" class="textArea" style="width:235px;"/>
												</td>
										</tr>
										<tr >
												<th>부서코드</th>
												<td>
														<input type="text" name="contDeptInfoVo.dprt_cd" id="frm3_dprt_cd" class="textArea" style="width:235px;"/>
												</td>
										</tr>
								</table>
						</div>
						<div style="float:right;"><span class="buttonFormOrange" ><a href="#none" id="addDepart" >추가</a></span> </div>
				</div>
		</form>
</div>
<div class="popupWrap" title="부서 추가" id="modDeptInfoPop" style="display:none">
		<form name="frm4" id="frm4" >
				<input type="hidden" name="contDeptInfoVo.dept_seq" id="frm4_dept_seq">
				<input type="hidden" name="contDeptInfoVo.dprt_cd" id="frm4_dprt_cd">
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:돋움;">
								<table class="view">
										<colgroup>
										<col width="30%" />
										<col width="*" />
										</colgroup>
										<tr >
												<th>부서명</th>
												<td>
														<input type="text" name="contDeptInfoVo.dept_name" id="frm4_dept_name" class="textArea" style="width:235px;"/>
												</td>
										</tr>
										<tr >
												<th>부서코드</th>
												<td><span id="frm4_dprt_cd_span" ></span></td>
										</tr>
								</table>
						</div>
						<div style="float:right;"><span class="buttonFormOrange" ><a href="#none" id="modDepart" >수정</a></span> </div>
				</div>
		</form>
</div>
<div class="popupWrap" title="사원리스트" id="wtStaffListPop" style="display:none">
		<form name="frm5" id="frm5" >
				<input type="hidden" name="wtStaffVo.dprt_cd" id="frm5_dprt_cd">
				<input type="hidden" name="wtStaffVo.dprt_nm" id="frm5_dprt_nm">
				<input type="hidden" name="wtStaffVo.currentPage" id="frm5_currentPage" value="1" />
				<div class="popupCon">
						<div class="popupBox" style="text-align:center;">
								<table>
										<colgroup>
										<col width="*" />
										</colgroup>
										<tr>
												<td height="39">
														<select name="wtStaffVo.key" id="frm5_key">
																<option value="name">담당자명</option>
																<option value="stf_login_id">아이디</option>
																<option value="dprt_nm">부서명</option>
																<option value="dprt_cd">부서코드</option>
														</select >
														<input type="text" name="wtStaffVo.keyVal" id="frm5_keyVal" class="textArea" style="width:240px;"/>
														<span class="buttonSmallOrange" style="padding-left:3px; vertical-align:bottom;" id="searchwtStaff"><a href="javascript:return false;">&nbsp;&nbsp;검색&nbsp;&nbsp;</a></span> </td>
										</tr>
								</table>
						</div>
						<table class="listStylePop">
								<colgroup>
								<col width="10%" />
								<col width="20%" />
								<col width="20%" />
								<col width="*" />
								<col width="20%" />
								</colgroup>
								<tr>
										<th class="first">
												<input name="allPopSel" type="checkbox" value="" id="allPopSel"/>
										</th>
										<th style="text-align:left">담당자명</th>
										<th>아이디</th>
										<th>부서명</th>
										<th class="last">부서코드</th>
								</tr>
						</table>
						<div id="staffList" ></div>
						<div id="staffPagingHtml" style="text-align:center;"></div>
						<!---->
						<div style="float:right;"><span class="buttonFormOrange" ><a href="#none" id="appendWtStaff" >추가</a></span> </div>
				</div>
		</form>
	</div>
</div>
