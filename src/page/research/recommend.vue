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
    	
	    <!-- ./header -->
	    <!-- 科研分布 -->
		<div class="row">
	    	
	    	<div class="col-md-12">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">个人研究成果展示</h3>
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
		                  			<th>科研单位</th>
				                  	<th>科研名称</th>
			                  		<th>当前状态</th>
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
				                  	<th>已完结</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
			                  		<th @click="goParam(teacherID+2)"  :class="[teacherID]">张薇</th>
				                  	<th>秦丽娜:1234567;李伟:1345678;李华:1456789</th>
				                  	<th>2015年9月</th>
				                  	<th>2015年12月</th>
		                		</tr>
		                		<tr>
									<th>设计艺术学院</th>
				                  	<th>数字音乐在数字娱乐中的重要地位</th>
				                  	<th>已完结</th>
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
	    </div>
	    <!-- 科研产出统计 -->
	    <div class="row">
	      	<div class="col-md-5">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
	         			<h3 class="box-title">科研产出统计</h3>
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
	        <div class="col-md-7">
	          <div class="box box-success">
	            <div class="box-header with-border">
	                    <h3 class="box-title">科研资料推荐</h3>
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
				                  	<th>题目</th>
			                  		<th>作者</th>
				                  	<th>所属高校</th>
				                  	<th>发表年份</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>有机马克思主义与生态马克思主义</th>
				                  	<th>谢芳/管锦绣</th>
				                  	<th>武汉工程大学</th>
				                  	<th>2017</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>有机马克思主义与生态马克思主义</th>
				                  	<th>谢芳/管锦绣</th>
				                  	<th>武汉工程大学</th>
				                  	<th>2017</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>有机马克思主义与生态马克思主义</th>
				                  	<th>谢芳/管锦绣</th>
				                  	<th>武汉工程大学</th>
				                  	<th>2017</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>有机马克思主义与生态马克思主义</th>
				                  	<th>谢芳/管锦绣</th>
				                  	<th>武汉工程大学</th>
				                  	<th>2017</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>有机马克思主义与生态马克思主义</th>
				                  	<th>谢芳/管锦绣</th>
				                  	<th>武汉工程大学</th>
				                  	<th>2017</th>
		                		</tr>

		                	</tbody>
	              		</table>
	                </div>
	          </div>
	        </div>
	    </div>
      	<!-- 优秀科研项目推荐 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">优秀科研项目推荐</h3>
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
				                  	<th>项目名称</th>
			                  		<th>项目来源</th>
				                  	<th>承担单位/负责人</th>
				                  	<th>学科范围</th>
				                  	<th>所获奖励</th>
				                  	<th>立项年份</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>马克思技术哲学与现时代研究</th>
			                  		<th>2014年湖北省社科基金一般项目</th>
				                  	<th>武汉工程大学/管锦绣</th>
				                  	<th>哲学</th>
				                  	<th>第二届马克思主义理论研讨会论文优秀奖</th>
				                  	<th>2015</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>马克思技术哲学与现时代研究</th>
			                  		<th>2014年湖北省社科基金一般项目</th>
				                  	<th>武汉工程大学/管锦绣</th>
				                  	<th>哲学</th>
				                  	<th>第二届马克思主义理论研讨会论文优秀奖</th>
				                  	<th>2015</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>马克思技术哲学与现时代研究</th>
			                  		<th>2014年湖北省社科基金一般项目</th>
				                  	<th>武汉工程大学/管锦绣</th>
				                  	<th>哲学</th>
				                  	<th>第二届马克思主义理论研讨会论文优秀奖</th>
				                  	<th>2015</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>马克思技术哲学与现时代研究</th>
			                  		<th>2014年湖北省社科基金一般项目</th>
				                  	<th>武汉工程大学/管锦绣</th>
				                  	<th>哲学</th>
				                  	<th>第二届马克思主义理论研讨会论文优秀奖</th>
				                  	<th>2015</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>马克思技术哲学与现时代研究</th>
			                  		<th>2014年湖北省社科基金一般项目</th>
				                  	<th>武汉工程大学/管锦绣</th>
				                  	<th>哲学</th>
				                  	<th>第二届马克思主义理论研讨会论文优秀奖</th>
				                  	<th>2015</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./科研产出统计 -->
		<!-- 科研热度排名 -->
		<div class="row">
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研热度排名</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	                  	<!-- <table id="example1" class="table table-bordered table-striped">
		                	<thead>
		                		<tr>
		                  			<th>排名</th>
				                  	<th>科研方向</th>
			                  		<th>相关论文数量</th>
			                  		<th>引用数量</th>
				                  	<th>下载数量</th>
			                  		<th>热度指数</th>
				                </tr>
		                	</thead>
		                	<tbody id = "list1">{{innerhtml}}

		                	</tbody>
	              		</table> -->
	              		<!-- <i-button @click="show">Click me!</i-button>
    					<Modal v-model="visible" title="Welcome">Welcome to iView</Modal> -->
	              		<Table stripe :columns="columns1" :data="data1" :loading="loading"></Table>
	              		<Page :total="pageTotal" :current="pageNum" :page-size="pageSize"  style="margin-top:15px" show-total size="small" show-elevator @on-change="handlePage"></Page>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-6">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">科研热点词云</h3>
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
		                    	<div id="TeaCharts2"  :style="{height:'330px'}"></div>
	                  		</div>
	            		</div>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- ./科研热度排名 -->
		<!-- 年度科研优秀教师预测 -->
		<div class="row">
	    	<div class="col-md-12">
	    		<div class="box box-primary">
	    			<div class="box-header with-border">
             			<h3 class="box-title">年度科研优秀教师预测</h3>
              			<div class="box-tools pull-right">
               				<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                			<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
             			</div>
            		</div>
            		<!-- /.box-header -->
	            	<div class="box-body">
	            		<Carousel  v-model="value2" loop :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
					        <CarouselItem>
					            <div class="demo-carousel">
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user6-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">何骊</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user2-160x160.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">何骊</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user8-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">何骊</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user4-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">何骊</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            </div>
					        </CarouselItem>
					        <CarouselItem>
					            <div class="demo-carousel">
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user5-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">李华</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user3-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">李华</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user7-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">李华</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            	<div class="col-md-3">
					            		<img class="profile-user-img img-responsive img-circle" src="../../assets/img/user1-128x128.jpg" alt="User profile picture">
					              		<h3 class="profile-username text-center">李华</h3>
					              		<p class="text-muted text-center">计算机科学与技术</p>
					              		<p class="text-muted text-center">人工智能</p>
					              		<p class="text-muted text-center">科研贡献度：<a style="fontSize:20px;">92</a></p>
					            	</div>
					            </div>
					        </CarouselItem>
					    </Carousel>
	            	</div>
	    		</div>
	    	</div>
	    </div>
		<!-- ./科研产出统计 -->
		<!-- 年度科研方向预测 -->
		<div class="row">
	    	<div class="col-md-5">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">年度科研方向预测</h3>
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
				                  	<th>科研方向</th>
			                  		<th>热度指数</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>新零售</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>新零售</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>新零售</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>新零售</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>新零售</th>
			                  		<th>89</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    	<div class="col-md-7">
	    		<div class="box box-success">
	    			<div class="box-header with-border">
             			<h3 class="box-title">年度科研贡献预测</h3>
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
				                  	<th>所属单位</th>
			                  		<th>工号</th>
			                  		<th>姓名</th>
			                  		<th>科研贡献指数</th>
				                </tr>
		                	</thead>
		                	<tbody>
		                		<tr>
									<th>0001</th>
				                  	<th>设计艺术学院</th>
			                  		<th>12132389</th>
			                  		<th>李华</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>设计艺术学院</th>
			                  		<th>12132389</th>
			                  		<th>李华</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>设计艺术学院</th>
			                  		<th>12132389</th>
			                  		<th>李华</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>设计艺术学院</th>
			                  		<th>12132389</th>
			                  		<th>李华</th>
			                  		<th>89</th>
		                		</tr>
		                		<tr>
									<th>0001</th>
				                  	<th>设计艺术学院</th>
			                  		<th>12132389</th>
			                  		<th>李华</th>
			                  		<th>89</th>
		                		</tr>

		                	</tbody>
	              		</table>
	            	</div>
	    		</div>
	    	</div>
	    </div>
	    <!-- ./科研热度排名 -->
    </section>
    <!-- /.content -->
	</div>
</template>

<script>
	var echarts = require('echarts');
	require('echarts-wordcloud');
	export default { 
		data(){
			return {
				teacherID:'123',
				loading: false,
				pageTotal: 100,  
				pageNum: 1,  
				pageSize: 5,
				value2: 0,
				setting: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'hover',
                    arrow: 'hover'
                },
				columns1: [
                    {
                        title: '序号',
                        key: 'xh'
                    },
                    {
                        title: '研究方向',
                        key: 'yjfx'
                    },
                    {
                        title: '相关论文数量',
                        key: 'xglwsl'
                    },
                    {
                        title: '引用量',
                        key: 'yyl'
                    },
                    {
                        title: '下载量',
                        key: 'xzl'
                    },
                    {
                        title: '热度指数',
                        key: 'rdzs'
                    }
                ],
                data1: [
                    {
                        xh: '1',
                        yjfx: "新零售",
                        xglwsl: '4532',
                        yyl: '425332',
                        xzl: '4235',
                        rdzs: '89'
                    },
                    {
                       	xh: '1',
                        yjfx: "新零售",
                        xglwsl: '4532',
                        yyl: '425332',
                        xzl: '4235',
                        rdzs: '89'
                    },
                    {
                        xh: '1',
                        yjfx: "新零售",
                        xglwsl: '4532',
                        yyl: '425332',
                        xzl: '4235',
                        rdzs: '89'
                    },
                    {
                        xh: '1',
                        yjfx: "新零售",
                        xglwsl: '4532',
                        yyl: '425332',
                        xzl: '4235',
                        rdzs: '89'
                    },
                    {
                       	xh: '1',
                        yjfx: "新零售",
                        xglwsl: '4532',
                        yyl: '425332',
                        xzl: '4235',
                        rdzs: '89'
                    }
                ]
			}
		},
		components: {
			
		},
		mounted(){
		    this.drawTeaCharts1();
		    this.drawTeaCharts2();
		},
		methods:{
			handlePage(value){
				this.pageNum = value;
				console.log(this.pageNum);
				this.loading = false;
			},
			goParam:function(ID){
              this.$router.push({name:"TeacherFiles",path:'/teacher/TeacherFiles', params: {'teacherID': ID}})
          	},
			drawTeaCharts1(){
				var myChart1 = echarts.init(document.getElementById('TeaCharts1'));
				var option1 = {
					color: ['#2ec7c9','#ffa701','#90b8e0','#9f88e0'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data:['论文','专注','专利','著作'],
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
				            data : ['2014','2015','2016','2017','2018'],
				            axisLabel:{
								interval: 0,
	             				// rotate: 30,
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
				            name:'论文',
				            type:'bar',
				            barWidth: '15',
				            data:[70,80,90,50,11]
				        },
				        {
				            name:'专注',
				            type:'bar',
				            barWidth: '15',
				            data:[50,10,50,80,40]
				        },
				        {
				            name:'专利',
				            type:'bar',
				             barWidth: '15',
				            data:[5,50,50,40,30]
				        },
				        {
				            name:'著作',
				            type:'bar',
				             barWidth: '15',
				            data:[5,50,50,40,30]
				        }
				    ]
				};
				myChart1.setOption(option1);
			},
			drawTeaCharts2(){
	            var myChart2 = echarts.init(document.getElementById('TeaCharts2'));
	            var option2 = {
				    tooltip: {},
				    series: [{
				        type: 'wordCloud',
				        gridSize: 20,
				        sizeRange: [12, 50],
				        rotationRange: [-90, 90],
				        shape: 'circle',
				        textStyle: {
				            normal: {
				                color: function() {
				                    return 'rgb(' + [
				                        Math.round(Math.random() * 160),
				                        Math.round(Math.random() * 160),
				                        Math.round(Math.random() * 160)
				                    ].join(',') + ')';
				                }
				            },
				            emphasis: {
				                shadowBlur: 10,
				                shadowColor: '#333'
				            }
				        },
				        data: [{
				            name: '张薇',
				            value: 10000,
				            textStyle: {
				                normal: {
				                    color: 'black'
				                },
				                emphasis: {
				                    color: 'red'
				                }
				            }
				        }, {
				            name: '空间',
				            value: 6181
				        }, {
				            name: '微博',
				            value: 4386
				        }, {
				            name: '指导',
				            value: 4055
				        }, {
				            name: '小明',
				            value: 2467
				        }, {
				            name: '图书馆',
				            value: 2244
				        }, {
				            name: '项目',
				            value: 1898
				        }, {
				            name: '健康',
				            value: 1484
				        }, {
				            name: '很规范',
				            value: 1112
				        }, {
				            name: '风格化',
				            value: 965
				        }, {
				            name: '过负荷',
				            value: 847
				        }, {
				            name: '雅黑',
				            value: 582
				        }, {
				            name: '数据',
				            value: 555
				        }, {
				            name: '阿斯顿',
				            value: 550
				        }, {
				            name: '发热',
				            value: 462
				        }, {
				            name: '斯蒂芬',
				            value: 366
				        }, {
				            name: '回过头',
				            value: 360
				        }, {
				            name: '电饭锅',
				            value: 282
				        }, {
				            name: '儿童歌',
				            value: 273
				        }, {
				            name: '语句',
				            value: 265
				        }]
				    }]
	            };
	            myChart2.setOption(option2);
	        },
			
		},
		created() {

		}
	}
</script>

<style scoped>
	.demo-carousel{
		height: 280px;
	}
</style>