<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="js/common/sg/sg_basic.js"></script>
<script src="js/common/sg/sg_error.js"></script>
<script src="js/common/sg/sg_util.js"></script>
<script src="js/common/sg/sg_cert.js"></script>
<script src="js/common/sg/sg_sign.js"></script>
<script src="js/common/sg/sg_encrypt.js"></script>
<script src="js/common/sg/sg_pkcs7.js"></script>
<script src="js/common/sg/sg_hash.js"></script>
<script src="js/common/sg/sg_base64.js"></script>
<script src="js/common/sg/sg_fileread.js"></script>
<script src="js/common/signature.js"></script>
<script src="js/bizdocu/BankAccountAction.js"></script>
<%--
- Author: 
- Description : 계좌관리
--%>
<!-- 자바스크립트 추가 영역  -->

<link rel="stylesheet" href="/css/bizdocu.css" />

<div class="contentWrap">
	<!-- MAIN BODY AREA :: START -->
	<div class="content">
	
		<!-- NAVI AREA :: START -->
		<div class="webHistory">
			<ul>
				<li class="first">전자계약</li>
				<li>환경설정</li>			
				<li class="last">계좌관리</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		
		<!-- 편집영역 START  -->
		<div class="webtaxCon">
			<h3>계좌관리</h3>
				
			
			<!-- FORM START  -->
			<div class="formArea">

<div style="margin:26px 0 3px 0;">
	<div  style="text-align:left;  margin-bottom:-17px; font-family: 돋움; font-size:12px;color:#000;">							
		<span style="font-weight:bold; color:#ff9a00;">* 계좌등록 </span>							
		: 계약서 상세보기의 계좌번호 기능에서 확인이 가능합니다.
	</div>
<!-- ADMIN 계정만 환경설정 변경가능 -->
<c:if test="${sessionVo.staffVo.prvg_cd == '01'}" >			
	<div  style="text-align:right; ">
		<span class="buttonFormOrange" ><a href="#none" id="addAccountView" >계좌 등록</a></span>		
	</div>
</c:if>
<c:if test="${sessionVo.staffVo.prvg_cd != '01'}" >			
	<div  style="text-align:right; ">
	&nbsp;
	</div>
</c:if>	
</div>
<form id="frm1" name="frm1" method="post" action="">
	<input type="hidden" name="contAccountInfoVo.currentPage" id="currentPage" value="${contAccountInfoVo.currentPage }"/>
	<input type="hidden" name="contAccountInfoVo.account_seq" id="account_seq" value=""/>
									
				<table class="listStyleTop" >
					<colgroup>
						<col width="15%" />
						<col width="20%" />
						<col width="20%" />
						<col width="15%" />
						<col width="10%" />
						<col width="*" />									
					</colgroup>
					<tr>
						<th class="first">은행명</th>
						<th >계좌번호</th>
						<th >개설번호</th>
						<th >소유자명</th>
						<th >삭제여부</th>
						<th class="last">삭제일</th>						
					</tr>

				<c:if test="${contAccountInfoVo.totalCount == 0}">	
					<tr>
						<td colspan="6" align="center" >등록된 내용이 없습니다.</td>						
					</tr>
				</c:if>
				<c:forEach items="${contAccountInfoList }" var="contAccountInfoList" varStatus="cnt">
					<tr>
						<td> //</td>
						<td style="text-align:left;"><a href="#none" id="viewCategory" onClick="javascript:BankAccountAction.viewAccount('${contAccountInfoList.account_seq }');" >
						//</a></td>
						<td>//</td>
						<td>//</td>
						<td>${contAccountInfoList.del_yn }</td>
						<td>//</td>
					</tr>
				</c:forEach>				
				</table>	
</form>														
				<div class="paging">
					${pagingHtml}
				</div>
			</div>
			<!--//FORM END  -->
			
		</div>
		<!--//편집영역 END  -->	
		
	</div>
	<div style="width:100%;"><div class="footerLine">&nbsp;</div></div>
	<!--//MAIN BODY AREA :: END -->
</div>

<!-- 자바스크립트 추가 영역  -->

<!-- 자바스크립트 추가 영역  -->
<div class="popupWrap" title="계좌 정보" id="addAccountPop" style="display:none">
		<!-- <div class="titleArea" style="position:relative;"> -->
		<!-- 				<h5>카테고리 추가</h5> -->
		<!-- 				<span class="button buttonSmallGray" id="addClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
		<form name="frm2" id="frm2" >
				<input type="hidden" name="contAccountInfoVo.currentPage" id="currentPage" value="${contAccountInfoVo.currentPage }">
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:돋움;">
								<table>
										<colgroup>
										<col width="30%" />
										<col width="*" />
										</colgroup>
										<tr>
												<th>은행선택</th>
												<td  align="left" >
														<select id="frm2_bank_code" name="contAccountInfoVo.bank_code" style="border:1px solid #cdcbcb; font-family:나눔고딕, 돋움; font-size:12px; width:200px;">
															<c:forEach items="${bankCdList }" var="bankCdList" varStatus="stat">
																		<option value="${bankCdList.cd_vl }" >
																		${bankCdList.cd_nm}
																		</option>
															</c:forEach>
<!-- 																<option value="022" >개발테스트은행</option> -->
														</select>
												</td>
										</tr>
										<tr>
												<th >계좌번호</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_no" id="frm2_account_no" class="seperat" style="width:235px;"/>
														['-' 표시제외] </td>
										</tr>
										<tr>
												<th >계좌소유주명</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_owner" id="frm2_account_owner" class="textArea" style="width:235px;"/>
												</td>
										</tr>
										<tr>
												<th >계좌개설번호</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_open_number" id="frm2_account_open_number" class="seperat" style="width:235px;"/>
														['-' 표시제외] </td>
										</tr>
										<tr>
												<td colspan="2" style="font-weight:bold; color:#ff9a00;">
												* 주의 : 반드시 저장하시기전 계좌번호를 재확인해보시기 바랍니다.
												</td>												
										</tr>
								</table>
						</div>
						<p class="popupButton"><span class="buttonBottomOrange"><a href="#none" id="addAccount" >등록</a></span></p>
				</div>
		</form>
		<form id="frm3" name="frm3">
				<input type="hidden"  name="corp_id" id="corp_id" value="${sessionVo.companyVo.corp_id}" />
				<input type="hidden" name="contCertificateVo.user_dn" id="user_dn" value=""/>
				<input type="hidden" name="contCertificateVo.cert_sn" id="cert_sn" value=""/>
				<input type="hidden" name="contCertificateVo.certificate" id="certificate" value=""/>
				<input type="hidden" name="contCertificateVo.expire_dt" id="expire_dt" value=""/>
		</form>
</div>
<div class="popupWrap" title="카테고리 수정" id="viewAccountPop" style="display:none">
		<!-- <div class="titleArea" style="position:relative;"> -->
		<!-- 				<h5>카테고리 수정</h5> -->
		<!-- 				<span class="button buttonSmallGray" id="modClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
		<form name="frm4" id="frm4" >
				<input type="hidden"  name="staff_no" id="staff_no" value="${sessionVo.staffVo.staff_no}" />
				<input type="hidden"  name="prvg_cd" id="prvg_cd" value="${sessionVo.staffVo.prvg_cd}" />
				<input type="hidden" name="contAccountInfoVo.currentPage" id="currentPage" value="${contAccountInfoVo.currentPage }">
				<input type="hidden" name="contAccountInfoVo.account_seq" id="account_seq_frm4" value="">
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:돋움;">
								<table class="view">
										<colgroup>
										<col width="20%" />
										<col width="30%" />
										<col width="20%" />
										<col width="*" />
										</colgroup>
										<tr >
												<th>은행명</th>
												<td> <span id="bank_nm_frm4"></span> </td>
												<th>계좌번호</th>
												<td> <span id="account_no_frm4"></span> </td>
										</tr>
										<tr >
												<th>계좌소유주명</th>
												<td> <span id="account_owner_frm4"></span> </td>
												<th>계좌개설번호</th>
												<td> <span id="account_open_number_frm4"></span> </td>
										</tr>
										<tr >
												<th>등록일</th>
												<td> <span id="reg_dt_frm4"></span> </td>
												<th>등록담당자</th>
												<td> <span id="staff_no_frm4"></span> </td>
										</tr>
										<tr >
												<th>삭제일</th>
												<td> <span id="del_dt_frm4"></span> </td>
												<th>삭제담당자</th>
												<td> <span id="del_staff_no_frm4"></span> </td>
										</tr>
								</table>
						</div>
						<div id="delbtn" style="float:left;display:none;"><span class="buttonFormOrange" ><a href="#none" id="removeAccount" >삭제</a></span> </div>
				</div>
		</form>
</div>
