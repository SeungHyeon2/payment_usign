<%-- <%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
���ڰ�� - ���񽺾ȳ� - ���񽺼Ұ� 
</body>
</html> --%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" type="text/css" href="/css/new/default2.css" />
<%
String info = request.getParameter("info");if(info == null || "".equals(info)) info = "NON";
%>
<script type="text/javascript">

	$(function () {
		//lnb setting
		var depth1 = 1;//Ȱ��ȭ�� lnb group index
		var depth2 = 0;//Ȱ��ȭ�� lnb sub index
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('> a').addClass('on');
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('.sub').find('> li:nth-child(' + depth2 + ') a').addClass('on');
		$('#lnb').find('> ul > li:nth-child(' + depth1 + ')').find('.sub').show();

		$('#lnb').find('> ul > li > a').click(function () {
			$('#lnb').find('> ul > li > a').removeClass('on');
			$('#lnb .sub').slideUp();
			$(this).addClass('on');
			$(this).next('.sub').slideDown();
			//return false;
		});
		//lnb setting end
	});
	
	function ed_intro(chk) {
		if(chk==0){
			$('#ed_intro_0').show();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			$('#sub_title').addClass('on');
			$('#sub_title').html('U<sup>+</sup>���ڹ�����?');
			//$('#sub_title').html('');
			//$('#sub_title').removeClass('on');
			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 0 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==1){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').show();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+���ڹ�����?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('���ڼ��ݰ�꼭');
			$('#sub_title').addClass('on');
			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==2){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').show();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+���ڹ�����?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('���ڼ�����');
			$('#sub_title').addClass('on');
						
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');			
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}else if(chk==3){
			$('#ed_intro_0').hide();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').show();
			$('#mobile_intro').hide();
			
			//$('#top_title').removeClass('on');
			//$('#top_title').html('U+���ڹ�����?&nbsp;&nbsp;>&nbsp;&nbsp;');
			$('#sub_title').html('���ڰ��');
			$('#sub_title').addClass('on');

			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');			
		}else{
			$('#ed_intro_0').show();
			$('#ed_intro_1').hide();
			$('#ed_intro_2').hide();
			$('#ed_intro_3').hide();
			$('#mobile_intro').hide();

			$('#sub_title').html('U<sup>+</sup>���ڹ�����?');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('> a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 0 + ') a').addClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 1 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 2 + ') a').removeClass('on');
			$('#lnb').find('> ul > li:nth-child(' + 1 + ')').find('.sub').find('> li:nth-child(' + 3 + ') a').removeClass('on');
		}
		
	}
	
	//����Ͼ� �Ұ�������
	function mobile() {
		$('#mobile_intro').show();
		$('#ed_intro_0').hide();
		$('#ed_intro_1').hide();
		$('#ed_intro_2').hide();
		$('#ed_intro_3').hide();
		
		$('#sub_title').addClass('on');
		$('#sub_title').text('���ڹ��� ����Ͼ� �̶�?');
		//$('#sub_title').html('');
		//$('#sub_title').removeClass('on');
	}
	
	$(document).ready(function(){
		$('#ed_intro_0').show();
		$('#ed_intro_1').hide();
		$('#ed_intro_2').hide();
		$('#ed_intro_3').hide();
		$('#mobile_intro').hide();
		
		//2016-06-07 ���� �ڼ������� ���� 
		var chkInfo =  "<%=info%>";
		if(chkInfo=="TAX"){			
			ed_intro(1);
		}else if(chkInfo=="EDI"){
			ed_intro(2);
		}else if(chkInfo=="BIZ"){
			ed_intro(3);
		}else if(chkInfo=="MOB"){
			mobile();
			
			var depth0=2;
			$('#lnb').find('> ul > li > a').removeClass('on');
			$('#lnb .sub').slideUp();
			$('#lnb').find('> ul > li:nth-child(' + depth0 + ')').find('> a').addClass('on');
			$(this).next('.sub').slideDown();
		}else{
			ed_intro(0);
		}		
				
		//2016-11-28 > .contentBox{ margin-left: 45px;}
		var sPathname =window.location['pathname'];
		if(sPathname == "/w20/main.intro.Definition.nologin.do"){
			$('#contentBox').css({"margin-left":"45px"});
		}			
		
	});
	
</script>

<!-- U+���ڹ��� BODY ����-->
<div class="contentBox" id="contentBox">
	<div class="contentMiddle">

<!-- TITLE Bar AREA :: START -->
<div class="taxHistory" style="width: 1040px; margin-left: -45px; ">
	<ul>
		<li class="first">������</li>
		<li>���� �Ұ�</li>
		<li id="sub_title" class="last">���� �̿���</li>
	</ul>
</div>
<!--//TITLE Bar AREA :: END -->
	
	<!-- container -->
	<div class="clearfix container" style="margin-left: -45px; ">

		<!-- path 
		<div class="path">
			<ul>
				<li >���� �Ұ�&nbsp;&nbsp;>&nbsp;&nbsp;</li>
				<li id="top_title" class="on">U+���ڹ�����?</li>
				<li id="sub_title"></li>
			</ul>
		</div>		
		 -->

 <!-------------------- contents -------------------->
		<div class="clearfix" style="margin-top:15px; ">
			<!-- left menu -->
			<div id="lnb" class="left_wrap">
				<ul>
					<li>
						<a href="#"  onclick="javascript:ed_intro(0);"><span>U<sup>+</sup>���ڹ�����?</span></a>
						<ul class="sub">
							<li><a href="#none"  onclick="javascript:ed_intro(1);"><span>���ڼ��ݰ�꼭</span></a></li>
							<!-- <li><a href="#none"  onclick="javascript:ed_intro(2);"><span>���ڼ�����</span></a></li> 220728 ����-->
							<li><a href="#none"  onclick="javascript:ed_intro(3);"><span>���ڰ��</span></a></li>
						</ul>
					</li>
					<li>
					<a href="#none"  onclick="javascript:mobile();"><span>����Ͼ�</span></a>					
					</li>
					<li>
					
					<c:choose>
						<c:when test="#session.sessionVo.accountVo">
							<a href="main.intro.EdService.do"><span>�ΰ�����</span></a>
						</c:when>
						<c:otherwise>
							<a href="main.intro.EdService.nologin.do"><span>�ΰ�����</span></a>
						</c:otherwise>
					</c:choose>
<%-- 	<c:if test="#session.sessionVo.accountVo">
		<a href="main.intro.EdService.do"><span>�ΰ�����</span></a>
	</c:if>
	<c:else>
		<a href="main.intro.EdService.nologin.do"><span>�ΰ�����</span></a>
	</c:else>	 --%>									
					</li>
				</ul>
				<a href="javascript:OpenCenter('main.Counsel.do','670','600')" ><img src="images/new_menu/left_btn01.gif" alt="���񽺻��" /></a>
				<a href="javascript:OpenCenter('main.SmeUserStep1.do','750','800')" ><img src="images/new_menu/left_btn02.gif" alt="���񽺽�û" /></a>
			</div>
			<!-- //left menu -->
			
			<!-- //U+���ڹ�����? -->
			<div class="content_wrap" id="ed_intro_0">
				<h2>U<sup>+</sup>���ڹ�����?</h2>
				<p class="h2_sub">���ݰ�꼭, ����(�ֹ�)��, �ŷ�����, ��༭ ���� �������� ������ ������������ ������� ���ڹ���ȭ �Ͽ�<Br/> �����ð� ����, ��� ���� �� ������ ���Ǽ��� �����ϴ� �����Դϴ�.</p>
				<div class="content_img">
					<img src="images/new_menu/menu01_1_img.jpg" alt="���ڼ��ݰ�꼭, ���ڰ��, ���ڰŷ����� ���� �������� ������ ������������ ������� ���ڹ���ȭ �Ͽ� �����ð� ����, ��� ������ ������ ���Ǽ��� �����ϴ� �����Դϴ�." style="margin:35px auto 70px auto"/>
				</div> <!-- 220728 ���� -->				
				<h3 class="ml25">���� Ư����</h3>
				<dl class="ml25 sub_dl">
					<dt>1. �ŷ��� �� �ִ� ���� ASP�����</dt>
					<dd>���ڼ��ݰ�꼭 ����û ���� ��뷮 ����� �ε� ȹ��(2009�� 10��~)</dd>
					<dd>�뷮 ���� ������ ����</dd>
					<dt>2. �پ��� ���� �ַ�� ����</dt>
					<dd>SMS �� ��FAX�߼� �ý��� ��ü ����</dd>
					<dd>�ټ� �ý��۰��� ���� ��� ����</dd>
					<dt>3. ���� ���� �����</dt>
					<dd>�������� �繫����</dd>
					<dd>������� ������ ����</dd>
					<dd>�� ������ȣ�� ���� ������å ���� / ���� �ݼ��� ����</dd>
				</dl>
			</div>
			
			<!-- //���ڼ��ݰ�꼭 �Ұ� -->
			<div class="content_wrap" id="ed_intro_1"  style="display: none;">
				<h2>���ڼ��ݰ�꼭</h2>
				<p class="h2_sub">�ΰ����� �� 16���� 2�� �� ǥ�����ڼ��ݰ�꼭 ������ħ�� ���� ���ݰ�꼭 ������ �¶����� ���� ���������� ó���Ͽ� <br/> �ð��� ��������� �ΰ���ġ�� �����ϴ� �����Դϴ�.</p>
				<h3 class="ml25 mt30">���� Ư����</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_2_img.jpg" alt="���ڼ��ݰ�꼭 ���� Ư���� ���� �̹���" style="margin:35px auto 70px auto"/>
				</div>
			</div>			
			
			<!-- //���ڼ����� �Ұ� -->
			<div class="content_wrap" id="ed_intro_2"  style="display: none;">
				<h2>���ڼ�����</h2>
				<p class="h2_sub">���� �ѽ��� ��ȭ�� �̷������ �����ְ��� ������ ���ͳ��� ���� ������ �����ϰ� �����ϴ� ���� �Դϴ�.<Br/>������ ������ �����Ͽ� �뷮/���� �߼��� �����ϹǷ� �ֹ����� ���ֱ��� �ҿ�ð��� �����ϰ� �ŷ��� ������ ������<Br/> ���� ȿ������ ��� ������� Ȯ���� �� �ֽ��ϴ�.</p>
				<h3 class="ml25 mt30">���� ����</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_3_img.jpg" alt="���ڼ����� ���� ���� ���� �̹���" style="margin:20px auto 50px auto"/>
				</div>
				<h3 class="ml25 mt30">����ȿ��</h3>
				<dl class="ml25 sub_dl">
					<dt>1. ȿ������ �Ǹ�/��� ������ ���� ���꼺 ���</dt>
					<dd>���ְ��� : �ֹ����ۼ� �� ��ȸ, �ŷ�������ȸ ��</dd>
					<dd>���ְ��� : ������ȸ, �ŷ����� �ۼ� �� ��ȸ</dd>
					<dd>������ : â�����(����� ��ȸ, ������� ��)</dd>
					<dd>�پ��ϰ� ���� ���� ���޹�� ����(�̸���, LMS, FAX) : ������� ���� �ǽð� �ֹ��� Ȯ�� ����</dd>
					<dd>ī�޷α׸� �̿��� �ڻ��ǰ ȫ�� ���</dd>
					<dt>2. ���¾�ü���� Ŀ�´����̼� ��ȭ�� ������ ���� ����</dt>
					<dd>���¾�ü�� �䱸�� �´� ���ڹ��� ����</dd>
					<dd>���ͳ��� ������� ���� ���� : �ð��� ��ҿ� ������� ���ͳݻ󿡼� ���� ��ȸ ����</dd>
					<dt>3. �� ����� �ű�� ������ ���� ����ȭ ���� ��� ����</dt>
					<dt>4. ������ �ǽð� �м����� �ż� ��Ȯ�� Ÿ�� ���� ���� ��� Ȯ�� ����</dt>
				</dl>
			</div>
			
			<!-- //���ڰ�� �Ұ� -->
			<div class="content_wrap" id="ed_intro_3"  style="display: none;">
				<h2>���ڰ��</h2>
				<p class="h2_sub">��� ����ڰ� ���� ����� ���� ���� ������ ��༭ �ۼ�/��� ���� ����� ������ ��༭ ���·� ��ȯ�Ͽ� <br/>��༭ �ۼ�, ����, ����, ������ �� �ִ� ���� �Դϴ�.</p>
				<h3 class="ml25 mt30">���� ����</h3>
				<div class="content_img">
					<img src="images/new_menu/menu01_4_img.jpg" alt="���ڰ�� ���� ���� ���� �̹���" style="margin:20px auto 30px auto"/>
				</div>
				<h3 class="ml25">����ȿ��</h3>
				<dl class="ml25 sub_dl">
					<dt>1. ������ ���ڰ�༭ �������� ���� �żӼ� �� ����ȭ</dt>
					<dt>2. ���� �ݺ�, �ΰ� ������ ���� �湮 ����� ������ �ؼ�</dt>
					<dt>3. ���Ǽ�, ��ü�, ���ȼ� ��ȭ</dt>
					<dt>4. ��� ���� ���� ���� �δ� ��� ���� (�ΰǺ�,����� ��)</dt>
				</dl>
			</div>
			
			<!-- //����Ͼ� �Ұ� -->
			<div class="content_wrap" id="mobile_intro"  style="display: none;">
			<table>
				<colgroup>
				<col width="*" />
				</colgroup>
				<tr>
					<td><a><img src="images/biz_img/mobile_01.png" border="0" alt="����Ͼ� �Ұ�1" /></a></td>	
				</tr>
				<tr>
					<td><a><img src="images/biz_img/mobile_02.gif" border="0" alt="����Ͼ� �Ұ�2" /></a></td>	
				</tr>
				<tr>
					<td><img src="images/biz_img/mobile_03.gif" border="0" alt="����Ͼ� �Ұ�3" usemap="#MobileMap" />
					<map name="MobileMap" id="MobileMap">
						<area shape="rect" coords="337,971,498,1007" href="https://play.google.com/store/apps/details?id=com.lgup.android.edocu" target="_blank" alt="����Ͼ� ��ġ �ٷΰ���" />
					</map>
					</td>	
				</tr>
			</table>
			</div>			
						
		</div>

		<div style="margin: 50px auto 0 auto;">
		</div>
		
 	<!-------------------- //contents -------------------->
	</div>
	<!-- //container -->

	</div>
</div>
<!-- //U+���ڹ��� BODY �� -->