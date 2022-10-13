var PreferencesAction = {
	getCertificate:function(){

		if(!reselectCertificate || !getUserSignCert || !getUserSignCert || !encryptSessionKey || !getCertPath || !encryptDataString || !removeCRLF){
			alert("전자서명 인증모듈 버전이 맞지 않습니다. 제어판>>프로그램 추가/삭제에서 SignGATE EWS v3.x 을 삭제하고 다시 설치하시기 바랍니다.");
			return false;
		}
		if(!File_Read){
			alert("웹브라우저 상단에서 프로그램 설치를 클릭하신 후 ActiveX를 설치하여 주시기 바랍니다.");
			return false;
		}
		
		var strUserSSN = $("#corp_id").val();
		
		var	rslt = reselectCertificate(strUserSSN);
		
	
		
		var signCert= getUserSignCert( strUserSSN );
		$("#certificate").val(signCert);
		
		
		var strUserRandomNumber = GetUserKeyRNumber();
		var strCheckCertOwnerNumber = checkCertOwner( signCert, strUserSSN, strUserRandomNumber );
		
		if(strCheckCertOwnerNumber == false) {
			alert("인증서의 사업자 번호와 일치하지 않습니다.");
			return false;
		}
		
		var rdate = new Date();
		var ry = rdate.getFullYear();
		var rmon = rdate.getMonth()+1;
		if(rmon<10)rmon = "0"+rmon;
		var rday = rdate.getDate();
		if(rday<10)rday = "0"+rday;
		var rh = rdate.getHours();
		if(rh<10)rh = "0"+rh;
		var rm = rdate.getMinutes();
		if(rm<10)rm = "0"+rm;
		var rs = rdate.getSeconds();
		if(rs<10)rs = "0"+rs;
		
		var ndate = ry+""+rmon+""+rday+""+rh+""+rm+""+rs;
		
		var expireDate= GetCertInfoFromCert( signCert, 6 );
		expireDate =  expireDate.split("/").join("");
		expireDate =  expireDate.split("-").join("");
		expireDate =  expireDate.split(" ").join("");
		expireDate =  expireDate.split(":").join("");
		
		if(expireDate < ndate){
			alert("인증서 종료일시 ["+GetCertInfoFromCert( signCert, 6 )+"] 를 넘겼습니다. 인증서를 갱신해 주십시요.");
			return false;
			
		}
		
		// 사용자의 전자서명용 인증서의 정책 OID
		var strPolicyOid = getCertPolicy(signCert);
		// 허용할 인증서 정책 OID 리스트 (범용 인증서 OID 리스트)
		var policyOID = "";
		policyOID += "|1.2.410.200004.5.2.1.2|";	//한국정보인증(개인 범용)
		policyOID += "|1.2.410.200004.5.2.1.1|";	//한국정보인증(법인 범용)
		policyOID += "|1.2.410.200004.5.2.1.3|";	//한국정보인증(특별등급)
		policyOID += "|1.2.410.200004.5.2.1.5|";	//데이콤 공인 인증서
		policyOID += "|1.2.410.200004.5.1.1.5|";	//증권전산,코스콤(개인 범용)
		policyOID += "|1.2.410.200004.5.1.1.7|";	//증권전산,코스콤(법인 범용)
		policyOID += "|1.2.410.200005.1.1.1|";		//금융결제원(개인 범용)
		policyOID += "|1.2.410.200005.1.1.5|";		//금융결제원(법인 범용)
//		policyOID += "|1.2.410.200005.1.1.6.8|";	//금융결제원(전자세금용-개인,법인)
		policyOID += "|1.2.410.200004.5.3.1.9|";	//한국전산원(개인 범용)
		policyOID += "|1.2.410.200004.5.3.1.2|";	//한국전산원(법인 범용)
		policyOID += "|1.2.410.200004.5.3.1.1|";	//한국전산원(기관)
		policyOID += "|1.2.410.200004.5.4.1.1|";	//전자인증(개인 범용)
		policyOID += "|1.2.410.200004.5.4.1.2|";	//전자인증(법인 범용)
		policyOID += "|1.2.410.200012.1.1.1|";		//한국무역정보통신(개인 범용)
		policyOID += "|1.2.410.200012.1.1.3|";		//한국무역정보통신(법인 범용)
		policyOID += "|1.2.410.200004.2.1|";			//데이콤 공인 인증서
		policyOID += "|1.2.410.200004.5.2.1.10.1|";	//데이콤 테스트 인증서
		policyOID += "|1.2.410.200004.5.2.1.6.279|";	//2010-05-28 추가 인증서

		if(policyOID.indexOf("|"+strPolicyOid+ "|") < 0){		
			alert("사용 가능한 인증서가 아닙니다." + "[" + strPolicyOid + "]\nU+전자문서 전용 공동인증서,비즈다큐전용인증서,범용공동인증서만 사용가능합니다.");
			return false;
		}	
		
		expireDate = GetCertInfoFromCert( signCert, 6 ).substring(0,10);
		$("#expire_dt").val(expireDate);
		var user_dn =  getCertSubjectDN(signCert);
		$("#user_dn").val(user_dn);
		
		var cert_sn = getCertSerialNumber(signCert);
		$("#cert_sn").val(cert_sn);
		
		//var oid = getCertPolicy(signCert);
		return true;
		
	}
}


$(document).ready(function(){
	$("#addCert").click(function(){	
		if(PreferencesAction.getCertificate()==true){
			 $.post(
					 	"bizdocu.Preferences.do?bizdo=jsonUpdateCertificate",
			  			$("#frm1").serialize(),
			  	       	function(json){
					 		if(json.Response == "success"){ 
				  				alert("인증서가 등록되었습니다.");
				  				document.location="bizdocu.Preferences.do";
					 		}				  			
			  	       	},"json"
		  	  	);
		}
	});
		
	$("#modCert").click(function(){
		if(PreferencesAction.getCertificate()==true){
			 $.post(
					 	"bizdocu.Preferences.do?bizdo=jsonUpdateCertificate",
			  			$("#frm1").serialize(),
			  	       	function(json){
					 		if(json.Response == "success"){ 
				  				alert("인증서가 갱신되었습니다.");
				  				document.location="bizdocu.Preferences.do";
					 		}				  			
			  	       	},"json"
		  	  	);
		}
	});
	
	$("#modOption").click(function(){
		if(confirm("설정을 변경하면 다시 로그인 하셔야 합니다. \n 환경설정값을 수정하시겠습니까?") == true) {
			
			if($("input:radio[name=consult_yn]:checked").val() == "Y"){
				$("#consult_yn2").val("Y");
			}else{
				$("#consult_yn2").val("N");
			}
			/*
			if($("input:radio[name=sms_yn]:checked").val() == "Y"){
				$("#sms_yn2").val("Y");
			}else{
				$("#sms_yn2").val("N");
			}
			
			if($("input:radio[name=email_yn]:checked").val() == "Y"){
				$("#email_yn2").val("Y");
			}else{
				$("#email_yn2").val("N");
			}
			*/
			
			 $.post(
				 	"bizdocu.Preferences.do?bizdo=jsonUpdateAccount",
		  			$("#frm2").serialize(),
		  	       	function(json){
				 		if(json.Response == "success"){ 
			  				alert("환경설정값이 수정 되었습니다. \n다시 로그인 하시기 바랍니다.");
			  				document.location="main.login.Logout.do";
				 		} else if(json.Response == "noauthority") {				 			
				 			alert("ADMIN 관리자만 사용할 수 있습니다.");
				 			document.location="main.Main.do";
					   	} else {
					   		alert("오류가 발생 하였습니다.");
				 			document.location="main.Main.do";
					   	}	  			
		  	       	},"json"
			 	);
		} else {
			return;
		}
	});
	
});