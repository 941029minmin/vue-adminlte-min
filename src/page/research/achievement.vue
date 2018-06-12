<template>
	<div class="">
		<!-- Content Header (Page header) -->
    <!-- <section class="content-header">
      <h1>教师档案</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">User profile</li>
      </ol>
    </section> -->
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
	                        <datapick @searchEvent = "searchEvent"></datapick>

	                  </div>
	                </div>
	          </div>
	        </div>
	    </div>
	    <!-- ./header -->
	    <!-- 科研分布 -->
		<div class="row">
	    	
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">单位科研产出TOP10</h3>
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
		                  			<th>排名</th>
				                  	<th>单位名称</th>
			                  		<th>科研产出总量</th>
			                  		<th>论文发表数量</th>
				                  	<th>著作数量</th>
			                  		<th>国内专利数量</th>
			                  		<th>艺术作品数量</th>
			                  		<th>发表专注数量</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
		                			<th>1</th>
		                			<th>设计艺术学院</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
		                		</tr>
		                		<tr>
									<th>2</th>
		                			<th>设计艺术学院</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
		                		</tr>
		                		<tr>
									<th>3</th>
				                  	<th>设计艺术学院</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
		                		</tr>
		                		<tr>
									<th>4</th>
				                  	<th>设计艺术学院</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
		                		</tr>
		                		<tr>
									<th>5</th>
				                  	<th>设计艺术学院</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
				                  	<th>1243</th>
				                  	<th>5437</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- 科研产出变化趋势 -->
	    <div class="row">
	      	<div class="col-md-4">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
	         			<h3 class="box-title">科研经费排名</h3>
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
		                    	<div id="TeaCharts1"  :style="{height:'300px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	        <div class="col-md-8">
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
	                  <div class="row">
	                        <div class="chart">
	                           <!--  Chart  -->
	                          <div id="TeaCharts2"  :style="{height:'300px'}"></div>
	                        </div>
	                  </div>
	                </div>
	          </div>
	        </div>
	    </div>
      	<!-- 授课信息 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">授课信息</h3>
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
		                  			<th>选课课号</th>
				                  	<th>课程名称</th>
			                  		<th>班级</th>
				                  	<th>人数</th>
				                  	<th>学分</th>
				                  	<th>学时</th>
				                  	<th>起始周</th>
			                  		<th>结束周</th>
				                  	<th>上课地点</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>计算机科学与技术</th>
			                  		<th>3</th>
				                  	<th>120</th>
				                  	<th>4</th>
				                  	<th>40</th>
				                  	<th>第一周</th>
			                  		<th>第十二周</th>
				                  	<th>教学楼一层102C</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>计算机科学与技术</th>
			                  		<th>3</th>
				                  	<th>120</th>
				                  	<th>4</th>
				                  	<th>40</th>
				                  	<th>第一周</th>
			                  		<th>第十二周</th>
				                  	<th>教学楼一层102C</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>计算机科学与技术</th>
			                  		<th>3</th>
				                  	<th>120</th>
				                  	<th>4</th>
				                  	<th>40</th>
				                  	<th>第一周</th>
			                  		<th>第十二周</th>
				                  	<th>教学楼一层102C</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>计算机科学与技术</th>
			                  		<th>3</th>
				                  	<th>120</th>
				                  	<th>4</th>
				                  	<th>40</th>
				                  	<th>第一周</th>
			                  		<th>第十二周</th>
				                  	<th>教学楼一层102C</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>计算机科学与技术</th>
			                  		<th>3</th>
				                  	<th>120</th>
				                  	<th>4</th>
				                  	<th>40</th>
				                  	<th>第一周</th>
			                  		<th>第十二周</th>
				                  	<th>教学楼一层102C</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./授课信息 -->
		<!-- 科研影响因子排名 -->
		<div class="row">
	    	<div class="col-md-7">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研影响因子排名</h3>
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
		                  			<th>排名</th>
				                  	<th>科研名称</th>
			                  		<th>影响因子</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
		                			<th>1</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>57</th>
		                		</tr>
		                		<tr>
									<th>2</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>57</th>
		                		</tr>
		                		<tr>
									<th>3</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>57</th>
		                		</tr>
		                		<tr>
									<th>4</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>57</th>
		                		</tr>
		                		<tr>
									<th>5</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>57</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-5">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研合作构成</h3>
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
		                    	<div id="TeaCharts3"  :style="{height:'250px'}"></div>
	                  		</div>
	            		</div>
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
             			<h3 class="box-title">科研合作单位</h3>
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
		                  			<th>合作单位</th>
				                  	<th>合作方式</th>
			                  		<th>科研名称</th>
				                  	<th>当前状态</th>
				                  	<th>科研带头人</th>
				                  	<th>科研组成员</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
		                			<th>中国十五治金有限公司</th>
				                  	<th>共建国家大学科技园</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th>周公礼</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
		                		</tr>
		                		<tr>
									<th>中国十五治金有限公司</th>
				                  	<th>共建国家大学科技园</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th>周公礼</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
		                		</tr>
		                		<tr>
									<th>中国十五治金有限公司</th>
				                  	<th>共建国家大学科技园</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th>周公礼</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
		                		</tr>
		                		<tr>
									<th>中国十五治金有限公司</th>
				                  	<th>共建国家大学科技园</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th>周公礼</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
		                		</tr>
		                		<tr>
									<th>中国十五治金有限公司</th>
				                  	<th>共建国家大学科技园</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th>周公礼</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
		                		</tr>

		                	</tbody>
	              		</table>
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
	import datapick from "../../components/datapick.vue"
	var echarts = require('echarts');
	export default { 
		data(){
			return {

			}
		},
		components: {
			datapick,
			
		},
		mounted(){
			this.drawTeaCharts1();
		    this.drawTeaCharts2();
		    this.drawTeaCharts3();
		},
		methods:{
			drawTeaCharts1(){
				var myChart1 = echarts.init(document.getElementById('TeaCharts1'));
				var option1 = {
					color: ['#3398DB'],
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        },
				        // formatter: "{b} <br> 合格率: {c}%"
				    },
				    /*legend: {
				        data: [date]
				    },*/
				    grid: {
				        left: '4%',
				        right: '8%',
				        bottom: '10%',
				        top:'5%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01],
				        min: 0,
				        max: 100,
				        interval: 20,
				        axisLabel: {
				            formatter: '{value}%',
				            textStyle: {
				                //color: '#fff',  
				                fontWeight: '80'
				            }
				        }
				    },
				    yAxis: {
				        type: 'category',
				        data: ['设计艺术学院', '文学院', '管理学院', '计算机学院', '广播编导学院', '生物学院', '思政学院'],
				        axisLabel: {
				            show: true,
				            interval: 0,
				            rotate: 0,
				            margin: 10,
				            inside: false,
				            textStyle: {
				                //color: '#fff',
				                fontWeight: '50'
				            }
				        }
				    },
				    series: [{
				        type: 'bar',
				        label: {
				            normal: {
				                show: true,
				                // formatter: '{c}',
				                formatter: function(v) {
				                    var val = v.data;
				                    if (val == 0) {
				                        return '';
				                    }
				                    return val;
				                },
				                color: '#fff'
				            }
				        },
				        data: [22, 33, 44, 55, 66, 77, 88]
				    }]
				};
				myChart1.setOption(option1);
			},
			drawTeaCharts2(){
				var myChart2 = echarts.init(document.getElementById('TeaCharts2'));
				var option2 = {
					color: ['#59C4E6','#7BD9A5', '#4EA397', '#E6B600','#93B7E3', '#E60EF2', '#7560BA', '#EDF41A', '#B8D2C7','#D34E21','#EDAD5A','#2AC1BC','#8DFCF8'],
			        tooltip: {
			            trigger: 'none',
			            axisPointer: {
			                type: 'cross'
			            }
			        },
			        legend: {
			            data: ['人事处', '文学院', '管理学院', '电视艺术学院', '播音主持学院', '马克思主义学院（社会科学部）', '新闻与传播学院', '新媒体学院', '设计艺术学院'],
			            bottom: 20,
			            // textStyle: {
			            //     color: '#dfdfdf'
			            // },
			            width:'80%'

			        },
			        grid: {
			            top: "5%",
			            bottom: "33%",
			        },
			        xAxis: [

			            {
			                type: 'category',
			                axisTick: {
			                    alignWithLabel: true
			                },
			                // axisLine: {
			                //     onZero: false,
			                // },
			                axisPointer: {
			                    label: {
			                        formatter: function(params) {
			                            return params.value + ' 访问量'+
			                                    (params.seriesData.length ? '：' + params.seriesData[0].data : '');
			                        }
			                    }
			                },
			                data: ["2013","2014","2015","2016","2017","2018"]
			            }
			        ],
			        yAxis: [{
			            type: 'value',
			            splitNumber:4,
			            axisLabel: {
			                formatter: '{value}'
			            },
			            name:'数量',
			            nameLocation:'middle',
			            nameGap:'45',
			            splitLine: {
	                        lineStyle: {
	                          color: '#ccc',
	                          type: 'dashed'
	                        }
	                    },
			        }],
			        series: [
			            {
			                name: '人事处',
			                type: 'line',
			                smooth: true,
			                data: [187,82,172,176,180,195]
			            },
			            {
			                name: '文学院',
			                type: 'line',
			                smooth: true,
			                data: [0,0,1,2,0,1]
			            },
			            {
			                name: '管理学院',
			                type: 'line',
			                smooth: true,
			                data: [35,16,41,37,39,35]
			            },
			            {
			                name:"电视艺术学院",
			                type: 'line',
			                smooth: true,
			                data:[0,0,0,0,0,0]
			            },
			            {
			                name:"播音主持学院",
			                type: 'line',
			                smooth: true,
			                data:[226,117,210,195,224,271]
			            },
			            {
			                name:"马克思主义学院（社会科学部）",
			                type: 'line',
			                smooth: true,
			                data:[258,150,225,247,262,303]
			            },
			            {
			                name:"新闻与传播学院",
			                type: 'line',
			                smooth: true,
			                data:[0,0,0,0,0,0]
			            },
			            {
			                name:"新媒体学院",
			                type: 'line',
			                smooth: true,
			                data:[0,0,0,0,0,0]
			            },
			            {
			                name:"设计艺术学院",
			                type: 'line',
			                smooth: true,
			                data:[380,214,341,356,373,411]
			            }
			        ]
				};
				myChart2.setOption(option2);
			},
			drawTeaCharts3(){
	            var myChart3 = echarts.init(document.getElementById('TeaCharts3'));
	            var option3 = {
	                tooltip : {
	                  trigger: 'item',
	                  formatter: "{a} <br/>{b} : {c} ({d}%)"
	                },
	                legend: {
	                  data:['共建国家大学科技园','技术开发','共同承担国家科技计划重大课题','共建研发机构','共同培养高层次人才','产学研合作'],     
	                  // orient: 'vertical',                 
	                  height:"30",
	                  // width:'200',
	                  top:"190"
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
	                        value:400,
	                        itemStyle: {
	                          normal: {
	                            color: '#7bd9a5',
	                          }
	                        },
	                        name:'共建国家大学科技园'
	                      },
	                      {
	                        value:150,
	                        itemStyle: {
	                          normal: {
	                            color: '#8597f2',
	                          }
	                        },
	                        name:'技术开发'
	                      },
	                      {
	                        value:180,
	                        itemStyle: {
	                          normal: {
	                            color: '#22c3aa',
	                          }
	                        },
	                        name:'共同承担国家科技计划重大课题'
	                      },
	                      {
	                        value:250,
	                        itemStyle: {
	                          normal: {
	                            color: '#1af4e2',
	                          }
	                        },
	                        name:'共建研发机构'
	                      },
	                      {
	                        value:250,
	                        itemStyle: {
	                          normal: {
	                            color: '#1a4fe2',
	                          }
	                        },
	                        name:'共同培养高层次人才'
	                      },
	                      {
	                        value:250,
	                        itemStyle: {
	                          normal: {
	                            color: '#1a4fe2',
	                          }
	                        },
	                        name:'产学研合作'
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

</style>