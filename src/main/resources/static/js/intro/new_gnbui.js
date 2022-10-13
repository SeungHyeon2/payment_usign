/* GNB 占쏙옙占� 筌�占쏙옙 揶�占쏙옙 占쏙옙占� */

$(document).ready(function(){
	var $new_gnb = $('#new_gnb > ul > li > ul');
	/** 占쎌�곤옙 占쏙옙占� 占쏙옙占쏙�占�**/
	if($('#new_gnb').length > 0) {
		$new_gnb = $('#new_gnb > ul > li > ul');
	}
	/** 占쏙옙占쏙옙占쏙옙(�댐옙揆) **/
	if($('#new_gnb_pk').length > 0) {
		$new_gnb = $('#new_gnb_pk > ul > li > ul');
	}
	/** 占쏙옙占쏙옙占쏙옙(占쏙옙揆) **/
	if($('#new_gnb_pe').length > 0) {
		$new_gnb = $('#new_gnb_pe > ul > li > ul');
	}

	var orgon = $new_gnb.find(' > li').index($new_gnb.find(' > li.on'));
	var nowon = orgon;
	var shkCode4T = false;
	var keyCode4T = "";
	$('#new_gnb a').keydown(function(e){
		shkCode4T = e.shiftKey;
		keyCode4T = e.which;
	});
	
	var activeMenuIs = true;
	if(orgon < 0){
		var activeMenuIs = false;
		if($('.new_header_utillity').find('.section3').hasClass('on')){
			activeMenuIs = true;
		}
	}
	
	if(orgon < 0 && activeMenuIs) { 
		orgon = 0; 
		$new_gnb.find(' > li').eq(orgon).addClass('on').siblings('li').removeClass('on');
	}
	
	$new_gnb.find('> li > ul > li').each(function(){
		var thisWidth = $(this).find('ul').width();
		var insWidth = $(this).find('ul').width();
		if(insWidth > thisWidth){
			$(this).css('width',insWidth);
		} else {
			$(this).css('width',thisWidth);
		}
	});

	$new_gnb.find(' > li > ul > li > ul').hide();
	$new_gnb.find(' > li.on > ul').hide().find(' > li > ul').hide();
	
	// 占썬�삳�ワ옙占쏙옙占쏙옙
	$('.header_utillity:last').bind('focusin', function() {
		if(orgon < 0) {
			orgon = 0;
		}		
		if (nowon != orgon)
		{
			$new_gnb.find('>li').find('ul').hide();
			if(activeMenuIs){
				$new_gnb.find('>li').eq(orgon).addClass('on').siblings('li').removeClass('on');
			}
		}
		$new_gnb.find('>li:eq(' + orgon + ') > ul').show().find(' > li > ul').hide();
	});	
	
	// 筌�占쏙옙占썬�쇽옙甕곤옙 占싼�鍮깍옙�쇽옙
	$new_gnb.find(' > li > a').bind('mouseenter , focusin', function(){
		nowon = $new_gnb.find(' > li > a').index(this);
		if (!$(this).parent('li').hasClass('on'))
		{
			$(this).parent('li').addClass('on').find('ul').show();
			$(this).parent('li').siblings('li').removeClass('on').find('ul').hide();
		} else {
			$(this).parent('li').find('ul').show();
			$(this).parent('li').siblings('li').removeClass('on').find('ul').hide();
		};
	});
	
	$new_gnb.find(' > li > ul > li > a').bind('mouseenter , focusin', function(){
		$(this).parent('li').parent('ul').find('ul').show();
	});
	
	// 筌�占쏙옙占쏙옙占쏙옙占�
	$new_gnb.bind('mouseleave', function(){
		if(orgon < 0 && activeMenuIs) {
			orgon = 0;
		}
		if (nowon != orgon)
		{
			$(this).find('> li').find('ul').hide();
			if(!activeMenuIs)	{
				$new_gnb.find(' > li').removeClass('on');
			}else{
				$new_gnb.find(' > li').eq(orgon).addClass('on').siblings('li').removeClass('on');
			}
		}
		if(activeMenuIs){
			$new_gnb.find(' > li:eq(' + orgon + ') > ul').show().find(' > li > ul').hide();
		}
		$new_gnb.find(' > li.on > ul').hide().find(' > li > ul').hide();
	});

	// 筌�占쏙옙筌�占쏙옙�鍮깍옙�쇽옙占쏙옙
	$new_gnb.parent().parent().find('>li>a').bind('focusin', function(e){
		if (nowon != orgon)
		{
			$new_gnb.find(' > li > ul').hide();
			$new_gnb.find(' > li.on').removeClass('on');
			$new_gnb.find(' > li:eq(' + orgon + ')').addClass('on');
		}
		$new_gnb.find(' > li:eq(' + orgon + ') > ul').show().find(' > li > ul').hide();
	});
	/*
	$('#topSrchForm input').focusin(function(){
		$('#new_gnb ul li ul li').hide();
	});
	*/
	if($('#breadcrumb').find('li').length == 0) {
		$('#breadcrumb').remove();
	}

});
/* GNB 占쏙옙占� 筌�占쏙옙 揶�占쏙옙 占쏙옙*/

/* CTN 占쏙옙占쏙��몌옙 占쏙옙占�*/
$(document).ready(function(){
	$('.multilphonetwrap').click(function() {
		$('.multiphonelist:not(:animated)').show();
	});
	$('.multiphonelist').mouseleave(function(e){
		$('.multiphonelist:not(:animated)').hide();
	});
});
/* CTN 占쏙옙占쏙��몌옙 占쏙옙/

/* GNB 占쏙옙猿�筌�占쏙옙癰��용┛ 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占� */
$(function() {
	var $layer = $('#uplusmainallview');
	
	var lastFocusElement = function(element) {
		element.find('a:visible:last').bind('keydown', function(e){
			if(e.keyCode == 9) {
				siteMapClose();
			}
		});
	};
	
	var siteMapView = function() {
		$layer.show();
		//lastFocusElement($layer);
		$('#menuviewid').attr('src','//image.uplus.co.kr/images/common/header/new_menuallview_on.png');
	};
	
	
	var siteMapClose = function() {
		$layer.hide();
		$('#menuviewid').attr('src','//image.uplus.co.kr/images/common/header/new_menuallview_off.png');
	};
	
	$('.new_mainmenuview button').bind('click', function() {
		if($layer.is(':visible')) {
			siteMapClose();
		} else {
			siteMapView();
		}
	});
	$('.new_mainmenuview').bind('mouseleave', siteMapClose);
	/*
	$('.new_mainmenuview > h3').focus(function() {
		siteMapView();
	});
	$('#uplusmainallview').mouseleave(function(e) {
		siteMapClose();
	});
	$('.listmenuallviewbtnwrap > .qbclose').click(function() {
		siteMapClose();
	});
	*/
	//占쏙옙占쏙옙占쏙옙����占쏙옙占쏙옙占쏙옙占�
	$('.menulistwrap li a').bind('click', function(){
		//$('.menulistwrap li').removeClass('on');
		$(this).closest('li').addClass('on').siblings().removeClass('on');
	});
})
/* GNB 占쏙옙猿�筌�占쏙옙癰��용┛ 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙*/

/* 野�占쏙옙 �귐�占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙占� 占쏙옙占� */
$(function() {
	$('.searchedlist li').mouseover(function() {
		$('.searchedpop:not(:animated)').show();
	});
	$('.searchedlist li').mouseleave(function(e){
		$('.searchedpop:not(:animated)').hide();
	});
	$('.newheader_search').mouseover(function() {
		$('.newheader_search form p').css("border-color","#eb0d8c");
	});
	$('.newheader_search').mouseleave(function(e){
		$('.newheader_search form p').css("border-color","#d3d3d3");
	});
});
/* 野�占쏙옙 �귐�占쏙옙占쏙옙占쏙옙占쏙옙占쏙옙占� 占쏙옙*/

/* 占쏙옙猿�筌�占쏙옙癰��용┛ 占쏙옙占� */
var fnTabMentranAllmenusTy1 = function(a) {
	var $tabMenu = $('#' + a);
	var tabItemName = $tabMenu.data('TabBox');
	var $tabMenuItem = $('.' + tabItemName + '_item');
	$tabMenuItem.hide().eq(0).show();

	var $tabMenuLink = $tabMenu.find('li');
	$tabMenuLink.each(function(index) {
		$(this).click(function() {
			$tabMenuLink.removeClass('on').eq(index).addClass('on');
			$tabMenuItem.hide().eq(index).show();
			
			return false;
		})
	});
}

$(document).ready(function() {
	if ( !$('#wrap').is('.smartPhone') ) {
		$('.jq_TabBoxAllmenu_sty1').each(function(index) {
			var TabMenuLinkSty1 = 'jq_TabBoxAllmenu_sty1_'+index
			$(this).data('TabBox','TabBoxAllmenu').attr({'id':TabMenuLinkSty1});
			fnTabMentranAllmenusTy1(TabMenuLinkSty1);
		});
	}
});
/* 占쏙옙猿�筌�占쏙옙癰��용┛ 占쏙옙*/

/* GNB 占쏙옙猿�筌�占쏙옙癰��용┛_201510 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙占� */
$(function() {
	var $layer201510 = $('#uplusmainallview_201510');
	
	var lastFocusElement201510 = function(element) {
		element.find('a:visible:last').bind('keydown', function(e){
			if(e.keyCode == 9) {
				siteMapClose201510();
			}
		});
	};
	
	var siteMapView201510 = function() {
		$layer201510.show();
		$('#menuviewid2015').attr({'src':'//image.uplus.co.kr/images/common/header/new2015_menuallview_on_01.png', 'alt':'占쏙옙猿�筌�占쏙옙 占썬�る┛'});
	};

	var siteMapClose201510 = function() {
		$layer201510.hide();
		$('#menuviewid2015').attr({'src':'//image.uplus.co.kr/images/common/header/new2015_menuallview_off_01.png', 'alt':'占쏙옙猿�筌�占쏙옙 癰��용┛'});
	};
	
	$('.new201510_mainmenuview h3').bind('click', function() {
		if($layer201510.is(':visible')) {
			siteMapClose201510();
		} else {
			siteMapView201510();
		}
	});
//	$('.new201510_mainmenuview').bind('mouseleave', siteMapClose201510);
	$('#menuviewclose').bind('click', function() {
		siteMapClose201510();
	});
	//占쏙옙占쏙옙占쏙옙����占쏙옙占쏙옙占쏙옙占�
	$('.menulistwrap li a').bind('click', function(){
		$(this).closest('li').addClass('on').siblings().removeClass('on');

		var $mleft_ht = $('.new201510_mainmenuview .new201510_viewlayer .new201510_viewlayerwrap');
		var $mright_ht = $('.mright .new201510menu_right .m_wrapbg');
		
		//占쏙옙占쏙옙占쏙옙 占쏙옙占쎈����占쏙옙
		if ($(this).parent().hasClass('listall_tabmenu9'))
		{
			$('.company_temp').css('display','none');
			$($mright_ht).css('min-height','605px');
			$($mleft_ht).css('min-height','593px');
			$(".mmid").css('min-height','auto');
		}else {
			$('.company_temp').css('display','block');
			$($mright_ht).css('min-height','890px');
			$($mleft_ht).css('min-height','878px');
			$(".mmid").css('min-height','1147px');
		}
		
		//疫꿸�占� 占쏙옙占쎈����占쏙옙
		if ($(this).parent().hasClass('listall_tabmenu2'))
		{
			$('.company_temp').css('display','none');
			$($mright_ht).css('min-height','605px');
			$($mleft_ht).css('min-height','593px');
			$(".mmid").css('min-height','auto');
		}else {
			$('.biz_temp').css('display','block');
		}
		
		//餓ο옙占쏙옙�占쏙옙占쏙옙占쏙옙����占쏙옙
		if ($(this).parent().hasClass('listall_tabmenu3'))
		{
			$('.company_temp').css('display','none');
			$($mright_ht).css('min-height','605px');
			$($mleft_ht).css('min-height','593px');
			$(".mmid").css('min-height','auto');
		}else {
			$('.biz_temp').css('display','block');
		}
	});
});

	/* 占쏙옙猿�筌�占쏙옙癰��용┛ 占썬�삘�⑨�占쏙옙占쏙옙 2015.10 占쏙옙占� */
	$(function(){
		$('.m_wrap ul.l_menu li').bind('mouseover', function(){
			if (!$(this).hasClass('on'))
			{
				$('.m_wrap ul.l_menu li').removeClass('on');
				$(this).addClass('on');
			}
		});
		$('.m_wrap ul.l_menu li').bind('mouseleave', function(){
			$('.m_wrap ul.l_menu li').removeClass('on');
		});
	});
	/* 占쏙옙猿�筌�占쏙옙癰��용┛ 占썬�삘�⑨�占쏙옙占쏙옙 2015.10 占쏙옙*/
	//placeholder ie甕곤옙占�
	$(function() {	
		if ($.browser.msie) {
			$('input[type=text]').each(function(){
				if($(this).attr('placeholder')) {
					var placeholder = $(this).attr('placeholder');
					$(this).val(placeholder).css('color','#555');
				}
			});
			$('input[type=text]').focus(function(){
				if($(this).attr('placeholder')) {
					$(this).css('color','#000');
					var placeholder = $(this).attr('placeholder');
					if($(this).val() == placeholder){
						$(this).val('');
					}
				}
			}).blur(function(){
				if($(this).attr('placeholder')) {
					var placeholder = $(this).attr('placeholder');
					if($(this).val() == ''){
						$(this).val(placeholder).css('color','#555');
					}
				}
			});
		}else{
			$('input[type=text]').focus(function(){
				$(this).attr('placeholder','');
			}).blur(function(){
				if($(this).val() == ''){
					$(this).attr('placeholder',$(this).attr('rel'));
				}
			});
		}
	});//END
/* GNB 占쏙옙猿�筌�占쏙옙癰��용┛_201510 占쏙옙占쏙옙占쏙옙占쏙옙 占쏙옙*/