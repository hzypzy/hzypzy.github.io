function first(){
	
	xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			// 取出服务器返回的数据
			var str = xhr.responseText;
			
			// 将数据字符串转换成JSON对象
			var obj = JSON.parse(str)
			if (obj.code == 0) {
				alert("登陆成功")
			} else {
				alert(obj.message)
			}
		}
	}
	
	xhr.open("POST", "http://csit.top/api_user.php 

", true);
	
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}


	var obj = {
		status: "login",
		username: strUsername,
		password: strPassword
	}
	
	var str = getParams(obj)
	
	xhr.send(str)
