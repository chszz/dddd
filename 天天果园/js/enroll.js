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
	 
	 

//   登录信息提示
    $(".message_tip .close_pic").click(function(){
    	$(".message_tip").css("display","none")
    })
	 
	 
	 $(".longin_button .delu").click(function(){
	 	$(".message_tip").css("display","block")
	 	
	 	if($(".login_phone input").val()==''){
	 		$(".login_sec_right").append("<span class='pic1'></span>")
	 	}
	 	else{
	 		$(".login_sec_right").append("<span class='pic2'></span>")
	 	}
	 	
	 	if($(".longin_password input").val()==''){
	 		$(".login_sec_right").append("<span class='pic1-1'></span>")
	 	}
	 	else{
	 		$(".login_sec_right").append("<span class='pic2-2'></span>")
	 		
	 	}
	 	
	 	
	 	
	 	
	 })
	 
//	 验证码
    var btn2=document.getElementsByClassName('btn2')[0];
    var zhua=document.getElementsByClassName('zhua')[0];
    var code;
   /* var num=14;*/
    function createCode(){
    	var arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','f','g','h','i','j','k','l','m','n'
    	,'o','p','q','r','s','t','u','v','w','s','y','z'];
        code='';
        	for(var i=0;i<4;i++){
				var index=Math.floor(Math.random()*arr.length);
				code+=arr[index];       
			}
			btn2.value=code;
			btn2.style.color="#"+Math.ceil(Math.random()*0xFFFFFF).toString(16)
			/*num++
			btn2.style.fontSize=num+'px';*/   
        
        
        
	 }
    	createCode();
    	btn2.onclick=function(){
			createCode();
		}
    	zhua.onclick=function(){
    		btn2.value==createCode();
    	}
    	
    	
    	
	 
	 
	})  