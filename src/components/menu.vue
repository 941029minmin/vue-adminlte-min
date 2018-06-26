<template>
	<!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../assets/img/user1-128x128.jpg" class="img-circle" alt="User Image">
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
        <ul class="sidebar-menu" v-for="(list,listIndex) in menuList">
         
          <li class="treeview" v-if="list.children && list.children.length > 0" >
            <a href="#">
              <i :class= "list.icon"></i>
              <span>{{list.name}}</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu" v-for="(item,itemIndex) in list.children">
              <li><router-link :to="{ path:item.path }"><i :class="item.icon"></i>{{item.name}}</router-link></li>
            </ul>
          </li>
          <!-- 没有子路由的 -->
          <li class="treeview active" v-else-if="listIndex==0" >
            <router-link  :to="{ path:list.path }">
              <i :class= "list.icon"></i> <span>{{list.name}}</span>
            </router-link>
          </li>
          <!-- 没有子路由的 -->
          <li class="treeview" v-else>
            <router-link  :to="{ path:list.path }">
              <p><i :class= "list.icon"></i> <span>{{list.name}}</span></p>
            </router-link>
          </li>
          <!-- <li class="treeview" v-if="listIndex > 0 && list.children.length==0">
            <router-link  :to="{ path:list.path }">
              <i :class= "list.icon"></i> <span>{{list.name}}</span>
            </router-link>
          </li> -->

          <!-- <li class="header">MAIN NAVIGATION</li> -->
          <!-- <li class="treeview active">
            <router-link :to="{ path:'/' }">
              <i class="glyphicon glyphicon-home"></i> <span>综合校情</span>
            </router-link>
          </li -->
          <!-- <li class="treeview">
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
              <li><router-link to="/teacher/TeacherResult"><i class="fa fa-circle-o"></i>教师业绩</router-link></li>
              <li><router-link to="/teacher/TeacherFiles"><i class="fa fa-circle-o"></i>教师档案</router-link></li>
            </ul>
          </li> -->
        </ul>
<!--          <tree :data="data4" show-checkbox multiple @on-check-change="onCheckChange"></tree>
 -->      </section>
      <!-- /.sidebar -->
    </aside>
</template>

<script>
	export default {
    data(){
      return {
        value:[],
        menuList:[
          {
            name:"综合校情",
            path:"/",
            icon:"glyphicon glyphicon-home",
            // children:[]
          },
          {
            name:"科研分析",
            icon:"fa fa-files-o",
            children:[
              {
                name:"科研信息总览",
                path:"/research/scientific",
                icon:"fa fa-circle-o",
              },
              {
                name:"科研成果分析",
                path:"/research/achievement",
                icon:"fa fa-circle-o",
              },
              {
                name:"科研信息推荐",
                path:"/research/recommend",
                icon:"fa fa-circle-o",
              },
            ]
          },
          {
            name:"教师画像",
            icon:"fa fa-th",
            children:[
              {
                name:"教职工群体画像",
                path:"/teacher/TeacherPortrait",
                icon:"fa fa-circle-o",
              },
              {
                name:"教师业绩",
                path:"/teacher/TeacherResult",
                icon:"fa fa-circle-o",
              },
              {
                name:"教师档案",
                path:"/teacher/TeacherFiles",
                icon:"fa fa-circle-o",
              },
            ]
          },
          {
            name:"综合校情222",
            path:"/",
            icon:"glyphicon glyphicon-home",
            // children:[]
          },
        ],
        data4: [
          {title: '综合校情'},
          {
              title: '科研分析',
              expand: false,
              selected: false,
              children: [
                  {
                      title: '科研信息总览',
                      expand: true,
                  },
                  {
                      title: '科研成果分析',
                      expand: true,
                  },
                  {
                      title: '科研信息推荐',
                      expand: true,
                  }
              ]
          },
          {
              title: '教师画像',
              expand: true,
              children: [
                  {
                      title: '教职工群体画像',
                      checked: true,
                  },
                  {
                      title: '教师业绩',
                  },
                  {
                      title: '教师档案',
                  }
              ]
          }
      ]
      }
    },
    methods: {
        onCheckChange (data) {
          this.value=[];
          for (var item of data) {
            this.value.push(item.title)
          }
          console.log(this.value)       
        }
    }
  }
</script>

<style scoped>

</style>