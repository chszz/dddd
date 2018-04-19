
$(function(){
	$("#header").load("header.html",function(){
		/*alert("加载完成")*/
	});
	
	$("#bottom_box").load("bottom.html",function(){
		/*alert("加载完成")*/
	});
	
	
	/*$('.first_menu>li').click(function(){
	
        
		$(this).children().eq(1).stop().slideToggle(100);*/
		
		/*$(this).find("span").toggleClass("change")*/   /* 添加删除类change  */ 
	
	/*})*/
	/*$(".first_menu>li").each(function(){*/      /* 遍历每个li*/

	
		/*if($(this).find(".sec_menu").html()!=undefined){
			
			$(this).append("<span class='sub'></span>")
			
		}
		
	})*/
	
	/*$('.fruit').hover(function(){
		$('.fruit .notice_thing').stop().toggle(1000);
	})
	
	
	$('.shouji').hover(function(){
		$('.shouji .download_thing').stop().fadeToggle(1000);
	})*/
	
	
	
    $('.nav_search_pic').click(function(){
    		
    	$(this).toggleClass('change')
    	$('.none_shop').toggle()
    	
    })
    
     $('.product_introducer_right').click(function(){
    		
    	$(this).toggleClass('buy')
    	$('.success_page').css("display","block")
    })
     
     /*跳出的结算页面*/
    $('.success_page .close').click(function(){
    	$('.success_page').css("display","none")
    	
    	
    })
    
     $('.success_page .go_shop').click(function(){
    	$('.success_page').css("display","none")
    	 $('.product_introducer_right').removeClass('buy');
    	
    })
     
//   水果产品

    $('.list_first img').hover(function(){
    	$(this).toggleClass("animated pulse")
    })
	
	
	
	
	
var banner=document.getElementsByClassName('banner')[0];
var banner_inner=document.getElementsByClassName('banner_inner')[0];
var btn=document.getElementsByClassName('btn');
var inner=document.getElementsByClassName('inner');
var flag=true;
 var num=0;
  btn[num].style.background='orange';
var timer=setInterval(move,1000)
/*console.log(banner_inner)*/
function move(){
	if(flag){
		flag=false;
		num++
		if(num>inner.length-2){             
	    		animate(banner_inner,{marginLeft:-1423*num},1000,function(){   
	    			banner_inner.style.marginLeft=0;        
	    			num=0;                           
	    			for(var i=0;i<btn.length;i++){
		    			btn[i].style.background='#666666';          
			    	}
			    	btn[num].style.background='orange';        
			    	flag=true;     
	    		})
	}else{
		for(var i=0;i<btn.length;i++){
	    			btn[i].style.background='#666666';       
		    	}
		    	btn[num].style.background='orange';      
		    	animate(banner_inner,{marginLeft:-1423*num},1000,function(){
		    		
		    		flag=true;          
		    	})
	}
    }
    }
	
   banner.onmouseover=function(){
   	clearInterval(timer)
   }
   
    banner.onmouseout=function(){
   	timer=setInterval(move,1000)
   }
    
    for(var i=0;i<btn.length;i++){
    	btn[i].index=i;     /*记录按钮下标*/
    	btn[i].onclick=function(){
    		num=this.index;         /*btn[i]=this*/   /* 图片的下标和小按钮的下标要一致,否则会出现错乱*/
    		for(var i=0;i<btn.length;i++){
    			btn[i].style.background='#aaa';      /* 遍历一遍是为了能获取到所有的按钮*/
	    	}
	    	btn[num].style.background='orange';              /*点击相对应得图片下标,*/
    		animate(banner_inner,{marginLeft:-1423*num},500)          /*动画效果,点击哪个按钮,出现相对应的图片*/
    	}
    }
	
	
	
	$.ajax({
					type:"get",
					url:"js/index.json",
					async:true
				}).done(function(result){
					//加载数据
					//手机的数据
				var list_first=result.list_first;
				//电视的数据
				/*var tvlist=result.Tvlist;*/
				var liststr="";      /* 加载了上一个数据时,先清空,再加载下一个数据*/
				//加载手机的数据
				loaddata(list_first,$(".fruit_shopp_list"));	
				//加载电视的数据
				/*loaddata(tvlist,$(".TvList"));*/
				
				function loaddata(listdata,parentele){
						liststr="";
						//循环数据
						$.each(listdata, function(index,ele) {
							liststr+='<div class="list_first">'
							+'<a href="shopping-detail.html">'
						+'<img src="'+ele.imgsrc+'" />'
						+'</a>'
							+'<div class="product_introducer">'
								+'<div class="product_introducer_left">'
									+'<p>'+ele.p+'</p>'
									+'<p class="p2">'+ele.p2+'礼盒</p>'
								+'</div>'
								+'<div class="product_introducer_right">'
								+'</div>'
							+'</div>'
						+'</div>'
					
						})
						//把拼接好的标签放到父元素中
						parentele.html(liststr);  /* 父元素是.phonelist  .TvList*/
						//on 
						//delegate
						$(".fruit_shopp_list").delegate(".product_introducer_right","click",function(){
							$(this).toggleClass('buy')
    	                    $('.success_page').css("display","block")
						})
						
						$(".fruit_shopp_list").delegate('.list_first img',"hover",function(){
							$(this).toggleClass("animated pulse")
						})                                          /*事件委派js,绑定事件*/
						
				}			
					}).fail(function(){
						alert("失败")
					})
			
})
//轮播图









