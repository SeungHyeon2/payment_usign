$(document).ready(function() {
	$("#search").click(function() { //양식검색
		ContractDocumentListAction.search();
	});
	$("#addContType").click(function() { //양식작성
		ContractDocumentListAction.addContType('XSL');
	});
	$("#addTpContType").click(function() { //양식작성
		ContractDocumentListAction.addContType('HTML');
	});
	$("#blockCount").change(function() {
		// 한 화면에 보여줄 페이지 수
		$("#pageVsize").val($("#blockCount").val());
		$("#frm1").submit();
	});
});

var ContractDocumentListAction = {
	search : function() {
		$("#keyVal").val($("#searchBy").val());
		$("#frm1").submit();
	},
	addContType : function(doc_type) { 		// 양식작성품
		$("#type_seq").val(0);
		$("#frm2").attr('action', 'bizdocu.ContractAddDocument.do');
		$("#frm2").attr('target', '_self');
		$("#frm2").submit();
	},
	viewContType : function(type_seq) { 	// 양식편집품
		$("#type_seq").val(type_seq);
		$("#frm2").attr('action', 'bizdocu.ContractDocumentView.do');
		$("#frm2").attr('target', '_self');
		$("#frm2").submit();
	},
	preview : function(type_seq) { 			// 미리보기
		$("#type_seq").val(type_seq);
		$.post("bizdocu.ContractPreview.do?bizdo=jsonPreview", $("#frm2")
				.serialize(), function(json2) {
			if (json2.Response == "success") {
				jsPreviewPop(json2.xhtml);
			} else {
				alert(json2.Response);
			}
		}, "json");
	}
};