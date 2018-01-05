	 
	
	//�˶����
	function animate(ele,targetJSON,times,callback){
		//�Զ�������
		ele.lock=true;
		//console.log(oAct.style[property]);
		//��ȡ�˶���Сʱ����
		if(window.navigator.userAgent.indexOf('MSIE')==-1){
			//�ִ������IE 10 ����
			var interval=10;			
		}else{
			//IE 9 8 7 6
			var interval=50;
		}
		var cishu=parseInt(times/interval);//�������㲽��stepJSON[];console.log(cishu);		
		//oBtn.onclick=function(){����¼��뺯������໥��ͻ
		//clearInterval(Timer);
		var startJSON={};
		for(var k in targetJSON){ //targetJSON[k] {'left':'600px', 'top':300, 'opacity':1}
			startJSON[k] = parseFloat(fcs(ele, k)); //�����ۼӸ�ֵ startJSON[]+=stepJSON[];
		}//console.log(startJSON[k]);

		var stepJSON={};
		for(var k in targetJSON){
			targetJSON[k]=parseFloat(targetJSON[k]);
			stepJSON[k]=(targetJSON[k]-startJSON[k])/cishu;//����	,TOP��Left  stepJSON==NAN? (targetJSON[k]Ϊ��string����)
		  //console.log(stepJSON[k]);
		}

			var count=0;
		  var Timer=setInterval(function(){
				for(var k in targetJSON){	
				startJSON[k]+=stepJSON[k];//�����ۼ�	
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
				

				//��ⶨʱ�������ʱ�� 
				//������
				count++;
				if(count==cishu){
					clearInterval(Timer);
					ele.lock=false;
					for(var k in targetJSON){
						if(k=='opacity'){
							ele.style[k]=targetJSON[k];
							ele.style.filter='alpha(opacity='+targetJSON[k]+')'
						}else{
							ele.style[k]=fcs(ele,k);//console.log(1)//�������д��ele.style[k]=fcs(ele,k)+'px'�������fcs(ele,k)�Ǵ�λ�ģ��Ҳ��ǳ�ʼֵ���������յ�Ŀ��ֵ
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
		},interval)//�ж�		
	}


		//oBtnn.onclick=function(){
		//	clearInterval(Timer);
		//}

			//��ȡ�������ʽ�����Լ�����������
		function fcs(ele,property){
			if(window.getComputedStyle){
				return getComputedStyle(ele)[property];
			}else{
				return ele.currentStyle[property];
				}
		}
	//导航二级菜单样式js
	// cloud zack sephiroth 为三个lil从上而下，打扰了
//	var oL=document.querySelectorAll('.lil');console.log(oL);
	var oC=document.getElementById('cloud');//console.log(oC);
	var oZk=document.getElementById('zack');//console.log(oZ);
	//↑这里oZ已经被占用了，强行改成了oZB, 打扰了
	var oS=document.getElementById('sephiroth');//console.log(oS);
	
	oC.onmouseover=function(){
		//console.log(oZ);console.log(oS);
		oZk.style.top=120+'px';
		oS.style.top=150+'px';
	}
	oC.onmouseout=function(){
		oZk.style.top=0+'px';
		oS.style.top=0+'px';
	}
	
	
	oZk.onmouseover=function(){
		oS.style.top=120+'px';
	}
	oZk.onmouseout=function(){
		oS.style.top=0+'px';
	}
	
//	oL.onmouseover=function(){
//		oS.style.top=160+'px';
//	}
//	oZ.onmouseout=function(){
//		oS.style.top=0+'px';
//	}

//吸顶功
	var oHeader=document.getElementsByClassName('header')[0];//console.log(oHeader)
	window.onscroll=function(){
		var t=document.body.scrollTop||document.documentElement.scrollTop;
		if (t>56) {
			oHeader.style.position="fixed";
			oHeader.style.top=-56+'px';
			oHeader.style.left=0+'px'
		}else{
			oHeader.style.position="";
			oHeader.style.top=0+'px';
			oHeader.style.left=0+'px'
			
		}
		//头部&滚动
		//用direction获取1(鼠标上移)||-1(鼠标下移)，表示鼠标滚动的方向。
//		if(event.wheelDelta){
//		 var direction=event.wheelDelta>0?1:-1;
//		 console.log(direction);
//		}
		
	}
//头部&滚动函数封装
//	document.onmousewheel=function(event){
//	document.title=event.wheelDelta;
//	if(event.wheelDelta>0){
//			oHeader.style.position="fixed";
//			oHeader.style.top=0+'px';
//			oHeader.style.left=0+'px'
//		}else{
//			oHeader.style.position="fixed";
//			oHeader.style.top=-56+'px';
//			oHeader.style.left=0+'px'
//		}
//}
//	window.onscroll=function mousewheelget(event){
//	event=event||window.event;
//	if(event.preventDefault){
//		event.preventDefault();
//	}else{
//		event.returnValue=false;
//	}
//	//用direction获取1(鼠标上移)||-1(鼠标下移)，表示鼠标滚动的方向。
//	if(event.wheelDelta){
//	 var direction=event.wheelDelta>0?1:-1;
//	 if(direction==1){
//			oHeader.style.position="fixed";
//			oHeader.style.top=0+'px';
//			oHeader.style.left=0+'px'
//		}
//	}else if(event.detail){
//		var direction=event.detail<0?1:-1;
//	}
//	if(direction==1){
//		oHeader.style.position="fixed";
//		oHeader.style.top=0+'px';
//		oHeader.style.left=0+'px'
//	}
// }

