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
	 
	 
//	 匹配手机号和密码
var phonereg=/^1[3578]\d{9}$/;    /*变成全局变量*/
var passreg=/^[a-z0-9A-Z]\w{5,19}$/;
     $(".longin_button .delu").click(function(){
     	
     	if($(".login_phone input").val()==''){
     		$(".login_phone input").css('border','1px solid red')
     		$(".true_pic1").css("display","block")
     		
     	}
     	
     	
     	$(".login_phone input").focus(function(){
     		$(this).css('border','1px solid #cccccc')
     		$(".true_pic1").css("display","none")
     	})
     	
     	if($(".longin_password input").val()==''){
     		$(".longin_password input").css('border','1px solid red')
     		$(".true_pic2").css("display","block")
     	}
     	
     	
     	$(".longin_password input").focus(function(){
     		$(this).css('border','1px solid #cccccc')
     		$(".true_pic2").css("display","none")
     	})
     	
     	
     $(".login_phone input").blur(function(){
     		
     		/*var phonereg=/^1[3578]\d{9}$/;*/
     		if(phonereg.test($(this).val())){
     			
     			console.log("手机号正确")
     			
     		}
     		else{
     			console.log("手机号错误")
     		}
     		
     		
     		
     })
     $(".longin_password input").blur(function(){
     		



            /*var passreg=/^[a-z0-9A-Z]\w{5,19}$/;*/
     		if(passreg.test($(this).val())){
     			
     			console.log("密码正确")
     			
     		}
     		else{
     			console.log("密码错误")
     		}
     		
     		
     		
     })
         if (passreg.test($(".longin_password input").val())&&phonereg.test($('.login_phone input').val())) {
         	$(".message_tip").css("display","none")         
         }else{
         	$(".message_tip").css("display","block")
         }
         if ($(".longin_password input").val()==''||$('.login_phone input').val()=='') {
         	$(".message_tip").css("display","none")
         	
         }else{
         	 if (passreg.test($(".longin_password input").val())&&phonereg.test($('.login_phone input').val())) {
         	$(".message_tip").css("display","none")         
         }else{
         	$(".message_tip").css("display","block")
         }
         	/*$(".message_tip").css("display","block")*/
         }
     })
     
//   登录信息提示
    $(".message_tip .close_pic").click(function(){
    	$(".message_tip").css("display","none")
    })
	 
	 
	 
	 
	 
	 
	 
	})  