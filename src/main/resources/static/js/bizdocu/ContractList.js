$(document).ready(function() {	
	
	$("#search").click(function() {					//양식검색
		ContractListAction.search();
	});
	
	$("#blockCount").change(function(){
		// 한 화면에 보여줄 페이지 수
		$("#pageVsize").val($("#blockCount").val());
		$("#frm1").submit();
	});
	
});	

var ContractListAction = {		
	search : function() {	
/*	입력없이 검색버튼 눌렀을시 기본 리스트로 보여줄것			
		if($("#searchBy").val() == "") {
			alert("양식이름을 입력해 주시기 바랍니다.");
			$('#searchBy').focus();
			return ;
		}
*/		
//		alert($("#searchBy").val());
		$("#keyVal").val($("#searchBy").val());
		$("#frm1").submit();
	},	
	addContract : function(type_seq, docTypeLink) {			//계약서작성
		alert("* 계약서작성\n: 1:1 계약서를 작성합니다.");
		
		if (docTypeLink == "HTML") {
			$("#frm2").attr("action", "bizdocu.ContractTp.do");
		} else {
			$("#frm2").attr("action", "bizdocu.Contract.do");
		}
		$("#type_seq2").val(type_seq);
		$("#frm2").submit();
		
	},
	addMultyContract : function(type_seq) {	//다중계약서
		alert("* 다중계약서\n: 동일한 계약서를 여러 거래업체에게 동시에 선택해서 다중 발행하는 기능.");
		$("#type_seq4").val(type_seq);
		$("#frm4").submit();
	},
	addMultiUpload : function(type_seq, company_cnt) {	//다중계약서(n)
		alert("* 다중계약서("+company_cnt+")\n: 동일한 계약서를 여러 거래업체에게 동시에 선택해서 다중 발행하는 기능.");

		$("#type_seq5").val(type_seq);
		$("#company_cnt").val(company_cnt);
		$("#frm5").submit();
		
	},	
	preview : function(type_seq) {					//미리보기
		alert("미리보기="+type_seq+" \n준비중...");
		/*
		$("#type_seq2").val(type_seq);
		$("#frm3").submit();
		*/
	}
};