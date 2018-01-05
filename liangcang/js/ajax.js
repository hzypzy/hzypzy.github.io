	var oLI=document.querySelectorAll('#fenlei')
			console.log(oLI)
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4&&xhr.status==200) {
			var str=xhr.responseText;
//			var obj=JSON.parse(str)
			//console.log(str)
			var obj=JSON.parse(str)
			
//			var ob=arr[0];
//			console.log(obj);
//			console.log(arr);console.log(typeof(arr))
//			console.log(ob);console.log(typeof(ob))
//			console.log(ob.cat_name);
//输出所有的cat_name
			var arr=obj.data;
//			console.log(arr)
			//var oUl=document.createElement('ul');
			//console.log(oUl);
			//document.body.appendChild(oUl);
			
			
			for(var i=0;i<arr.length;i++){
				console.log(arr[i].cat_name)
				oLI[i].innerHTML=arr[i].cat_name
				

			}
		}
	}
	xhr.open("GET","http://csit.top/api_cat.php",true)
	xhr.send();