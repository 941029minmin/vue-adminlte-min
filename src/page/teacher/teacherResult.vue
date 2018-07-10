<template>
	<div class="">
	<!-- Main content -->
    <section class="content">
		<!-- header -->
    	<div class="row">
	        <div class="col-md-12">
	          <div class="box box-success">
	            <div class="box-header with-border">
	                  <h3 class="box-title">搜索</h3>
	                    <div class="box-tools pull-right">
	                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
	                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
	                  </div>
	                </div>
	                <!-- /.box-header -->
	                <div class="box-body">

	                    <div class="row">

	                    	<div class="col-lg-3 col-xs-6">
		                        <Select v-model="selectCollege" placeholder="请选择考核批次">
							        <Option v-for="item in colleges" :value="item" :key="item">{{ item}}</Option>
							    </Select>
					   		</div>
					   		<div class="col-lg-3 col-xs-6">
		                        <Select v-model="selectUnit" placeholder="请选择单位">
							        <Option v-for="item in units" :value="item" :key="item">{{ item}}</Option>
							    </Select>
					   		</div>
					   		<div class="col-xs-3">
    							<Button type="primary" icon="ios-search">搜索</Button>
					   		</div>
	                    </div>
	                    <div class="row" style="margin-top:15px">
		                	<div class="col-md-12">
			                    <div class="teaLable" v-for="item in biaoqian" >
			                        <input type="checkbox" name="checkbox" :data-labelauty="item" v-model="biaoqianArr" :value="item">
			                    </div>
			                </div>
			            </div>
	                </div>
	          </div>
	        </div>
	    </div>
	    <!-- ./header -->
	    <!-- 科研产出变化趋势 -->
	    <div class="row">
	      	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
	         			<h3 class="box-title">科研经费排名</h3>
	          			<div class="box-tools pull-right">
	           				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
	            			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
	         			</div>
	        		</div>
	            	<div class="box-body">
	            		<div class="row">
	            			<i-button class="backbtn" @click="goBack()" v-show="isShow">返回</i-button>
	                  		<div class="chart">

		                    	<div id="TeaCharts1"  :style="{height:'300px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	        <!-- <div class="col-md-8">
	          <div class="box box-success">
	            <div class="box-header with-border">
	                  <h3 class="box-title">科研产出变化趋势</h3>
	                    <div class="box-tools pull-right">
	                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
	                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
	                  </div>
	                </div>
	                <div class="box-body">
	                	<div class="row">
	                        <div class="chart">
	                          <div id="TeaCharts2"  :style="{height:'300px'}"></div>
	                        </div>
		                </div>
	                  
	                </div>
	          </div>
	        </div> -->

	    </div>
	    <div class="row">
	    	<div class="col-md-12">
	    		<div class="box    box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">教师综合业绩排名</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
		            	
	            		<table id="example1" class="table table-bordered table-striped">
		                	<thead>
		                		<tr>
		                  			<th>教师业绩</th>
				                  	<th>单位排名</th>
			                  		<th>学校排名</th>
			                  		<th>姓名</th>
				                  	<th>工号</th>
			                  		<th>任职单位</th>
			                  		<th>来校日期</th>
			                  		<th>最高学历</th>
			                  		<th>联系方式</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
		                			<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院（社会科学部）</th>
				                  	<th>2011/7/1</th>
				                  	<th>硕士研究生</th>
				                  	<th>13123549757</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院（社会科学部）</th>
				                  	<th>2011/7/1</th>
				                  	<th>硕士研究生</th>
				                  	<th>13123549757</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院（社会科学部）</th>
				                  	<th>2011/7/1</th>
				                  	<th>硕士研究生</th>
				                  	<th>13123549757</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院（社会科学部）</th>
				                  	<th>2011/7/1</th>
				                  	<th>硕士研究生</th>
				                  	<th>13123549757</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院（社会科学部）</th>
				                  	<th>2011/7/1</th>
				                  	<th>硕士研究生</th>
				                  	<th>13123549757</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	   
	     <!-- 科研影响因子排名 -->
		<div class="row">
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">教师业绩统计</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	                  		<!--  Chart  -->
	                    	<div id="TeaCharts2"  :style="{height:'300px'}"></div>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">教师业绩预测分析</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<i-button class="backbtn" @click="backList()" v-show="yejiList">返回</i-button>
	            		<div class="row" v-show="yejiLine">
	                  		<div class="chart">
		                    	<div id="TeaCharts3"  :style="{height:'300px'}"></div>
	                  		</div>
	            		</div>
	            		<table id="example1" class="table table-bordered table-striped"  v-show="yejiList">
		                	<thead>
		                		<tr>
		                  			<th>教师业绩</th>
				                  	<th>单位排名</th>
			                  		<th>学校排名</th>
			                  		<th>姓名</th>
				                  	<th>工号</th>
			                  		<th>任职单位</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
		                			<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>
		                		<tr>
									<th>89</th>
		                			<th>3</th>
				                  	<th>12</th>
				                  	<th>李华</th>
				                  	<th>20081243</th>
				                  	<th>马克思主义学院</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- ./科研影响因子排名 -->
	    <!-- 科研合作单位 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">教师业绩分布</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div id="TeaCharts4"  :style="{height:'300px'}"></div>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./科研合作单位 -->
    </section>
    <!-- /.content -->
	</div>
</template>

<script>
	// import datapick from "../../components/datapick.vue"
	import  '../../assets/js/jquery-labelauty.js'
	var echarts = require('echarts');
	export default { 
		data(){
			return {
				biaoqian: ['教学获奖', '教学建设项目','理论教学工作量','实验室建设项目','指导学科竞赛','指导学生发表论文','教材信息', '教学故事','课堂教学质量','其他教学工作量','指导实习工作量','指导学生科技立项','教研项目', '教研论文信息','教学成果获奖信息','其他教研工作说明','指导实验工作量','指导学生申请知识产权'],
                biaoqianArr:[],
				selectCollege:"",
                colleges:["第一批","第二批"],
                selectUnit :"",
                units:["单位1","单位2"],
                selectTeacher:"",
                teachers:["教师1","教师2"],
                yejiList:false,
                yejiLine:true,
                isShow:false
			}
		},
		components: {
			// datapick,
			
		},
		mounted(){
			$(':input').labelauty();
			this.drawTeaCharts1();
		    this.drawTeaCharts2();
		    this.drawTeaCharts3();
		    this.drawTeaCharts4();
		},
		methods:{
			goBack(){
				this.drawTeaCharts1();
				this.isShow = false;

			},
			backList(){
				this.yejiLine = !this.yejiLine;
				this.yejiList=!this.yejiList;
			},
			drawTeaCharts1(){
				let self = this;
				var myChart1 = echarts.init(document.getElementById('TeaCharts1'));
				var option1 = {
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
				        data: ['2013','2014','2015','2016','2017','2018'],
				    }],
				    yAxis: [{
				         
				    }, {
				        type: 'value',
				        min: 0,
				        name: '平均业绩指数',
				        position: 'left',
				        axisLabel:{
							interval: 0,						
						},
						splitLine: {
						    lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						}
				    }],
				    series: [ {
				        name: '平均业绩指数',
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
				        },
				        {
				        	 value: 83,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#7600b8'
				        	 	}
				        	 }
				        },
				        {
				        	 value: 13,
				        	 itemStyle:{
				        	 	normal:{
				        	 		color:'#706b68'
				        	 	}
				        	 }
				        }]
				    }]
				};
				myChart1.setOption(option1);
				myChart1.on('click', function (param) {
					name = param.name;
					self.isShow = true
					option1.xAxis[0].data=['信息科技学院','物理材料科学学院','生态与环境科学学院','设计学院','经济与管理学院','地理学科学院'];
					myChart1.setOption(option1);
				});
			},
			drawTeaCharts2(){
				var myChart2 = echarts.init(document.getElementById('TeaCharts2'));
				var option2 = {
					color: ['#2ec7c9','#ffa701','#90b8e0', '#8dfcf8'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data:['81-85','86-90','91-95','96-100'],
				        textStyle: {
							fontSize: 14
						},
						top: "250"
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        top:"10%",
				        bottom: '20%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['2015','2016','2017','2018'],
				            axisLabel:{
								interval: 0,
	             				rotate: 30,
								// textStyle: {
								// 	color:"#dfdfdf"
								// }
								
							}
				        }
				    ],
				    yAxis : [
				        {
				        	name: '人数',
				        	position: 'left',
				            type : 'value',
							splitLine: {
							    lineStyle: {
									color: '#ccc',
									type: 'dashed'
								}
							}
				        }
				    ],
				    series : [
				        {
				            name:'81-85',
				            type:'bar',
				            barWidth: '15',
				            data:[70,80,90,50]
				        },
				        {
				            name:'86-90',
				            type:'bar',
				            barWidth: '15',
				            data:[50,10,50,80]
				        },
				        {
				            name:'91-95',
				            type:'bar',
				             barWidth: '15',
				            data:[5,50,50,40]
				        },
				        {
				            name:'96-100',
				            type:'bar',
				            barWidth: '15',
				            data:[65,30,70,24]
				        }
				    ]
				};
				myChart2.setOption(option2);
			},
			drawTeaCharts3(){
				let self = this;
	            var myChart3 = echarts.init(document.getElementById('TeaCharts3'));
	            var option3 = {
	                tooltip: {
						trigger: 'item',
					},
					xAxis: {
						type: 'category',
						splitLine: {
							show: false
						},
						axisLabel: {
							interval: 0,
						},
						data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
					},
					grid: {
						left: '5%',
						top:'13%',
						containLabel: true 
					},
					yAxis: {
						type: 'value',
						name: '业绩',
						max:100,
						splitLine: {
							lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						},
						axisLabel: {
							formatter: '{value}',
						},
					},
					series: [{
						name: '教师业绩',
						type: 'line',
						itemStyle: {
							normal: {
								color: '#3ab1b6'
							}
						},
						lineStyle: {
							normal: {
								color: '#3ab1b6'
							}
						},
						data: [78, 88, 85, 96, 92, 84, 97]
					}]
	            };
	            myChart3.setOption(option3);
	            myChart3.on('click', function (param) {
	            	var that=this;
					name = param.name;
					self.yejiList=!self.yejiList;
                	self.yejiLine=!self.yejiLine;
				});
	        },
	        drawTeaCharts4(){
				var myChart4 = echarts.init(document.getElementById('TeaCharts4'));
				var option4 = {
					tooltip: {
				        trigger: 'item',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '5%',
				        right: '5%',
				        top:'10%',
				        bottom:'15%',
				    },
				    xAxis: {
						type: 'category',
				        data: ['计算机学院','设计学院','马克思主义学院（社会科学部）','地理学科学院、','经济与管理学院'],
						splitLine: {
							
						},
						axisLabel:{
							interval: 0,
             				// rotate: 30,
						}
					},
				   
				    yAxis: {
				        type: 'value',
				 		name:"教师业绩",
				        nameTextStyle: {
				            // color: '#dfdfdf',
				            fontSize: 14,
				        },
				        axisLabel: {
				        	 formatter: '{value}',
				            // formatter: '{value} CNY/㎡',
				            textStyle: {
								// color: "#dfdfdf"
							}
				        },
				       axisTick: {
				            show: false,
				        },
				        axisLine: {
				            lineStyle: {
				                // color: '#3259B8',
				        }},
				        splitLine: {
						    lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						}
				        
				    },
				    series: [{
				            name: 'boxplot',
				            type: 'boxplot',
				            data: [
				      			[1,15,50,65,88],
				   				[2,20,55,70,90],
								[2,33,60,80,95],
								[1,16,40,70,80],
								[1,24,47,68,85]
							],
				            itemStyle: {
				                normal:{
				                    borderColor: {
				                    type: 'linear',
				                    x: 0,
				                    y: 0,
				                    x2: 0,
				                    y2: 1,
				                    colorStops: [{
				                        offset: 0,
				                        color: '#F02FC2' // 0% 处的颜色
				                    }, {
				                        offset: 1,
				                        color: '#3EACE5' // 100% 处的颜色
				                    }],
				                    globalCoord: false // 缺省为 false
				                },
				                borderWidth:2,
				                color: {
				                    type: 'linear',
				                    x: 0,
				                    y: 0,
				                    x2: 0,
				                    y2: 1,
				                    colorStops: [{
				                        offset: 0,
				                        color: 'rgba(240,47,194,0.8)'  // 0% 处的颜色
				                    }, {
				                        offset: 1,
				                        color: 'rgba(62,172,299,0.8)' // 100% 处的颜色
				                    }],
				                    globalCoord: false // 缺省为 false
				                },
				            }
				            },
				            tooltip: {
				                formatter: function(param) {
				                    return [

				                        '教师业绩最大值: ' + param.data[5]  ,
				                        '教师业绩3/4中位数: ' + param.data[4] ,
				                        '教师业绩平均值: ' + param.data[3] ,
				                        '教师业绩1/4中位数: ' + param.data[2] ,
				                        '教师业绩最小值: ' + param.data[1] 
				                    ].join('<br/>')
				                }
				            }
				        },

				    ]
				};
				myChart4.setOption(option4);
			},
			searchEvent(data1,data2,data3){
				console.log(data1+','+data2+','+data3);
				this.drawTeaCharts2();
			}
		},
		created() {
		}
	}
</script>

<style scoped>
	@import "../../assets/css/jquery-labelauty.css";
	.teaLable{
	    float: left;
	    padding:5px 10px;
	}
	.backbtn{
		float:right;
		margin-right:3%;	}
</style>