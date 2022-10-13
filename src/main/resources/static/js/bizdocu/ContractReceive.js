var vTimer = 0;
var invoice_list = new Array();	//전자계약서 원본 Hash값 
var cnt = 0; 							//전자서명 선택된 문서 list의 수(전체) cnt
var index = 0;	

//SecuKit One Assets
function setSignature(message){
	
	
    secukit.api.genPKCS7SignedData(message, function( res, err){
    	if(err !== undefined){
    		alert("err Code : "+err.code + "\n" + "err Message : " + err.message);
    		return;
    	}
    	secukit.dialog.isOpen() && secukit.dialog.close();    	
    	document.frm2.PKCS7.value = res ; //res.replace(/\n|\r/g, ""); //줄바꿈 삭제.
    	console.log("RKCS7["+index+"]:"+document.frm2.PKCS7.value);
    	$.blockUI({message: '전자서명 중입니다... ' + Math.round((index/cnt)*100)+'%'});
       	secukit.api.getVIDRandom(function(res, err){
       		if(err !== undefined){
        		alert("err Code : "+err.code + "\n" + "err Message : " + err.message);
        		return;
        	}
       		document.frm2.VID_RANDOM.value = res;
       		console.log("VID_RANDOM["+index+"]:"+document.frm2.VID_RANDOM.value);
       		console.log("전자서명 계약서번호 seq="+ $("#seq2").val());
       		$.post(
    				"bizdocu.ContractReceive.do?bizdo=jsonContSignature",
    				$("#frm2").serialize(),
    		       	function(json){
    			 		if(json.Response == "success"){
    			 			//alert("다중전자서명= " +$("#seq2").val()+ "번 계약서 전자서명을 완료 하였습니다.");
    			       		if(index < cnt-1) {
    							index++;							
    							$("#seq2").val(invoice_list[index].value);
    							//alert("선택된 계약서번호 seq="+ $("#seq2").val());
    							
    							$.post(
    									"bizdocu.ContractReceive.do?bizdo=jsonViewContent",
    									$("#frm2").serialize(),
    							       	function(json){
    								 		if(json.Response == "success"){
    								 			var contents = json.contents.replace(/&amp\;/g, '&');
    								 			$("#org_str").val(contents);
    								 			
    								 			$("#org_str_hash").val(json.contents_hash);	
    								 			var signData = $("#org_str_hash").val();
    								 			
    								 			setSignature(signData);
    								 		}else {
    									   		alert("계약서 전자서명 중 오류가 발생 하였습니다.["+json.Response+"]");
    									   		$.unblockUI();
    									   	}
    							       	},"json"
    							);
    			       		} else {
    			       			$.unblockUI();		
    			       			alert("선택된 "+cnt+"개의 전자서명이 정상 처리 되었습니다.");
    			       			document.location="bizdocu.ContractReceive.do";
    						}
    			       		
    			 		}else if(json.Response == "URFail"){
    				   		alert("정회원 전환 이후 사용하시기 바랍니다.");
    				   		document.location.href = "main.login.Intro.do.do";
    			 		}else if(json.Response == "subjectDNFail"){
    				   		alert("등록된 인증서로 전저서명을 사용하시기 바랍니다.");
    				   		document.location.href = "bizdocu.Preferences.do";				   		
    			 		}else {
    				   		alert("계약서 전자서명 중 오류가 발생 하였습니다.["+json.Response+"]");
    				   		$.unblockUI();
    				   	}
    		       	},"json"
    		);
       		
        });
    
    });
}
//한국정보인증 교체
//WIZVERA Delfino 인증모듈 CallBack 함수
//function Sign_complete(result){
//	if(result.status==0) return; // cancel
//	
//	if(result.status!=1) { alert(result.status + ":" + result.message); return; }
//	$.blockUI({message: '전자서명 중입니다... ' + Math.round((index/cnt)*100)+'%'});
//	/*
//	$("#signloading").dialog({
//		resizable: true,
//		modal: true,
//		width:500, height:100
//	});	
//	*/
//	//alert("ssid="+result.ssid);
//	//alert("signData="+result.signData);
//	document.frm2.PKCS7.value = result.signData;
//	console.log("RKCS7_del["+index+"]:"+document.frm2.PKCS7.value);
//	document.frm2.VID_RANDOM.value = result.vidRandom;
//	console.log("VID_RANDOM_del["+index+"]:"+document.frm2.VID_RANDOM.value);
//		console.log("전자서명 계약서번호 seq="+ $("#seq2").val());
//		$.post(
//				"bizdocu.ContractReceive.do?bizdo=jsonContSignature",
//				$("#frm2").serialize(),
//		       	function(json){
//			 		if(json.Response == "success"){
//			 			//alert("다중전자서명= " +$("#seq2").val()+ "번 계약서 전자서명을 완료 하였습니다.");
//			       		if(index < cnt-1) {
//							index++;							
//							$("#seq2").val(invoice_list[index].value);
//							//alert("선택된 계약서번호 seq="+ $("#seq2").val());
//							
//							$.post(
//									"bizdocu.ContractReceive.do?bizdo=jsonViewContent",
//									$("#frm2").serialize(),
//							       	function(json){
//								 		if(json.Response == "success"){
//								 			var contents = json.contents.replace(/&amp\;/g, '&');
//								 			$("#org_str").val(contents);
//								 			
//								 			$("#org_str_hash").val(json.contents_hash);	
//								 			var signData = $("#org_str_hash").val();
//											//alert("계약서원본 Hash=" +signData);
//											Delfino.sign(signData, {silentSign:true, ssid:result.ssid, cacheCertFilter:false, cacheCert:false, policyOidCertFilter:policyOID}, Sign_complete);
//											
//								 		}else {
//									   		alert("계약서 전자서명 중 오류가 발생 하였습니다.["+json.Response+"]");
//									   		$.unblockUI();
//									   	}
//							       	},"json"
//							);
//			       		} else {
//							Delfino.endSign(result.ssid, end_sign);
//						}
//			       		
//			 		}else if(json.Response == "URFail"){
//				   		alert("정회원 전환 이후 사용하시기 바랍니다.");
//				   		document.location.href = "main.login.Intro.do.do";
//			 		}else if(json.Response == "subjectDNFail"){
//				   		alert("등록된 인증서로 전저서명을 사용하시기 바랍니다.");
//				   		document.location.href = "bizdocu.Preferences.do";				   		
//			 		}else {
//				   		alert("계약서 전자서명 중 오류가 발생 하였습니다.["+json.Response+"]");
//				   		$.unblockUI();
//				   	}
//		       	},"json"
//		);
//
//}
//
//function end_sign(result) {
//	//alert(JSONtoString(result));
//	if(result.status==0) return; // cancel
//	if(result.status!=1) { alert(result.status + ":" + result.message); return; }
//
//	//$("#signloading").dialog('destroy');
//	$.unblockUI();		
//	alert("선택된 "+cnt+"개의 전자서명이 정상 처리 되었습니다.");
//	document.location="bizdocu.ContractReceive.do";
//	
//}

function makehtml(per){
	var html = "";
	var ppp;
	if(per=='signstart') per='0';
	if(per=='signend') per='100';
	ppp = per;
	per = Math.ceil(3*per);
	html += "<table border='0' width='380'>";
	html += "<tr><td height='30'>완료될 때까지 잠시만 기다려 주시기 바랍니다.</td></tr>";
	html += "<tr><td height='30'><img src='images/blt/blt_dot_brown.gif' width='"+per+"' height='20' align='absmiddle'>"+ppp+"%</td></tr></table>";
	return html;
}

function uploading_view(){
	$.post(
			"bizdocu.ContractReceive.do?bizdo=getUpload_per",
			$("#frm1").serialize(),
	       	function(json){
				if(json.Response == "success") {
			   		$('#processing').val(json.upload_per);
			   		//$.blockUI({message: '업로드 중입니다...'+json.upload_per+'%'});
			   		$("#progress").html("");
			   		$("#progress").html(makehtml(json.upload_per));
			   		if(json.upload_per == 'signend'){
			   			clearInterval(vTimer);
			   			$.unblockUI();
			   			//alert("전자서명이 완료되었습니다.");
			   			vTimer = 0;
			   			paging(1,'bizdocu.ContractReceive.do');
			   		}
			   	}
			   	else {
			   		clearInterval(vTimer); 
			   		$.unblockUI();
			   		vTimer = 0;
			   		alert("서비스 오류입니다.["+json.Response+"]");
			   	}
	       	},"json");
}

$(document).ready(function() {	

	var process = $('#processing').val();
	if(process !='' && process !='signend'){	
		if(process !='convertend'){
			var b_width =  330;
		    var b_height = 65;
		    var b_left = ( document.body.clientWidth - b_width  ) / 2;
		    var b_top = ( document.body.clientHeight - b_height ) / 2;
			$.blockUI({ message: $('#div_upload'), css: {width:b_width, height:b_height, top:b_top, left:b_left } });
			vTimer = setInterval(uploading_view, 1000);	
		}
	}
	
	$("#search").click(function() {					//수신함검색		
//		$("#bizdo").val("businessdo");
		//사업자번호 구분자 제외
		var vendernoStr = $("#textfield").val();
		vendernoStr = vendernoStr.replace(/-/gi, "");
		vendernoStr = strTrim(vendernoStr);
		
		$("#textfield").val(vendernoStr);		
		$("#frm1").submit();
	});
	
	$("#exceldown").click(function(){				//액셀다운받기
		document.frm1.action = "bizdocu.ContractReceive.do?bizdo=contSearchInfoListdown";
		document.frm1.submit();		
//		$("#bizdo").val("contSearchInfoListdown");
//		$("#frm1").submit();
	});
	
	$("#blockCount").change(function(){
		// 한 화면에 보여줄 페이지 수
		$("#pageVsize").val($("#blockCount").val());
		$("#frm1").submit();
	});
	
	//다중선택
	$('#allSel').toggle(function(){
		$(".svc_mng_no").each(function(){
			$(this).prop("checked", true);
		});
	},function(){
		$(".svc_mng_no").each(function(){
			$(this).prop("checked", false);
		});
	});
	
	//다중선택 후 검토완료
	$("#multiRcvState").click(function(){
		var check = $(".svc_mng_no:checked").serialize();
		 if(check==''){
			 alert("검토완료할 계약서를 선택해 주시기 바랍니다.");
		 }else{
			 ContractReceiveAction.multiStep1('RC');
		 }
		
	});
	
	//다중선택 후 전자서명
	$("#multiSgnState").click(function(){
		var check = $(".svc_mng_no:checked").serialize();
		 if(check==''){
			 alert("전자서명할 계약서를 선택해 주시기 바랍니다.");
		 }else{
			 ContractReceiveAction.multiStep2('SG');
		 }
		
	});
	
	$("#multiSgnState2").click(function(){
		var check = $(".svc_mng_no:checked").serialize();
		 if(check==''){
			 alert("전자서명할 계약서를 선택해 주시기 바랍니다.");
		 }else{
			 ContractReceiveAction.multiStep3('SG');
		 }
		
	});
	
});	

var ContractReceiveAction = {		
	viewCont : function(seq, gubun) {							//계약서 상세보기		
		$("#seq2").val(seq);
		$("#gubun2").val(gubun);
		
		//WIZVERA Delfino 인증모듈 추가 영역
		document.frm2.action = "bizdocu.ContractViewSg.do";
		document.frm2.submit();	
	},
	preview : function(type_seq) {					//미리보기
		alert("미리보기="+type_seq+" \n준비중...");
		/*
		$("#type_seq2").val(type_seq);
		$("#frm3").submit();
		*/
	},
	multiStep1:function(st){
		var chk_stat = "T";
		var msg = "";
		$(".svc_mng_no:checked").each(function(){
			var vid = $(this).attr("id");
			if($("#b_stat"+vid).val()!='검토대기'){
				$(this).prop("checked", false);
				chk_stat = "F";
			}		
		});
		if(st=='RC'){
			msg = "검토완료";			
		}
		
		if(chk_stat=="T"){
			if(confirm("선택된 계약서를 "+msg+" 하시겠습니까?")){
				$.post(
					"bizdocu.ContractReceive.do?bizdo=multiRcvState",
					$("#frm1").serialize(),		
				    function(json){
						if(json.Response == "success") {				   		
							alert("계약서 검토완료를 하였습니다.");
							$("#frm1").submit();
					   	} 
					   	else {
					   		alert("계약서 검토완료 중 오류가 발생 하였습니다.["+json.Response+"]");
					   		$("#frm1").submit();
					   	}
				    },"json");
			}	
		}else{
			alert(msg + " 대상이 아닌  문서는 선택이 해제되었습니다.");
		}
	},
	multiStep2:function(st){
		var chk_stat = "T";
		var msg = "";
		$(".svc_mng_no:checked").each(function(){
			var vid = $(this).attr("id");
			if($("#b_stat"+vid).val()!='결재완료'){
				$(this).prop("checked", false);	
				chk_stat = "F";
			}		
		});
		if(st=='SG'){
			msg = "전자서명";			
		}
		
		if(chk_stat=="T"){
			if(confirm("선택된 계약서를 "+msg+" 하시겠습니까?")){
				
				//인증서등록번호				
				if($("#cert_sn").val() == '' ){
					alert("환경설정> 인증서등록 후 전자서명을 하실 수 있습니다.");
					return;
				}
							
				invoice_list= $(".svc_mng_no:checked");
				cnt= $(".svc_mng_no:checked").size();
				//alert("전자서명 선택된 문서 list의 수(전체)="+ invoice_list.serialize() + " | cnt="+cnt + " | index="+index);
				
				$("#seq2").val(invoice_list[index].value);
				//alert("선택된 계약서번호 seq="+ $("#seq2").val());
				
				$.post(
						"bizdocu.ContractReceive.do?bizdo=jsonViewContent",
						$("#frm2").serialize(),
				       	function(json){
					 		if(json.Response == "success"){
					 			var contents = json.contents.replace(/&amp\;/g, '&');
					 			$("#org_str").val(contents);					 			
					 			$("#org_str_hash").val(json.contents_hash);	
					 			var signData = $("#org_str_hash").val();					 			
					 			$("#seq2").val(json.multi_seq);
								//alert("계약서원본 Hash=" +signData);
					 			//한국정보인증 교체
								//Delfino.sign(signData, {silentSign:true, ssid:null, cacheCertFilter:false, cacheCert:false, policyOidCertFilter:policyOID}, Sign_complete);
					 			secukit.dialog.open();
					 			setSignature(signData);
					 		}else {
						   		alert("계약서 전자서명 중 오류가 발생 하였습니다.["+json.Response+"]");
						   		$("#frm1").submit();
						   	}
				       	},"json"
				);				

			}	
		}else{
			alert(msg + " 대상이 아닌  문서는 선택이 해제되었습니다.");
		}
	}	
};
