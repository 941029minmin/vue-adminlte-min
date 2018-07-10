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
    	<div class="row">
    		<div class="col-md-12">
	            <div class="nav-tabs-custom">
	            	<!-- Tabs within a box -->
	            	<ul class="nav nav-tabs pull-right">
	             		<li class="active"><a href="#revenue-chart" data-toggle="tab">条件检索</a></li>
	              		<li><a href="#sales-chart" data-toggle="tab">工号检索</a></li>
	             		<li class="pull-left header"><i class="fa  fa-search"></i>搜索</li>
	            	</ul>
	            	<div class="tab-content no-padding">
	              	<!-- Morris chart - Sales -->
	              		<div class="chart tab-pane active" id="revenue-chart" style="position: relative;">
	              			<div class="box-body">
		            	    	<div class="row">
		            	    		<teaCascade @searchEvent = "searchEvent"></teaCascade>
		                    	</div>
		           			</div>
	              		</div>
	              		<div class="chart tab-pane" id="sales-chart" style="position: relative;">
	              			<div class="box-body">
		            	   		<div class="row">
			               			<div class="col-xs-8 col-lg-4">
			                	    	<!-- <input type="text" class="form-control" placeholder="请输入教师名字/教职工号"> -->
			                	    	<Input  placeholder="请输入教师名字/教职工号" style="width: 90%"></Input>
			               			</div>
				                	<div class="col-xs-4 col-lg-8 pull-right">
							      	    <Button type="primary" icon="ios-search">搜索</Button>
							    	</div>
		                    	</div>
	           				</div>
	             		 </div>
	            	</div>
	         	</div>
    		</div>	
  		</div>
      	<div class="row">
        	<div class="col-md-3">
         		<!-- Profile Image -->
         		<div class="box box-primary">
         			<div class="box-header with-border">
             			<h3 class="box-title">个人信息</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<div class="box-body box-profile">
	              		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/女.jpg" alt="User profile picture">
	              		<h3 class="profile-username text-center">何骊</h3>
	              		<p class="text-muted text-center"> </p>
	            		<ul class="list-group list-group-unbordered">
	                		<li class="list-group-item">
	                  			<b>学院</b> <a class="pull-right">计算机科学与技术</a>
	                		</li>
	                		<li class="list-group-item">
	                  			<b>出生日期</b> <a class="pull-right">1978.10.4</a>
	                		</li>
	                		<li class="list-group-item">
	                 			<b>来校日期</b> <a class="pull-right">2008.8.8</a>
	                		</li>
	                		<li class="list-group-item">
	                 			<b>学历</b> <a class="pull-right">本科</a>
	                		</li>
	                		<li class="list-group-item">
	                 			<b>职称</b> <a class="pull-right">讲师（高校）</a>
	                		</li>
	                		<li class="list-group-item">
	                 			<b>职务名称</b> <a class="pull-right">...</a>
	                		</li>
	                		<li class="list-group-item">
	                 			<b>职工类型</b> <a class="pull-right">在编在岗</a>
	                		</li>
	              		</ul>
	              		<!-- <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a> -->
	            	</div>
	            	<!-- /.box-body -->
	         	</div>
	          	<!-- /.box -->
        	</div>
       		<!-- /.col -->
			
       		<div class="col-md-9">
       			<div class="row">
       				<!-- ./职务变迁 -->
	       			<div class="col-md-12">
			    		<div class="box box-primary">
			    			<div class="box-header with-border">
		             			<h3 class="box-title">职务变迁</h3>
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
				                  			<th>起始时间</th>
						                  	<th>结束时间</th>
					                  		<th>所在部门</th>
						                  	<th>职务名称</th>
						                  	<th>职务级别</th>
						                </tr>
				                	</thead>
				                	<tbody>
				                		<tr>
											<th>2012年9月</th>
						                  	<th>2015年6月</th>
					                  		<th>电子信息学院</th>
						                  	<th>研究实习员（社会科学）</th>
						                  	<th>初级</th>
				                		</tr>
				                		<tr>
											<th>2015年6月</th>
						                  	<th>至今</th>
					                  		<th>电子信息学院</th>
						                  	<th>讲师（高校）</th>
						                  	<th>中级</th>
				                		</tr>
				                	</tbody>
			              		</table>
			            	</div>
			    		</div>
		    		</div>
		    		<!-- ./职务变迁 -->
		    		<!-- 科研成果 -->
			    	<div class="col-md-12">
			    		<div class="box box-primary">
			    			<div class="box-header with-border">
		             			<h3 class="box-title">科研成果</h3>
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
				                  			<th>科研活动</th>
						                  	<th>科研名称</th>
					                  		<th>科研类型</th>
						                  	<th>完成时间</th>
						                </tr>
				                	</thead>
				                	<tbody>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>
				                		<tr>
											<th>省教育规划项目</th>
						                  	<th>资源配置的数字化转型与媒体融合教学研究</th>
					                  		<th>社科类</th>
						                  	<th>2011-10-17</th>
				                		</tr>

				                	</tbody>
			              		</table>
			            	</div>
			    		</div>
			    	</div>
					<!-- ./科研成果 -->
	    		</div>
	    	</div>
	    	
	    	
      	</div>
      	<!-- /.row -->
    </section>
	 <!-- Main content -->
    <section class="content">
    <!-- 进修/留学 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">进修/留学</h3>
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
		                  			<th>开始时间</th>
				                  	<th>结束时间</th>
			                  		<th>学习内容</th>
				                  	<th>学习单位</th>
				                  	<th>学习性质</th>
				                  	<th>学习结果</th>
				                  	<th>授予国家</th>
			                  		<th>导师/证明人</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>2012年9月</th>
				                  	<th>2015年6月</th>
			                  		<th>物联网</th>
				                  	<th>北京大学</th>
				                  	<th>在职</th>
				                  	<th>博士学位</th>
				                  	<th></th>
			                  		<th>周海荣</th>
		                		</tr>
		                		<tr>
									<th>2015年6月</th>
				                  	<th>2015年9月</th>
			                  		<th>面部识别</th>
				                  	<th>清华大学</th>
				                  	<th>函授</th>
				                  	<th>合格</th>
				                  	<th></th>
			                  		<th>周海荣</th>
		                		</tr>
		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./进修/留学 -->
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
		<!-- 个人考勤 -->
		<div class="row">
        	<div class="col-md-12">
        		<!-- .box-header -->
          		<div class="box box-primary">
            		<div class="box-header with-border">
             			<h3 class="box-title">个人考勤</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
           			<!-- /.box-header --> 
	            	<div class="box-body">
	                	<div class="row">
		                	<div class="col-md-6">
		                  		<div class="box-body">
			                  		<table id="example1" class="table table-bordered table-striped">
					                	<thead>
					                		<tr>
					                  			<th>日期</th>
							                  	<th>考勤结果</th>
						                  		<th>到岗时间</th>
							                </tr>
					                	</thead>
					                	<tbody>
					                		<tr>
												<th>2018-3-15</th>
							                  	<th>缺勤</th>
						                  		<th></th>
					                		</tr>
					                		<tr>
												<th>2018-3-16</th>
							                  	<th>迟到</th>
						                  		<th>09:07</th>
					                		</tr>
					                		<tr>
												<th>2018-3-17</th>
							                  	<th>缺勤</th>
						                  		<th></th>
					                		</tr>
					                		<tr>
												<th>2018-3-18</th>
							                  	<th>迟到</th>
						                  		<th>09:07</th>
					                		</tr>
					                		<tr>
												<th>2018-3-19</th>
							                  	<th>缺勤</th>
						                  		<th></th>
					                		</tr>
					                		<tr>
												<th>2018-3-20</th>
							                  	<th>迟到</th>
						                  		<th>09:07</th>
					                		</tr>
					                	</tbody>
				              		</table>
				            	</div>
		               		</div>
		               		<!-- /.col -->
		                	<div class="col-md-6">
		                 		<p class="text-center">
		                    		<strong>考勤分布</strong>
		                  		</p>
		                  		<div class="chart">
		                    		<div id="myTchart1" style="height: 250px;"></div>
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
	    <!-- 个人考勤 -->
    </section>
    <!-- /.content -->
	</div>
</template>

<script>
	import teaCascade from "../../components/teaCascade.vue"
	import { getTest } from "../../api/index";
	var echarts = require('echarts');
	export default { 
		data(){
			return {
				ajaxData:{
					teacherID:"23"
				}
			}
		},
		components: {
			teaCascade,
			
		},
		mounted(){
			// this.ajaxData.teacherID = this.$route.params.teacherID
			// console.log(this.$route)
			// console.log(this.$route.params.teacherID)
		},
		methods:{
			btnSubmit(a){
				
			},
			drawMyTchart1(data){
				var myChart1 = echarts.init(document.getElementById('myTchart1'));
				var data_name = [];
				for (var n  in data){
				    data[n]['name'] = data[n]['name'] + ' '+data[n]['value'] +'次';
				    data_name.push(data[n]['name'])
				}

				var option1 = {
					color:["#E5CF0D","#5AB1EF","#97B552","#2EC7C9"],
				    tooltip: {
				        trigger: 'item',
				        formatter: "{b}"
				    },
				    legend: {
				        show:false,
				    },
				    series: [
				        {
				            name:'',
				            type:'pie',
				            radius: ['50%', '65%'],
				            data:data
				        }
				    ]
				};
				myChart1.setOption(option1);
			},
			searchEvent(data1,data2,data3){
				// console.log(data1+','+data2+','+data3);
				// this.btnSubmit();
				// this.drawMyTchart1(); 
				// this.btnSubmit()
				// getTest('teacher/getTeacherKQ',this.ajaxData).then(response => {
			 //        this.reponseData = response.data.data.result;
			 //        console.log(this.reponseData)
			 //    });
			}
		},
		created() {
			this.ajaxData.teacherID = this.$route.params.teacherID;
			
			// this.btnSubmit()
			getTest('teacher/getTeacherKQ',this.ajaxData).then(response => {
				if(response.data.success){
					this.reponseData = response.data.result; 
			        this.drawMyTchart1(this.reponseData);
				} 
			}).catch(function (response) {
		        console.log(response.data.msg);
		    });
		},
	}
</script>

<style scoped>

</style>