$(function(){
	$("#header").load("header.html",function(){
		/*alert("加载完成")*/
	});
	
	$("#bottom_box").load("bottom.html",function(){
		/*alert("加载完成")*/
	});
	
	 $('.nav_search_pic').click(function(){
	 	
    		
    	$(this).toggleClass('change')
    	
    })
	 
	 
	 
//	商品详情的轮播
    /*var check=$(".check");
    var inner=$(".inner")
    var innerImg=$(".inner img")
    var bigbox=$(".bigbox")
    var bigboxImg=$(".bigbox img")*/
  	
    /*大图上下轮播*/
 
   var  ind=0;
   
   var t=null;
  
    	
    	 t=setInterval(al,2000);        /*达到同步就用相同的计时器*/  
			function al(){
				$(".detail_middle img").eq(ind).show().siblings().hide();
				
    			$('.check').css('top',142*ind)  /*向下移动*/
    		
				
				ind++;             /*达到同步就用相同的下标*/    
				if(ind>$(".detail_middle img").length-1){
					ind=0;
				}
				
				
				
			}
     $(".inner").mouseenter(function(){
   
   		ind=$(this).index()-1;       /*第一个inner下标为1*/
   			console.log(ind)
   		al();  /* 鼠标进入时调用函数,达到俩边的图片同步*/
   			clearInterval(t)   /* 停止计时器*/
   	})
    $(".detail_left").hover(function(){
    	clearInterval(t)    
    },function(){
    	 t=setInterval(al,2000);
    })
     
   
    
   
    
    
    
//  $('.detail_left').hover(function(){
//  	clearInterval(timer);
//  	
//  },function(){
//  	timer=setInterval(donext,2000)
//  })
//  $('.inner').hover(function(){
//  	var n=$(this).index()  /*记录下标*/
//  	/*alert(n)*/
//  	$('.check').css('top',142*(n-1))/*第一张*/
//  
//  	
//  	
//  	
//  })
    
  
    
    
    
    
    
//  加减
//     var reduce=document.getElementsByClassName('reduce')[0];
//     var add=document.getElementsByClassName('add')[0];
//     var pull=document.getElementsByClassName('pull')[0];
//     var num=1   /* 初始值*/
//			add.onclick=function(){
//				num=num+1;     /*每次点击加1*/
//				pull.value=num;
//				
//			}
//
//        reduce.onclick=function(){
//				     /*每次点击加1*/
//				    num=num-1;
//				pull.value=num;
//				
//				
//			}


           var x=1;
           $(".num_select .add").click(function(){
           	x++;
           	$(".num_select .pull").val(x);
           })
           
            $(".num_select .reduce").click(function(){
           	x--;
           	if(x<1){
           		x=1;
           	}
           	$(".num_select .pull").val(x);
           })
        
     /*   鼠标hover时,选择城市*/
        $(".site_dz").hover(function(){
        	$(".select_dz").css("display","block")
        }, $(".select_img").click(function(){
    	$(".select_dz").css("display","none")
    	
    }))
        
      
//    点击切换城市


    $(".place_city_bottom li a").click(function(){
		$(".site_dz span").html($(this).text())/* 点击切换内容*/
		/*$(".place_city_top_l").html($(this).text())*/
		return false;
		
	})
    
    
     $('.join_car').click(function(){
    		
    	
    	$('.success_page').css("display","block")
    })
     
      $('.success_page .close').click(function(){
    	$('.success_page').css("display","none")
    })
    
     $('.success_page .go_shop').click(function(){
    	$('.success_page').css("display","none")
    })
        
	 })


//  点击关闭
   
