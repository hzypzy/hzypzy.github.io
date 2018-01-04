	 
	
	//运动框架
	function animate(ele,targetJSON,times,callback){
		//自定义属性
		ele.lock=true;
		//console.log(oAct.style[property]);
		//获取运动最小时间间隔
		if(window.navigator.userAgent.indexOf('MSIE')==-1){
			//现代浏览器IE 10 以上
			var interval=10;			
		}else{
			//IE 9 8 7 6
			var interval=50;
		}
		var cishu=parseInt(times/interval);//用来计算步长stepJSON[];console.log(cishu);		
		//oBtn.onclick=function(){点击事件与函数调用相互冲突
		//clearInterval(Timer);
		var startJSON={};
		for(var k in targetJSON){ //targetJSON[k] {'left':'600px', 'top':300, 'opacity':1}
			startJSON[k] = parseFloat(fcs(ele, k)); //进行累加赋值 startJSON[]+=stepJSON[];
		}//console.log(startJSON[k]);

		var stepJSON={};
		for(var k in targetJSON){
			targetJSON[k]=parseFloat(targetJSON[k]);
			stepJSON[k]=(targetJSON[k]-startJSON[k])/cishu;//步长	,TOP，Left  stepJSON==NAN? (targetJSON[k]为‘string’！)
		  //console.log(stepJSON[k]);
		}

			var count=0;
		  var Timer=setInterval(function(){
				for(var k in targetJSON){	
				startJSON[k]+=stepJSON[k];//步长累加	
				//console.log(startJSON[k])
				}
				for(var k in targetJSON){
					if(k=='opacity'){
						ele.style.opacity=startJSON[k];
						ele.style.filter='alpha(opacity='+startJSON[k]*100+')';
					}else{
						ele.style[k]=startJSON[k]+'px';
					}
				}
				

				//监测定时器，清除定时器 
				//拉回来
				count++;
				if(count==cishu){
					clearInterval(Timer);
					ele.lock=false;
					for(var k in targetJSON){
						if(k=='opacity'){
							ele.style[k]=targetJSON[k];
							ele.style.filter='alpha(opacity='+targetJSON[k]+')'
						}else{
							ele.style[k]=fcs(ele,k);//console.log(1)//这里如果写成ele.style[k]=fcs(ele,k)+'px'，里面的fcs(ele,k)是带单位的，且不是初始值，而是最终的目标值
						}
						
					}
					//console.log(cishu);//200
					callback.call(ele);
				}
					
				//if(startJSON[k]>=targetJSON[k]){
				//	clearInterval(Timer);
				//	startJSON[k]=targetJSON[k];
				//	callback.call(ele);
				//}
		},interval)//判断		
	}


		//oBtnn.onclick=function(){
		//	clearInterval(Timer);
		//}

			//获取计算后样式方法以及兼容性问题
		function fcs(ele,property){
			if(window.getComputedStyle){
				return getComputedStyle(ele)[property];
			}else{
				return ele.currentStyle[property];
				}
		}