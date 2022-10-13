$(document).ready(function() {	
	var process = $('#processing').val();
	if(process !='' && process !='convertend'){	
		$("#convertRslt").dialog({
			resizable: true,
			modal: true,
			width:350, height:200
		});
		$("#convertRslt").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
		vTimer = setInterval(convertRslt, 1000);
	}
	
	$("#search").click(function() {					//완료보관함	재검색		
//		$("#bizdo").val("businessdo");	
		//사업자번호 구분자 제외
		var vendernoStr = $("#textfield").val();
		vendernoStr = vendernoStr.replace(/-/gi, "");
		vendernoStr = strTrim(vendernoStr);
		
		$("#textfield").val(vendernoStr);		
		$("#frm1").submit();
	});
	
	$("#exceldown").click(function(){				//액셀다운받기
		document.frm1.action = "bizdocu.ContractComplete.do?bizdo=contSearchInfoListdown";
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
	
	$("#pdflistdown").click(function(){
		var check = $(".svc_mng_no:checked").serialize();
		 if(check==''){
			alert("PDF로 내려받을 계약서를 선택해 주시기 바랍니다.");
		 }else{
			// 한 화면에 보여줄 페이지 수
			document.frm1.action = "bizdocu.ContractComplete.do";
			$("#pdfdown").val('Y');
			$("#pageVsize").val($("#blockCount").val());
			$("#frm1").submit();
		 }
		
		
	});
	
	// 이메일 발송
	$("#popupEmailSend").click(function(event){
		if($(".svc_mng_no:checked").length == 0){
			alert("이메일 발송 대상을 선택해 주시기 바랍니다.");
			return;
		}
		if($(".svc_mng_no:checked").length > 1){
			alert("이메일 발송은 1건씩만 선택하여 발송 가능합니다.");
			return;
		}
		// 계약자 정보 조회
		var seq = $(".svc_mng_no:checked").val();
		var param = {
				"contSearchInfoVo.seq" : seq
				};
		$.post(
				"bizdocu.ContractComplete.do?bizdo=jsonContMembInfoList",
				param,
		       	function(json){
					if (json.Response == "success") {
						if (json.result == "success") {
							var htmlstr = "";
							if (json.ContMembSize > 0) {
								htmlstr += "<select style=\"width:98%;\" onchange=\"ContractCompleteAction.setSendValue('E', this.value)\">";
								for (var j=0; j < json.ContMembSize; j++) {
				  					htmlstr += "<option value='" + json.ContMembList[j].email + "," + json.ContMembList[j].mobile + "'>" + json.ContMembList[j].company;
				  					if (json.ContMembList[j].users != "") htmlstr += " - " + json.ContMembList[j].users;
				  					htmlstr += "</option>";
				  					
				  					if (j == 0) {
				  						$("#emailAddress").val(json.ContMembList[j].email);
				  						$("#ctn").val(json.ContMembList[j].mobile);
				  					}
								}
								htmlstr += "</select>";
								$("#frmEmail #contMembInfoList").html(htmlstr);
							}
						}
				   	}
				   	else {
				   		//alert("서비스 오류입니다.["+json.Response+"]");
				   	}
		       	},"json");
		$("#EmailSendForm").dialog({
			resizable: true,
			modal: true,
			width: 380, 
			height: 330,
			close: function(){ $( this ).dialog('destroy');}
		});
	});
	
	// FAX 발송
	$("#faxSend").click(function(event){
		if($(".svc_mng_no:checked").length == 0){
			alert("팩스 발송 대상을 선택해 주시기 바랍니다.");
			return;
		}
		if($(".svc_mng_no:checked").length > 1){
			alert("팩스 발송은 1건씩만 선택하여 발송 가능합니다.");
			return;
		}
		// 계약자 정보 조회
		var seq = $(".svc_mng_no:checked").val();
		var param = {
				"contSearchInfoVo.seq" : seq
				};
		$.post(
				"bizdocu.ContractComplete.do?bizdo=jsonContMembInfoList",
				param,
		       	function(json){
					if (json.Response == "success") {
						if (json.result == "success") {
							var htmlstr = "";
							if (json.ContMembSize > 0) {
								htmlstr += "<select style=\"width:98%;\" onchange=\"ContractCompleteAction.setSendValue('F', this.value)\">";
								for (var j=0; j < json.ContMembSize; j++) {
				  					htmlstr += "<option value='" + json.ContMembList[j].fax + "'>" + json.ContMembList[j].company;
				  					if (json.ContMembList[j].users != "") htmlstr += " - " + json.ContMembList[j].users;
				  					htmlstr += "</option>";
				  					
				  					if (j == 0) {
				  						$("#fax").val(json.ContMembList[j].fax);
				  					}
								}
								htmlstr += "</select>";
								
								$("#frmFax #contMembInfoList").html(htmlstr);
							}
						}
				   	}
				   	else {
				   		//alert("서비스 오류입니다.["+json.Response+"]");
				   	}
		       	},"json");
		$("#FaxSendForm").dialog({
			resizable: true,
			modal: true,
			width: 380, 
			height: 200,
			close: function(){ $( this ).dialog('destroy');}
		});
	});
	
	$("#checkTs").click(function(){				
		$("#tsViewer").dialog({
			resizable: true,
			modal: true,
			width:680, height:500,
			close: function(){ $( this ).dialog('destroy');}
		});
	});

	
	
	$('#frmts').ajaxForm({
		dataType:'json',
   		data : {},
        success: function(data){
        	if(data.msg=='SUCC'){
        		//viewer 호출
        		//data.uniqueId
        		$.unblockUI();
        		//개발
        		var target = "";
        		if($("#SSL_protacal").val()=='https')target = "164.124.119.198:9012";
        		else target = "164.124.119.135:9012";
        		
        		var url = "http://"+target+"/contract.html?"+data.uniqueId;
          		var viewer = window.open(url, "viewer");
          		$("#tsViewer").dialog('destroy');
        	}else{
        		$.unblockUI();
        		alert(data.msg);
        	}
        	
        },
        error: function(responseText, statusText){
        	$.unblockUI();
        	alert("에러가 발생하였습니다. 다시 확인 해 주세요.");
        }                               
    });
});	

var vTimer = 0;

function convertRslt(){
	$.post(
			"bizdocu.ContractViewSg.do?bizdo=getConvertRslt",
			$("#frm1").serialize(),
	       	function(json){
				if(json.Response == "success") {
			   		$('#processing').val(json.convertRslt);
			   		if(json.convertRslt == 'convertend'){
			   			clearInterval(vTimer);
			   			vTimer = 0;
			   			$("#convertRslt").dialog("close");
			   			var now = new Date();
			   			var nowAll = now.getFullYear() + '' + (now.getMonth() + 1) + '' + now.getDate();
			   			//document.frmf.svc_mng_no.value = $("#svc_mng_no").val();
			   			document.frmf.att_file_nm.value = 'uplus_'+nowAll+'.zip';
			   			document.frmf.action = 'down.do?bizdo=contpdf';
			   			document.frmf.target='';
			   			document.frmf.submit();		   		
			   		}
			   	}
			   	else {
			   		clearInterval(vTimer); 
			   		vTimer = 0;
			   		$("#convertRslt").dialog("close");
			   		alert("서비스 오류입니다.["+json.Response+"]");
			   	}
	       	},"json");
}

function uploadTsPDF(){
	$('.ui-dialog').css('z-index',999); //dialog 위에 block 을 덮어쓰기 위해 z-index 수정.
	$('.ui-widget-overlay').css('z-index',102);
	$.blockUI({message: 'PDF 파일 업로드 중입니다... '});
	$('#frmts').attr("action","main.Main.do?bizdo=jsonUploadTsPDF");
	$('#frmts').submit();
}

var ContractCompleteAction = {
		viewCont : function(seq, gubun) {			//계약서 상세보기		
			$("#seq2").val(seq);
			$("#gubun2").val(gubun);		
			$("#frm2").submit();
		},		
		preview : function(type_seq) {				//미리보기
			alert("미리보기="+type_seq+" \n준비중...");
			/*
			$("#type_seq2").val(type_seq);
			$("#frm3").submit();
			*/
		},
		setSendValue : function(gubun, value) { 	// 이메일/팩스 발송 기본 정보 설정
			if (gubun == "E") {
				var memb_info = value.split(",");

				$("#emailAddress").val(memb_info[0]);
				$("#ctn").val(memb_info[1]);
			} else {
				$("#fax").val(value);
			}
		},
		// [20160719, 전자문서 모바일 구축 프로젝트] 이메일, fax 발송 추가건
		emailSend : function() {
			var seq = $(".svc_mng_no:checked").val();
			
			// validation check
			if($("#emailAddress").val() == undefined || $("#emailAddress").val() == ''){
				alert("수신자 이메일주소를 입력 해 주세요.");
				return;
			}
			if($("#secret").val() == undefined || $("#secret").val() == ''){
				alert("인증 비밀번호를 입력 해 주세요.");
				return;
			}
			if($("#ctn").val() == undefined || $("#ctn").val() == ''){
				alert("휴대전화번호를 입력 해 주세요.");
				return;
			}
			var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
			if(regex.test($("#emailAddress").val()) === false) {
				alert("이메일 형식에 맞지 않습니다.");
			    return false;  
			}
			regex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
			if(regex.test($("#secret").val()) === false) {
				alert("비밀번호는 영문, 숫자 조합 4 ~ 6자 입니다.");
			    return false;  
			}
			regex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
			if(regex.test($("#ctn").val()) === false) {
				alert("휴대전화번호 형식에 맞지 않습니다.");
			    return false;  
			}
			var param = {
					"contSearchInfoVo.seq" : seq
					, "emailAddress" : $("#emailAddress").val()
					, "secret" : $("#secret").val()
					, "ctn" : $("#ctn").val()
			};
			
			$.post("bizdocu.ContractComplete.do?bizdo=emailSend",
					param,
					function(json){
						if (json.Response == "success") {
							alert("이메일 발송 및 인증번호 SMS 발송이 성공하였습니다.");
							$("#EmailSendForm").dialog("destroy");
						} else {
							alert("서비스 오류입니다.["+json.Response+"]");
						}
						$("#secret").val("");
					},"json");
			
		},
		faxSend : function() {
			var seq = $(".svc_mng_no:checked").val();
			
			// validation check
			if($("#fax").val() == undefined || $("#fax").val() == ''){
				alert("수신자 fax번호를 입력 해 주세요.");
				return;
			}
			var param = {
					"contSearchInfoVo.seq" : seq
					, "faxNo" : $("#fax").val()
			};
			
			$.post("bizdocu.ContractComplete.do?bizdo=faxSend",
					param,
					function(json){
						if (json.Response == "success") {
							alert("FAX 발송이 성공하였습니다.");
							$("#FaxSendForm").dialog("destroy");
						} else {
							alert("서비스 오류입니다.["+json.Response+"]");
						}
					},"json");
		}
};
