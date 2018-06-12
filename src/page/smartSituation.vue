<template>
	 <!-- Main content -->
    <section class="content">
     	<div class="row">
	        <div class="col-lg-3 col-xs-6">
	          	<!-- small box -->
	          	<div class="small-box bg-aqua">
	           		<div class="inner">
	              		<h3>150</h3>
	              		<p>近一年科研产出量</p>
	            	</div>
	            	<div class="icon">
	              		<i class="ion ion-bag"></i>
	            	</div>
	            	<!-- <a href="#" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a> -->
	         	</div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-xs-6">
	         	<!-- small box -->
	        	<div class="small-box bg-green">
	            	<div class="inner">
	              		<h3>53<sup style="font-size: 20px">%</sup></h3>
	              		<p>科研产出增长率</p>
	            	</div>
	            	<div class="icon">
	             		<i class="ion ion-stats-bars"></i>
	           		</div>
	            	<!-- <a href="#" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a> -->
	          	</div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-xs-6">
	          	<!-- small box -->
	          	<div class="small-box bg-yellow">
	            	<div class="inner">
	             		 <h3>44</h3>

	              		<p>在校教职工数</p>
	            	</div>
	           		<div class="icon">
	              		<i class="ion ion-person-add"></i>
	            	</div>
	          		<!--  <a href="#" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a> -->
	          	</div>
	        </div>
	        <!-- ./col -->
	        <div class="col-lg-3 col-xs-6">
	          	<!-- small box -->
	          	<div class="small-box bg-red">
	           		 <div class="inner">
	              		<h3>20<sup style="font-size: 14px;font-weight: 200;">万册</sup></h3>

	             		<p>馆藏图书量</p>
	            	</div>
	            	<div class="icon">
	              		<i class="ion ion-ios-book"></i>
	            	</div>
	            	<!-- <a href="#" class="small-box-footer">更多 <i class="fa fa-arrow-circle-right"></i></a> -->
	          	</div>
	        </div>
	        <!-- ./col -->
	    </div> 
		<!-- 教职工总览 -->
      	<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-success">
            		<div class="box-header with-border">
             			<h3 class="box-title">教职工总览</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
           			<!-- /.box-header -->
	            	<div class="box-body">
	                	<div class="row">
		                	<div class="col-md-4">
		                  		<p class="text-center">
		                   			<strong>教育背景</strong>
		                  		</p>

		                  		<div class="chart">
			                   		 <!--  Chart  -->
			                    	<div id="myCharts1"  :style="{height:'300px'}"></div>
		                  		</div>
		                  		<!-- /.chart-responsive -->
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-4">
		                 		<p class="text-center">
		                    		<strong>职称分布</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts2" style="height: 300px;"></div>
		                 	 	</div>
		                	</div>
		                	<!-- /.col -->
		                	<div class="col-md-4">
		                 		<p class="text-center">
		                    		<strong>年龄分布</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts3" style="height: 300px;"></div>
		                 	 	</div>
		                	</div>
		                	<!-- /.col -->
	                	</div>
	              		<!-- /.row -->
	            	</div>
            		<!-- ./box-body -->
          		</div>
          		<!-- /.box -->
        	</div>
        	<!-- /.col -->
      	</div>
      	<!-- /.row -->
      	<!-- 科研分布 -->
		<div class="row">
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研产出</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div class="row">
	                  		<div class="chart">
		                   		 <!--  Chart  -->
		                    	<div id="myCharts4"  :style="{height:'250px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">获奖等级</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div class="row">
	                  		<div class="chart">
		                   		 <!--  Chart  -->
		                    	<div id="myCharts5"  :style="{height:'250px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>


	    <!-- 馆藏图书 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">馆藏图书</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div class="row">
	                  		<div class="chart">
		                   		 <!--  Chart  -->
		                    	<div id="myCharts6"  :style="{height:'300px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>

	    <!-- 学院资产 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">学院资产</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div class="row">
	                  		<div class="chart">
		                   		 <!--  Chart  -->
		                    	<div id="myCharts7"  :style="{height:'480px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>



      
    </section>
</template>

<script>
	var echarts = require('echarts');
	export default{
        data (){
            return {
                // msg:"123"
            }
        },
        mounted(){
		    this.drawMyCharts1();
		    this.drawMyCharts2();
		    this.drawMyCharts3();
		    this.drawMyCharts4();
		    this.drawMyCharts5();
		    this.drawMyCharts6();
		    this.drawMyCharts7();
		},
        methods:{
        	drawMyCharts1(){
        		var myChart1 = echarts.init(document.getElementById('myCharts1'));
	            myChart1.setOption({
	                tooltip : {
				        trigger: 'item',
				    },
				    legend: {
				        // orient: 'vertical',
				        data:['高中及大专以下','专科','本科','硕士及研究生','博士及研究生','其他'],
		                height:"80",
		                top:"220"
				    },
				    series : [
				        {
				            name: '教育背景',
				            type: 'pie',
				            radius : '50%',
				            center: ['50%', '35%'],
				          	labelLine:{
				            	normal:{
				            		show:false
				            	}
				            },
				            label: {
				                normal: {
				                    show: false,
				                }
				            },
				            data:[
				                {
				                	value:1548,
				                	itemStyle: {
										normal: {
											color: '#00acee',
										}
									},
									name:'高中及大专以下'
				                },
				                {
				                	value:310,
				                	itemStyle: {
										normal: {
											color: '#52cdd5',
										}
									},
									name:'专科'
				                },
				                {
				                	value:234,
				                	itemStyle: {
										normal: {
											color: '#79d9f1',
										}
									},
									name:'本科'
				                },
				                {
				                	value:135,
				                	itemStyle: {
										normal: {
											color: '#a7e7ff',
										}
									},
									name:'硕士及研究生'
				                
				                },
				                {
				                	value:335,
				                	itemStyle: {
										normal: {
											color: '#c8efff',
										}
									},
									name:'博士及研究生'
				                },
				                {
				                	value:335,
				                	itemStyle: {
										normal: {
											color: '#c8efff',
										}
									},
									name:'其他'
				                }
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
	            });
        	},
        	drawMyCharts2(){
        		var myChart2 = echarts.init(document.getElementById('myCharts2'));
				var option2 = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    calculable : true,
				    legend: {
				        orient: 'vertical',
				        data:['中级','高级','初级','副高','技师','员级','技师'],
		                height:"50",
		                top:"220"
				    },
				    series : [
				        {
				            name:'职称分布',
				            type:'pie',
				            radius : [20, 80],
				            center : ['50%', '35%'],
				            roseType : 'radius',
				            label: {
				                normal: {
				                    show: false
				                },
				                emphasis: {
				                    show: true
				                }
				            },
				            lableLine: {
				                normal: {
				                    show: false
				                },
				                emphasis: {
				                    show: true
				                }
				            },
				            data:[
				                {value:10, name:'中级'},
				                {value:5, name:'高级'},
				                {value:15, name:'初级'},
				                {value:25, name:'副高'},
				                {value:20, name:'技师'},
				                {value:35, name:'员级'},
				                {value:30, name:'正高'},
				                {value:20, name:'技师'}
				            ]
				        }
				    ]
				};
				myChart2.setOption(option2);
        	},
        	drawMyCharts3(){
        		var myChart3 = echarts.init(document.getElementById('myCharts3'));
				var option3 = {
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        orient: 'vertical',
				        data:['中级','初级','高级','中级','副高'],
		                height:"10",
		                top:"240"
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        top:"10%",
				        bottom: '25%',
				        containLabel: true
				    },
				    xAxis:  {
				        type: 'value',
				        splitLine: {
						    // lineStyle: {
						    //     color: ['#222b73']
						    // }
						},
				        axisLabel:{
							// textStyle: {
							// 	color:"#dfdfdf"
							// }
							
						}
				    },
				    yAxis: {
				        type: 'category',
				        data: ['小于30','30-50','35-40','40-45','45-50','55-60','大于60'],
				        axisLabel:{
							// textStyle: {
							// 	color:"#dfdfdf"
							// }
							
						}
				    },
				    series: [
				        {
				            name: '中级',
				            type: 'bar',
				            stack: '总量',
				            
				            label: {
				                normal: {
				                    show: false,
				                    position: 'inside',
				                }
				            },
				            data: [320, 302, 301, 334, 390, 330, 320],
				            itemStyle: {
								normal: {
									color: '#2ec7c9',
								}
							}
				        },
				        {
				            name: '初级',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: false,
				                    position: 'inside'
				                }
				            },
				            data: [120, 132, 101, 134, 90, 230, 210],
				            itemStyle: {
								normal: {
									color: '#5ab1ef',
								}
							}
				        },
				        {
				            name: '高级',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: false,
				                    position: 'inside',
				                    
				                }
				            },
				            data: [220, 182, 191, 234, 290, 330, 310],
				            itemStyle: {
								normal: {
									color: '#b6a2de',
								}
							}
				        },
				        {
				            name: '中级',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: false,
				                    position: 'inside'
				                }
				            },
				            data: [150, 212, 201, 154, 190, 330, 410],
				            itemStyle: {
								normal: {
									color: '#d87a80',
								}
							}
				        },
				        {
				            name: '副高',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                normal: {
				                    show: false,
				                    position: 'inside'
				                }
				            },
				            data: [100, 150, 30, 125, 253, 253, 345],
				            itemStyle: {
								normal: {
									color: '#2ec7c9',
								}
							}
				        }
				    ]
				};
				myChart3.setOption(option3);
        	},
        	drawMyCharts4(){
        		var myChart4 = echarts.init(document.getElementById('myCharts4'));
				var option4 = {
				    grid: {
				        containLabel: true,
				        top: '15%',
				        bottom:'15%'
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#222b73'
				            }
				        }
				    },
				    xAxis: [{
				        type: 'category',
				        axisTick: {
				            alignWithLabel: true
				        },
				        axisLabel:{
							interval: 0,
	         				
							// textStyle: {
							// 	color:"#dfdfdf"
							// }						
						},
				        data: ['著作','艺术','论文','专利'],
				    }],
				    yAxis: [{
				         
				    }, {
				        type: 'value',
				        min: 0,
				        name: '科研量',
				        // nameTextStyle:{
			         //      color:"#dfdfdf",
			         //    },
				        position: 'left',
				        axisLabel:{
							interval: 0,
	         				
							// textStyle: {
							// 	color:"#dfdfdf"
							// }						
						},
						splitLine: {
						    lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						}
				    }],
				    series: [ {
				        name: '科研产出',
				        type: 'bar',
				        barWidth: '30',
				        yAxisIndex: 1,
				        label: {
				            normal: {
				                show: true,
				                position: 'top'
				            }
				        },
				        data: [
				        {
				        	 value: 22,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#e8f018'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 33,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#7060b8'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 44,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#f8a0ff'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 55,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#90b0e0'
				        	 	}
				        	 }
				        }]
				    }]
				};
				myChart4.setOption(option4);
        	},
            drawMyCharts5(){
        		var myChart5 = echarts.init(document.getElementById('myCharts5'));
				var option5 = {
				    grid: {
				        containLabel: true,
				        top: '15%',
				        bottom:'15%'
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#222b73'
				            }
				        }
				    },
				    xAxis: [{
				        type: 'category',
				        axisTick: {
				            alignWithLabel: true
				        },
				        axisLabel:{
							interval: 0,					
						},
				        data: ['省级奖','国家级','市级奖','部级奖','校级奖','其他'],
				    }],
				    yAxis: [{
				         
				    }, {
				        type: 'value',
				        min: 0,
				        name: '获奖次数',
				        // nameTextStyle:{
			         //      color:"#dfdfdf",
			         //    },
				        position: 'left',
				        axisLabel:{
							interval: 0,
	         				
							// textStyle: {
							// 	color:"#dfdfdf"
							// }						
						},
						splitLine: {
						    lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						}
				    }],
				    series: [ {
				        name: '获奖等级',
				        type: 'bar',
				        barWidth: '30',
				        yAxisIndex: 1,
				        label: {
				            normal: {
				                show: true,
				                position: 'top'
				            }
				        },
				        data: [
				        {
				        	 value: 15,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#f2bfbb'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 12,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#ffe500'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 25,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#58c0e0'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 10,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#03b8a4'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 14,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#60a1f9'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 13,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#f66a73'
				        	 	}
				        	 }
				        }]
				    }]
				};
				myChart5.setOption(option5);
        	},
        	drawMyCharts6(){
        		var myChart6 = echarts.init(document.getElementById('myCharts6'));
				var option6 = {
					tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#222b73'
				            }
				        }
				    },
				    legend: {
				        data:['馆藏数','年度借阅次数'],
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['社科总论','航空航天','数理科学与化学','工业技术','艺术','生物科技','环境科学、安全科学','文化、科学、教育、体育','历史、地理','哲学类','其他类别','经济','自然科学总论','文学','语言、文字','综合性图书','军事类','交通运输','政治法律','天文学、地理科学','医药、卫生','马列类','农业科学'],
				            axisPointer: {
				                type: 'shadow'
				            },
				            splitLine: {
							    lineStyle: {
							        color: ['#222b73']
							    }
							},
							axisLabel:{
								// interval: 0,
	             				rotate: 20,
	             				textStyle: {
									color:"#333",
									fontSize : 12
								}
							},
					    }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            name: '馆藏数',
				            axisLabel: {
				                formatter: '{value} 万',
				    //             textStyle: {
								// 	color:"#dfdfdf"
								// }
				            },
				            splitLine: {
							    lineStyle: {
									color: '#ccc',
									type: 'dashed'
								}
							}
				        },
				        {
				            type: 'value',
				            name: '年度借阅次数',
				            min: 0,
				            max: 100,
				            // interval: 5,
				            // nameTextStyle:{
				            //   color:"#dfdfdf",
				            // },
				            axisLabel: {
				                formatter: '{value} ',
				                textStyle: {
									color:"#333"
								}
				            },
				            splitLine: {
							    lineStyle: {
									color: '#ccc',
									type: 'dashed'
								}
							}
				        }
				    ],
				    series: [
				        {
				            name:'馆藏数',
				            type:'bar',
				            data:[10, 20, 80, 200, 60, 70, 100,10, 20, 80, 200, 60, 70, 100,10, 20, 80, 200, 60, 70, 100,80,56],
				            itemStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(
				                        0, 0, 0, 1,
				                        [
				                            {offset: 0, color: '#ed66fa'},
				                            {offset: 1, color: '#8417bd'}
				                        ]
				                    ),
				                    
				                }
				            },
				        },
				        {
				            name:'年度借阅次数',
				            type:'line',
				            data:[10, 12, 30, 40, 60, 10, 50,10, 25, 38, 10, 60, 10, 50,11, 27, 30, 10, 60, 10, 50,61,55],
			            	itemStyle: {
			            		normal: {
			            			color:'#61e1e4'
			            		}
			            	},
			            	lineStyle: {
			            		normal: {
			            			color:'#61e1e4'
			            		}
			            	}
				            
				        }
				    ]	   
				};
				myChart6.setOption(option6);
        	},
        	drawMyCharts7(){
				var result = {"chartData":[{"data":[3734,564,4352,561,1236,250,240,780,580,880],"name":"自筹资金","y":13177},{"data":[2347,1340,1220,1444,711,299,880,380,590,430],"name":"其他经费","y":9641},{"data":[6266,4345,3041,2339,3768,1883,2489,4625,7424,3138],"name":"教育经费","y":39318},{"data":[2452,3423,567,255,334,456,364,976,783,454],"name":"基建经费","y":10064},{"data":[333,324,1342,1845,1432,432,1534,563,356],"name":"专项经费","y":8161},{"data":[455,1110,639,386,826,230,620,170,4550,240],"name":"捐赠","y":9226},{"data":[3394,1627,5125,2379,6171,7017,1678,1501,1628,526],"name":"科研经费","y":31046}],"categories":["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],"lineData":[3623,2500,4072,4278,5515,3754,8185,5583,3960,17]}

        		var dataColor = ['#FFB248', '#E01F54','#8FD3E8','#8C6AC4',"#f2ebbf", "#2ec7c9", "#b6a2de",'#22C3AA', '#7BD9A5', '#D95850',  "#5ab1ef", "#ffb980", "#d87a80", "#d87a80", "#8cbeb2", "#f3b562", "#f06060", '#5ab1ef']
				var positionArr = {
						left:[400,550,700,830,400,550,700,830,400,550,700,830,400,550,700,830,400,550,700,830],
						bottom:[200,200,200,200,165,165,165,165,130,130,130,130,95,95,95,95,60,60,50]
				};
				var seriseArr = [],piearr = [],legendarr = [],ArrName = [];
				var lineobj = {
					name: '缴费人数',
					type: 'line',
					cursor:'default',
					yAxisIndex: 1,
					itemStyle: {
						//2b5a84
						normal: {
							color: dataColor[10],
							borderWidth: 1,
							borderColor: dataColor[10]
						}
					},
					lineStyle: {
						normal: {
							color: dataColor[10]
						}
					},
					// smooth: true, //线条圆润
					data: result.lineData
				};
				for (var i = 0; i < result.chartData.length; i++) {
					var obj = {
						name: result.chartData[i].name,
						type: 'bar',
						cursor:'default',
						itemStyle: {
							normal: {
								color: dataColor[i]
							}
						},
						data: result.chartData[i].data	
					}
					seriseArr.push(obj);
					var pieobj = {
						name: result.chartData[i].name,
						value: result.chartData[i].y
					}
					piearr.push(pieobj)
                	ArrName.push(result.chartData[i].name);
           		};
           		var pies = {
					name: '',
					type: 'pie',
					cursor:'default',
					color: dataColor,
					center: ['20%', '74%'],
					radius: [15, '30%'],
//								roseType: 'area',
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: true
						},
					},
					data: piearr
				}
				seriseArr.push(lineobj);
				seriseArr.push(pies);
        		var myChart7 = echarts.init(document.getElementById('myCharts7'));
				var option7 = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#222b73'
				            }
				        }
					},
					
					grid: {
						top: 50,
						left:100,
						bottom: 250
					},
					legend: {
				        data:ArrName,
				        top:300,
				        left:450,
				        width: 550,
				        itemHeight:16
				    },
// 							legend: legendarr,
					xAxis: [{
						type: 'category',
						data: result.categories,
						axisLabel: {
							
							textStyle: {
								fontSize: 14
							}
						}
					}],
					yAxis: [{ //yAxis[0]
							type: 'value',
							name: '缴费总金额',
							nameLocation: 'end',
							nameTextStyle: {
								color: "#fff",
							},
							nameGap: 30,
							axisLabel: {
								formatter: '{value}',
								textStyle: {
									fontSize: 14
								},
							},
							axisLine: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#ccc',
									type: 'dashed'
								}
							}
						},
						{ //yAxis[1]
							type: 'value',
							name: '缴费人数',
							nameTextStyle: {
								color: "#fff",
							},
							nameLocation: 'end',
							nameGap: 30,
//										nameRotate: 270,
						
							axisLabel: {
								formatter: '{value}',
								textStyle: {
									fontSize: 14
								}
							},
							axisLine: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#ccc',
									type: 'dashed'
								}
							}
						}
					],
					series: seriseArr,
					dataZoom: {
						type: 'inside',
						filterMode: 'filter',
						start: 100,
				        end: 0,
						xAxisIndex: 0
					}
				};
				myChart7.setOption(option7);
        	},
        }

    }
</script>

<style scoped>

</style>