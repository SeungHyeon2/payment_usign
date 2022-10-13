var CategoryAction = {
		viewCategory:function(mngno){
			
			$("#frm3_cate_seq").val($("#cate_seq"+mngno).val());
			$("#frm3_category").val($("#category"+mngno).val());
			$("#modifyCategoryPop").dialog({
				resizable: true,
				modal: true,
				width:620, height:200,
				close: function(){ $( this ).dialog('destroy');}
			});
			//$("#modifyCategoryPop").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
	}
}


$(document).ready(function(){
	$("#removeCategory").click(function(){
		var check = $(".cate_seq:checked").serialize();
		 if(check==''){
			 alert("삭제할 카테고리를 선택해 주시기 바랍니다.");
		 }else{			 
			 $.post(
					 	"bizdocu.Category.do?bizdo=jsonRemoveCategory",
			  			$("#frm1").serialize(),
			  	       	function(json){
					 		if(json.Response == "success"){ 
				  				alert("삭제 하였습니다.");
				  				document.location="bizdocu.Category.do";
					 		}				  			
			  	       	},"json"
		  	  	);
		 }
		
	});
		
	$("#addCategory").click(function(){
		$("#addCategoryPop").dialog({
			resizable: true,
			modal: true,
			width:620, height:200,
			close: function(){ $( this ).dialog('destroy');}
		});
		//$("#addCategoryPop").dialog().parents(".ui-dialog").find(".ui-dialog-titlebar").remove();
	});
	
	$("#addCate").click(function(){
		if($("#frm2_category").val()==''){
			alert("카테고리명을 넣어주세요.");
			return;
		}
		 $.post(
				 	"bizdocu.Category.do?bizdo=jsonAddCategory",
		  			$("#frm2").serialize(),
		  	       	function(json){
				 		if(json.Response == "success") { 
				 			if(json.result=="ADD"){
				 				alert("추가 되었습니다.");
				 				document.location="bizdocu.Category.do";
				 			}else{
				 				alert("같은 이름의 카테고리가 존재합니다.");
				 			}
				 		}				  			
		  	       	},"json"
	  	  	);
	});
	
	$("#modCate").click(function(){
		if($("#frm3_category").val()==''){
			alert("카테고리명을 넣어주세요.");
			return;
		}
		 $.post(
				 	"bizdocu.Category.do?bizdo=jsonModifyCategory",
		  			$("#frm3").serialize(),
		  	       	function(json){
				 		if(json.Response == "success") { 
				 			if(json.result=="ADD"){
				 				alert("스정 되었습니다.");
				 				document.location="bizdocu.Category.do";
				 			}else{
				 				alert("같은 이름의 카테고리가 존재합니다.");
				 			}
				 		}				  			
		  	       	},"json"
	  	  	);		
	});
	
	$("#addClose").click(function(){
		$("#addCategoryPop").dialog('destroy');
	});
	
	$("#modClose").click(function(){
		$("#modifyCategoryPop").dialog('destroy');
	});
	
	$('#allSel').toggle(function(){
		$(".cate_seq").each(function(){
			$(this).prop("checked", true);
		});
	},function(){
		$(".cate_seq").each(function(){
			$(this).prop("checked", false);
		});
	});
});