<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/intro/main.css"/>
<link rel="stylesheet" href="/css/intro/new_gnb_01.css"/>
<link href="css/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<link href="css/common.css" rel="stylesheet" type="text/css"/>
<link href="css/calendar_new.css" rel="stylesheet" type="text/css"/>
<link href="css/layout.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="/css/bizdocu.css"/>
<link rel="stylesheet" href="/css/style.css" />

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://js.tosspayments.com/v1"></script>

<style>
	.fromBtn1{
		font-weight : bold;
		border : solid pink 5px;
		margin-left:50px;
		border-width:thick;
	}
</style>

<script type="text/javascript">
	function statusChange(statusItem){
		var strText = $(statusItem).text();
		
		// strText�� ��ü ���ڿ��� �Էµȴ�.
		if(strText.includes('1,600')){
			$('#ca').val(16000);
			$('#pa').val(17600);
			console.log(document.getElementById('pa').value);
		}
		else if(strText.includes('1,300')){
			$('#ca').val(85000);
			$('#pa').val(93500);
		}else if(strText.includes('1,000')){
			$('#ca').val(100000);
			$('#pa').val(110000);
		}else{
			$('#ca').val('���� ����');
			$('#pa').val('���� ����');
		}
	}
	
</script>

</head>
<body>
<div class="contentWrap">
	<a href="/">�ʱ� ȭ������</a>
	<!-- main Visual -->
	<div class="mainVisual">
		<h3>U����</h3>
		<ul class="membershipBtn">
			<li><a href="UserChk.do" onclick="return pagemover(this.href,'https');"><img src="images/main_intro/membership_information_01.png" alt="����"/></a></li>
			<li><a href="UserChk.do" onclick="return pagemover(this.href,'https');"><img src="images/main_intro/membership_information_01.png" alt="����"/></a></li>
			<li><img id="bt_logout" style="cursor:pointer" src="images/main_intro/membership_information_02.png" alt="�α׾ƿ�"/></li>
		</ul>
		<div class="membershipBtnClear">
		</div>
		<div class="membership">
			<ul class="membershipName">
				<li id="member_company1">��ü��</li>
				<li>���̵�</li>
				<li>�����</li>
				<li>����ڹ�ȣ</li>
				<li>��������</li>
				<li><hr></li>
			</ul>
			<ul class="membershipinformation">
				<li id="member_company2"><span>${company}</span></li>
				<li><span> CTEST001 </span></li>
				<li><span>${name}</span></li>
				<li><span id="view_corp_id">${bnumber}</span></li>
				<li><span>${service_type}</span></li>
				<li><hr></li>
			</ul>

			<ul class="membershipName">
				<li id="member_company1">U���� �����ݾ�</li>
			</ul>
			
			<ul class="membershipinformation">
				<li>${charging_amount}��</li>
			</ul>
			
			<button>����</button>
			<button>�ǽð������ȸ</button>
			<br>
			<ul class="membershipName">
				<li>���� ���� ��</li>
			</ul>
			
			<ul class="membershipinformation">
				<li>${use_count}</li>
			</ul>
			
			<div class="membershipTextClear">
			
			</div>
		</div>
	</div>
	<div class="content">
		<!-- NAVI AREA :: START -->
		<div class="webHistory">
			<ul>
				<li class="last">U���� ����</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		<!-- �������� START  -->
		<div class="webtaxCon">
			<h3>�����ϱ�</h3>
			<!-- FORM START  -->
			<div class="formArea">
				<div style="margin:26px 0 3px 0;">
					<div style="text-align:left; margin-bottom:-17px; font-family: ����; font-size:12px;color:#000;">
						<span style="font-weight:bold; color:#ff9a00;">> �����ݾ� ���� </span>
					</div>
					<br>
					<!-- �����ݾ� ���� -->
					<div>
						<ul class="unconfirmedFromBtn">
							<li class="fromBtn1" value=16000><a href="#" onclick="statusChange(this)" id="li1">10�� ����<br>(1,600��/��)</a></li>
							<li class="fromBtn1" value=85000><a href="#" onclick="statusChange(this)" id="li2">30�� ����<br>(1,300��/��)</a></li>
							<li class="fromBtn1" value=100000><a href="#" onclick="statusChange(this)" id="li3">100�� ����<br>(1,000��/��)</a></li>
							<li class="fromBtn1" value=0><a href="#" onclick="statusChange(this)" id="li4">1000�� ����<br>(���� ����)</a></li>
						</ul>
					</div>
					
					<br />
					<br />
					<br />
					
					<!-- �����ݾ� ���� �� form �ڽ� -->
					<div>
						<form>
							�Ǵ� �ܰ� : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
							�����ݾ�  <input type="text" id="ca">��&nbsp;&nbsp;&nbsp;&nbsp; 
							�����ݾ�(�ΰ��� ����)  <input type="text" id="pa">��  
							<input type="reset" value="�ʱ�ȭ" />
						</form>
					</div>
					
					<br />
					<br />
					
					<div style="text-align:left; margin-bottom:-17px; font-family: ����; font-size:12px;color:#000;">
						<span style="font-weight:bold; color:#ff9a00;">> �����ݾ� ������� ���� </span>
					</div>
					<br />
					<br />
					<!-- �����ݾ� ������� ���� -->
					<div>
						<label><input type="radio" name="method" value="ī��" checked/>�ſ�ī��</label>
	   					<label><input type="radio" name="method" value="�������"/>�������</label>
	  					<label><input type="radio" name="method" value="������ü"/>������ü</label>
  					</div>
					
				</div>
			</div>
			<!--//FORM END  -->
			
			<br />
			
			<div  style="text-align:left;  margin-bottom:-17px; font-family: ����; font-size:12px;color:#000;">					
				���� ���� ȯ�� ��å �ȳ� <br />
				- ���� �� 7�� �̳� �� �ǵ� ������� ���� ���¿��� ������� �� ȯ���� �����մϴ�.
			</div>
			
			<br />
			<br />
			
			<button>���</button>
			<button id="payment-button">�����ϱ�</button>
			
			
		</div>
		<!--//�������� END  -->
			
	</div>
</div>
</body>

<script>
	var tossPayments = TossPayments("test_ck_JQbgMGZzorzzXdypGB7rl5E1em4d");
	var button = document.getElementById("payment-button");
	
	var orderId = new Date().getTime();
	
	
	button.addEventListener("click", function () {
	    var method = document.querySelector('input[name=method]:checked').value; // "ī��" Ȥ�� "�������"
		
	    var newAmount = parseInt(document.getElementById('pa').value);
	    
	    var paymentData = {
	        amount: newAmount,
	        orderId: orderId,
	        orderName: "����",
	        customerName: "������(�׽�Ʈ)",
	        successUrl: window.location.origin + "/success",
	        failUrl: window.location.origin + "/fail",
	    };
	
	    if (method === '�������') {
	        paymentData.virtualAccountCallbackUrl = window.location.origin + '/virtual-account/callback'
	    }
	
	    tossPayments.requestPayment(method, paymentData);
	});
</script>

</html>