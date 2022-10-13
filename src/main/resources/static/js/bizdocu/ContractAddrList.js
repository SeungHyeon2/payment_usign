$(document).ready(function() {	
	
	// tab menu click
	$("#tab1").click(function(){
		$('#user_type').val("C");
		document.frm1.action = "bizdocu.ContractAddrList.do";
		document.frm1.submit();
	});
	$("#tab2").click(function(){
		$('#user_type').val("P");
		document.frm1.action = "bizdocu.ContractAddrList.do?bizdo=personInfoList";
		document.frm1.submit();
	});
	
	$('#allSel').toggle(function(){
		$("Input[name='rn_no']").each(function(){
			$(this).prop("checked", true);
		});
	},function(){
		$("Input[name='rn_no']").each(function(){
			$(this).prop("checked", false);
		});
	});
	
	$("#search").click(function() {
		ContractAddrListAction.search();
	});
	$("#remove").click(function() {		
		ContractAddrListAction.remove();
	});
	$("#addSupplier").click(function() {
		ContractAddrListAction.addSupplier();
	});
	$("#down").click(function() {
		ContractAddrListAction.down();
	});
	
	$("#search2").click(function() {			//개인 주소록 검색
		ContractAddrListAction.search2();
	});
	$("#remove2").click(function() {			//개인 주소록 삭제
		ContractAddrListAction.remove2();
	});
	$("#addSupplier2").click(function() {	//개인 주소록 추가
		ContractAddrListAction.addSupplier2();
	});
	$("#down2").click(function() {			//개인 주소록 엑셀 다운로드
		ContractAddrListAction.down2();
	});
	
	// 개인 주소록 입력 - 추가 저장
	$("#directMemberAction").click(function(event) {
		ContractAddrListAction.addDirectMember();
	});
	// 개인 주소록 입력 - 취소
	$("#cancelAction").click(function(event) {
		ContractAddrListAction.initDirectMember();
		$("#DirectMemberViewer").dialog("destroy");
	});
	// 개인 주소록 - 수정
	$("#updateMemberAction").click(function(event) {
		ContractAddrListAction.addDirectMember();
	});
	
	
});	

var ContractAddrListAction = {		
	search : function() {			
		$("#searchBy").attr("name", $("#key").val());
		$("#keyVal").val($("#searchBy").val());
		$("#frm1").submit();
	},
	remove : function() {
		if($("input:checkbox[name='rn_no']").is(":checked")) {
			$("#frm1").attr("action", "bizdocu.ContractAddrList.do?bizdo=removeSuppliers");
			$("#frm1").submit();
		} else {
			alert("삭제할 업체를 선택해주세요.");
		}
	},
	detail : function(usr_code) {
		$("#usr_code2").val(usr_code);
		$("#frm2").submit();
	},
	addSupplier : function() {
		document.location.href = "bizdocu.ContractAddrForm.do";
	},
	down : function() {
		$("#frm3").submit();
	},
	search2 : function() {				//개인 주소록 검색	
		$("#searchBy2").attr("name", $("#key").val());
		$("#keyVal").val($("#searchBy2").val());		
		$('#user_type').val("P");
		document.frm1.action = "bizdocu.ContractAddrList.do?bizdo=personInfoList";
		document.frm1.submit();
	},
	remove2 : function() {				//개인 주소록 삭제
		if($("input:checkbox[name='rn_no2']").is(":checked")) {
			if(confirm("선택된 주소록을 삭제하시겠습니까?") == true) {
				$("#frm1").attr("action", "bizdocu.ContractAddrList.do?bizdo=removePerson");
				$("#frm1").submit();
			}
		} else {
			alert("삭제할 주소록을 선택해주세요.");
		}
	},
	detail2 : function(usr_code) {	//개인 주소록 상세보기
		$("#usr_code").val(usr_code);
		$.post(
				"bizdocu.ContractAddrList.do?bizdo=jsonViewDirectMember",
				{usr_code:usr_code},
			    function(json){
					if(json.session == "fail") {
						alert('세션이 없습니다.');
					}else if(json.Response == "success") {
						
						$("#person_nm").val(json.conPersonVo.person_nm);
						$("#birth").val(json.conPersonVo.birth);
						$("#addr").val(json.conPersonVo.addr);						
						$("#phone").val(json.conPersonVo.phone);
						$("#fax").val(json.conPersonVo.fax);
						$("#mobile").val(json.conPersonVo.mobile);
						$("#email").val(json.conPersonVo.email);
												
						if(json.conPersonVo.gender=="M"){
							$("#gender1").attr("checked", true);
							$("#gender2").attr("checked", false);							
						}else{
							$("#gender2").attr("checked", true);
							$("#gender1").attr("checked", false);							
						}
						
				   	}else {
				   		alert("서비스 오류입니다.["+json.Response+"]");
				   	}
		       	}, "json"
			);
		//개인 주소록 상세보기 레이어 팝업창
		ContractAddrListAction.divForm();		
	},
	down2 : function() {					//개인 주소록 엑셀 다운로드
		$('#user_type').val("P");
		document.frm1.action = "bizdocu.ContractAddrList.do?bizdo=personInfoListDown";
		document.frm1.submit();
	},	
	addSupplier2 : function() {			//개인 주소록 추가 레이어 팝업창
		//$("#DirectMemberViewer").dialog("destroy");		
		$('#btInsertOk').attr("style", "display:block;width:100%;text-align:center;");
		$('#btUpdateOk').attr("style", "display:none");
		$("#gender1").attr("checked", true);
		
		$("#DirectMemberViewer").dialog({
			resizable: true,
			modal: true,
			width: 580, 
			height: 400,
			close: function(){ $(this).dialog('destroy');ContractAddrListAction.initDirectMember();}
		});
	},
	divForm : function() {			//개인 주소록 상세보기 레이어 팝업창
		//$("#DirectMemberViewer").dialog("destroy");
		$('#btInsertOk').attr("style", "display:none");
		$('#btUpdateOk').attr("style", "display:block;width:100%;text-align:center;");
		$("#gender1").attr("checked", true);
		
		$("#DirectMemberViewer").dialog({
			resizable: true,
			modal: true,
			width: 580, 
			height: 400,			
			close: function(){ $(this).dialog('destroy');ContractAddrListAction.initDirectMember();}
		});
	},	
	initDirectMember:function() {			//1 개인 주소록 입력폼 초기화
		$("#person_nm").val("");
		$("#birth").val("");
		$("#addr").val("");
		$("#phone").val("");
		$("#fax").val("");
		$("#mobile").val("");
		$("#email").val("");
	},
	checkDirectMember:function() {	//2 개인 주소록 입력값 검증
		var result = true;
		
		if ($("#person_nm").val() == "") {
			alert("이름을 입력해주세요.");
			$("#person_nm").focus();
			result = false;
		} else if ($("#birth").val() == "") {
			alert("생년월일을 입력해주세요.");
			$("#birth").focus();
			result = false;
		} else if ($("#addr").val() == "") {
			alert("주소를 입력해주세요.");
			$("#addr").focus();
			result = false;
		} else if ($("#mobile").val() == "") {
			alert("휴대폰번호를 입력해주세요.");
			$("#mobile").focus();
			result = false;
		} else if ($("#email").val() == "") {
			alert("이메일을 입력해주세요.");
			$("#email").focus();
			result = false;
		}
		
		return result;
	},	
	addDirectMember:function() {		//3 개인 주소록 입력 저장 or 수정
				
		if ( !ContractAddrListAction.checkDirectMember() ) {
			return;
		}
		// 주소록 저장 or 수정
   		$.post(
			"bizdocu.ContractAddrList.do?bizdo=jsonAddDirectMember",
			$("#frm7").serialize(),
	       	function(json){
				if (json.Response == "success") {
					var usr_code = json.usrCode;
					
					var usrMsg = "";
					if (json.usrAction == "INSERT") usrMsg="개인 주소록 추가가 완료되었습니다.";
					if (json.usrAction == "UPDATE") usrMsg="개인 주소록 수정이 완료되었습니다.";
					alert(usrMsg);
					//ContractAddrListAction.initDirectMember();
					//$("#DirectMemberViewer").dialog("destroy");
					
					$('#user_type').val("P");
					document.frm1.action = "bizdocu.ContractAddrList.do?bizdo=personInfoList";
					document.frm1.submit();
					
				} else {
					alert("서비스 오류입니다.["+json.Response+"]");
				}
			},"json");
   		
	}

	
};