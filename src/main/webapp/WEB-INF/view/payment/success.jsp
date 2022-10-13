<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>결제 성공</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="stylesheet" href="/stylesheets/style.css" />
</head>

<style>
	#successCode{
		padding-top:50px;
		padding-left:170px;
		padding-bottom:50px;
	}
</style>

<body>
<div class="contentWrap" id="successCode">
	<section>
	    <h1>결제 성공</h1>
	    <h3>상품명: U싸인 충전</h3>
	    <h3>주문번호: ${orderId}</h3>
	</section>
</div>
</body>
</html>