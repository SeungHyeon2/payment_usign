var DepartmentAction = {
	addDeptInfoPopOpen:function(){
		$("#addDeptInfoPop").dialog({
			resizable: true,
			modal: true,
			width:480, height:200,
			close: function(){ $( this ).dialog('destroy');}
		});
	},
	addDeptInfo:function(){
		$.post(
				"bizdocu.Department.do?bizdo=jsonAddDepart",
				$("#frm3").serialize(),
		       	function(json){
					if(json.Response == "success") {
						if(json.result=="PASS"){
							alert("추가 되었습니다.");
							document.location="bizdocu.Department.do";
						}else if(json.result=="DPRT_CD"){
							alert("이미 존재한 부서 코드입니다.");
						}
					} else {
			   		alert("서비스 오류입니다.["+json.Response+"]");
					}
				},"json");
	},
	removeDeptInfo:function(){
		if($("#frm1_dept_seq").val()==''){
			alert("삭제할 부서를 선택하시기 바랍니다.");
			return;
		}
		$.post(
				"bizdocu.Department.do?bizdo=jsonRemoveDepart",
				$("#frm1").serialize(),
		       	function(json){
					if(json.Response == "success") {
						if(json.result=="PASS"){
							alert("삭제 되었습니다.");
							document.location="bizdocu.Department.do";
						}else if(json.result=="STAFF"){
							alert("부서에 포함된 사원 정보가 존재합니다.");
						}
					} else {
			   		alert("서비스 오류입니다.["+json.Response+"]");
					}
				},"json");
	},
	modDeptInfoPopOpen:function(){
		if($("#frm1_dept_seq").val()==''){
			alert("수정할 부서를 선택하시기 바랍니다.");
			return;
		}
		$("#modDeptInfoPop").dialog({
			resizable: true,
			modal: true,
			width:480, height:200,
			close: function(){ $( this ).dialog('destroy');}
		});
	},
	modDeptInfo:function(){
		$.post(
				"bizdocu.Department.do?bizdo=jsonModifyDepart",
				$("#frm4").serialize(),
		       	function(json){
					if(json.Response == "success") {
						alert("수정 되었습니다.");
						document.location="bizdocu.Department.do";
					} else {
			   		alert("서비스 오류입니다.["+json.Response+"]");
					}
				},"json");
	},
	listWtStaffbydprt_cd:function(dept_seq,dprt_cd,dprt_nm){
		$("#frm1_dept_seq").val(dept_seq);
		$("#frm1_dprt_cd").val(dprt_cd);
		$("#title_dprt_name").text(dprt_nm);
		$("#frm2_dprt_cd").val(dprt_cd);
		$(".tr_dprt_cd").each(function(){
			$(this).css("background","#ffffff");
		});
		$("#tr_"+dprt_cd).css("background","#fff0d3");
		$("#staff_list").html("");
		
		$("#frm4_dprt_cd_span").text(dprt_cd);
		$("#frm4_dprt_cd").val(dprt_cd);
		$("#frm4_dept_seq").val(dept_seq);
		$("#frm4_dept_name").val(dprt_nm);
		
		
		$("#frm5_dprt_cd").val(dprt_cd);
		
		$.post(
				"bizdocu.Department.do?bizdo=jsonDepartStaffList",
				$("#frm2").serialize(),
		       	function(json){
					if(json.Response == "success") {
						var staf_html = "";
						staf_html += "<table class='listStyleTop3' cellpadding='0' cellspacing='0'>";
						staf_html += "<colgroup><col width='10%' /><col width='25%' /><col width='25%' /><col width='20%' /><col width='*' /></colgroup>";
						if(json.wtStaffSize==0){
							staf_html += "<tr><td colspan='5' align='center' >등록된 담당자가 없습니다.</td></tr>";
						}else{
							for(var i=0;i<json.wtStaffSize;i++){
								staf_html += "<tr>";
								staf_html += "<input type='hidden' name='wtStaffList["+i+"].prvg_cd' id='prvg_cd"+i+"' value='"+json.wtStaffList[i].prvg_cd+"'>";
								staf_html += "<td> <input type='checkbox' name='wtStaffList["+i+"].staff_no' class='staff_no_list' id='"+i+"' value='"+json.wtStaffList[i].staff_no+"'/></td>";
								staf_html += "<td>"+json.wtStaffList[i].name+"</td>";
								staf_html += "<td>"+json.wtStaffList[i].stf_login_id+"</td>";
								if(json.wtStaffList[i].prvg_cd=='01'){
									staf_html += "<td>Y</td>";
								}else{
									staf_html += "<td>"+json.wtStaffList[i].form_auth_yn+"</td>";
								}								
								staf_html += "<td>"+json.wtStaffList[i].appr_auth_yn+"</td>";
								staf_html += "</tr>";
							}							
						}
						staf_html += "</table>";
							$("#staff_list").html(staf_html);
							
					} else {
			   		alert("서비스 오류입니다.["+json.Response+"]");
					}
				},"json");
	},
	removeStaff:function(){
		var check = $(".staff_no_list:checked").serialize();
		 if(check==''){
			 alert("제외할 담당자를 선택해 주시기 바랍니다.");
		 }else{

			 if(confirm("선택된 담당자를 해당 부서에서 제외 시키시겠습니까?")){
				 	var dprt_cd = $("#frm4_dprt_cd").val();
					var dept_seq = $("#frm4_dept_seq").val();
					var dprt_nm = $("#frm4_dept_name").val();
				 $.post(
							"bizdocu.Department.do?bizdo=jsonDepartRemoveStaff",
							$("#frm2").serialize(),
					       	function(json){
								if(json.Response == "success") {
									alert("처리되었습니다.");
									DepartmentAction.listWtStaffbydprt_cd(dept_seq, dprt_cd, dprt_nm);
								} else {
									alert("서비스 오류입니다.["+json.Response+"]");
								}
							},"json");
			 }
		 }
	},	
	searchWtStaffList:function(){
		if($("#frm5_dprt_cd").val()==''){
			 alert("추가할 부서를 먼저 선택해 주시기 바랍니다.");
			 return;
		}
		
		$.post(
				"bizdocu.Department.do?bizdo=jsonStaffList",
				$("#frm5").serialize(),
		       	function(json){
					if(json.Response == "success") {
						var htmlstr = "";
						htmlstr += "<table cellpadding='0' cellspacing='0' class='listStylePop'>";
						htmlstr += "<colgroup><col width='10%' /><col width='20%' /><col width='20%' /><col width='*' /><col width='20%' /></colgroup>";
						if(json.wtStaffList == "NON"){
							htmlstr += "<tr>";
							htmlstr += "<td cospan='5'> 검색 결과가 존재 하지 않습니다.</td></tr>";
							
						}else{
							for(var j=0;j<json.wtStaffSize;j++){
								htmlstr += "<tr>";
								
								htmlstr += "<td> <input type='checkbox' name='wtStaffList["+j+"].staff_no' class='pop_no_list' value='"+json.wtStaffList[j].staff_no+"'/></td>";
								htmlstr += "<td>"+json.wtStaffList[j].name+"</td>";
								htmlstr += "<td>"+json.wtStaffList[j].stf_login_id+"</td>";
								htmlstr += "<td>"+json.wtStaffList[j].dprt_nm+"</td>";
								htmlstr += "<td>"+json.wtStaffList[j].dprt_cd+"</td></tr>";
							}
						}
						htmlstr += "</table>";
						$("#staffList").html(htmlstr);	
						$("#staffPagingHtml").html(json.pagingHtml);
						$("#wtStaffListPop").dialog({
							resizable: true,
							modal: true,
							width:580, height:380,
							close: function(){ $( this ).dialog('destroy');DepartmentAction.initSearchwtStaff();}
						});
					} else {
			   		alert("서비스 오류입니다.["+json.Response+"]");
					}
				},"json");
	},
	initSearchwtStaff:function(){
		$("#frm5_currentPage").val("1");
		$("#frm5_keyVal").val("");
		$("#frm5_key").val("name");

	},
	appendWtStaff:function(){
		 if(confirm("선택된 담당자를 해당 부서에 포함시키시겠습니까?")){	
			var dprt_cd = $("#frm4_dprt_cd").val();
			var dept_seq = $("#frm4_dept_seq").val();
			var dprt_nm = $("#frm4_dept_name").val();
			
			 $("#frm5_dprt_nm").val(dprt_nm);
			 
			$.post(
					"bizdocu.Department.do?bizdo=jsonDepartAddStaff",
					$("#frm5").serialize(),
			       	function(json){
						if(json.Response == "success") {
							alert("추가되었습니다.");
							
							DepartmentAction.initSearchwtStaff();
							$("#wtStaffListPop").dialog('destroy');
							
							DepartmentAction.listWtStaffbydprt_cd(dept_seq, dprt_cd, dprt_nm);
							
						} else {
				   		alert("서비스 오류입니다.["+json.Response+"]");
						}
					},"json");
		 }
	},
	updateApprAuth:function(auth_yn){
		var check = $(".staff_no_list:checked").serialize();
		 if(check==''){
			 alert("결재권을 변경할 담당자를 선택해 주시기 바랍니다.");
		 }else{

				 if(confirm("선택된 담당자에 결재권을 변경하시겠습니까?")){
					 	$("#frm2_appr_auth_yn").val(auth_yn);
					 	
					 	var dprt_cd = $("#frm4_dprt_cd").val();
						var dept_seq = $("#frm4_dept_seq").val();
						var dprt_nm = $("#frm4_dept_name").val();
					 $.post(
								"bizdocu.Department.do?bizdo=jsonUpdateApprAuthStaff",
								$("#frm2").serialize(),
						       	function(json){
									if(json.Response == "success") {
										alert("처리되었습니다.");
										DepartmentAction.listWtStaffbydprt_cd(dept_seq, dprt_cd, dprt_nm);
									} else {
										alert("서비스 오류입니다.["+json.Response+"]");
									}
								},"json");
				 }
			
		}
	},
	updateFormAuth:function(auth_yn){
		var check = $(".staff_no_list:checked").serialize();
		 if(check==''){
			 alert("결재권을 변경할 담당자를 선택해 주시기 바랍니다.");
		 }else{			 		 

			 var chk_stat = "T";
			 
			 $(".staff_no_list:checked").each(function(){
				 	var vid = $(this).attr("id");
				//	임시저장이나 애러상태만 삭제가능
				 	if($("#prvg_cd"+vid).val()=='01'){
						$(this).prop("checked", false);	
						chk_stat = "F";
					}		
			});
			 
			if(chk_stat=='T'){					
				 if(confirm("선택된 담당자에 결재권을 변경하시겠습니까?")){
					 	$("#frm2_form_auth_yn").val(auth_yn);
					 	
					 	var dprt_cd = $("#frm4_dprt_cd").val();
						var dept_seq = $("#frm4_dept_seq").val();
						var dprt_nm = $("#frm4_dept_name").val();
					 $.post(
								"bizdocu.Department.do?bizdo=jsonUpdateFormAuthStaff",
								$("#frm2").serialize(),
						       	function(json){
									if(json.Response == "success") {
										alert("처리되었습니다.");
										DepartmentAction.listWtStaffbydprt_cd(dept_seq, dprt_cd, dprt_nm);
									} else {
										alert("서비스 오류입니다.["+json.Response+"]");
									}
								},"json");
				 }
			}else{
				alert("담당자의 양식등록 권한은 변경할수 없습니다.");
			}
		 }
	},
	jsonPage:function(cnt,str){
		$("#frm5_currentPage").val(cnt);
		DepartmentAction.searchWtStaffList();
	}
}


$(document).ready(function(){
	$("#addDepart").click(function(){
		if($("#frm3_dept_name").val()==''){
			alert("부서명을 넣어주세요.");
			return;
		}
		if($("#frm3_dprt_cd").val()==''){
			alert("부서코드를 넣어주세요.");
			return;
		}
		DepartmentAction.addDeptInfo();
	});	
	
	$("#modDepart").click(function(){
		if($("#frm4_dept_name").val()==''){
			alert("부서명을 넣어주세요.");
			return;
		}		
		DepartmentAction.modDeptInfo();
	});
	
	$("#searchwtStaff").click(function(){
		DepartmentAction.searchWtStaffList();
	});	
	
	$("#appendWtStaff").click(function(){
		DepartmentAction.appendWtStaff();
	});	
	
	
	$('#allSel').toggle(function(){
		$(".staff_no_list").each(function(){
			$(this).prop("checked", true);
		});
	},function(){
		$(".staff_no_list").each(function(){
			$(this).prop("checked", false);
		});
	});
	
	$('#allPopSel').toggle(function(){
		$(".pop_no_list").each(function(){
			$(this).prop("checked", true);
		});
	},function(){
		$(".pop_no_list").each(function(){
			$(this).prop("checked", false);
		});
	});
});