<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ȯ�漳�� - �ּҷϰ���
</body>
</html> --%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="/css/bizdocu.css" />

	<div class="contentWrap">
		<div class="content">
			<div class="webHistory">
				<ul>
					<li class="first">���ڰ��</li>
					<li>ȯ�漳��</li>			
					<li class="last">�ּҷϰ���</li>
				</ul>
			</div>
			<div class="webtaxCon">
				<h3>�ּҷϰ���</h3>
				<div class="formArea">
					<form id="frm1" name="frm1" method="post" action="bizdocu.ContractAddrList.do">
						<input type="hidden" name="conCorpVo.currentPage" id="currentPage" value="${conCorpVo.currentPage }">
						<input type="hidden" name="conCorpVo.keyVal" id="keyVal">
						<input type="hidden" name="user_type" id="user_type" value="${user_type}">
					
					<!-- tab menu-->
					<div class="tab_contract">
						<ul>
							<c:if test="${user_type == 'C'}">
								<li class="on"><a href="#">�����</a></li>								
								<li><a href="#" id="tab2">����</a></li>
							</c:if>
							<c:if test="${user_type == 'P'}">
								<li><a href="#" id="tab1">�����</a></li>								
								<li class="on"><a href="#">����</a></li>
							</c:if>
						</ul>
					</div>
					<div class="tab_contract_line"></div>
					<!-- // tab menu-->					
					
<c:if test="${user_type == 'C'}">					
					<div class="formBox" style="text-align:center;" >
						<table>
							<colgroup>
								<col width="10%" />
								<col width="*" />
							</colgroup>
							<tr>
								<th> �˻����� </th>
								<td>
									<select name="conCorpVo.key" id="key" style="width:130px; border:1px solid #dbdbdb;" >									
										<option value="conCorpVo.corp_nm" ${conCorpVo.key == "conCorpVo.corp_nm" ? 'selected' : ''}>��ȣ</option>
										<option value="conCorpVo.corp_id" ${conCorpVo.key == "conCorpVo.corp_id" ? 'selected' : ''}>����ڹ�ȣ</option>			
									</select>
									<input type="text" id="searchBy" name="${conCorpVo.key }" value="${conCorpVo.keyVal }" class="textArea" style="width:300px;"/>
									<span class="buttonFormOrange"><a href="#none" id="search">&nbsp;&nbsp;�˻�&nbsp;&nbsp;</a></span>
								</td>																	
							</tr>
						</table>
					</div>
				
					<div style="margin:26px 0 3px 0;">
						<div style="float:left;">
							<span class="buttonFormOrange" >
								<a href="#none" id="down">&nbsp;���� �ٿ�ε�&nbsp;</a>
							</span>
						</div>
						<div style="float:right;">
							<span class="buttonFormOrange" >
								<a href="#none" id="addSupplier">&nbsp;�ּҷ� �߰�&nbsp;</a>
							</span>
							<span class="buttonFormGray" >
								<a href="#none" id="remove">&nbsp;����&nbsp;</a>
							</span> 
						</div>
					</div>
										
					<table class="listStyleTop" >
						<colgroup>
							<col width="5%" />
							<col width="20%" />
							<col width="15%" />						
							<col width="*" />						
							<col width="15%" />						
						</colgroup>
						<tr>
							<th class="first"><input id="allSel" type="checkbox" value="" /></th>						
							<th>��ȣ</th>
							<th>����ڹ�ȣ</th>
							<th>�ּ�</th>
							<th class="last">����� ��</th>
						</tr>
					<c:if test="${empty conCorpVoList}">
						<tr>
							<td colspan="5" align="center" >��ϵ� ������ �����ϴ�.</td>
						</tr>
					</c:if>									
					<c:forEach items="${conCorpVoList }" var="conCorpVoList">
						<tr onmouseover="this.style.background='#fff0d3';" onmouseout="this.style.background='#ffffff';" style="cursor:pointer;">
							<td>
								<input name="rn_no" type="checkbox" value="${conCorpVoList.usr_code }" />
							</td>							
							<td onClick="javascript:ContractAddrListAction.detail('${conCorpVoList.usr_code }');">${conCorpVoList.corp_nm }</td>
							<td onClick="javascript:ContractAddrListAction.detail('${conCorpVoList.usr_code }');">/</td>
							<td onClick="javascript:ContractAddrListAction.detail('${conCorpVoList.usr_code }');"  style="text-align:left; line-height:20px;">${conCorpVoList.addr }</td>
							<td onClick="javascript:ContractAddrListAction.detail('${conCorpVoList.usr_code }');">${conCorpVoList.contactsSize}</td>
						</tr>
					</c:forEach>
					</table>
														
					<div class="paging">
						${pagingHtml}
					</div>
</c:if>
<!-- ���� (��ȸ��) -->
<c:if test="${user_type == 'P'}">
					<div class="formBox" style="text-align:center;" >
						<table class="noneTable" >
							<colgroup>
								<col width="10%" />
								<col width="*" />
							</colgroup>
							<tr>
								<th> �˻����� </th>
								<td>
									<select name="conCorpVo.key" id="key" style="width:130px; border:1px solid #dbdbdb;" >									
										<option value="conPersonVo.person_nm" ${conCorpVo.key == "person_nm" ? 'selected' : ''}>�̸�</option>
										<option value="conPersonVo.mobile" ${conCorpVo.key == "mobile" ? 'selected' : ''}>�޴�����ȣ</option>			
									</select>
									<input type="text" id="searchBy2" name="${conCorpVo.key }" value="${conCorpVo.keyVal }" class="textArea" style="width:300px;"/>
									<span class="buttonFormOrange"><a href="#none" id="search2">&nbsp;&nbsp;�˻�&nbsp;&nbsp;</a></span>
								</td>																	
							</tr>
						</table>
					</div>
				
					<div style="margin:26px 0 3px 0;">
						<div style="float:left;">
							<span class="buttonFormOrange" >
								<a href="#none" id="down2">&nbsp;���� �ٿ�ε�&nbsp;</a>
							</span>
						</div>
						<div style="float:right;">
							<span class="buttonFormOrange" >
								<a href="#none" id="addSupplier2">&nbsp;�ּҷ� �߰�&nbsp;</a>
							</span>
							<span class="buttonFormGray" >
								<a href="#none" id="remove2">&nbsp;����&nbsp;</a>
							</span> 
						</div>
					</div>
										
					<table class="listStyleTop" >
						<colgroup>
							<col width="5%" />
							<col width="20%" />
							<col width="15%" />						
							<col width="*" />						
							<col width="15%" />						
						</colgroup>
						<tr>
							<th class="first"><input id="allSel" type="checkbox" value="" /></th>						
							<th>�̸�</th>
							<th>�������</th>
							<th>�ּ�</th>
							<th class="last">�޴�����ȣ</th>
						</tr>
					<c:if test="${empty conPersonVoList}">
						<tr>
							<td colspan="5" align="center" >��ϵ� ������ �����ϴ�.</td>
						</tr>
					</c:if>										
					<c:forEach items="${conPersonVoList }" var="conPersonVoList">
						<tr onmouseover="this.style.background='#fff0d3';" onmouseout="this.style.background='#ffffff';" style="cursor:pointer;">
							<td>
								<input name="rn_no2" type="checkbox" value="${conPersonVoList.usr_code }" />
							</td>							
							<td onClick="javascript:ContractAddrListAction.detail2('${conPersonVoList.usr_code }');">${conPersonVoList.person_nm }</td>
							<td onClick="javascript:ContractAddrListAction.detail2('${conPersonVoList.usr_code }');">/</td>
							<td onClick="javascript:ContractAddrListAction.detail2('${conPersonVoList.usr_code }');"  style="text-align:left; line-height:20px;">${conPersonVoList.addr }</td>
							<td onClick="javascript:ContractAddrListAction.detail2('${conPersonVoList.usr_code }');">/</td>
						</tr>
					</c:forEach>
					</table>
														
					<div class="paging">
						${pagingHtml}
					</div>
</c:if>					
					
					</form>
				</div>
			</div>
		</div>
	</div>


<div class="popupWrapDirectMember" title="���� �ּҷ� " id="DirectMemberViewer" style="display:none">
	<form name="frm7" id="frm7" >
		<input type="hidden" name="conPersonVo.usr_code" id="usr_code" value="" />

		<div class="popupCon">
			<div id="person" >
				<p>&nbsp;</p>
				<h4>���� ����</h4>
				<div class="tableWrarp" style="margin-top:5px;">
					<table>
						<colgroup>
							<col width="18%" />
							<col width="32%" />
							<col width="18%" />
							<col width="*" />
						</colgroup>
						<tr>
							<th>*�̸�</th>
							<td colspan="3"><input type="text" name="conPersonVo.person_nm" id="person_nm" class="textArea" style="width:36%;" /></td>
						</tr>
						<tr>
							<th>*�������</th>
							<td colspan="3"><input type="text" name="conPersonVo.birth" id="birth" class="textArea" style="width:36%;" onkeypress="return fn_press_num(event, 'numbers');" onkeydown="fn_press_han(this);" style="ime-mode:disabled;" maxlength="8" /> (��. 19800326)</td>
						</tr>
						<tr>
							<th>*����</th>
							<td colspan="3">
								<input name="conPersonVo.gender" id="gender1" type="radio" value="M" checked="checked"/> <span style="margin-right:45px;">����</span>
								<input name="conPersonVo.gender" id="gender2" type="radio" value="W"> ����
							</td>
						</tr>
						<tr>
							<th>*�ּ�</th>
							<td colspan="3"><input type="text" name="conPersonVo.addr" id="addr" class="textArea" style="width:98%;" /></td>
						</tr>
						<tr>
							<th>��ȭ��ȣ</th>
							<td><input type="text" name="conPersonVo.phone" id="phone" class="textArea" style="width:95%;" onkeypress="return fn_press_num(event, 'numbers');" onkeydown="fn_press_han(this);" style="ime-mode:disabled;" maxlength="12" /></td>
							<th>�ѽ���ȣ</th>
							<td><input type="text" name="conPersonVo.fax" id="fax" class="textArea" style="width:95%;" onkeypress="return fn_press_num(event, 'numbers');" onkeydown="fn_press_han(this);" style="ime-mode:disabled;" maxlength="12" /></td>
						</tr>
						<tr>
							<th>*�޴�����ȣ</th>
							<td><input type="text" name="conPersonVo.mobile" id="mobile" class="textArea" style="width:95%;" onkeypress="return fn_press_num(event, 'numbers');" onkeydown="fn_press_han(this);" style="ime-mode:disabled;" maxlength="12" /></td>
							<th>*�̸���</th>
							<td><input type="text" name="conPersonVo.email" id="email" class="textArea" style="width:95%;" /></td>
						</tr>
					</table>
				</div>
			</div>
			<div id="btInsertOk">
				<span class="buttonFormOrange"><a href="#none" id="directMemberAction">Ȯ��</a></span>
				<span class="buttonFormGray"><a href="#none" id="cancelAction">���</a></span>
			</div>
			<div id="btUpdateOk">
				<span class="buttonFormOrange"><a href="#none" id="updateMemberAction">����</a></span>				
			</div>
			
		</div>
	</form>
</div>

<form id="frm2" name="frm2" method="post" action="bizdocu.ContractAddrForm.do">
	<input type="hidden" name="conCorpVo.usr_code" id="usr_code2"/>
</form>

<form id="frm3" name="frm3" method="post" action="bizdocu.ContractAddrList.do">
	<input type="hidden" name="conCorpVo.currentPage" id="currentPage" value="${conCorpVo.currentPage }">
	<input type="hidden" name="bizdo" id="bizdo" value="veiwsSupplierListDown"/>
	<input type="hidden" name="conCorpVo.key" value="${conCorpVo.key }"/>
	<input type="hidden" name="${conCorpVo.key }" value="${conCorpVo.keyVal }"/>
</form>

<script src="js/bizdocu/ContractAddrListAction.js"></script>