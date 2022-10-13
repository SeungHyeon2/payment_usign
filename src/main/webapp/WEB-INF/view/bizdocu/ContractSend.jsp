<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ������� - ��༭ �۽���
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
- Description : ��༭ �۽���
--%>
<script src="js/common/jquery.blockUI.js"></script>
<script src="js/common/calendar_ko.js"></script>
<script src="js/common/jquery.toSep.js"></script>
<script src="js/bizdocu/ContractSendAction.js"></script>
<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->

<form id="frm1" name="frm1" method="post" action="bizdocu.ContractSend.do">
	<!-- multi sign ���� ��Ȳ -->
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
										<li class="first">���ڰ��</li>
										<li>�������</li>
										<li class="last">��༭ �۽���</li>
								</ul>
						</div>
						<!--//NAVI AREA :: END -->
						<!-- �������� START  -->
						<div class="webtaxCon">
								<h3>��༭ �۽���</h3>
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
														<th style="text-align:right; padding:5px;">�˻�����&nbsp;&nbsp;</th>
														<td>
	<select name="contSearchInfoVo.key" id="select3" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="b.title" <c:if test="${contSearchInfoVo.key=='b.title'}">selected</c:if>>����</option>
		<option value="b.seq" <c:if test="${contSearchInfoVo.key=='b.seq'}">selected</c:if>>����ȣ</option>
		<option value="d.company" <c:if test="${contSearchInfoVo.key=='d.company'}">selected</c:if>>�����</option>
		<option value="d.venderno" <c:if test="${contSearchInfoVo.key=='d.venderno'}">selected</c:if>>����ڹ�ȣ/�������</option>
	</select>														
	<input type="text" name="contSearchInfoVo.keyVal" value="${contSearchInfoVo.keyVal}" id="textfield" class="textArea" maxlength="30" style="width:50%;"/>
														</td>
														<td>&nbsp;</td>
												</tr>												
												<tr>
														<th style="text-align:right; padding:5px;">��¥&nbsp;&nbsp;</th>
														<td>
	<select name="contSearchInfoVo.date_key" id="select" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="dt" <c:if test="${contSearchInfoVo.date_key=='dt'}">selected</c:if>>�ۼ�����</option>
		<option value="contract_dt" <c:if test="${contSearchInfoVo.date_key=='contract_dt'}">selected</c:if>>�������</option>
		<option value="start_dt" <c:if test="${contSearchInfoVo.date_key=='start_dt'}">selected</c:if>>����������</option>
		<option value="expire_dt" <c:if test="${contSearchInfoVo.date_key=='expire_dt'}">selected</c:if>>�����������</option>		
		<option value="signdt" <c:if test="${contSearchInfoVo.date_key=='signdt'}">selected</c:if>>����Ϸ�����</option>
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
														<td>&nbsp;<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;�� ��&nbsp;</a></span></td>
												</tr>	
												<tr>
														<th style="text-align:right; padding:5px;">ī�װ�&nbsp;&nbsp;</th>
														<td>
	<select name="cate_seq" id="cate_seq" style="width:150px; border:1px solid #dbdbdb;" >
		<option value="">����</option>
	<c:forEach items="${contCategoryVoList }" var="contCategoryVoList">
		<option value="${contCategoryVoList.cate_seq }" <c:if test="${contSearchInfoVo.cate_seq== contCategoryVoList.cate_seq}">selected</c:if>/>${contCategoryVoList.category }</option>
	</c:forEach>	 
	</select>
														</td>
														<td>&nbsp;</td>
												</tr>																						
												<tr>
														<th style="text-align:right;  padding:5px;">��༭����&nbsp;&nbsp;</th>
														<td style="text-align:left;" colspan="2">
	<table style="width:100%;">
		<tr>
			<td><input type="checkbox" id="docState0" name="docState0" value="0"  <c:if test="${docState0=='0'}">checked</c:if>> ������</td>
			<td><input type="checkbox" id="docState10" name="docState10" value="10" <c:if test="${docState10=='10'}">checked</c:if>> ������</td>
			<td><input type="checkbox" id="docState20" name="docState20" value="20" <c:if test="${docState20=='20'}">checked</c:if>> ����ݷ�</td>
			<td><input type="checkbox" id="docState30" name="docState30" value="30" <c:if test="${docState30=='30'}">checked</c:if>> ����Ϸ�</td>
		</tr>
		<tr>
			<td><input type="checkbox" id="docState51" name="docState51" value="51" <c:if test="${docState51=='51'}">checked</c:if>> ����ݷ�</td>					
			<td><input type="checkbox" id="docState40" name="docState40" value="40" <c:if test="${docState40=='40'}">checked</c:if>> ������</td>			
			<td><input type="checkbox" id="docState50" name="docState50" value="50" <c:if test="${docState50=='50'}">checked</c:if>> ����Ϸ�</td>
			<td><input type="checkbox" id="docState60" name="docState60" value="60" <c:if test="${docState60=='60'}">checked</c:if>> ���ڼ�������</td>	
		</tr>
	</table>

												
												</table>
												
												
										</div>

<!-------------------- //���ڼ��� -------------------->

<!--------------------���ڼ��� -------------------->	
  										
										<div style="margin:10px 0 5px 0;">
											<div style="float:left;">
		��ϼ�
		<select id="blockCount" name="blockCount" style="width:50px; ">		
			<option value="10" <c:if test="${contSearchInfoVo.pageVsize==10}">selected</c:if>>10</option>
			<option value="20" <c:if test="${contSearchInfoVo.pageVsize==20}">selected</c:if>>20</option>
			<option value="50" <c:if test="${contSearchInfoVo.pageVsize==50}">selected</c:if>>50</option>
			<option value="100" <c:if test="${contSearchInfoVo.pageVsize==100}">selected</c:if>>100</option>
	   	</select>
      	��ȸ�Ǽ� :  <span style="font-weight:bold; color:#ff9a00;">${contSearchInfoVo.totalCount}</span>
											</div>										
											<div style="float:right;">
												<span class="buttonFormOrange" ><a href="#none" id="multiSndState">�����û</a></span>&nbsp;											
											<c:if test="${sessionVo.accountVo.accnt_cd != 'UR'}" >
												<span class="buttonFormOrange" ><a href="#none" id="multiAckState">���ڼ���</a></span>&nbsp;
											</c:if>
												<span class="buttonFormOrange" ><a href="#none" id="exceldown">&nbsp;&nbsp;���� �ٿ�ε�&nbsp;&nbsp;</a></span> 
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
														<th>����</th>
														<th>�����</th>
														<th>���������</th>
														<th>�ۼ���<br />�����</th>
														<th>���ݾ�</th>														
														<th class="last">��༭����</th>
												</tr>
												<c:if test="${contSearchInfoVo.totalCount == 0}">
														<tr>
																<td colspan="7" align="center" >��ϵ� ������ �����ϴ�.</td>
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
<!-- ���ڰ� ��� �� �ŷ���ü�� �迭ó�� -->																
${contSearchInfoVoList.company }<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> ��  ${contSearchInfoVoList.mem_cnt - 1} </c:if>
																<br />${contSearchInfoVoList.venderno}<c:if test="${contSearchInfoVoList.mem_cnt > 1 }"> ��  ${contSearchInfoVoList.mem_cnt - 1} </c:if>
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
						<!--//�������� END  -->
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

	<!-- WIZVERA Delfino ������� �߰� ����  -->
	<textarea name="PKCS7" style="display:none"></textarea>
	<textarea name="VID_RANDOM" style="display:none"></textarea>
	<input type="hidden" name="IDN" value="${sessionVo.companyVo.corp_id}" /><!--������ ����ڹ�ȣ(�ֹι�ȣ)-->
	<textarea name="contSignInfoVo.org_str" id="org_str" style="display:none"></textarea>
	<textarea name="contSignInfoVo.org_str_hash" id="org_str_hash" style="display:none"></textarea>
							
	<!-- �˻� key start -->
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
	<!-- �˻� key end -->
</form>
<form id="frm3" name="frm3" method="post" action="bizdocu.ContractPreview.do">
	<input type="hidden" name="contTypeContactVo.type_seq" id="type_seq3"/>
</form>
<div id="div_upload" style="display:none;cursor:default;" align="left">
	<div id="progress"></div>
</div>

<div class="popupWrap" title="���ڼ���ó����" id="signloading" style="display:none">
	���ڼ��� ó�����Դϴ�.
</div>

<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->
