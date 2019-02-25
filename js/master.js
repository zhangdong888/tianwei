// JavaScript Document
$(function(){
	$(".nav>li").mouseenter(function(){
		$(this).children(".dropdown-menu").show()
		})
	$(".nav>li").mouseleave(function(){
		$(this).children(".dropdown-menu").hide()
		})
	 $(".dropdown-menu a").click(function(){$(".dropdown-menu").hide()})	
	 $(".zd_lunbo .item").height($(window).height()-80)	
     $(".video-js").height($(window).height()-180)
	 $(".video-js").width($(window).width()*3/5)
	 $(".zd_table").height($(window).height()-120)
	 $(".zd_table").width($(window).width()-160)
	$(".zd_table td").hover(function(){
		$(this).toggleClass("active")
		$(this).find("img").show()
		},function(){
			$(this).toggleClass("active")
		$(this).find("img").hide()
			})
	})
function selectTag(showContent){
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
}
	  $(function(){
	   $("#content").height($(window).height()-80)
	   var a=0;
	   var h=$(".zd_datebox").height()-370;
	   $(".zd_dateup").click(function(){
		   a=a-100;
		   if(a>-h){
			   $(".zd_datebox").animate({"top":a},1000)
			   }
			 else{
				 $(".zd_datebox").css("top",-h) 
				 }  
		   })
		  $(".zd_datedown").click(function(){
		   a=a+100;
		   if(a<0){
			   $(".zd_datebox").animate({"top":a},1000)
			   }
			 else{
				 $(".zd_datebox").css("top",0) 
				 }  
		   }) 
	   $(".zd_date dl dd").click(function(){
		  $(".zd_date dl dd").removeClass("active")
		   $(this).addClass("active")
		   })
	     $(".zd_settop").click(function(){
			 $("body").scrollTop(0)
			 })
			 
		var x1=0;
		var x2=$(".zd_lunbo1 li").width()
		var x3=$(".zd_lunbo1 li").length
		var x4=x2*x3;
		var x5=-x4+x2;
		function xx(){
			 if(x1>-x4+x2){
				 x1=x1-x2;
				 x5=-x4+x2;
			   $(".zd_lunbo1 ul").animate({"left":x1},1000)
			   }
			 if(x1<=-x4+x2){
				 x5=x5+x2;
				 $(".zd_lunbo1 ul").animate({"left":x5},1000)
				 }
			 if(x5>=0){
				 x1=0;
				 $(".zd_lunbo1 ul").animate({"left":x1},1000)
				}	 
			}
		setInterval(xx,5000);
     var x6=0;
	 var x7=$(".zd_lunbo2 .zd_pos-abs").width();
	 var x8=$(".zd_lunbo2").width();
	 var x9=$(".zd_lunbo2 li").length;
	 var x10;
	  $(".toleft").click(function(){
		  x6=x6-200;
		  if(x6>-x7+x8-200){
			  $(".zd_lunbo2 .zd_pos-abs").animate({"left":x6},1000)
			  x10=x6;
			  $(".zd_xuline1,.zd_xuline2").show()
			  }
			  else{
				  $(".zd_xuline1").show()
			  	  $(".zd_xuline2").hide()
			  }
		  })
		  $(".toright").click(function(){
		  x10=x10+200;
		  if(x10<=0){
			  $(".zd_lunbo2 .zd_pos-abs").animate({"left":x10},1000)
			  x6=x10;
			    $(".zd_xuline1,.zd_xuline2").show()
			  }
			  else{
				   $(".zd_xuline1").hide()
			  	   $(".zd_xuline2").show()
				  }
		  })
		if(x7>x8){
			$(".zd_xuline2").show()
			}   
		else{$(".zd_xuline2").hide()
		    $(".zd_xuline1").hide()
		}	
	   $(".zd_lunbo2 ul li span").click(function(){
		   $(".zd_lunbo2 ul li").removeClass("active")
		   $(this).parent(this).addClass("active")
		   })
		 var y1=0;
		 var y2=$(".zd_nooddetail .zd_pos-abs").width();
		 var y3=$(".zd_nooddetail ul").width();
		 var y4;
		   $(".zd_turnleft").click(function(){
			 y1=y1-200;
			 if(y1>-y2+y3-200){
				 $(".zd_nooddetail .zd_pos-abs").animate({"left":y1},1000)
				 y4=y1 
				 }
			   })
			 $(".zd_turnright").click(function(){
			 y4=y4+200;
			 if(y4<=0){
				 $(".zd_nooddetail .zd_pos-abs").animate({"left":y4},1000)
				 y1=y4
				 }
			   })   
		$(".zd_liuyan .radio-inline").click(function(){
			$(".zd_liuyan .radio-inline").removeClass("active")
			$(".zd_liuyan .radio-inline input[type='radio']").removeAttr("checked")
			$(this).addClass("active")
			$(this).children("input[type='radio']").attr("checked","checked")
			}) 
		$(".zd_liunav h3").click(function(){
			$(".zd_liunav h3").removeClass("active")
			$(this).addClass("active")
			})	
		$(".zd_noodmedu span").click(function(){
			$(".zd_noodmedu span").removeClass("active")
			$(this).addClass("active")
			})
			if($(window).width()<500){
				$("#content li").height(200)
				 $(".zd_lunbo .item").height(200)
				 $("#content li[class='zd_bg-color-orange']").css("padding-top",0).height(200)	
				 $(".video-js").height(200)
				 $(".video-js").width($(window).width())
				 $(".zd_table").height(200)
				 $(".zd_table").width($(window).width())
				 $(".zd_table img").width("100%")
				}
	$(".zd_share").mouseenter(function(){
		$(".zd_popup").show()
		})		
	$(".zd_operation").mouseleave(function(){
		$(".zd_popup").hide()
		})
	
					  		
	   })
      //参数设定

      var time=1000;//切换时间

          ntime=500//nav变换时间；