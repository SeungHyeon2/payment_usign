<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ȯ�漳�� - ȯ�漳��
</body>
</htm --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="/css/bizdocu.css" />
<%--
- Author: ��������
- Description : ȯ�漳��
--%>
<style>
.secukit {
    z-index: 1000;
}
</style>
    <!-- SecuKit One Assets -->
    <script src="js/secukit-one/plugin/jquery/jquery.3.5.1.min.js"></script>
    <script src="js/secukit-one/plugin/jquery/jquery-ui.min.js"></script>
    <script src="js/secukit-one/plugin/jquery/jquery.scrollbar.min.js"></script>
    <script>
    	var _$ = $.noConflict();
    	window.onload = function(){
    		 console.log("signature init");
    			secukit.init(function () {
    				console.log("secuKit init success");
    			});
    	}
    </script>
    <script src="js/secukit-one/config/config.js" charset="utf-8"></script>
    <script src="js/secukit-one/main/main.js" charset="utf-8"></script>
	<!-- /SecuKit One Assets -->
<script src="js/bizdocu/SG_PreferencesAction.js" language="javascript"></script>

<div class="contentWrap">
	<!-- MAIN BODY AREA :: START -->
	<div class="content">
	
		<!-- NAVI AREA :: START -->
		<div class="webHistory">
			<ul>
				<li class="first">���ڰ��</li>	
				<li class="last">ȯ�漳��</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		
		<!-- �������� START  -->
		<div class="webtaxCon">
			<h3>ȯ�漳��</h3>
			<div class="formArea">
				<form name="frm2" id="frm2" method="post" action="">
				<input type="hidden"  name="accnt_no" id="accntNo" value="${sessionVo.accountVo.accnt_no}" />
				<input type="hidden"  name="contAccountInfoVo.consult_yn" id="consult_yn2" />
				<input type="hidden"  name="contAccountInfoVo.sms_yn" id="sms_yn2" />
				<input type="hidden"  name="contAccountInfoVo.email_yn" id="email_yn2" />
				
				<div class="tableWrarp" style="clear:both;">
					<table class="view">
						<colgroup>
							<col width="20%" />
							<col width="*" />
						</colgroup>
						<tr>
							<th>��೻�� ��������</th>
							<td>
<input name="consult_yn" id="consult_yn" type="radio" value="Y" <c:if test="${sessionVo.accountVo.consult_yn=='Y'}" > checked="checked"</c:if> /> ������   
<input name="consult_yn" id="consult_yn" type="radio" value="N" <c:if test="${sessionVo.accountVo.consult_yn=='N'}" > checked="checked"</c:if> /> �������
&nbsp;&nbsp;&nbsp;* �����ڸ� �����Ͽ� �̿������� �����մϴ�.
							</td>
						</tr>
					</table>
				</div>  
						
<div class="tableWrarp" style="clear:both;">
	<table class="view">
		<colgroup>
			<col width="20%" />
			<col width="*" />
		</colgroup>
		<tr>
			<th>SMS �߼�</th>
			<td>
<table width="100%" border="0">
	<colgroup>
		<col width="20%" />
		<col width="20%" />
		<col width="20%" />
		<col width="20%" />
		<col width="*" />
	</colgroup>
	<tr>
		<td align="center">�����û</td>
		<td align="center">����Ȯ��</td>
		<td align="center">���ڼ���</td>
		<td align="center">���Ϸ�</td>
		<td align="center">����ı�</td>
	</tr>
	<tr>
		<td align="center"><input type="checkbox" id="appStateSms1" name="appStateSms1" value="Y" <c:if test="${appStateSms1=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateSms2" name="appStateSms2" value="Y" <c:if test="${appStateSms2=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateSms3" name="appStateSms3" value="Y" <c:if test="${appStateSms3=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateSms4" name="appStateSms4" value="Y" <c:if test="${appStateSms4=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateSms5" name="appStateSms5" value="Y" <c:if test="${appStateSms5=='Y'}" > checked="checked"</c:if> /></td>
	</tr>
</table><br>* �����˸����ڴ� �����û, ���Ϸ�, ����ı� �ܰ踸 �⺻�����˴ϴ�.
			</td>
		</tr>	

	</table>
</div>						

<div class="tableWrarp" style="clear:both;">
	<table class="view">
		<colgroup>
			<col width="20%" />
			<col width="*" />
		</colgroup>
		<tr>
			<th>�̸��� �߼�</th>
			<td>
<table width="100%" border="0">
	<colgroup>
		<col width="20%" />
		<col width="20%" />
		<col width="20%" />
		<col width="20%" />
		<col width="*" />
	</colgroup>
	<tr>
		<td align="center">�����û</td>
		<td align="center">����Ȯ��</td>
		<td align="center">���ڼ���</td>
		<td align="center">���Ϸ�</td>
		<td align="center">����ı�</td>
	</tr>
	<tr>
		<td align="center"><input type="checkbox" id="appStateEmail1" name="appStateEmail1" value="Y" <c:if test="${appStateEmail1=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateEmail2" name="appStateEmail2" value="Y" <c:if test="${appStateEmail2=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateEmail3" name="appStateEmail3" value="Y" <c:if test="${appStateEmail3=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateEmail4" name="appStateEmail4" value="Y" <c:if test="${appStateEmail4=='Y'}" > checked="checked"</c:if> /></td>
		<td align="center"><input type="checkbox" id="appStateEmail5" name="appStateEmail5" value="Y" <c:if test="${appStateEmail5=='Y'}" > checked="checked"</c:if> /></td>
	</tr>	
</table><br>* �̸��Ͼ˸��� �����û, ���Ϸ�, ����ı� �ܰ踸 �⺻�����˴ϴ�.											
			</td>
		</tr>
	</table>
</div>

				</form>
			</div>
				
			<h3>������ ���</h3><br />
&nbsp;&nbsp;&nbsp;&nbsp;* ���ڼ����� �ϱ� ���� �������� ����� �̿��Ͻ� �ٶ��ϴ�.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ���ڰ�࿡�� ��밡���� ������ : U<sup>+</sup>���ڹ��� ���� ����������,�����ť����������,�������������(���ο� 1���)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ��, ���ڼ��ݰ�꼭 ���� ����������(����߱�)�� ���ͳݹ�ŷ���������� ������� ���մϴ�.<br />
			<!-- FORM START  -->
			<div class="formArea">
				<form name="frm1" id="frm1" method="post" action="">
				<input type="hidden" name="corp_id" id="corp_id" value="${sessionVo.companyVo.corp_id}" />
				<input type="hidden" name="contCertificateVo.accnt_no" id="accnt_no" value="${contCertificateVo.accnt_no}"/>
				<input type="hidden" name="contCertificateVo.cert_seq" id="cert_seq" value="${contCertificateVo.cert_seq}"/>
				<input type="hidden" name="contCertificateVo.cert_type" id="cert_type" value="W"/>
				<input type="hidden" name="contCertificateVo.cert_status" id="cert_status" value="Y"/>
				<input type="hidden" name="contCertificateVo.user_dn" id="user_dn" value=""/>
				<input type="hidden" name="contCertificateVo.cert_sn" id="cert_sn" value=""/>
				<input type="hidden" name="contCertificateVo.certificate" id="certificate" value=""/>
				<input type="hidden" name="contCertificateVo.expire_dt" id="expire_dt" value=""/>
				<!-- WIZVERA Delfino ������� �߰�����  -->				
		        <textarea name="PKCS7" style="display:none"></textarea>
		        <textarea name="VID_RANDOM" style="display:none"></textarea>
		        <input type="hidden" name="IDN" value="${sessionVo.companyVo.corp_id}" />
        
					<div class="tableWrarp" style="clear:both;">
												<table class="view">
														<colgroup>
														<col width="20%" />
														<col width="*" />
														</colgroup>
														<tr>
																<th>������ ������</th>
																<td>
																${contCertificateVo.user_dn}
																</td>
														</tr>
														<tr>
																<th>������  ��ȿ�Ⱓ</th>
																<td>/</td>
														</tr>
														<tr>
																<th>������  �������</th>
																<td>/</td>
														</tr>														
												</table>
					</div>
										<p style="text-align:right;">
<!-- ADMIN ������ ȯ�漳�� ���氡�� -->
<c:if test="${sessionVo.staffVo.prvg_cd == '01'}" >										
										<span class="buttonBottomOrange" id="modOption"><a href="javascript:return false;">�����ϱ�</a></span> 
										<c:if test="${contCertificateVo == null}">	
											<span class="buttonBottomOrange" id="addCert"><a href="javascript:return false;">������ ���</a></span>
										</c:if>
										<c:if test="${contCertificateVo != null}">	
											<span class="buttonBottomOrange" id="modCert"><a href="javascript:return false;">������ ����</a></span>
										</c:if>
</c:if>										
										</p>
				</form>
			</div>
			<!--//FORM END  -->
			
		</div>
		<!--//�������� END  -->	
		
	</div>
	<div style="width:100%;"><div class="footerLine">&nbsp;</div></div>
	<!--//MAIN BODY AREA :: END -->
</div>

<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->
