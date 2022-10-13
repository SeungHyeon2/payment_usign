var BankAccountAction = {
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
			
			if(rslt == false) {
				alert("인증서의 사업자 번호와 일치하지 않습니다.");
				return false;
			}
			var signCert= getUserSignCert( strUserSSN );
			$("#certificate").val(signCert);
			
			
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
			
			expireDate = GetCertInfoFromCert( signCert, 6 ).substring(0,10);
			$("#expire_dt").val(expireDate);
			var user_dn =  getCertSubjectDN(signCert);
			$("#user_dn").val(user_dn);
			
			var cert_sn = getCertSerialNumber(signCert);
			$("#cert_sn").val(cert_sn);
			
			var oid = getCertPolicy(signCert);
			return true;
			
		},
		viewAccount:function(mngno){
			$("#account_seq").val(mngno);
			 $.post(
					 	"bizdocu.BankAccount.do?bizdo=jsonViewBankAccount",
			  			$("#frm1").serialize(),
			  	       	function(json){
					 		if(json.Response == "success"){
					 			if(json.result=="SUCC"){
						 			$("#account_seq_frm4").val(json.contAccountInfoVo.account_seq);
						 			$("#bank_nm_frm4").html(json.contAccountInfoVo.bank_nm);
						 			$("#account_no_frm4").html(json.contAccountInfoVo.account_no);
						 			$("#account_owner_frm4").html(json.contAccountInfoVo.account_owner);
						 			$("#account_open_number_frm4").html(json.contAccountInfoVo.account_open_number);
						 			$("#reg_dt_frm4").html(BankAccountAction.dateForm(json.contAccountInfoVo.reg_dt));
						 			$("#staff_no_frm4").html(json.contAccountInfoVo.staff_nm);
						 			$("#del_dt_frm4").html(BankAccountAction.dateForm(json.contAccountInfoVo.del_dt));
						 			$("#del_staff_no_frm4").html(json.contAccountInfoVo.del_staff_nm);
						 		
						 			var staff_no = $("#staff_no").val();
						 			var prvg_cd =  $("#prvg_cd").val();
						 			
						 			if((json.contAccountInfoVo.staff_no == staff_no || prvg_cd == '01') && json.contAccountInfoVo.del_yn == 'N'){
						 				$("#delbtn").show();
						 			}else {
						 				$("#delbtn").hide();
						 			}
						 			
						 			$("#viewAccountPop").dialog({
										resizable: true,
										modal: true,
										width:640, height:280,
										close: function(){ $( this ).dialog('destroy');}
									});
						 			//$("#viewAccountPop").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
						 			//상단
						 			
						 			 
					 			}else if(json.result == "decrypt_err"){
						 			alert("암호화 처리 ERR!");
						 		}else if(json.result == "bank_list_err"){
						 			alert("큐브 통신  ERR!");
						 		}
					 		}				  			
			  	       	},"json"
		  	  	);
		},
		dateForm:function(str){
			var resultNum = "";
			if(str != '') {
				str =  str.split("/").join("");
				str =  str.split("-").join("");
				str =  str.split(" ").join("");
				str =  str.split(":").join("");
				if(str.length >=8) resultNum = str.substring(0,4)+'-'+str.substring(4,6)+'-'+str.substring(6,8);
			}
			return resultNum;
		}
}


$(document).ready(function(){
	$(".seperat").numeric();
	
	$("#removeAccount").click(function(){
		if(confirm("해당 계좌를 삭제하시겠습니까?")){
		 $.post(
				 	"bizdocu.BankAccount.do?bizdo=jsonRemoveBankAccount",
		  			$("#frm4").serialize(),
		  	       	function(json){
				 		if(json.Response == "success"){ 
			  				alert("삭제 하였습니다.");
			  				document.location="bizdocu.BankAccount.do";
				 		}				  			
		  	       	},"json"
			);
		}
		
		
	});
		
	$("#addAccountView").click(function(){
		$("#addAccountPop").dialog({
			resizable: true,
			modal: true,
			width:640, height:300,
			close: function(){ $( this ).dialog('destroy');}
		});
		//$("#addCategoryPop").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
	});
	
	$("#addAccount").click(function(){
		if($("#frm2_account_no").val()==''){
			alert("계좌번호를 넣어주세요.");
			return;
		}
		if($("#frm2_account_owner").val()==''){
			alert("계좌소유주명을 넣어주세요.");
			return;
		}
		
		//인증서 가 등록된 인증서인지 확인
		if(BankAccountAction.getCertificate()==true){
		 	$.post(
				 	"bizdocu.BankAccount.do?bizdo=jsonCheckCert",
		  			$("#frm3").serialize(),
		  	       	function(json){
				 		if(json.Response == "success") { 
			  				if(json.result=="empty"){
			  					alert("등록된 인증서가 업습니다. \n 인증서를 등록해주신후 사용하시기 바랍니다.");
			  					return;
			  				}
			  				
			  				if(json.result=="fail"){
			  					alert("등록된 인증와 일치하지 않습니다. \n 인증서를 확인해보시기 바랍니다.");
			  					return;
			  				}
				 		}				  			
		  	       	},"json"
	  	  	);
		 	
		 	 $.post(
					 	"bizdocu.BankAccount.do?bizdo=jsonAddBankAccount",
			  			$("#frm2").serialize(),
			  	       	function(json){
					 		if(json.Response == "success") { 
					 			if(json.result=="PASS"){
					 				alert("추가 되었습니다.");
					 				document.location="bizdocu.BankAccount.do";
					 			}else if(json.result=="encrypt_err"){
					 				alert("암호촤 처리 에러.");
					 			}else if(json.result=="encrypt_err"){
					 				alert("암호촤 처리 에러.");
					 			}else {
					 				alert("계좌 인증  처리 에러:"+json.result);
					 			}
					 		} else if(json.Response == "noauthority") {				 			
					 			alert("ADMIN 관리자만 사용할 수 있습니다.");
					 			document.location="main.Main.do";
						   	} else {
						   		alert("오류가 발생 하였습니다.");
					 			document.location="main.Main.do";
						   	}				  			
			  	       	},"json"
		  	  	);
		}
	});	
	
});