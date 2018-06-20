<template>
	<!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>张三</p>
            <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
          </div>
        </div>
        <!-- search form -->
        <!--<form action="#" method="get" class="sidebar-form">-->
          <!--<div class="input-group">-->
            <!--<input type="text" name="q" class="form-control" placeholder="Search...">-->
              <!--<span class="input-group-btn">-->
                <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>-->
                <!--</button>-->
              <!--</span>-->
          <!--</div>-->
        <!--</form>-->
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <!-- <li class="header">MAIN NAVIGATION</li> -->
          <li class="treeview active">
            <router-link :to="{ path:'/' }">
              <i class="glyphicon glyphicon-home"></i> <span>综合校情</span>
            </router-link>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-files-o"></i>
              <span>科研分析</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="/research/scientific"><i class="fa fa-circle-o"></i>科研信息总览</router-link></li>
              <li><router-link to="/research/achievement"><i class="fa fa-circle-o"></i>科研成果分析</router-link></li>
              <li><router-link to="/research/recommend"><i class="fa fa-circle-o"></i>科研信息推荐</router-link></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-th"></i> <span>教师画像</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="/teacher/TeacherPortrait"><i class="fa fa-circle-o"></i>教职工群体画像</router-link></li>
              <li><router-link to="/teacher/TeacherFiles"><i class="fa fa-circle-o"></i>教师业绩</router-link></li>
              <li><router-link to="/teacher/TeacherFiles"><i class="fa fa-circle-o"></i>教师档案</router-link></li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
</template>

<script>
	export default {}
</script>

<style scoped>

</style>