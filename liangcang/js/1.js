	 
	
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