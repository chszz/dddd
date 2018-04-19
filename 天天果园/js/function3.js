//1.获取子节点
function getChilds(obj){
//	1.获取所有的孩子
	var childs=obj.childNodes;
	var arr=[];
//	2.循环得到每一个孩子
	for(var i=0;i<childs.length;i++){
		/*3.判断:如果是要的孩子,就存在空数组
				如果不要,就过滤掉*/
		var reg=/^\s+$/;
		var str=childs[i].nodeValue;
		if(childs[i].nodeType==3&&reg.test(str)||childs[i].nodeType==8){
			continue;
		}else{
			arr.push(childs[i])
		}
	}
//	4.返回空数组
	return arr;
}

//获取第一个孩子
function getFirst(obj){
	return getChilds(obj)[0];
}
//获取最后一个孩子
function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1];
}
//获取下一个兄弟
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return null;
	}
	while(next.nodeType!=1){
		next=next.nextSibling;
		if(next==null){
			return null;
		}
	}
	return next;
}
//获取上一个兄弟
function getPre(obj){
	var pre=obj.previousSibling;
	if(pre==null){
		return null;
	}
	while(pre.nodeType!=1){
		pre=pre.previousSibling;
		if(pre==null){
			return null;
		}
	}
	return pre;
}
//获取父节点
function getParent(obj){
	return obj.parentNode;
}
//操作节点
//1.创建元素节点obj
function createObj(obj){
	return document.createElement(obj)
}
//2.将obj添加到父对象的最后	
function appendObj(obj,parent){
	parent.appendChild(obj)
}
//3.将a插入到b前面
function addBefore(a,b){
	var parent=b.parentNode;
	parent.insertBefore(a,b);
}
//4.将a插入到b后面
function addAfter(a,b){
	var parent=b.parentNode;
	var next=getNext(b);
	if(next==null){
		parent.appendChild(a)
	}else{
		parent.insertBefore(a,next)
	}
}
//5.将a替换为b
function replaceObj(a,b){
	var parent=b.parentNode;
	parent.replaceChild(a,b);
}
//6.将obj删除
function removeObj(obj){
	var parent=obj.parentNode;
	parent.removeChild(obj);
}
//克隆Obj
//		true:克隆全部内容(包括内部)
//		false:只克隆本身
function cloneObj(obj,bull){
	bull=bull||true;
	return obj.cloneNode(bull) 
}

//获取css样式的兼容性函数
//aa.currentStyle.width
//getComputedStyle(aa,null).width
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

/*对象.属性
对象['属性']*/
//ie-8
//		处理鼠标滚轮兼容性
//		obj:滚动的对象
//		fun1:向下滚
//		fun2:向上滚
	function mousewheel(obj,fun1,fun2){    /* obj 要滚动的对象*/
		if(navigator.userAgent.indexOf('Firefox')>=0){
			obj.addEventListener("DOMMouseScroll",scrollFn,false)        /*火狐 */
		}else{
			obj.addEventListener('mousewheel',scrollFn,false)         /*谷歌,IE*/
		}
			
		function scrollFn(e){              /*  要变化的对象   */
			var e/*(变量)*/=window.event||e/*(火狐的标志)*/;            /* (如果不识别（e）火狐浏览器,就识别IE或者谷歌浏览器)*/
			if(e.detail==3||e.wheelDelta==-120){    /*火狐的参数是3,谷歌和IE的参数是-120   (向下滚)*/
				fun1.call(obj)                  /* obj继承fun1向下滚的方法*/
//				将fun1向下滚给obj对象[让obj对象继承fun1函数]
			}else if(e.detail==-3||e.wheelDelta==120){  /*火狐的参数是-3,谷歌和IE的参数是120   (向上滚)*/
				fun2.call(obj)                 /* obj继承fun2向上滚的方法*/
			}
		}		
	}
/*	mousewheel(document,function(){
		console.log(1)
	},function(){
		console.log(2)
	})*/
		
		
//	向下滚:wheelDelta   -120	   detail==3
//	向上滚:	wheelDelta  120	  detail==-3


//设置cookie
function setCookie(name,value,iday){  
	var date1=new Date();   /*获取到当前日期*/
	date1.setDate(date1.getDate()+iday)     /*过期时间*/
	document.cookie=name+'='+value+';expires='+date1;
	
	
}

//获取cookie

/*1先获取到所有的cookie,用分号分隔开（split）,变成一个数组*/
/*2在遍历每个cookie*/
/*再输出每个cookie,用=号分开*/
/*if aa[0]=name,就return  aa[1]
else 没有这个name,就return  null*/

function getCookie(name){
	var arr=document.cookie.split('; ');    /*分号  空格*/
	for(var i=0;i<arr.length;i++){
		var len=arr[i].split('=');
		if(len[0]==name){
			return len[1];
		}
	}
	return null;
}


//删除cookie
function removeCookie(name){
	setCookie(name,'1',-1)    /* -1代表昨天,时间已过期*/
}


		