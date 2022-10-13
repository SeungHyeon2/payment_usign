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
- Description : ���°���
--%>
<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->

<link rel="stylesheet" href="/css/bizdocu.css" />

<div class="contentWrap">
	<!-- MAIN BODY AREA :: START -->
	<div class="content">
	
		<!-- NAVI AREA :: START -->
		<div class="webHistory">
			<ul>
				<li class="first">���ڰ��</li>
				<li>ȯ�漳��</li>			
				<li class="last">���°���</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		
		<!-- �������� START  -->
		<div class="webtaxCon">
			<h3>���°���</h3>
				
			
			<!-- FORM START  -->
			<div class="formArea">

<div style="margin:26px 0 3px 0;">
	<div  style="text-align:left;  margin-bottom:-17px; font-family: ����; font-size:12px;color:#000;">							
		<span style="font-weight:bold; color:#ff9a00;">* ���µ�� </span>							
		: ��༭ �󼼺����� ���¹�ȣ ��ɿ��� Ȯ���� �����մϴ�.
	</div>
<!-- ADMIN ������ ȯ�漳�� ���氡�� -->
<c:if test="${sessionVo.staffVo.prvg_cd == '01'}" >			
	<div  style="text-align:right; ">
		<span class="buttonFormOrange" ><a href="#none" id="addAccountView" >���� ���</a></span>		
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
						<th class="first">�����</th>
						<th >���¹�ȣ</th>
						<th >������ȣ</th>
						<th >�����ڸ�</th>
						<th >��������</th>
						<th class="last">������</th>						
					</tr>

				<c:if test="${contAccountInfoVo.totalCount == 0}">	
					<tr>
						<td colspan="6" align="center" >��ϵ� ������ �����ϴ�.</td>						
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
		<!--//�������� END  -->	
		
	</div>
	<div style="width:100%;"><div class="footerLine">&nbsp;</div></div>
	<!--//MAIN BODY AREA :: END -->
</div>

<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->

<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->
<div class="popupWrap" title="���� ����" id="addAccountPop" style="display:none">
		<!-- <div class="titleArea" style="position:relative;"> -->
		<!-- 				<h5>ī�װ� �߰�</h5> -->
		<!-- 				<span class="button buttonSmallGray" id="addClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
		<form name="frm2" id="frm2" >
				<input type="hidden" name="contAccountInfoVo.currentPage" id="currentPage" value="${contAccountInfoVo.currentPage }">
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:����;">
								<table>
										<colgroup>
										<col width="30%" />
										<col width="*" />
										</colgroup>
										<tr>
												<th>���༱��</th>
												<td  align="left" >
														<select id="frm2_bank_code" name="contAccountInfoVo.bank_code" style="border:1px solid #cdcbcb; font-family:�������, ����; font-size:12px; width:200px;">
															<c:forEach items="${bankCdList }" var="bankCdList" varStatus="stat">
																		<option value="${bankCdList.cd_vl }" >
																		${bankCdList.cd_nm}
																		</option>
															</c:forEach>
<!-- 																<option value="022" >�����׽�Ʈ����</option> -->
														</select>
												</td>
										</tr>
										<tr>
												<th >���¹�ȣ</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_no" id="frm2_account_no" class="seperat" style="width:235px;"/>
														['-' ǥ������] </td>
										</tr>
										<tr>
												<th >���¼����ָ�</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_owner" id="frm2_account_owner" class="textArea" style="width:235px;"/>
												</td>
										</tr>
										<tr>
												<th >���°�����ȣ</th>
												<td  align="left">
														<input type="text" name="contAccountInfoVo.account_open_number" id="frm2_account_open_number" class="seperat" style="width:235px;"/>
														['-' ǥ������] </td>
										</tr>
										<tr>
												<td colspan="2" style="font-weight:bold; color:#ff9a00;">
												* ���� : �ݵ�� �����Ͻñ��� ���¹�ȣ�� ��Ȯ���غ��ñ� �ٶ��ϴ�.
												</td>												
										</tr>
								</table>
						</div>
						<p class="popupButton"><span class="buttonBottomOrange"><a href="#none" id="addAccount" >���</a></span></p>
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
<div class="popupWrap" title="ī�װ� ����" id="viewAccountPop" style="display:none">
		<!-- <div class="titleArea" style="position:relative;"> -->
		<!-- 				<h5>ī�װ� ����</h5> -->
		<!-- 				<span class="button buttonSmallGray" id="modClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
		<form name="frm4" id="frm4" >
				<input type="hidden"  name="staff_no" id="staff_no" value="${sessionVo.staffVo.staff_no}" />
				<input type="hidden"  name="prvg_cd" id="prvg_cd" value="${sessionVo.staffVo.prvg_cd}" />
				<input type="hidden" name="contAccountInfoVo.currentPage" id="currentPage" value="${contAccountInfoVo.currentPage }">
				<input type="hidden" name="contAccountInfoVo.account_seq" id="account_seq_frm4" value="">
				<div class="popupCon">
						<div class="tableWrarp" style="font-size:11px; font-family:����;">
								<table class="view">
										<colgroup>
										<col width="20%" />
										<col width="30%" />
										<col width="20%" />
										<col width="*" />
										</colgroup>
										<tr >
												<th>�����</th>
												<td> <span id="bank_nm_frm4"></span> </td>
												<th>���¹�ȣ</th>
												<td> <span id="account_no_frm4"></span> </td>
										</tr>
										<tr >
												<th>���¼����ָ�</th>
												<td> <span id="account_owner_frm4"></span> </td>
												<th>���°�����ȣ</th>
												<td> <span id="account_open_number_frm4"></span> </td>
										</tr>
										<tr >
												<th>�����</th>
												<td> <span id="reg_dt_frm4"></span> </td>
												<th>��ϴ����</th>
												<td> <span id="staff_no_frm4"></span> </td>
										</tr>
										<tr >
												<th>������</th>
												<td> <span id="del_dt_frm4"></span> </td>
												<th>���������</th>
												<td> <span id="del_staff_no_frm4"></span> </td>
										</tr>
								</table>
						</div>
						<div id="delbtn" style="float:left;display:none;"><span class="buttonFormOrange" ><a href="#none" id="removeAccount" >����</a></span> </div>
				</div>
		</form>
</div>
