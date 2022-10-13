<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ȯ�漳�� - ī�װ�����
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="js/bizdocu/CategoryAction.js"></script>
<link rel="stylesheet" href="/css/bizdocu.css"/>
<%--
- Author: 
- Description : ��ϰ���
--%>
<!-- �ڹٽ�ũ��Ʈ �߰� ����  -->


<div class="contentWrap">
	<!-- MAIN BODY AREA :: START -->
	<div class="content">
	
		<!-- NAVI AREA :: START -->
		<div class="webHistory">
			<ul>
				<li class="first">���ڰ��</li>
				<li>ȯ�漳��</li>			
				<li class="last">ī�װ� ���</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		
		<!-- �������� START  -->
		<div class="webtaxCon">
			<h3>ī�װ� ���</h3><br />
&nbsp;&nbsp;&nbsp;&nbsp;* ��༭�� ��������(����, �뵵, ������ ��)�� �з��Ͽ� �����Ҽ� �ֵ��� �����ϴ� ������ν�<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��༭�� �ۼ��Ҷ� ī�װ��� �����ϸ� ��ȸ����Ʈ���� �����Ͽ� �˻��� �����մϴ�.<br />			
			
			<!-- FORM START  -->
			<div class="formArea">
			
				
				<div style="margin:26px 0 3px 0;">
					<div style="float:left; padding-bottom:5px; ">
						<span class="buttonFormOrange" ><a href="#none" id="removeCategory" >����</a></span>
						<span class="buttonFormOrange" ><a href="#none" id="addCategory" >���</a></span>
					</div>
				</div>
<form id="frm1" name="frm1" method="post" action="bizdocu.Category.do">
	<input type="hidden" name="contCategoryVo.currentPage" id="currentPage" value="${contCategoryVo.currentPage }">
									
				<table class="listStyleTop" >
					<colgroup>
						<col width="10%" />
						<col width="*" />									
					</colgroup>
					<tr>
						<th class="first"><input name="allSel" type="checkbox" value="" id="allSel"/></th>
						<th class="last">ī�װ���</th>						
					</tr>

				<c:if test="${contCategoryVo.totalCount == 0}">	
					<tr>
						<td colspan="2" align="center" >��ϵ� ������ �����ϴ�.</td>						
					</tr>
				</c:if>
				<c:forEach items="${contCategoryVoList }" var="contCategoryVoList" varStatus="cnt">
					<tr>
						<input type="hidden" name="contCategoryVoList[${cnt.index}].category" id="category${cnt.index}" value="${contCategoryVoList.category}" />
						<td><input name="contCategoryVoList[${cnt.index}].cate_seq" class="cate_seq" id="cate_seq${cnt.index}" type="checkbox" value="${contCategoryVoList.cate_seq}" /></td>
						<td style="text-align:left;"><a href="#none" id="viewCategory" onClick="javascript:CategoryAction.viewCategory('${cnt.index }');" >
						${contCategoryVoList.category }</a></td>
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



<div class="popupWrap" title="ī�װ� �߰�" id="addCategoryPop" style="display:none">
<!-- <div class="titleArea" style="position:relative;"> -->
<!-- 				<h5>ī�װ� �߰�</h5> -->
<!-- 				<span class="button buttonSmallGray" id="addClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
	<form name="frm2" id="frm2" >
		<input type="hidden" name="contCategoryVo.currentPage" id="currentPage" value="${contCategoryVo.currentPage }">
		<div class="popupCon">
						<div class="popupBox"  >
								<table>
										<colgroup>
										<col width="20%" />
										<col width="*" />
										<col width="20%" />
										</colgroup>
										<tr >
												<th>ī�װ���</th>
										<td>
												<input type="text" name="contCategoryVo.category" id="frm2_category" class="textArea" style="width:335px;"/>
										</td>
										<td>
											<span class="buttonFormOrange" style="padding-left:3px; vertical-align:bottom;" id="addCate"><a href="javascript:return false;">&nbsp;&nbsp;�߰�&nbsp;&nbsp;</a></span>
										</td>
								</tr>
						</table>
				</div>				
		</div>
	</form>
</div>

<div class="popupWrap" title="ī�װ� ����" id="modifyCategoryPop" style="display:none">
<!-- <div class="titleArea" style="position:relative;"> -->
<!-- 				<h5>ī�װ� ����</h5> -->
<!-- 				<span class="button buttonSmallGray" id="modClose"><a href="#">&nbsp;X&nbsp;</a></span> </div> -->
	<form name="frm3" id="frm3" >
		<input type="hidden" name="contCategoryVo.currentPage" id="currentPage" value="${contCategoryVo.currentPage }">
		<input type="hidden" name="contCategoryVo.cate_seq" id="frm3_cate_seq" value="">
		<div class="popupCon">
						<div class="popupBox"  >
								<table>
										<colgroup>
										<col width="20%" />
										<col width="*" />
										<col width="20%" />
										</colgroup>
										<tr >
												<th>ī�װ���</th>
										<td>
												<input type="text" name="contCategoryVo.category" id="frm3_category" class="textArea" style="width:335px;"/>
										</td>
										<td>
												<span class="buttonSmallOrange" style="padding-left:3px; vertical-align:bottom;" id="modCate"><a href="javascript:return false;">&nbsp;&nbsp;����&nbsp;&nbsp;</a></span>
										</td>
								</tr>
						</table>
				</div>				
		</div>
	</form>
</div>