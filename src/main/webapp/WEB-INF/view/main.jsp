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
		
		// strText에 전체 문자열이 입력된다.
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
			$('#ca').val('별도 협의');
			$('#pa').val('별도 협의');
		}
	}
	
</script>

</head>
<body>
<div class="contentWrap">
	<a href="/">초기 화면으로</a>
	<!-- main Visual -->
	<div class="mainVisual">
		<h3>U싸인</h3>
		<ul class="membershipBtn">
			<li><a href="UserChk.do" onclick="return pagemover(this.href,'https');"><img src="images/main_intro/membership_information_01.png" alt="수정"/></a></li>
			<li><a href="UserChk.do" onclick="return pagemover(this.href,'https');"><img src="images/main_intro/membership_information_01.png" alt="수정"/></a></li>
			<li><img id="bt_logout" style="cursor:pointer" src="images/main_intro/membership_information_02.png" alt="로그아웃"/></li>
		</ul>
		<div class="membershipBtnClear">
		</div>
		<div class="membership">
			<ul class="membershipName">
				<li id="member_company1">업체명</li>
				<li>아이디</li>
				<li>담당자</li>
				<li>사업자번호</li>
				<li>서비스유형</li>
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
				<li id="member_company1">U싸인 충전금액</li>
			</ul>
			
			<ul class="membershipinformation">
				<li>${charging_amount}원</li>
			</ul>
			
			<button>충전</button>
			<button>실시간요금조회</button>
			<br>
			<ul class="membershipName">
				<li>발행 가능 수</li>
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
				<li class="last">U싸인 충전</li>
			</ul>
		</div>
		<!--//NAVI AREA :: END -->
		<!-- 편집영역 START  -->
		<div class="webtaxCon">
			<h3>충전하기</h3>
			<!-- FORM START  -->
			<div class="formArea">
				<div style="margin:26px 0 3px 0;">
					<div style="text-align:left; margin-bottom:-17px; font-family: 돋움; font-size:12px;color:#000;">
						<span style="font-weight:bold; color:#ff9a00;">> 충전금액 선택 </span>
					</div>
					<br>
					<!-- 충전금액 선택 -->
					<div>
						<ul class="unconfirmedFromBtn">
							<li class="fromBtn1" value=16000><a href="#" onclick="statusChange(this)" id="li1">10건 충전<br>(1,600원/건)</a></li>
							<li class="fromBtn1" value=85000><a href="#" onclick="statusChange(this)" id="li2">30건 충전<br>(1,300원/건)</a></li>
							<li class="fromBtn1" value=100000><a href="#" onclick="statusChange(this)" id="li3">100건 충전<br>(1,000원/건)</a></li>
							<li class="fromBtn1" value=0><a href="#" onclick="statusChange(this)" id="li4">1000건 충전<br>(별도 협의)</a></li>
						</ul>
					</div>
					
					<br />
					<br />
					<br />
					
					<!-- 충전금액 선택 시 form 박스 -->
					<div>
						<form>
							건당 단가 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
							충전금액  <input type="text" id="ca">원&nbsp;&nbsp;&nbsp;&nbsp; 
							결제금액(부과세 포함)  <input type="text" id="pa">원  
							<input type="reset" value="초기화" />
						</form>
					</div>
					
					<br />
					<br />
					
					<div style="text-align:left; margin-bottom:-17px; font-family: 돋움; font-size:12px;color:#000;">
						<span style="font-weight:bold; color:#ff9a00;">> 충전금액 결제방법 선택 </span>
					</div>
					<br />
					<br />
					<!-- 충전금액 결제방법 선택 -->
					<div>
						<label><input type="radio" name="method" value="카드" checked/>신용카드</label>
	   					<label><input type="radio" name="method" value="가상계좌"/>가상계좌</label>
	  					<label><input type="radio" name="method" value="계좌이체"/>계좌이체</label>
  					</div>
					
				</div>
			</div>
			<!--//FORM END  -->
			
			<br />
			
			<div  style="text-align:left;  margin-bottom:-17px; font-family: 돋움; font-size:12px;color:#000;">					
				결제 관련 환불 정책 안내 <br />
				- 결제 후 7일 이내 한 건도 사용하지 않은 상태에서 승인취소 및 환불이 가능합니다.
			</div>
			
			<br />
			<br />
			
			<button>취소</button>
			<button id="payment-button">결제하기</button>
			
			
		</div>
		<!--//편집영역 END  -->
			
	</div>
</div>
</body>

<script>
	var tossPayments = TossPayments("test_ck_JQbgMGZzorzzXdypGB7rl5E1em4d");
	var button = document.getElementById("payment-button");
	
	var orderId = new Date().getTime();
	
	
	button.addEventListener("click", function () {
	    var method = document.querySelector('input[name=method]:checked').value; // "카드" 혹은 "가상계좌"
		
	    var newAmount = parseInt(document.getElementById('pa').value);
	    
	    var paymentData = {
	        amount: newAmount,
	        orderId: orderId,
	        orderName: "충전",
	        customerName: "한정인(테스트)",
	        successUrl: window.location.origin + "/success",
	        failUrl: window.location.origin + "/fail",
	    };
	
	    if (method === '가상계좌') {
	        paymentData.virtualAccountCallbackUrl = window.location.origin + '/virtual-account/callback'
	    }
	
	    tossPayments.requestPayment(method, paymentData);
	});
</script>

</html>