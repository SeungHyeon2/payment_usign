<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
전자계약 - 환경설정 - 카테고리관리
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script src="js/bizdocu/CategoryAction.js"></script>
<link rel="stylesheet" href="/css/bizdocu.css"/>
<%--
- Author: 
- Description : 목록관리
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
				<li class="last">카테고리 등록</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		
		<!-- 편집영역 START  -->
		<div class="webtaxCon">
			<h3>카테고리 등록</h3><br />
&nbsp;&nbsp;&nbsp;&nbsp;* 계약서를 여러기준(종류, 용도, 주제별 등)로 분류하여 관리할수 있도록 설정하는 기능으로써<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계약서를 작성할때 카테고리를 지정하면 조회리스트에서 구분하여 검색이 가능합니다.<br />			
			
			<!-- FORM START  -->
			<div class="formArea">
			
				
				<div style="margin:26px 0 3px 0;">
					<div style="float:left; padding-bottom:5px; ">
						<span class="buttonFormOrange" ><a href="#none" id="removeCategory" >삭제</a></span>
						<span class="buttonFormOrange" ><a href="#none" id="addCategory" >등록</a></span>
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
						<th class="last">카테고리명</th>						
					</tr>

				<c:if test="${contCategoryVo.totalCount == 0}">	
					<tr>
						<td colspan="2" align="center" >등록된 내용이 없습니다.</td>						
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
		<!--//편집영역 END  -->	
		
	</div>
	<div style="width:100%;"><div class="footerLine">&nbsp;</div></div>
	<!--//MAIN BODY AREA :: END -->
</div>

<!-- 자바스크립트 추가 영역  -->



<div class="popupWrap" title="카테고리 추가" id="addCategoryPop" style="display:none">
<!-- <div class="titleArea" style="position:relative;"> -->
<!-- 				<h5>카테고리 추가</h5> -->
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
												<th>카테고리명</th>
										<td>
												<input type="text" name="contCategoryVo.category" id="frm2_category" class="textArea" style="width:335px;"/>
										</td>
										<td>
											<span class="buttonFormOrange" style="padding-left:3px; vertical-align:bottom;" id="addCate"><a href="javascript:return false;">&nbsp;&nbsp;추가&nbsp;&nbsp;</a></span>
										</td>
								</tr>
						</table>
				</div>				
		</div>
	</form>
</div>

<div class="popupWrap" title="카테고리 수정" id="modifyCategoryPop" style="display:none">
<!-- <div class="titleArea" style="position:relative;"> -->
<!-- 				<h5>카테고리 수정</h5> -->
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
												<th>카테고리명</th>
										<td>
												<input type="text" name="contCategoryVo.category" id="frm3_category" class="textArea" style="width:335px;"/>
										</td>
										<td>
												<span class="buttonSmallOrange" style="padding-left:3px; vertical-align:bottom;" id="modCate"><a href="javascript:return false;">&nbsp;&nbsp;수정&nbsp;&nbsp;</a></span>
										</td>
								</tr>
						</table>
				</div>				
		</div>
	</form>
</div>