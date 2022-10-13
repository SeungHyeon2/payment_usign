<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>결제 실패</title>
    <meta http equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="stylesheet" href="/stylesheets/style.css" />
</head>
<style>
	#failCode{
		padding-top:50px;
		padding-left:170px;
		padding-bottom:50px;
	}
</style>
<body>
<div class="contentWrap" id="failCode">
	<section>
	    <h1>결제 실패</h1>
	    <p>${message}</p>
	    <span>에러코드: ${code}</span>
	</section>
</div>
</body>
</html>