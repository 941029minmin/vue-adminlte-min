<template>
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
	                        <div class="col-xs-3">
		                        <Select v-model="selectCollege" placeholder="请选择校区">

							        <Option v-for="item in colleges" :value="item" :key="item">{{ item}}</Option>
							    </Select>
					   		</div>
					   		<div class="col-xs-3">
					   			<DatePicker type="date" placeholder="开始日期" style="width:100%"></DatePicker>
					   		</div>
					   		<div class="col-xs-3">
					   			<DatePicker type="date" placeholder="结束日期" style="width:100%"></DatePicker>
					   		</div>
					   		<div class="col-xs-3">
    							<Button type="primary" icon="ios-search">搜索</Button>
					   		</div>

	                  </div>
	                </div>
	          </div>
	        </div>
	    </div>
	    <!-- ./header -->
		<!--科研人员构成 -->
      	<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-success">
            		<div class="box-header with-border">
             			<h3 class="box-title">科研人员构成</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
           			<!-- /.box-header -->
	            	<div class="box-body">
	                	<div class="row">
		                	<div class="col-md-6">
		                  		<p class="text-center">
		                   			<strong>人员类型</strong>
		                  		</p>

		                  		<div class="chart">
			                   		 <!--  Chart  -->
			                    	<div id="myCharts1"  :style="{height:'300px'}"></div>
		                  		</div>
		                  		<!-- /.chart-responsive -->
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-6">
		                 		<p class="text-center">
		                    		<strong>学历分布</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts2" style="height: 300px;"></div>
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
             			<h3 class="box-title">职称分布</h3>
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
		                    	<div id="myCharts3"  :style="{height:'250px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">项目分类</h3>
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
	    </div>

	    <!--项目构成 -->
      	<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-success">
            		<div class="box-header with-border">
             			<h3 class="box-title">科研项目构成</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
           			<!-- /.box-header -->
	            	<div class="box-body">
	                	<div class="row">
		                	<div class="col-md-6">
		                  		<p class="text-center">
		                   			<strong>项目性质</strong>
		                  		</p>

		                  		<div class="chart">
			                   		 <!--  Chart  -->
			                    	<div id="myCharts5"  :style="{height:'250px'}"></div>
		                  		</div>
		                  		<!-- /.chart-responsive -->
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-6">
		                 		<p class="text-center">
		                    		<strong>项目来源</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts6" style="height: 250px;"></div>
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


	    <!--科研人员构成 -->
      	<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-success">
            		<div class="box-header with-border">
             			<h3 class="box-title">科研产出分布</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
           			<!-- /.box-header -->
	            	<div class="box-body">
	                	<div class="row">
		                	<div class="col-md-6">
		                  		<p class="text-center">
		                   			<strong>科研产出</strong>
		                  		</p>

		                  		<div class="chart">
			                   		 <!--  Chart  -->
			                    	<div id="myCharts7"  :style="{height:'300px'}"></div>
		                  		</div>
		                  		<!-- /.chart-responsive -->
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-6">
		                 		<p class="text-center">
		                    		<strong>获奖等级</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myCharts8" style="height: 300px;"></div>
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

      	<!-- 科研产出变化趋势 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研产出变化趋势</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<div class="chart">
                    		<div id="myCharts9" style="height: 300px;"></div>
                 	 	</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- /.科研产出变化趋势 -->

	    <!-- 重点学科 -->
		<!-- <div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">重点学科</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		
	            	<div class="box-body">
	            		<table id="example1" class="table table-bordered table-striped">
		                	<thead>
		                		<tr>
		                  			<th>科研单位</th>
				                  	<th>科研名称</th>
			                  		<th>学科带头人</th>
				                  	<th>科研组成员</th>
				                  	<th>开始时间</th>
				                  	<th>结束时间</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
			                  		<th @click="goParam(teacherID+1)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div> -->

    </section>
</template>

<script>
	var echarts = require('echarts');
	export default{
        data (){
            return {
                // msg:"123"
                teacherID:'123',
                selectCollege:"",
                colleges:["校本部","安吉校区"]
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
		},
        methods:{
        	goParam:function(ID){
              this.$router.push({name:"TeacherFiles",path:'/teacher/TeacherFiles', params: {'teacherID': ID}})
          	},
        	drawMyCharts1(){
        		var myChart1 = echarts.init(document.getElementById('myCharts1'));
        		var option1 = {
        			color: ['#2ec7c9','#ffa701','#90b8e0'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data:['外校老师','本校老师','本校学生'],
				        textStyle: {
							fontSize: 14
						},
						top: "250"
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        top:"5%",
				        bottom: '20%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['第一发明','著作作者类型','获奖人类型','艺术作品作者类型','Other'],
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
				            name:'外校老师',
				            type:'bar',
				            barWidth: '15',
				            data:[70,80,90,50,11]
				        },
				        {
				            name:'本校老师',
				            type:'bar',
				            barWidth: '15',
				            data:[50,10,50,80,40]
				        },
				        {
				            name:'本校学生',
				            type:'bar',
				             barWidth: '15',
				            data:[5,50,50,40,30]
				        }
				    ]
        		}
        		myChart1.setOption(option1);
        	},
        	drawMyCharts2(){
        		var myChart2 = echarts.init(document.getElementById('myCharts2'));
				var dataTime = ['第一发明','著作作者类型','获奖人类型','艺术作品作者类型','Other'];
				var dataName5 = ['博士毕业','硕士毕业','本科毕业','大专毕业','中专毕业','其他'];
				var dataColor5 = ['#ffa701', '#8dfcf8', '#fc989a' ,'#ffeeba', '#07c997', '#90b8e0'];
				var option2 = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: dataName5,
						orient: 'vertical',
						textStyle: {
							// color: '#dfdfdf',
							fontSize: 14
						},
						height:"50",
						top: '250'
					},
					grid: {
						left: '3%',
				        right: '4%',
				        top:"5%",
				        bottom: '15%',
				        containLabel: true
					},
					yAxis: {
						name: '',
						type: 'value',
						nameLocation: 'middle',
						axisLabel: {
							formatter: '{value}',
							textStyle: {
								fontSize: 14
							},
						},
						// axisLine: {
						// 	show: false
						// },
						splitLine: {
						    lineStyle: {
								color: '#ccc',
								type: 'dashed'
							}
						}
					},
					xAxis: {
						type: 'category',
						data: dataTime,
						axisLabel: {
							// formatter: '{value}',
							textStyle: {
								// color: '#dfdfdf',
								fontSize: 14
							},
							rotate: 30,
							interval: 0,
							margin: 30
						},
						axisTick: {
							inside: false,
							length: 15,
							// lineStyle: {
							// 	color: '#222b73'
							// }
						}
					},
					series: [{
							name: dataName5[0],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[0]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [3, 2, 1, 3, 4]
						},
						{
							name: dataName5[1],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[1]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [3, 2, 1, 2, 1]
						},
						{
							name: dataName5[2],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[2]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [3, 2, 1, 1, 2]
						},
						{
							name: dataName5[3],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[3]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [4, 1, 1, 1, 1]
						},
						{
							name: dataName5[4],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[4]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [2, 2, 1, 2, 1]
						},
						{
							name: dataName5[5],
							type: 'bar',
							stack: '总量',
							barWidth: 40,
							label: {
								normal: {
									show: false,
									position: 'insideRight'
								}
							},
							itemStyle: {
								normal: {
									color: dataColor5[5]
								},
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							data: [3, 2, 2, 1, 1]
						}
					],
					dataZoom: {
						type: 'inside',
						filterMode: 'filter'
					}
				};
				myChart2.setOption(option2);
        	},
        	drawMyCharts3(){
        		var myChart3 = echarts.init(document.getElementById('myCharts3'));
				var option3 = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        data:['著作作者','专利发明','获奖人','艺术作品作者','论文作者'],
		                
		                height:"50",
		                top:"180"
				    },
				    series : [
				        {
				            name: '职称分布',
				            type: 'pie',
				            radius : '60%',
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
				                	value:600,
				                	itemStyle: {
										normal: {
											color: '#39c9bc',
										}
									},
									name:'著作作者'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#fad02f',
										}
									},
									name:'专利发明'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#b1d781',
										}
									},
									name:'获奖人'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#ffb980',
										}
									},
									name:'艺术作品作者'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#d87a80',
										}
									},
									name:'论文作者'
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
				};
				myChart3.setOption(option3);
        	},
        	drawMyCharts4(){
        		var myChart4 = echarts.init(document.getElementById('myCharts4'));
				var option4 = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        data:['省科技厅计划项目','省社联项目','国家广电总局项目','重点项目','校园项目'],
		                // textStyle:{
		                // 	color:"#dfdfdf"
		                // },
		                height:"50",
		                top:"180"
				    },
				    series : [
				        {
				            name: '项目分类',
				            type: 'pie',
				            radius : '60%',
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
				                	value:600,
				                	itemStyle: {
										normal: {
											color: '#93b7e3',
										}
									},
									name:'省科技厅计划项目'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#2ec7c9',
										}
									},
									name:'省社联项目'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#ff846b',
										}
									},
									name:'国家广电总局项目'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#5ab1ef',
										}
									},
									name:'重点项目'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#ffb980',
										}
									},
									name:'校园项目'
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
				};
				myChart4.setOption(option4);
        	},
        	drawMyCharts5(){
        		var myChart5 = echarts.init(document.getElementById('myCharts5'));
				var option5 = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        data:['横向','校级','纵向'],
		                height:"20",
		                top:"200"
				    },
				    series : [
				        {
				            name: '科研项目构成',
				            type: 'pie',
				            radius : '60%',
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
				                	value:600,
				                	itemStyle: {
										normal: {
											color: '#ff846b',
										}
									},
									name:'横向'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#b1d781',
										}
									},
									name:'校级'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#fad02f',
										}
									},
									name:'纵向'
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
				};
				myChart5.setOption(option5);
        	},
        	drawMyCharts6(){
        		var myChart6 = echarts.init(document.getElementById('myCharts6'));
				var option6 = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        data:['政府部门','中央其他部门','浙江省政府'],
		                height:"20",
		                top:"200"
				    },
				    series : [
				        {
				            name: '科研项目构成',
				            type: 'pie',
				            radius : '60%',
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
				                	value:600,
				                	itemStyle: {
										normal: {
											color: '#f2bfbb',
										}
									},
									name:'政府部门'
				                },
				                {
				                	value:150,
				                	itemStyle: {
										normal: {
											color: '#13b0a5',
										}
									},
									name:'中央其他部门'
				                },
				                {
				                	value:250,
				                	itemStyle: {
										normal: {
											color: '#f8f2ab',
										}
									},
									name:'浙江省政府'
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
				};
				myChart6.setOption(option6);
        	},
        	drawMyCharts7(){
        		var myChart7 = echarts.init(document.getElementById('myCharts7'));
				var option7 = {
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
				myChart7.setOption(option7);
        	},
            drawMyCharts8(){
        		var myChart8 = echarts.init(document.getElementById('myCharts8'));
				var option8 = {
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
				myChart8.setOption(option8);
        	},
        	drawMyCharts9(){
        		var myChart9 = echarts.init(document.getElementById('myCharts9'));
				var option9 = {
					color:['#59C4E6','#7BD9A5', '#4EA397', '#E6B600','#93B7E3', '#E60EF2', '#7560BA', '#EDF41A', '#B8D2C7','#D34E21','#EDAD5A','#2AC1BC','#8DFCF8'],
				    tooltip: {
			            trigger: 'axis',
		                axisPointer: {
		                  	type: 'cross',
		                },
		                position:function(p){ //其中p为当前鼠标的位置 
		                  	return [p[0] + 10, p[1] - 80]; 
		                }
			        },
			        legend: {
			            data: ['人事处', '管理学院', '文学院', '播音主持艺术学院', '马克思主义学院（社会科学部）', '新闻传播学院', '新媒体学院', '设计艺术学院',],
			            bottom: 15,
			            width:'80%'

			        },
			        grid: {
			            top: 10,
			          	bottom: 100,
			          	left:"8%",
			          	right:"5%"
			        },
			        xAxis: [

			            {
			                type: 'category',
			                axisTick: {
			                    alignWithLabel: true
			                },
			                axisLine: {
			                    onZero: false,
			                    lineStyle: {
			                        color: '#222b73'
			                    }
			                },
			                // axisPointer: {
			                //     label: {
			                //         formatter: function(params) {
			                //             return params.value + ' 科研产出量'+
			                //                     (params.seriesData.length ? '：' + params.seriesData[0].data : '');
			                //         }
			                //     }
			                // },
			                
			                data: ["2012","2013","2014","2015","2016","2017"]
			            }
			        ],
			        yAxis: [{
			            type: 'value',
			            splitNumber:4,
			            axisLabel: {
			                formatter: '{value}k'
			            },
			            name:'数量',
			            nameLocation:'middle',
			            nameGap:'45',
			            splitLine: {
		                    lineStyle: {
		                      	color: '#3f7098',
		                     	type: 'dashed'
		                    }
		                }
			        }],
			        series: [
			            {
			                name: '人事处',
			                type: 'line',
			                smooth: true,
			                data: [187,82,172,176,180,395]
			            },
			            {
			                name: '管理学院',
			                type: 'line',
			                smooth: true,
			                data: [340,230,142,253,240,111]
			            },
			            {
			                name: '文学院',
			                type: 'line',
			                smooth: true,
			                data: [35,16,41,37,349,35]
			            },
			            {
			                name:"播音主持艺术学院",
			                type: 'line',
			                smooth: true,
			                data:[540,240,210,90,140,770]
			            },
			            {
			                name:"马克思主义学院（社会科学部）",
			                type: 'line',
			                smooth: true,
			                data:[226,117,210,195,224,71]
			            },
			            {
			                name:"新闻传播学院",
			                type: 'line',
			                smooth: true,
			                data:[258,150,225,247,262,33]
			            },
			            {
			                name:"新媒体学院",
			                type: 'line',
			                smooth: true,
			                data:[70,230,530,280,90,240]
			            },
			            {
			                name:"设计艺术学院",
			                type: 'line',
			                smooth: true,
			                data:[50,80,280,340,310,90]
			            },
			        ]
				};
				myChart9.setOption(option9);
        	},
        }

    }
</script>

<style scoped>

</style>