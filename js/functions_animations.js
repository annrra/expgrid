// JavaScript Document

/*
function customFn(){
	
}*/
/*function moreDetails(){
    $(this).closest(".expBlock").find(".exPreview").slideToggle();
}*/

/* HIGHCHARTS OPTIONS AND INITIALIZE */
$(function() {
	Highcharts.setOptions({
			lang: {
				weekdays: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
				months: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',  'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
				shortMonths: ["Ян", "Фев", "Март", "Апр", "Май", "Юни", "Юли", "Авг", "Септ", "Окт", "Ноем", "Дек" ],
				downloadJPEG: 'Изтегляне като JPG',
				downloadPDF: 'Изтегляне като PDF',
				downloadPNG: 'Изтегляне като PNG',
				downloadSVG: 'Изтегляне като SVG',
				printChart: 'Принтиране',
				rangeSelectorFrom: 'От',
				rangeSelectorTo: 'До',
				rangeSelectorZoom: 'Периоди',
				resetZoom: 'Възстанови изгледа',
				contextButtonTitle: 'Контекстно меню',			
				loading: 'Зареждане...'
			},
			zoomType: "x",
			resetZoomButton: {
				relativeTo: "chart"
			}
	});
});
/* END HIGHCHARTS OPTIONS AND INITIALIZE */

$(window).scroll(function () {
    var height = $('body').height();
    var scrollTop = $(window).scrollTop();

    if(scrollTop>90){
        $('.msFixed').css({ 'position': 'fixed', 'top' : '0' });
        $('.msFixed').addClass('animFixed');
    } else {
        $('.msFixed').css({ 'position': 'relative', 'top': '0px'});
        $('.msFixed').removeClass('animFixed');
    }
});


$(document).ready(function(){
    

//expand preview code    
var flag_open = false;
var last_tid = '';
var last_row = '';
function closeAll(){
	$('.expPreview').css('height', 0);
    $('.expPreview').css('padding', 0);					
	$(".expThumb img").removeClass("actBorder");
	$('.marker').remove();
	$('.listChart').fadeOut(300);
	flag_open = false; 	
};

$('.expThumb').click(function(){
           var marker = $("<span class='marker'></span>");
		   
		   var cur_tid = $(this).attr('data-num');
           var cur_row = $(this).parents('.expRow').find('.expPreview');
		   var img_tmb = $(this).children('img');
			
			if(cur_tid == last_tid) {closeAll(); last_tid = '';}
			
			else {
				if(flag_open) {
						if(last_row == cur_row){
							$('.listChart').fadeOut(300, function (){$('#expand'+cur_tid).delay(200).fadeIn(300);});
							

							$('.marker').remove(); 
							$(this).after(marker);
							$(".expThumb img").removeClass("actBorder");
			                img_tmb.addClass("actBorder");
							
							last_tid = cur_tid;
							last_row = cur_row;
							flag_open = true;					
						}
						else {
							closeAll();
			                cur_row.css('height', 'auto');
							cur_row.css('padding', '40px 0');	
							
//							$('.listChart').fadeOut(300, function (){});
							$('#expand'+cur_tid).delay(200).fadeIn(300);
							
							$('.marker').remove(); 
							$(this).after(marker);
							$(".expThumb img").removeClass("actBorder");
			                img_tmb.addClass("actBorder");
							
							last_tid = cur_tid;
							last_row = cur_row;
							flag_open = true;
							
						}
				}
				else {

					cur_row.css('height', 'auto');
					cur_row.css('padding', '40px 0');
					
				//	$('.listChart').fadeOut(300, function (){});
					$('#expand'+cur_tid).delay(200).fadeIn(300);
					
					$('.marker').remove(); 
					$(this).after(marker);
					$(".expThumb img").removeClass("actBorder");
					img_tmb.addClass("actBorder");
					
					last_tid = cur_tid;
					last_row = cur_row;
					flag_open = true;
				
				}
				
			
			}



      
});
        
        
//$("ul.tabs").tabs("div.panes > div.graph");
$( "#tabs" ).tabs();
            
        

//checkbox img replace     
var imgOn='images/chkOn.png';
var imgOff='images/chkOff.png';   
    $("input:checkbox").each(function(){            
    $(this).css("display","none");
    if($(this).is(":checked")){ 
        $(this).after($(document.createElement("img"))
        .attr({src:imgOn,title:'Checkbox',id:$(this).attr("id")})
            .addClass("chkBoxImg"));
    }else{
        $(this).after($(document.createElement("img"))
        .attr({src:imgOff, title:'Checkbox',id:$(this).attr("id")})
        .addClass("chkBoxImg"));
    }});
    $("img.chkBoxImg").click(function(){
        i= "input#"+$(this).attr("id")+":checkbox";
        s=$(this).attr("src");
        if(s==imgOn){
            $(this).attr("src",imgOff);
        $(i).attr("checked",false);
        }else{
        $(this).attr("src",imgOn);
        $(i).attr("checked",true);
        }});
        
//expand calculator section        
$(".calcBtn").on("click", function(){
    $(this).closest(".calcSec").find(".calcWrap").slideToggle(function() {
        $(".calcActionCall").toggleClass('hideCalcActionCall', $(this).is(':visible'));
    });
});

//toggle class on graph small icons - redraw chart
$(".ipChr img").on("click", function(){
    $(this).toggleClass("activeGraphIcon");
});
$(".ipChr .smGraphIcon").on("click", function(){
    $(this).toggleClass("activeGraphIcon");
    $(".chartContainer01").fadeToggle(300);
    $(".chartContainer02").fadeToggle(300);
});
    
    
//expand calculator item    
/** $("input.calcCheck").click(function(){
    if($(this).is(":checked")){
	   $(this).closest(".calcItem").find(".calcTabExp").css({ display: "none" });
    } else {
	   $(this).closest(".calcItem").find(".calcTabExp").fadeIn(100);
    }
}); **/

//expand calculator a item
$("a.calcCheckLink").click(function(event){
    event.preventDefault();
    $(this).toggleClass("calcSelected");
    if ($(this).hasClass("calcSelected")){
        $(this).closest(".calcItem").find(".calcTabExp").slideDown();
    } else {
       $(this).closest(".calcItem").find(".calcTabExp").slideUp(); 
    }
});
    
    
//expand rows    
$(".ipChr1").click(function(){
    $(this).toggleClass("expShow");
    if ($(this).hasClass('expShow')){
        $(this).closest('.ipChr').find(".ipChr2").slideDown();
    } else {
        $(this).closest('.ipChr').find(".ipChr2").slideUp();
    }
});
        
        
        
//tablesorter        
$(".statsTable").tablesorter(); 
        
        
//smoothscroll        
$("#scrollingText").smoothDivScroll({
	autoScrollingMode: "always",
	autoScrollDirection: "endlessLoopRight",
	autoScrollInterval: 10, 
    autoScrollStep: 2 
});

//change opacity on month/year change - funds-detail - spo
$( ".rsSelect" ).change(function() {
    $("#container01").fadeTo(400, 0.0).fadeTo(400, 1.0);
    $("#container02").fadeTo(400, 0.0).fadeTo(400, 1.0);
    $("#container10").fadeTo(400, 0.0).fadeTo(400, 1.0);
    $("#container11").fadeTo(400, 0.0).fadeTo(400, 1.0);
});
$( ".spoSelect" ).change(function() {
    $(this).closest(".listChart").fadeTo(400, 0.0).fadeTo(400, 1.0);
});
    
    
    
        
});