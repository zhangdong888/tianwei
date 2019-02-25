// JavaScript Document
$(function(){
			
	//页脚置于底部	
	var h1=$(".zd_foot").height()
	var n1=$(".zd_foot").offset().top
	var m1=$(window).height()-h1;
	if(n1<m1){
		$(".zd_foot").addClass("active")
		}
	else{
		$(".zd_foot").removeClass("active")
		}
	})