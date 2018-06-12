import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/research', 
		component: resolve => require(['@/page/research/scientific'], resolve)
	},
	{
		path: '/research/scientific', 
		component: resolve => require(['@/page/research/scientific'], resolve)
	},

	{
		path: '/research/achievement', 
		component: resolve => require(['@/page/research/achievement'], resolve)
	},
	{
		path: '/research/recommend', 
		component: resolve => require(['@/page/research/recommend'], resolve)
	},
	{
		path: '/research/scientific2', 
		component: resolve => require(['@/page/research/scientific2'], resolve)
	},
	/**
	 * 教师
	 */
	{
		path: '/teacher', 
		component: resolve => require(['@/page/teacher/TeacherPortrait'], resolve)
	},
	{
		path: '/teacher/teacherPortrait', 
		component: resolve => require(['@/page/teacher/TeacherPortrait'], resolve)
	},
	{
		path: '/teacher/TeacherFiles', 
		params:{
			teacherID:"222"
		},
		name:"TeacherFiles",
		component: resolve => require(['@/page/teacher/TeacherFiles'], resolve),

	},
	//综合校情
	{
		path: '/', 
		component: resolve => require(['@/page/smartSituation'], resolve)
	}]
})