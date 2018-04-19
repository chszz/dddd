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
	 
//	轮播图
	var x=-1423;    /*从第二张图的最左侧开始向右走*/

	setInterval(function(){     /* 计时器,让图片运动起来*/
	
			x++;
			$(".floor").css("left",x);  
			if(x==0){
				console.log(1)
			 x=-1423;
			}
	},1)

  
  
	
})
