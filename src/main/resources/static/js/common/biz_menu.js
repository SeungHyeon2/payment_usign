/*브라우저의 버전을 확인*/
function msieversion() {
	
	var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf ( "MSIE " );

    //IE10 이상 체크
	if(trident != null && trident[1] == "6.0"){
		 return 10;
	} else{	
	      if ( msie > 0 )      // If Internet Explorer, return version number
	         return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )));
	      else                 // If another browser, return 0
	         return 0;
	}

}

/* 레이어 메뉴바 START */
var agt = navigator.userAgent.toLowerCase();
if (agt.indexOf("chrome") != -1) agt='Chrome';

ns = (document.layers)? true:false 
ie = (document.all)? true:false 

//Open show Layer
function showGmb(id) { 
	var n  = id.substring(7);
	var pos;
	var sm = document.getElementById("submenu"+n);
	var mm = document.getElementById("smeMenu"+n);  
	var ss = "url(images/biz_img/ver01_menu0"+n+".gif)";  
	var offset = $(mm).offset();
	
	if(n<10){
		pos = ((n-1)*237) - 0;
    } else if(n<20) {
    	pos = ((n-11)*237) + 2;
    } else if(n<30) {
    	pos = ((n-21)*237) + 2;
    }
	if (ie) {
		var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		if ( msieversion() > 9){	
			$(sm).css('left',pos);
			$('#submenu'+n).show();
//			$(mm).css('backgroundImage',ss);
//			$(mm).css('background-position','0 -800px');
		} else {	
			if(msieversion() == 9){
				$(sm).css('left',offset.left-0);
				$(sm).css('top',168-top);
			}else{
				document.all[id].style.left =offset.left-0; 
				document.all[id].style.top = 168-top;	
			}
			 
			$('#submenu'+n).show();
			$(mm).css('backgroundImage',ss);
			$(mm).css('background-position','0 -50px');
		}
	} else{	
		$(sm).css('left',pos);
		$('#submenu'+n).show();
		$(mm).css('backgroundImage',ss);
		$(mm).css('background-position','0 -50px');
	}
//	alert(document.all[id].style.top+"/"+document.all[id].style.left);
} 
//Open Hidden Layer
function hideGmb(id) {
	var n  = id.substring(7);
	var pos;
	var mm = document.getElementById("smeMenu"+n);  
	
	$(mm).css('backgroundImage','');
	$(mm).css('background-position','0  0');
	if (ie) {
		//document.all[id].style.visibility = "hidden";		
		if ( msieversion() > 0){			
//			document.all[id].style.visibility = "hidden";
			$('#submenu'+n).hide();
		} else {
			setTimeout("document.all['"+id+"'].style.visibility='hidden';",3000); 
		}
	}
	else{
		$('#submenu'+n).hide();
	}
} 
/* 레이어 메뉴바 END */


$(document).ready(function(){
	
/*
$(".main_menu").mouseenter(function(event){
	var obj_id = $(this).attr("id");
		$('#sub'+obj_id).show();	
	}).mouseleave(function(event){
		var obj_id = $(this).attr("id");
		$('#sub'+obj_id).hide();	
	});
*/


});	