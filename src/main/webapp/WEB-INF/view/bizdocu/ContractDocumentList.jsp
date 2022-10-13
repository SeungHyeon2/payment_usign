<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ����ۼ� - ���� ��� ������
</body>
<!-- �ڹٽ�ũ��Ʈ �߰� ���� -->


</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<link rel="stylesheet" href="/css/bizdocu.css">

<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->
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
					<li class="first">���ڰ��</li>
					<li>����ۼ�</li>
					<li class="last">��༭ ��ĺ�����</li>
				</ul>
			</div>
			<!--//NAVI AREA :: END -->
			<!-- �������� START  -->
			<div class="webtaxCon">
				<h3>��༭ ��ĺ�����</h3>
				<!-- FORM START  -->
				<div class="formArea">
					<p style="font-family: ����; font-size:12px;color:#000;">
					* ȸ�翡�� �ʿ��� ����� ����ϰ� ������ �� �ֽ��ϴ�.
					</p>								
					<div class="formBox" style="text-align:center;">
						<table class="noneTable" style="width:515px;">
							<colgroup>
							<col width="15%" />
							<col width="*" />
							<col width="*" />
							</colgroup>
							<tr>
								<th>����̸�</th>
								<td>
									<input type="text" id="searchBy" name="contTypeVo.title" value="${contTypeVo.keyVal }" class="textArea" maxlength="50" style="width:330px; height:17px;"/>
								</td>
								<td>&nbsp;<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;�˻�&nbsp;</a></span></td>
							</tr>
						</table>
					</div>
					<div style="margin:20px 0 5px 0;">
						<div style="float:left;">
							��ϼ�
							<select id="blockCount" name="blockCount" style="width:50px; ">		
								<option value="10" <c:if test="${contTypeVo.pageVsize==10}">selected</c:if>>10</option>
								<option value="20" <c:if test="${contTypeVo.pageVsize==20}">selected</c:if>>20</option>
								<option value="50" <c:if test="${contTypeVo.pageVsize==50}">selected</c:if>>50</option>
								<option value="100" <c:if test="${contTypeVo.pageVsize==100}">selected</c:if>>100</option>
						   	</select>
							��ȸ�Ǽ� :  <span style="font-weight:bold; color:#ff9a00;">${contTypeVo.totalCount}</span>
						</div>
						<c:if test="${sessionVo.accountVo.accnt_cd=='UB'}">										
							<div style="float:right;"> 
								<span class="buttonFormOrange"><a href="#none" id="addTpContType">��� ���</a></span>
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
							<th class="first">����̸�</th>
							<th>��ı���</th>							
							<th>��� ����� ��</th>
							<th>��༭ ��� ����</th>
							<th>�����</th>
							<th class="last">�̸�����</th>
						</tr>
						<c:if test="${contTypeVo.totalCount == 0}">
							<tr>
								<td colspan="6" align="center" >��ϵ� ������ �����ϴ�.</td>
							</tr>
						</c:if>
						<c:forEach items="${contTypeVoList }" var="contTypeVoList" varStatus="cnt">
							<tr>
								<!-- <td>${(contTypeVo.currentPage-1)*contTypeVo.pageVsize+cnt.index+1}</td> -->
								<td style="text-align:left; line-height:20px;"><a href="#none" id="viewContType" onClick="javascript:ContractDocumentListAction.viewContType('${contTypeVoList.type_seq }');" >${contTypeVoList.title }</a></td>
								<td>
								<c:if test="${contTypeVoList.share_range == 3}">������</c:if>
								<c:if test="${contTypeVoList.share_range == 15}">�Ϲݾ��</c:if>
								</td>								
								<td>${contTypeVoList.company_cnt - 1}</td>
								<td>
									<c:choose>
										<c:when test="${contTypeVoList.deploy_yn == 'Y' }"><span style="font-weight:bold; color:#ff9a00;">���</span></c:when>
										<c:otherwise>�̻��</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:set var="dateFmt" value="${contTypeVoList.entrydt}" />
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
								<td><span class="buttonFormGray"><a href="#none" style="color:#4f4f4f; text-decoration:none;" id="preview" onClick="javascript:ContractDocumentListAction.preview('${contTypeVoList.type_seq }');" >�̸�����</a></span></td>
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
<form id="frm2" name="frm2" method="post" target="_self">
	<input type="hidden" name="contTypeInfoVo.type_seq" id="type_seq"/>
</form>

<script src="/js/common/js_util.js"></script>
<script src="/js/common/js_xsl.js"></script>
