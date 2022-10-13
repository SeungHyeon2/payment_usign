var dels = new Array();
var runRn = false;

function xslIsDup(doc){

	var els = doc.all;
	var sel = null;
	var idx = 0;
	
	for(var n=0; n < els.length; n++){
	
		cnt = 0;
	
		if(!els[n].name || els[n].idx)
			continue;
		
		sel = doc.getElementsByName(els[n].name);
		
		if(sel.length == 1)
			continue;
		
		if(!els[n].comptype){
		
			idx = dels.length;
			dels[idx] = new Object();
			dels[idx].name = els[n].name;
			dels[idx].id = els[n].id;
			dels[idx].mx = sel.length;
			dels[idx].idx = 0;
		}
	}
	
	for(var n=0; n < dels.length; n++){

		for(var i=n+1; i < dels.length; i++){

			if(dels[n].name == dels[i].name){

				return true;
			}
		}
	}
	return false;
}

function xslTagRename(doc){
	
	var sels = null;

	for(var n=0; n < dels.length; n++){
	
		sels = doc.getElementsByName(dels[n].name);
		
		if(sels.length < 2)
			continue;

		for(var i=0; i < sels.legnth; i++){

			if(i > 0){
			
				sels[i].select();
				
			}

		}
	}
}

var CVXsl = function(ine_src){
	var isRn = false;
	var isChk = false;
	/*
	if(isRn==null || isRn==""){
		isRn = false;
	}	
	if(isChk==null || isChk==""){
		isChk = false;
	}
	*/
		//특정 html태그 치환부분 추가 
		ine_src = ine_src.replace(/&nbsp;/g,"&amp;nbsp;");
		ine_src = ine_src.replace(/<\/br>/gi,"<br/>");
		ine_src = ine_src.replace(/<br[^>]*>(.*?)/gi,"<br/>");
		ine_src = ine_src.replace(/“/gi,'"');
		ine_src = ine_src.replace(/”/gi,'"');
		
	
	
	  var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g; 
	  ine_src = ine_src.replace(stringStripper, ' ');
	  // 2. strip Word generated HTML comments
	  var commentSripper = new RegExp('<!--(.*?)-->','g');
	  ine_src = ine_src.replace(commentSripper, '');
	  var tagStripper = new RegExp('<(/)*(meta|link|\\?xml:|st.*:|o:|stp.*:)(.*?)>','gi');
	  // 3. remove tags leave content if any
	  ine_src = ine_src.replace(tagStripper, '');
	  // 4. Remove everything in between and including tags '<style(.)style(.)>'
	  var badTags = ['script','applet','embed','noframes','noscript'];
	  
	  for (var i=0; i< badTags.length; i++) {
	    tagStripper = new RegExp('<'+badTags[i]+'.*?'+badTags[i]+'(.*?)>', 'gi');
	    ine_src = ine_src.replace(tagStripper, '');
	  }

	this.XSL = "";
	this.CCnt = 0;
	this.CTypes = new Array();

	var i_CTag = "";
	var i_tag = "";
	var RootNode = "/Contract/";

	var iExp = /<(hr|input|textarea)[^>]+(?:>\s*<\/textarea>|\/?>)/i;
	var nameExp = /name="([^"]+)"/i;
	var idExp = /id="([^"]+)"/i;
	var attrExp = /(\w+)=(?:"([^"]*)"|'([^']*)')/ig;
	var compExp = /comptype="([^"]+)"/i;
	var pageExp = /page[\-]break[\-]after/ig;

	var a_src = new Array();
	var a_att = new Array();
	var a_el = new Array();

	var a_style = "";

	var el_id = "";
	var el_name = "";
	
	var rname = "";

	var compflag = true;
	

	while(a_src = iExp.exec(ine_src)) {
		i_CTag = '';

		i_CTag += '\n<xsl:choose>\n <xsl:when test="$isInput = &quot;true&quot;">\n';

		if(a_src[0].toLowerCase().indexOf("page-break-after") > 1){

			i_CTag += '		<xsl:element name="hr">\n';
			i_CTag += '			<xsl:attribute name="style">\n';
			i_CTag += '				<xsl:text>page-break-after:always;border:2px dashed gray;</xsl:text>\n';
			i_CTag += '			</xsl:attribute>\n';
			i_CTag += '		</xsl:element>\n';
			i_CTag += '	</xsl:when>\n';
			
			i_CTag += '	<xsl:otherwise>\n';
			i_CTag += '		<xsl:element name="center">\n';
			i_CTag += '			<xsl:attribute name="style">\n';
			i_CTag += '				<xsl:text>page-break-after:always;</xsl:text>\n';
			i_CTag += '			</xsl:attribute>\n';
			i_CTag += '		</xsl:element>\n';
			i_CTag += '	</xsl:otherwise>\n';
			i_CTag += '</xsl:choose>';
			
			ine_src = ine_src.replace(iExp, i_CTag);
			continue;
		}
		
		a_el = nameExp.exec(a_src[0]);
		
		if(!a_el || a_el.lenght < 2)
			continue;

		try{
			el_name = a_el[1];
		}
		catch(e){
			alert("err:"+e);
			return;
		}
		
		a_el = idExp.exec(a_src[0]);
		
			
		el_id = a_el[1];
		
		compflag = true;
		/*
		if(isRn){
		
			for(var n=0; n < dels.length; n++){
			
				if(el_name == dels[n].name && el_id == dels[n].id){
				
					rname = "_" + dels[n].idx;
					el_name = el_name + rname;
					el_id = el_id + rname;
					
					dels[n].idx += 1;
					break;
				}
			}
		}
		*/
		if(compExp.test(a_src[0]) && RegExp.$1 != 'N'){

			for(var c=0; c < this.CTypes.length; c++){

				if(this.CTypes[c] == RegExp.$1){

					compflag = false;
					break;
				}
			}
			if(compflag)
				this.CTypes[this.CTypes.length] = RegExp.$1;
		}
		
		if(a_src[1].toLowerCase() == "textarea"){

			i_CTag += '		<xsl:element name="textarea">\n';

			while(ar = attrExp.exec(a_src[0])) {

				if(ar[1].toLowerCase() == "ostyle"){

					a_style = ' style="' + ar[2] + '"';
				}
				
				if(ar[1].toLowerCase() == "name"){

					i_CTag += '			<xsl:attribute name="name">\n'
									+'				<xsl:text>'+ el_name +'</xsl:text>\n'
									+'			</xsl:attribute>\n';
				}
				else if(ar[1].toLowerCase() == "id"){

					i_CTag += '			<xsl:attribute name="id">\n'
									+'				<xsl:text>'+ el_id +'</xsl:text>\n'
									+'			</xsl:attribute>\n';
				}
				else{
	
					i_CTag += '			<xsl:attribute name="'+ ar[1] +'">\n'
									+'				<xsl:text>'+ ar[2] +'</xsl:text>\n'
									+'			</xsl:attribute>\n';
				}
			}

			i_CTag += '			<xsl:for-each select="'+ RootNode + el_name +'[@id=&quot;'+ el_id +'&quot;]">\n'
							+'				<xsl:value-of select="."/>\n'
							+'			</xsl:for-each>\n'
							+'		</xsl:element>\n'
							+'	</xsl:when>\n';

			i_CTag += '	<xsl:otherwise>\n'
							+'		<xsl:for-each select="'+ RootNode + el_name +'[@id=&quot;'+ el_id +'&quot;]">\n'
							+'			<pre'+a_style+'><xsl:value-of select="."/></pre>\n'
							+'		</xsl:for-each>\n'
							+'	</xsl:otherwise>\n'
							+'</xsl:choose>';
		}
		else if(a_src[1].toLowerCase() == "input"){
			
			var valued = false;

			i_CTag += '		<xsl:element name="input">\n';

			while(ar = attrExp.exec(a_src[0])) {

				if(ar[1].toLowerCase() == "ostyle")
					a_style = ' style="' + ar[2] + '"';

				i_CTag += '			<xsl:attribute name="'+ ar[1] +'">\n';

				if(ar[1].toLowerCase() == "value"){

					valued = true;

					i_CTag += '				<xsl:for-each select="'+ RootNode + el_name +'[@id=&quot;'+ el_id +'&quot;]">\n'
									+'					<xsl:value-of select="text()"/>\n'
									+'				</xsl:for-each>\n';
				}
				else if(ar[1].toLowerCase() == "name"){
				
					i_CTag += '				<xsl:text>'+ el_name +'</xsl:text>\n';
				}
				else if(ar[1].toLowerCase() == "id"){
				
					i_CTag += '				<xsl:text>'+ el_id +'</xsl:text>\n';
				}
				else{
					i_CTag += '				<xsl:text>'+ ar[2] +'</xsl:text>\n';
				}

				i_CTag += '			</xsl:attribute>\n';
			}

			if(!valued){

				i_CTag += '			<xsl:attribute name="value">\n';
				i_CTag += '				<xsl:for-each select="'+ RootNode + el_name +'[@id=&quot;'+ el_id +'&quot;]">\n'
								+'					<xsl:value-of select="."/>\n'
								+'				</xsl:for-each>\n';
				i_CTag += '			</xsl:attribute>\n';
			}

			i_CTag += '		</xsl:element>\n'
							+'	</xsl:when>\n';

			i_CTag += '	<xsl:otherwise>\n'
							+'		<xsl:for-each select="'+ RootNode + el_name +'[@id=&quot;'+ el_id +'&quot;]">\n'
							+'			<font'+a_style+'><xsl:value-of select="."/></font>\n'
							+'		</xsl:for-each>\n'
							+'	</xsl:otherwise>\n'
							+'</xsl:choose>';
		}
		
		ine_src = ine_src.replace(iExp, i_CTag);
	}


	
	var h_src = '<?xml version="1.0" encoding="euc-kr"?>\n';
	h_src += '<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n';
	h_src += '<xsl:param name="isInput"/>\n';
	h_src += '<xsl:template match="/">\n';
	/*상단 선언문
	if(isChk){
		h_src += '<html version="1.0">\n';
		h_src += '<head>\n';
		h_src += '<meta http-equiv="Content-Type" content="text/html; charset=euc-kr"></meta>\n';
		h_src += '<title>U+전자문서 서비스 - edocu.uplus.co.kr</title>\n';
		h_src += '</head>\n';
		h_src += '<body style="font:10px gulim, tahoma; color:#123456; line-height:15px; padding:8px;">\n';
	}*/	
	//본문
	h_src += ine_src + '\n';
	/*하단 선언문
	if(isChk){
		h_src += '</body>\n';
		h_src += '</html>\n' ;
	}*/
	h_src += '</xsl:template>\n';
	h_src += '</xsl:stylesheet>';
	h_src = h_src.replace(/\t/g, "  ");

	this.XSL = h_src;
	this.CCnt = this.CTypes.length;
}

CVXsl.prototype.setVer = function(ver){

	this.XSL = this.XSL.replace(/(html version=")[^"]+(")/,"$1"+ver+"$2");
}

CVXsl.prototype.isValid = function(){

	if(this.CCnt == 0){

		alert("업체 정보를 입력하는 태그가 없습니다.\n\n양식 태그중 업체 정보에 관한 태그를 선택하여 입력해주시기 바랍니다.");
		return false;
	}
	else if(this.CCnt < 2){

		alert("계약자 정보는 '을' 이상 등록하여 계약업체 수가 2개 이상이 되어야 합니다.");
		return false;
	}

	var ch = String.fromCharCode("A".charCodeAt() + (this.CCnt -1));

	for(var n=0; n < this.CCnt; n++){

		if(this.CTypes[n] > ch){
		
			var cidx = this.CTypes[n].charCodeAt() - "A".charCodeAt();
		
			var strCtype = ["작성자","계약자1","계약자2","계약자3","계약자4","계약자5","계약자6","계약자7","계약자8","계약자9"];
			
			var ich = "";
			for(var c=0; c < this.CCnt; c++)
				ich += strCtype[c] + ",";
			
			ich = ich.substring(0,ich.length-1);
			
			alert("현재 입력된 업체 수는 " + this.CCnt + "개 입니다.\n\n입력 가능한 업체 구분은 '"+ 
						ich +"' 이며 '"+  strCtype[cidx] + "' 업체 구분은 입력 가능한 업체 구분이 아닙니다." );
			return false;
		}												
	}

	//
	if(frm1.gubun_size.value < this.CCnt){

		var ct = frm1.gubun_size.value;
		alert("작성자 계약자구분은 '" + ct + "' 까지 선택이 가능합니다.");
		return false;
	}
	
	

	return true;
}
/*
function jsPreview(html,bg ){
	jsPreview(html,bg,'');
}
*/
var prevwincnt = 0;

function jsPreviewPop(html){
	var jsNewPop = new jsPopWin();
	jsNewPop.title ="미리보기";
	jsNewPop.width ="900";
	jsNewPop.height = "600";

	jsNewPop.isCenter = true;

	jsNewPop.menubar =  true;
	jsNewPop.scrollbars = true;
	var win = jsNewPop.open();
	
	win.document.write(html);
	win.document.body.style.width="700px";
	win.document.body.style.margin="auto";
	win.document.body.style.fontFamily="굴림";
	win.document.body.style.fontSize="10pt";
	win.document.body.style.lineHeight="1.5";
	win.document.body.style.padding="8px";
	win.document.body.style.marginRight="60px";
	win.document.body.style.marginLeft="60px";	
	win.document.close();

	return;
}

function jsPreview(html, bg, signdt_print, stampDuty_print){
	
	var jsNewPop = new jsPopWin();

	jsNewPop.title ="미리보기" + prevwincnt++;
	
	jsNewPop.width ="900";
	jsNewPop.height = "600";

	jsNewPop.isCenter = true;

	jsNewPop.menubar =  true;
	jsNewPop.scrollbars = true;
 
	var win = jsNewPop.open();

//	html = html.replace(/border="(\w+)"/ig, '');
//	html = html.replace(/border=(\w+)\s/ig, '');

//	var brd = RegExp.$1;
//	html = html.replace(/cellspacing="(\w+)"/ig, 'cellspacing="'+ brd + '" bgcolor="black"');

	var foot_html = "";
	var status = "";
	if(bg == "") {
		bg=0;
		status = "미전송";
	}else if(bg == "10") {
		status = "검토대기";
	}else if(bg == "20") {
		status = "반려요청대기";
	}else if(bg == "30") {
		status = "검토완료";
	}else if(bg == "40") {
		status = "결재대기";
	}else if(bg == "50") {
		status = "결재완료";
	}else if(bg == "51") {
		status = "결재취소대기";
	}else if(bg == "60") {
		status = "전자서명진행";
	}else if(bg == "70") {
		status = "계약완료";
	}else if(bg == "80") {
		status = "계약파기요청";
	}else if(bg == "99") {
		status = "계약파기";
	}else{
		status = "미전송";
	}
	
	if(bg == "70") {
		foot_html += '<p><br/></p>\n'; 
		foot_html += '<p style=\"line-height: 1.5; font-family: 굴림; font-size: 10pt;\">※ 본 계약서는 전자서명법 기준에 따라 U+전자문서의 전자계약(http://edocu.uplus.co.kr) 에서 발행된 계약서이며,<br/>\n';
		foot_html += '&nbsp;&nbsp;&nbsp;전자서명법에 의거하여 공동인증서로 전자서명되어 인감날인이 없어도 법적효력을 갖습니다.</p>\n';
		foot_html += signdt_print;
		if(stampDuty_print != ""){
			foot_html += stampDuty_print;
		}		
	}else{
		foot_html += '<p><br/></p>\n'; 
		foot_html += '<p style=\"line-height: 1.5; font-family: 굴림; font-size: 10pt;\">※ 본 계약서는 계약서 상태가 ['+status+'] 인 문서가 인쇄되었습니다.<br/>\n';
		foot_html += '&nbsp;&nbsp;&nbsp;계약완료 이후에 재인쇄하여 이용하시기 바랍니다.</p>\n';
	}
    
	// 2015-09-07 페이지구분선 HR태그 치환
	var tagStripper = new RegExp('<hr(.*?)page-break-after:(.*?)>','gi');
	html = html.replace(tagStripper, "<p style='page-break-after:always;'/></p>");
	
	var prev_html = '<html>\n';
	prev_html += '<head>\n';
	prev_html += '<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">\n';
	prev_html += '<title>U+전자계약 미리보기</title>\n';
//		prev_html += bg+'\n';
	prev_html += '</head>\n';
	prev_html += '<body style="padding : 99px 66px 99px 66px; background-image: url(images/biz_img/cont_bg/'+bg+'.gif);">\n';
	prev_html += html;
	prev_html += foot_html;
	prev_html += '</body>\n';
	prev_html += '</html>';

	//var nWin = window.open('',null,'toolbar=no,location=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=700,height=550');

	win.document.write(prev_html);
	
	win.document.body.style.width="700px";
	win.document.body.style.margin="auto";
	win.document.body.style.fontFamily="굴림";
	win.document.body.style.fontSize="10pt";
	win.document.body.style.lineHeight="1.5";
	win.document.body.style.padding="8px";
	win.document.body.style.marginRight="60px";
	win.document.body.style.marginLeft="60px";
	
	win.document.close();

	return;
	
	var tbs = win.document.getElementsByTagName("TABLE");

	var bcolor = "#808080";

	if(tbs.length){
			
		for(var n=0; n < tbs.length; n++){
			
			bcolor = "#808080";
			
			tbs[n].cellSpacing = tbs[n].border;
			tbs[n].border = 0;
			
			if(tbs[n].borderColor)
				bcolor = tbs[n].borderColor;

			tbs[n].bgColor = bcolor;
			tbs[n].removeAttribute("bordercolor");
		}
	}
	else{

			tbs.cellSpacing = tbs.border;
			tbs.border = 0;
			
			if(tbs.borderColor)
				bcolor = tbs.borderColor;

			tbs.bgColor = tbs.borderColor;
			tbs.removeAttribute("bordercolor");
	}
}
/*
function jsPrint(html,bg ){
	jsPrint(html,bg,'');
}
*/
function jsPrint(html, bg, signdt_print, stampDuty_print){
	//인쇄전미리보기
	var jsNewPop = new jsPopWin();

	jsNewPop.title ="" + prevwincnt++;
	
	jsNewPop.width ="900";
	jsNewPop.height = "600";

	jsNewPop.isCenter = true;

	jsNewPop.menubar =  true;
	jsNewPop.scrollbars = true;
 
	var win = jsNewPop.open();

	var foot_html = "";
	var status = "";
	if(bg == "") {
		bg=0;
		status = "미전송";
	}else if(bg == "10") {
		status = "검토대기";
	}else if(bg == "20") {
		status = "반려요청대기";
	}else if(bg == "30") {
		status = "검토완료";
	}else if(bg == "40") {
		status = "결재대기";
	}else if(bg == "50") {
		status = "결재완료";
	}else if(bg == "51") {
		status = "결재취소대기";
	}else if(bg == "60") {
		status = "전자서명진행";
	}else if(bg == "70") {
		status = "계약완료";
	}else if(bg == "80") {
		status = "계약파기요청";
	}else if(bg == "99") {
		status = "계약파기";
	}else{
		status = "미전송";
	}
	
	if(bg == "70") {
		foot_html += '<p><br/></p>\n'; 
		foot_html += '<p style=\"line-height: 1.5; font-family: 굴림; font-size: 10pt;\">※ 본 계약서는 전자서명법 기준에 따라 U+전자문서의 전자계약(http://edocu.uplus.co.kr) 에서 발행된 계약서이며,<br/>\n';
		foot_html += '&nbsp;&nbsp;&nbsp;전자서명법에 의거하여 공동인증서로 전자서명되어 인감날인이 없어도 법적효력을 갖습니다.</p>\n';
		foot_html += signdt_print;
		if(stampDuty_print != ""){
			foot_html += stampDuty_print;
		}
	}else{
		foot_html += '<p><br/></p>\n'; 
		foot_html += '<p style=\"line-height: 1.5; font-family: 굴림; font-size: 10pt;\">※ 본 계약서는 계약서 상태가 ['+status+'] 인 문서가 인쇄되었습니다.<br/>\n';
		foot_html += '&nbsp;&nbsp;&nbsp;계약완료 이후에 재인쇄하여 이용하시기 바랍니다.</p>\n';
	}
	
//	html = html.replace(/border="(\w+)"/ig, '');
//	html = html.replace(/border=(\w+)\s/ig, '');

//	var brd = RegExp.$1;
//	html = html.replace(/cellspacing="(\w+)"/ig, 'cellspacing="'+ brd + '" bgcolor="black"');

// 2015-09-07 페이지구분선 HR태그 치환
	var tagStripper = new RegExp('<hr(.*?)page-break-after:(.*?)>','gi');
	html = html.replace(tagStripper, "<p style='page-break-after:always;'/></p>");
	
	var prev_html = '<html>\n';
	prev_html += '<head>\n';
	prev_html += '<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">\n';
	prev_html += '<title>U+전자계약 인쇄화면</title>\n';
//	if(bg)
//		prev_html += bg+'\n';
	prev_html += '</head>\n';
	prev_html += '<body style="padding : 99px 66px 99px 66px; background-image: url(images/biz_img/cont_bg/'+bg+'.gif);">\n';
	prev_html += html;
	prev_html += foot_html;
	prev_html += '</body>\n';
	prev_html += '</html>';

	//var nWin = window.open('',null,'toolbar=no,location=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=700,height=550');

	win.document.write(prev_html);
	
	win.document.body.style.width="700px";
	win.document.body.style.margin="auto";
	win.document.body.style.fontFamily="굴림";
	win.document.body.style.fontSize="10pt";
	win.document.body.style.lineHeight="1.5";
	win.document.body.style.padding="8px";
	win.document.body.style.marginRight="60px";
	win.document.body.style.marginLeft="60px";	
	
	win.print();
	win.document.close();
	win.close();

	return;
}

function isValidTag(tag){

	var validTags = ["A","ABBR","ACRONYM","ADDRESS","APPLET","AREA","B","BASE","BASEFONT","BDO","BIG","BLOCKQUOTE","BODY","BR","BUTTON","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","DD","DEL","DIR","DIV","DFN","DL","DT","EM","FIELDSET","FONT","FORM","FRAME","FRAMESET","H1","H2","H3","H4","H5","H6","HEAD","HR","HTML","I","IFRAME","IMG","INPUT","INS","ISINDEX","KBD","LABEL","LEGEND","LI","LINK","MAP","MENU","META","NOFRAMES","NOSCRIPT","OBJECT","OL","OPTGROUP","OPTION","P","PARAM","PRE","Q","S","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRIKE","STRONG","STYLE","SUB","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TITLE","TR","TT","U","UL","VAR","XMP"];

	for(t in vaidTags){

		if(tag == t){
			return true;
		}
	}
	return false;
}

function openHelp(){

	var jsNewPop = new jsPopWin("");
	
//	jsNewPop.url = "/jsp/contract/frame/CEditor/EditorMenual.htm";
	jsNewPop.url = "./popup/editorHelp.jsp";
	jsNewPop.width ="795";
	jsNewPop.height = "600";

	jsNewPop.isCenter = true;

	jsNewPop.toolbar = false;
	jsNewPop.location = false;
	jsNewPop.status = false;
	jsNewPop.menubar = false;
	jsNewPop.scrollbars = true;
	jsNewPop.resizable = true;
											
										 
	var nwin = jsNewPop.open();
}



var empCnt = 0;
function jsGetxml(ifDoc) {

	empCnt = 0;
//	var e_src = document.all.contentIFM.Document.body.innerHTML;
//	var ifDoc = document.all.contentIFM.Document;
	var xmlNode = "";

	var i_tag = jsToArray(ifDoc.getElementsByTagName("INPUT"));	
	var t_tag = jsToArray(ifDoc.getElementsByTagName("TEXTAREA"));

	if((!i_tag || !i_tag.length || i_tag.length == 0) && (!t_tag || !t_tag.length || t_tag.length == 0)){
	
		alert("계약서 내용을 입력 하여야 합니다.");
		return "";
	}
	
	var val = '';
	var next;
	
	for(var i=0; i < i_tag.length; i++){

		if(/^[\s]*$/g.test(i_tag[i].value))
			empCnt++;
			
		next = false;
	
		for(var p=0; p < i; p++){
			
			if(i_tag[i].name == i_tag[p].name && i_tag[i].id == i_tag[p].id)
				next = true;
		}
		
		if(next)
			continue;
		
		val = i_tag[i].value;
		val = val.replace(/&/g,'&amp;')
		val = val.replace(/</g,'&lt;')
		val = val.replace(/>/g,'&gt;')
		
		xmlNode += '\t<'+ i_tag[i].name +' id="'+ i_tag[i].id + '">'+ val + '</'+ i_tag[i].name +'>\n';
	}

	for(var i=0; i < t_tag.length; i++){
	
		if(/^[\s]*$/g.test(t_tag[i].value))
			empCnt++;
			
		next = false;		
	
		for(var p=0; p < i; p++){
			
			if(t_tag[i].name == t_tag[p].name && t_tag[i].id == t_tag[p].id)
				next = true;
		}
		
		if(next)
			continue;
		
		val = t_tag[i].value;
		val = val.replace(/&/g,'&amp;')
		val = val.replace(/</g,'&lt;')
		val = val.replace(/>/g,'&gt;')

		xmlNode += '\t<'+ t_tag[i].name +' id="'+ t_tag[i].id + '">'+ val + '</'+ t_tag[i].name +'>\n';
	}

	var xml = '<?xml version="1.0" encoding="euc-kr"?>\n';
	xml += '<Contract xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n';
	xml += xmlNode;
	xml += '</Contract>';

	return xml;
}