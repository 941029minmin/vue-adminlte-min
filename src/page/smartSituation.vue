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
	    <!-- 学生总览 -->
      	<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-success">
            		<div class="box-header with-border">
             			<h3 class="box-title">学生总览</h3>
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
		                   			<strong>学生分布</strong>
		                  		</p>

		                  		<div class="chart">
			                   		 <!--  Chart  -->
			                    	<div id="myCharts8"  :style="{height:'300px'}"></div>
		                  		</div>
		                  		<!-- /.chart-responsive -->
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-4">
		                 		<p class="text-center">
		                    		<strong>政治面貌</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts9" style="height: 300px;"></div>
		                 	 	</div>
		                	</div>
		                	<!-- /.col -->
		                	<div class="col-md-4">
		                 		<p class="text-center">
		                    		<strong>少数民族TOP10</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts10" style="height: 300px;"></div>
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
      	<!-- /.学生总览 -->
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
	    <!-- 近十年购买图书投放 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">近十年购买图书投放</h3>
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
		                    	<div id="myCharts11"  :style="{height:'400px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- ./近十年购买图书投放 -->
	    <!-- 一卡通消费 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">一卡通消费</h3>
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
		                    	<div id="myCharts12"  :style="{height:'480px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- 抵消群体 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">低消群体</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="col lapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<table id="example1" class="table table-bordered table-striped">
		                	<thead>
		                		<tr>
		                  			<th>编号</th>
				                  	<th>学号</th>
			                  		<th>姓名</th>
				                  	<th>学院</th>
				                  	<th>平均消费额</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>1111111</th>
			                  		<th>李华</th>
				                  	<th>文化创意学院</th>
				                  	<th>5.1</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>1111111</th>
			                  		<th>李华</th>
				                  	<th>文化创意学院</th>
				                  	<th>5.1</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>1111111</th>
			                  		<th>李华</th>
				                  	<th>文化创意学院</th>
				                  	<th>5.1</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>1111111</th>
			                  		<th>李华</th>
				                  	<th>文化创意学院</th>
				                  	<th>5.1</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>1111111</th>
			                  		<th>李华</th>
				                  	<th>文化创意学院</th>
				                  	<th>5.1</th>
		                		</tr>
		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./授课信息 -->

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
		    this.drawMyCharts8();
		    this.drawMyCharts9();
		    this.drawMyCharts10();
		    this.drawMyCharts11();
		    this.drawMyCharts12();
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
					//roseType: 'area',
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
							//nameRotate: 270,
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
        	drawMyCharts8(){
        		var myChart8 = echarts.init(document.getElementById('myCharts8'));
	            var option8 = {
				    tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}({d}%)"
					},
					legend: {
						data: ['播音主持艺术学院', '电视艺术学院', '电影学院', '电子信息学院', '动画学院', '管理学院', '国际文化传播学院', '设计艺术学院', '文化创意学院', '文学院'],
						
						height: "120",
						top: "200",
						// type: 'scroll',
					},
					series: [{
						name: '学院分布',
						type: 'pie',
						radius: ['56%', '40%'],
						center: ['50%', '30%'],
						avoidLabelOverlap: false,
						labelLine: {
							normal: {
								show: false
							}
						},
						label: {
							normal: {
								show: false,
							}
						},
						data: [{
							value: 100,
							itemStyle: {
								normal: {
									color: '#8192d6',
								}
							},
							name: "播音主持艺术学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#61a0a8',
								}
							},
							name: "电视艺术学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#d48265',
								}
							},
							name: "电影学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#91c7ae',
								}
							},
							name: "电子信息学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#749f83',
								}
							},
							name: "动画学院"
						}, {
							value: 100,
							itemStyle: {
								normal: {
									color: '#ca8622',
								}
							},
							name: "管理学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#bda29a',
								}
							},
							name: "国际文化传播学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#bfbfbf',
								}
							},
							name: "设计艺术学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#c23531',
								}
							},
							name: "文化创意学院"
						}, {
							value: 100,

							itemStyle: {
								normal: {
									color: '#2f4554',
								}
							},
							name: "文学院"
						}, ]
					}]
				};
				myChart8.setOption(option8);
        	},
        	drawMyCharts9(){
        		var myChart9 = echarts.init(document.getElementById('myCharts9'));
	            var option9 = {
				    tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						data: ['共青团员', '党员', '预备党员', '群众', '其他'],
						// textStyle: {
						// 	color: "#ffffff"
						// },
						height: "50",
						top: "220"
					},
					series: [{
						name: '政治面貌',
						type: 'pie',
						radius: '55%',
						center: ['50%', '30%'],
						labelLine: {
							normal: {
								show: false
							}
						},
						label: {
							normal: {
								show: false,
							}
						},
						data: [{
							value: 335,
							itemStyle: {
								normal: {
									color: '#b4a2de',
								}
							},
							name: '共青团员'
						}, {
							value: 310,
							itemStyle: {
								normal: {
									color: '#5ab5ef',
								}
							},
							name: '党员'
						}, {
							value: 234,
							itemStyle: {
								normal: {
									color: '#ffb672',
								}
							},
							name: '预备党员'
						}, {
							value: 135,
							itemStyle: {
								normal: {
									color: '#6ed2e9',
								}
							},
							name: '群众'

						}, {
							value: 1548,
							itemStyle: {
								normal: {
									color: '#2ec9c5',
								}
							},
							name: '其他'
						}],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};
				myChart9.setOption(option9);
        	},
        	drawMyCharts10(){
        		var myChart10 = echarts.init(document.getElementById('myCharts10'));
	            var option10 = {
				    tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						// splitLine: {
						// 	lineStyle: {
						// 		color: ['#222b73']
						// 	}
						// },
						// axisLabel: {
						// 	textStyle: {
						// 		color: "#dfdfdf"
						// 	}

						// }
					},
					yAxis: {
						type: 'category',
						data: ['满族', '回族', '土家族', '壮族', '蒙古族', '苗族', '朝鲜族', '彝族', '黎族', '汉族'],
						// axisLabel: {
						// 	textStyle: {
						// 		color: "#dfdfdf"
						// 	}

						// }
					},
					series: [{
						name: '生源地TOP10',
						type: 'bar',
						stack: '总量',
						barWidth: '10',
						label: {
							normal: {
								show: true,
								position: 'right',
								textStyle: {
									color: '#333'
								}
							}
						},
						data: [150, 180, 220, 268, 400, 500, 600, 700, 800, 900],
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									1, 0, 0, 0, [{
										offset: 0,
										color: '#02b2d4'
									}, {
										offset: 1,
										color: '#212f76'
									}]
								),
								barBorderRadius: [0, 10, 10, 0]
							}
						},
					}]
				};
				myChart10.setOption(option10);
        	},
        	drawMyCharts11(){
        		var result = {"chartData":[{"data":[189266.78,140644.5,78171.42,187702.98,126153.21,61791.695,122482.39,87138.13,88507.47,168195.89],"name":"社科总论","y":1250054.4},{"data":[1167.1,914.6,441.0,682.0,2026.0,563.8,192.0,787.0,607.0,111.1],"name":"航空、航天","y":7491.6},{"data":[37424.426,30820.701,17428.68,17423.9,19275.04,7819.0015,13622.199,21441.316,14365.599,24272.885],"name":"数理科学和化学","y":203893.73},{"data":[532027.75,497000.88,344740.84,387271.47,470108.66,256183.19,274367.78,457696.72,408966.88,627385.06],"name":"工业技术","y":4255749.5},{"data":[599655.94,947302.5,398641.03,925462.2,748795.25,693015.94,715650.94,1085553.9,1333664.0,1715902.1],"name":"艺术","y":9163644.0},{"data":[7257.3,5321.4,825.0,4388.8,2289.0,3246.6,816.0,4537.2,6557.3994,8410.199],"name":"生物科学","y":43648.9},{"data":[3669.5,3021.0002,1595.9,2038.6,3370.5,569.7,913.2,3296.4001,3125.6,2876.5],"name":"环境科学、安全科学","y":24476.9},{"data":[463120.16,467085.22,350642.03,463256.34,684556.06,258769.17,258608.56,334350.75,349021.12,772835.9],"name":"文化、科学、教育、体育","y":4402245.5},{"data":[295752.28,309845.28,124901.97,329997.78,383861.56,110769.945,142019.66,264944.12,213107.06,409091.0],"name":"历史、地理","y":2584290.5},{"data":[253910.78,223901.86,110782.06,220125.81,206439.62,81074.01,278228.25,145451.67,104143.055,344742.8],"name":"哲学类","y":1968799.8},{"data":[1564.2,1338.9,5266.6094,555.4,1199.4,393.94998,342.0,895.0,1356.0,134.8],"name":"其他类别","y":13046.26},{"data":[239397.89,228417.83,111849.82,859259.25,316245.66,107079.96,333222.53,273851.25,186214.25,488726.25],"name":"经济","y":3144264.8},{"data":[12634.898,13237.599,11099.7,7182.599,31660.0,10364.399,7319.8,6237.2,5289.3003,36282.758],"name":"自然科学总论","y":141308.25},{"data":[693000.1,948545.5,214789.2,1935181.0,560425.44,268220.4,608124.44,624966.7,500323.94,914110.6],"name":"文学","y":7267687.5},{"data":[233083.33,202353.64,118455.39,204867.5,157776.1,62869.01,83924.875,182701.1,145142.67,291568.44],"name":"语言、文字","y":1682742.0},{"data":[75636.38,98425.05,36115.46,871914.94,236922.39,23116.867,27349.17,133109.19,75387.2,318442.56],"name":"综合性图书","y":1896419.2},{"data":[14959.0205,7681.3003,4231.8003,5110.301,6383.4,4069.2004,4412.6006,6305.2993,4420.0,20580.902],"name":"军事类","y":78153.83},{"data":[2307.2002,1542.1,2039.3,1313.6,4443.3003,2787.4,1747.0,1993.0,3613.2,4686.6],"name":"交通运输","y":26472.7},{"data":[176389.19,171079.98,82563.41,549795.5,162751.69,71673.67,48153.504,158163.83,105563.72,250754.9],"name":"政治法律","y":1776889.4},{"data":[5083.8105,4798.4004,2602.4001,6615.4004,5221.8003,2251.9001,2311.4001,3574.2002,4109.0996,10275.649],"name":"天文学、地球科学","y":46844.062},{"data":[25437.201,23583.56,11481.749,16073.303,29065.402,6783.151,3298.9,9203.689,7605.248,26109.271],"name":"医药、卫生","y":158641.47},{"data":[18579.102,19084.701,8490.8,18765.299,13027.599,5521.801,6009.2,19202.504,11925.599,25157.686],"name":"马列类","y":145764.3},{"data":[4444.3105,2598.5002,1642.3,1516.1,9744.9,1547.8999,424.0,2619.5,2677.0,8531.7],"name":"农业科学","y":35746.21}],"categories":["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"],"lineData":[3885769.0,4348544.5,2038797.9,7016500.5,4181742.5,2040482.6,2933540.5,3828019.8,3575692.2,6469185.0]};
				var ArrName = new Array();
				var ArrY = new Array();
				var ArrData = new Array();
				for (var i = 0; i < result.chartData.length; i++) {
                    ArrName.push(result.chartData[i].name);
                    ArrData.push(result.chartData[i].data);
				};
        		var dataColor = ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#d87a80", "#f2ebbf", "#8cbeb2", "#f3b562", "#f06060", '#5ab1ef',"#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#d87a80", "#f2ebbf", "#8cbeb2", "#f3b562", "#f06060", "#f2ebbf", "#8cbeb2"]
				var dataName = ArrName;
        		var myChart11 = echarts.init(document.getElementById('myCharts11'));
	            var option11 = {
				    tooltip: {
						trigger: 'axis'
					},
					grid: {
						top:30,
						bottom: 130
					},
					legend: { 
						data: dataName,
						textStyle: {
							// color: '#dfdfdf',
							fontSize: 14
						},
						top:"320",
					},
					xAxis: [{
						type: 'category',
						data: result.categories,
						axisLabel: {
							// formatter: '{value}',
							textStyle: {
								// color: '#dfdfdf',
								fontSize: 14
							}
						}
					}],
					yAxis: [{ 
							type: 'value',
							name: '分类图书投入',
							nameLocation: 'end',
							nameTextStyle: {
								// color: "#dfdfdf",
							},
							axisLabel: {
								formatter: '{value}',
								textStyle: {
									// color: '#dfdfdf',
									fontSize: 14
								},
							},
							axisLine: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#3f7098',
									type: 'dashed'
								}
							}
						},
						{ 
							type: 'value',
							name: '购书总投入',
							nameTextStyle: {
								// color: "#dfdfdf",
							},
							nameLocation: 'end',
							axisLabel: {
								formatter: '{value}',
								textStyle: {
									// color: '#dfdfdf',
									fontSize: 14
								}
							},
							axisLine: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#3f7098',
									type: 'dashed'
								}
							}
						}
					],
					series: [{
							name: ArrName[0],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[0]
								}
							},
							data: ArrData[0]
						},
						{
							name: ArrName[1],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[1]
								}
							},
							data: ArrData[1]
						},
						{
							name: ArrName[2],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[2]
								}
							},
							data: ArrData[2]
						},
						{
							name: ArrName[3],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[3]
								}
							},
							data: ArrData[3]
						},
						{
							name: ArrName[4],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[4]
								}
							},
							data: ArrData[4]
						},
						{
							name: ArrName[5],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[5]
								}
							},
							data: ArrData[5]
						},
						{
							name: ArrName[6],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[6]
								}
							},
							data: ArrData[6]
						},
						{
							name: ArrName[7],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[7]
								}
							},
							data: ArrData[7]
						},
						{
							name: ArrName[8],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[8]
								}
							},
							data: ArrData[8]
						},
						{
							name: ArrName[9],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[9]
								}
							},
							data: ArrData[9]
						},
						{
							name: ArrName[10],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[10]
								}
							},
							data: ArrData[10]
						},
						{
							name: ArrName[11],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[11]
								}
							},
							data: ArrData[11]
						},
						{
							name: ArrName[12],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[12]
								}
							},
							data: ArrData[12]
						},
						{
							name: ArrName[13],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[13]
								}
							},
							data: ArrData[13]
						},
						{
							name: ArrName[14],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[14]
								}
							},
							data: ArrData[14]
						},
						{
							name: ArrName[15],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[15]
								}
							},
							data: ArrData[15]
						},
						{
							name: ArrName[16],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[16]
								}
							},
							data: ArrData[16]
						},
						{
							name: ArrName[17],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[17]
								}
							},
							data: ArrData[17]
						},
						{
							name: ArrName[18],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[18]
								}
							},
							data: ArrData[18]
						},
						{
							name: ArrName[19],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[19]
								}
							},
							data: ArrData[19]
						},
						{
							name: ArrName[20],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[20]
								}
							},
							data: ArrData[20]
						},
						{
							name: ArrName[21],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[21]
								}
							},
							data: ArrData[21]
						},
						{
							name: ArrName[22],
							type: 'bar',
							cursor:'default',
							itemStyle: {
								normal: {
									color: dataColor[22]
								}
							},
							data: ArrData[22]
						},
						{
							name: '日人均消费',
							type: 'line',
							cursor:'default',
							yAxisIndex: 1,
							itemStyle: {
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
							smooth: true, //线条圆润
							data: result.lineData
						}
					],
					dataZoom: {
						type: 'inside',
						filterMode: 'filter',
						start: 100,
				        end: 0,
					}
				};
				myChart11.setOption(option11);
        	},
        	drawMyCharts12(){
				var result = {"chartData":[{"data":[374,54,52,51,36,50,40,80,50,80],"name":"水费充值","y":1177},{"data":[237,340,20,14,71,29,80,80,50,40],"name":"食堂","y":9641},{"data":[66,34,34,33,36,18,89,25,24,38],"name":"打印","y":318},{"data":[52,23,57,55,34,46,36,97,83,54],"name":"洗衣机","y":10064},{"data":[33,24,42,45,32,42,14,63,56],"name":"班车","y":161},{"data":[55,110,69,36,86,20,60,70,50,40],"name":"电费充值","y":226},{"data":[34,127,25,279,171,17,178,151,128,56],"name":"其他","y":3146}],"categories":['2017-08-21', '2017-08-22', '2017-08-23', '2017-08-24', '2017-08-25', '2017-08-26', '2017-08-27'],"lineData":[3623,2500,4072,4278,5515,3754,8185,5583,3960,17]}

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
					//roseType: 'area',
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
        		var myChart12 = echarts.init(document.getElementById('myCharts12'));
				var option12 = {
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
							//nameRotate: 270,
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
				myChart12.setOption(option12);
        	},
        },
        

    }
</script>

<style scoped>

</style>