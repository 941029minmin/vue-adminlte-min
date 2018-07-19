// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill" //引入es5/6语法识别
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

import 'bootstrap'
import 'jquery-slimscroll'
import './assets/js/adminlte.min.js'
import './assets/js/demo.js'
import echarts from './router'
import './assets/js/app.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'ionicons/css/ionicons.min.css'
import './assets/css/AdminLTE.min.css'
import './assets/css/skins/_all-skins.min.css'
import './assets/css/main.css'


Vue.use(iView);
// import { getTest } from "@/api/index";
// import './assets/js/jquery-chained/jquery.chained.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})