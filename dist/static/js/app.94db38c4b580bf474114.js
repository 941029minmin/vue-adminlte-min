webpackJsonp([8],{

/***/ "+skl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "24P2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2eDF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3yOa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"main-sidebar sidebar-dark-primary elevation-4"},[_c('section',{staticClass:"sidebar"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"sidebar-menu"},[_c('li',{staticClass:"treeview active"},[_c('router-link',{attrs:{"to":{ path:'/' }}},[_c('i',{staticClass:"glyphicon glyphicon-home"}),_vm._v(" "),_c('span',[_vm._v("综合校情")])])],1),_vm._v(" "),_c('li',{staticClass:"treeview"},[_vm._m(1),_vm._v(" "),_c('ul',{staticClass:"treeview-menu"},[_c('li',[_c('router-link',{attrs:{"to":"/research/scientific"}},[_c('i',{staticClass:"fa fa-circle-o"}),_vm._v("科研信息总览")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/research/achievement"}},[_c('i',{staticClass:"fa fa-circle-o"}),_vm._v("科研成果分析")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/research/recommend"}},[_c('i',{staticClass:"fa fa-circle-o"}),_vm._v("科研信息推荐")])],1)])]),_vm._v(" "),_c('li',{staticClass:"treeview"},[_vm._m(2),_vm._v(" "),_c('ul',{staticClass:"treeview-menu"},[_c('li',[_c('router-link',{attrs:{"to":"/teacher/TeacherPortrait"}},[_c('i',{staticClass:"fa fa-circle-o"}),_vm._v("教职工群体画像")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/teacher/TeacherFiles"}},[_c('i',{staticClass:"fa fa-circle-o"}),_vm._v("教师档案")])],1)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-panel"},[_c('div',{staticClass:"pull-left image"},[_c('img',{staticClass:"img-circle",attrs:{"src":__webpack_require__("vMYC"),"alt":"User Image"}})]),_vm._v(" "),_c('div',{staticClass:"pull-left info"},[_c('p',[_vm._v("张三")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-circle text-success"}),_vm._v("在线")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-files-o"}),_vm._v(" "),_c('span',[_vm._v("科研分析")]),_vm._v(" "),_c('span',{staticClass:"pull-right-container"},[_c('i',{staticClass:"fa fa-angle-left pull-right"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-th"}),_vm._v(" "),_c('span',[_vm._v("教师画像")]),_vm._v(" "),_c('span',{staticClass:"pull-right-container"},[_c('i',{staticClass:"fa fa-angle-left pull-right"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5608":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
$(function () {
  'use strict';

  /**
   * Get access to plugins
   */

  $('[data-toggle="control-sidebar"]').controlSidebar();
  $('[data-toggle="push-menu"]').pushMenu();

  var $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu');
  var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar');
  var $layout = $('body').data('lte.layout');

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var mySkins = ['skin-blue', 'skin-black', 'skin-red', 'skin-yellow', 'skin-purple', 'skin-green', 'skin-blue-light', 'skin-black-light', 'skin-red-light', 'skin-yellow-light', 'skin-purple-light', 'skin-green-light'];

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(name);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(name, val);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function changeLayout(cls) {
    $('body').toggleClass(cls);
    $layout.fixSidebar();
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      $pushMenu.expandOnHover();
      $layout.activate();
    }
    $controlSidebar.fix();
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i]);
    });

    $('body').addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp);

    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob')) return;
      e.preventDefault();
      changeSkin($(this).data('skin'));
    });

    // Add the layout manager
    $('[data-layout]').on('click', function () {
      changeLayout($(this).data('layout'));
    });

    $('[data-controlsidebar]').on('click', function () {
      changeLayout($(this).data('controlsidebar'));
      var slide = !$controlSidebar.options.slide;

      $controlSidebar.options.slide = slide;
      if (!slide) $('.control-sidebar').removeClass('control-sidebar-open');
    });

    $('[data-sidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('.control-sidebar');
      if ($sidebar.hasClass('control-sidebar-dark')) {
        $sidebar.removeClass('control-sidebar-dark');
        $sidebar.addClass('control-sidebar-light');
      } else {
        $sidebar.removeClass('control-sidebar-light');
        $sidebar.addClass('control-sidebar-dark');
      }
    });

    $('[data-enable="expandOnHover"]').on('click', function () {
      $(this).attr('disabled', true);
      $pushMenu.expandOnHover();
      if (!$('body').hasClass('sidebar-collapse')) $('[data-layout="sidebar-collapse"]').click();
    });

    //  Reset options
    if ($('body').hasClass('fixed')) {
      $('[data-layout="fixed"]').attr('checked', 'checked');
    }
    if ($('body').hasClass('layout-boxed')) {
      $('[data-layout="layout-boxed"]').attr('checked', 'checked');
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $('[data-layout="sidebar-collapse"]').attr('checked', 'checked');
    }
  }

  // Create the new tab
  var $tabPane = $('<div />', {
    'id': 'control-sidebar-theme-demo-options-tab',
    'class': 'tab-pane active'
  });

  // Create the tab button
  var $tabButton = $('<li />', { 'class': 'active' }).html('<a href=\'#control-sidebar-theme-demo-options-tab\' data-toggle=\'tab\'>' + '<i class="fa fa-wrench"></i>' + '</a>');

  // Add the tab button to the right sidebar tabs
  $('[href="#control-sidebar-home-tab"]').parent().before($tabButton);

  // Create the menu
  var $demoSettings = $('<div />');

  // Layout options
  $demoSettings.append('<h4 class="control-sidebar-heading">' + 'Layout Options' + '</h4>'
  // Fixed layout
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-layout="fixed"class="pull-right"/> ' + 'Fixed layout' + '</label>' + '<p>Activate the fixed layout. You can\'t use fixed and boxed layouts together</p>' + '</div>'
  // Boxed layout
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-layout="layout-boxed" class="pull-right"/> ' + 'Boxed Layout' + '</label>' + '<p>Activate the boxed layout</p>' + '</div>'
  // Sidebar Toggle
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> ' + 'Toggle Sidebar' + '</label>' + '<p>Toggle the left sidebar\'s state (open or collapse)</p>' + '</div>'
  // Sidebar mini expand on hover toggle
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-enable="expandOnHover"class="pull-right"/> ' + 'Sidebar Expand on Hover' + '</label>' + '<p>Let the sidebar mini expand on hover</p>' + '</div>'
  // Control Sidebar Toggle
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> ' + 'Toggle Right Sidebar Slide' + '</label>' + '<p>Toggle between slide over content and push content effects</p>' + '</div>'
  // Control Sidebar Skin Toggle
  + '<div class="form-group">' + '<label class="control-sidebar-subheading">' + '<input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> ' + 'Toggle Right Sidebar Skin' + '</label>' + '<p>Toggle between dark and light skins for the right sidebar</p>' + '</div>');
  var $skinsList = $('<ul />', { 'class': 'list-unstyled clearfix' });

  // Dark sidebar skins
  var $skinBlue = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Blue</p>');
  $skinsList.append($skinBlue);
  var $skinBlack = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Black</p>');
  $skinsList.append($skinBlack);
  var $skinPurple = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Purple</p>');
  $skinsList.append($skinPurple);
  var $skinGreen = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Green</p>');
  $skinsList.append($skinGreen);
  var $skinRed = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Red</p>');
  $skinsList.append($skinRed);
  var $skinYellow = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin">Yellow</p>');
  $skinsList.append($skinYellow);

  // Light sidebar skins
  var $skinBlueLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Blue Light</p>');
  $skinsList.append($skinBlueLight);
  var $skinBlackLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Black Light</p>');
  $skinsList.append($skinBlackLight);
  var $skinPurpleLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Purple Light</p>');
  $skinsList.append($skinPurpleLight);
  var $skinGreenLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Green Light</p>');
  $skinsList.append($skinGreenLight);
  var $skinRedLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Red Light</p>');
  $skinsList.append($skinRedLight);
  var $skinYellowLight = $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' }).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover">' + '<div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div>' + '<div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div>' + '</a>' + '<p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>');
  $skinsList.append($skinYellowLight);

  $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>');
  $demoSettings.append($skinsList);

  $tabPane.append($demoSettings);
  $('#control-sidebar-home-tab').after($tabPane);

  setup();

  $('[data-toggle="tooltip"]').tooltip();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "5W1q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8eSV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9h6Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Cz8s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("wqBJ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ccb4e60_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("yyxi");
function injectStyle (ssrContext) {
  __webpack_require__("P180")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ccb4e60_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Hzor":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JSdg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('v-header'),_vm._v(" "),_c('v-menu'),_vm._v(" "),_c('div',{staticClass:"content-wrapper"},[_c('router-view')],1),_vm._v(" "),_vm._m(0)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"main-footer"},[_c('strong',[_vm._v("版权所有 © 2018 浙江曙光信息技术有限公司 ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Jmt5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75ac3a6c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("JSdg");
function injectStyle (ssrContext) {
  __webpack_require__("Hzor")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75ac3a6c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("7t+N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap__ = __webpack_require__("gNGx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_slimscroll__ = __webpack_require__("DBzq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_adminlte_min_js__ = __webpack_require__("ZnsW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_js_adminlte_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_js_adminlte_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_demo_js__ = __webpack_require__("5608");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_demo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_js_demo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_app_js__ = __webpack_require__("x2bO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_js_app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_iview__ = __webpack_require__("BTaQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_iview_dist_styles_iview_css__ = __webpack_require__("+skl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_css__ = __webpack_require__("Jmt5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_css__ = __webpack_require__("5W1q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionicons_css_ionicons_min_css__ = __webpack_require__("24P2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionicons_css_ionicons_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ionicons_css_ionicons_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_css_AdminLTE_min_css__ = __webpack_require__("9h6Z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_css_AdminLTE_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__assets_css_AdminLTE_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_css_skins_all_skins_min_css__ = __webpack_require__("2eDF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_css_skins_all_skins_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_css_skins_all_skins_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9_iview___default.a);
// import { getTest } from "@/api/index";
// import './assets/js/jquery-chained/jquery.chained.js'
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "P180":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	routes: [{
		path: '/research',
		component: resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Sob5")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/research/scientific',
		component: resolve => __webpack_require__.e/* require */(1/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Sob5")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/research/achievement',
		component: resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Xqav")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/research/recommend',
		component: resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("CNPS")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/research/scientific2',
		component: resolve => __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("pgcC")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	},
	/**
  * 教师
  */
	{
		path: '/teacher',
		component: resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("l0eI")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/teacher/teacherPortrait',
		component: resolve => __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("l0eI")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: '/teacher/TeacherFiles',
		params: {
			teacherID: "222"
		},
		name: "TeacherFiles",
		component: resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("OvD6")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)

	},
	//综合校情
	{
		path: '/',
		component: resolve => __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("5oJb")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}]
}));

/***/ }),

/***/ "ZnsW":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.2
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");+function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          g = e.data(c);if (!g) {
        var h = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, g = new f(e, h));
      }if ("string" == typeof g) {
        if (void 0 === g[b]) throw new Error("No method named " + b);g[b]();
      }
    });
  }var c = "lte.boxrefresh",
      d = { source: "", params: {}, trigger: ".refresh-btn", content: ".box-body", loadInContent: !0, responseType: "", overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>', onLoadStart: function () {}, onLoadDone: function (a) {
      return a;
    } },
      e = { data: '[data-widget="box-refresh"]' },
      f = function (b, c) {
    if (this.element = b, this.options = c, this.$overlay = a(c.overlay), "" === c.source) throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(), this.load();
  };f.prototype.load = function () {
    this._addOverlay(), this.options.onLoadStart.call(a(this)), a.get(this.options.source, this.options.params, function (b) {
      this.options.loadInContent && a(this.options.content).html(b), this.options.onLoadDone.call(a(this), b), this._removeOverlay();
    }.bind(this), "" !== this.options.responseType && this.options.responseType);
  }, f.prototype._setUpListeners = function () {
    a(this.element).on("click", e.trigger, function (a) {
      a && a.preventDefault(), this.load();
    }.bind(this));
  }, f.prototype._addOverlay = function () {
    a(this.element).append(this.$overlay);
  }, f.prototype._removeOverlay = function () {
    a(this.element).remove(this.$overlay);
  };var g = a.fn.boxRefresh;a.fn.boxRefresh = b, a.fn.boxRefresh.Constructor = f, a.fn.boxRefresh.noConflict = function () {
    return a.fn.boxRefresh = g, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);if (!f) {
        var g = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, f = new h(e, g));
      }if ("string" == typeof b) {
        if (void 0 === f[b]) throw new Error("No method named " + b);f[b]();
      }
    });
  }var c = "lte.boxwidget",
      d = { animationSpeed: 500, collapseTrigger: '[data-widget="collapse"]', removeTrigger: '[data-widget="remove"]', collapseIcon: "fa-minus", expandIcon: "fa-plus", removeIcon: "fa-times" },
      e = { data: ".box", collapsed: ".collapsed-box", header: ".box-header", body: ".box-body", footer: ".box-footer", tools: ".box-tools" },
      f = { collapsed: "collapsed-box" },
      g = { collapsed: "collapsed.boxwidget", expanded: "expanded.boxwidget", removed: "removed.boxwidget" },
      h = function (a, b) {
    this.element = a, this.options = b, this._setUpListeners();
  };h.prototype.toggle = function () {
    a(this.element).is(e.collapsed) ? this.expand() : this.collapse();
  }, h.prototype.expand = function () {
    var b = a.Event(g.expanded),
        c = this.options.collapseIcon,
        d = this.options.expandIcon;a(this.element).removeClass(f.collapsed), a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + d).removeClass(d).addClass(c), a(this.element).children(e.body + ", " + e.footer).slideDown(this.options.animationSpeed, function () {
      a(this.element).trigger(b);
    }.bind(this));
  }, h.prototype.collapse = function () {
    var b = a.Event(g.collapsed),
        c = this.options.collapseIcon,
        d = this.options.expandIcon;a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + c).removeClass(c).addClass(d), a(this.element).children(e.body + ", " + e.footer).slideUp(this.options.animationSpeed, function () {
      a(this.element).addClass(f.collapsed), a(this.element).trigger(b);
    }.bind(this));
  }, h.prototype.remove = function () {
    var b = a.Event(g.removed);a(this.element).slideUp(this.options.animationSpeed, function () {
      a(this.element).trigger(b), a(this.element).remove();
    }.bind(this));
  }, h.prototype._setUpListeners = function () {
    var b = this;a(this.element).on("click", this.options.collapseTrigger, function (c) {
      return c && c.preventDefault(), b.toggle(a(this)), !1;
    }), a(this.element).on("click", this.options.removeTrigger, function (c) {
      return c && c.preventDefault(), b.remove(a(this)), !1;
    });
  };var i = a.fn.boxWidget;a.fn.boxWidget = b, a.fn.boxWidget.Constructor = h, a.fn.boxWidget.noConflict = function () {
    return a.fn.boxWidget = i, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);if (!f) {
        var g = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, f = new h(e, g));
      }"string" == typeof b && f.toggle();
    });
  }var c = "lte.controlsidebar",
      d = { slide: !0 },
      e = { sidebar: ".control-sidebar", data: '[data-toggle="control-sidebar"]', open: ".control-sidebar-open", bg: ".control-sidebar-bg", wrapper: ".wrapper", content: ".content-wrapper", boxed: ".layout-boxed" },
      f = { open: "control-sidebar-open", fixed: "fixed" },
      g = { collapsed: "collapsed.controlsidebar", expanded: "expanded.controlsidebar" },
      h = function (a, b) {
    this.element = a, this.options = b, this.hasBindedResize = !1, this.init();
  };h.prototype.init = function () {
    a(this.element).is(e.data) || a(this).on("click", this.toggle), this.fix(), a(window).resize(function () {
      this.fix();
    }.bind(this));
  }, h.prototype.toggle = function (b) {
    b && b.preventDefault(), this.fix(), a(e.sidebar).is(e.open) || a("body").is(e.open) ? this.collapse() : this.expand();
  }, h.prototype.expand = function () {
    this.options.slide ? a(e.sidebar).addClass(f.open) : a("body").addClass(f.open), a(this.element).trigger(a.Event(g.expanded));
  }, h.prototype.collapse = function () {
    a("body, " + e.sidebar).removeClass(f.open), a(this.element).trigger(a.Event(g.collapsed));
  }, h.prototype.fix = function () {
    a("body").is(e.boxed) && this._fixForBoxed(a(e.bg));
  }, h.prototype._fixForBoxed = function (b) {
    b.css({ position: "absolute", height: a(e.wrapper).height() });
  };var i = a.fn.controlSidebar;a.fn.controlSidebar = b, a.fn.controlSidebar.Constructor = h, a.fn.controlSidebar.noConflict = function () {
    return a.fn.controlSidebar = i, this;
  }, a(document).on("click", e.data, function (c) {
    c && c.preventDefault(), b.call(a(this), "toggle");
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data(c);e || d.data(c, e = new f(d)), "string" == typeof b && e.toggle(d);
    });
  }var c = "lte.directchat",
      d = { data: '[data-widget="chat-pane-toggle"]', box: ".direct-chat" },
      e = { open: "direct-chat-contacts-open" },
      f = function (a) {
    this.element = a;
  };f.prototype.toggle = function (a) {
    a.parents(d.box).first().toggleClass(e.open);
  };var g = a.fn.directChat;a.fn.directChat = b, a.fn.directChat.Constructor = f, a.fn.directChat.noConflict = function () {
    return a.fn.directChat = g, this;
  }, a(document).on("click", d.data, function (c) {
    c && c.preventDefault(), b.call(a(this), "toggle");
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);if (!f) {
        var h = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, f = new g(h));
      }if ("string" == typeof b) {
        if (void 0 === f[b]) throw new Error("No method named " + b);f[b]();
      }
    });
  }var c = "lte.layout",
      d = { slimscroll: !0, resetHeight: !0 },
      e = { wrapper: ".wrapper", contentWrapper: ".content-wrapper", layoutBoxed: ".layout-boxed", mainFooter: ".main-footer", mainHeader: ".main-header", sidebar: ".sidebar", controlSidebar: ".control-sidebar", fixed: ".fixed", sidebarMenu: ".sidebar-menu", logo: ".main-header .logo" },
      f = { fixed: "fixed", holdTransition: "hold-transition" },
      g = function (a) {
    this.options = a, this.bindedResize = !1, this.activate();
  };g.prototype.activate = function () {
    this.fix(), this.fixSidebar(), a("body").removeClass(f.holdTransition), this.options.resetHeight && a("body, html, " + e.wrapper).css({ height: "auto", "min-height": "100%" }), this.bindedResize || (a(window).resize(function () {
      this.fix(), this.fixSidebar(), a(e.logo + ", " + e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
        this.fix(), this.fixSidebar();
      }.bind(this));
    }.bind(this)), this.bindedResize = !0), a(e.sidebarMenu).on("expanded.tree", function () {
      this.fix(), this.fixSidebar();
    }.bind(this)), a(e.sidebarMenu).on("collapsed.tree", function () {
      this.fix(), this.fixSidebar();
    }.bind(this));
  }, g.prototype.fix = function () {
    a(e.layoutBoxed + " > " + e.wrapper).css("overflow", "hidden");var b = a(e.mainFooter).outerHeight() || 0,
        c = a(e.mainHeader).outerHeight() + b,
        d = a(window).height(),
        g = a(e.sidebar).height() || 0;if (a("body").hasClass(f.fixed)) a(e.contentWrapper).css("min-height", d - b);else {
      var h;d >= g ? (a(e.contentWrapper).css("min-height", d - c), h = d - c) : (a(e.contentWrapper).css("min-height", g), h = g);var i = a(e.controlSidebar);void 0 !== i && i.height() > h && a(e.contentWrapper).css("min-height", i.height());
    }
  }, g.prototype.fixSidebar = function () {
    if (!a("body").hasClass(f.fixed)) return void (void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({ destroy: !0 }).height("auto"));this.options.slimscroll && void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({ height: a(window).height() - a(e.mainHeader).height() + "px" });
  };var h = a.fn.layout;a.fn.layout = b, a.fn.layout.Constuctor = g, a.fn.layout.noConflict = function () {
    return a.fn.layout = h, this;
  }, a(window).on("load", function () {
    b.call(a("body"));
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);if (!f) {
        var g = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, f = new h(g));
      }"toggle" === b && f.toggle();
    });
  }var c = "lte.pushmenu",
      d = { collapseScreenSize: 767, expandOnHover: !1, expandTransitionDelay: 200 },
      e = { collapsed: ".sidebar-collapse", open: ".sidebar-open", mainSidebar: ".main-sidebar", contentWrapper: ".content-wrapper", searchInput: ".sidebar-form .form-control", button: '[data-toggle="push-menu"]', mini: ".sidebar-mini", expanded: ".sidebar-expanded-on-hover", layoutFixed: ".fixed" },
      f = { collapsed: "sidebar-collapse", open: "sidebar-open", mini: "sidebar-mini", expanded: "sidebar-expanded-on-hover", expandFeature: "sidebar-mini-expand-feature", layoutFixed: "fixed" },
      g = { expanded: "expanded.pushMenu", collapsed: "collapsed.pushMenu" },
      h = function (a) {
    this.options = a, this.init();
  };h.prototype.init = function () {
    (this.options.expandOnHover || a("body").is(e.mini + e.layoutFixed)) && (this.expandOnHover(), a("body").addClass(f.expandFeature)), a(e.contentWrapper).click(function () {
      a(window).width() <= this.options.collapseScreenSize && a("body").hasClass(f.open) && this.close();
    }.bind(this)), a(e.searchInput).click(function (a) {
      a.stopPropagation();
    });
  }, h.prototype.toggle = function () {
    var b = a(window).width(),
        c = !a("body").hasClass(f.collapsed);b <= this.options.collapseScreenSize && (c = a("body").hasClass(f.open)), c ? this.close() : this.open();
  }, h.prototype.open = function () {
    a(window).width() > this.options.collapseScreenSize ? a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)) : a("body").addClass(f.open).trigger(a.Event(g.expanded));
  }, h.prototype.close = function () {
    a(window).width() > this.options.collapseScreenSize ? a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)) : a("body").removeClass(f.open + " " + f.collapsed).trigger(a.Event(g.collapsed));
  }, h.prototype.expandOnHover = function () {
    a(e.mainSidebar).hover(function () {
      a("body").is(e.mini + e.collapsed) && a(window).width() > this.options.collapseScreenSize && this.expand();
    }.bind(this), function () {
      a("body").is(e.expanded) && this.collapse();
    }.bind(this));
  }, h.prototype.expand = function () {
    setTimeout(function () {
      a("body").removeClass(f.collapsed).addClass(f.expanded);
    }, this.options.expandTransitionDelay);
  }, h.prototype.collapse = function () {
    setTimeout(function () {
      a("body").removeClass(f.expanded).addClass(f.collapsed);
    }, this.options.expandTransitionDelay);
  };var i = a.fn.pushMenu;a.fn.pushMenu = b, a.fn.pushMenu.Constructor = h, a.fn.pushMenu.noConflict = function () {
    return a.fn.pushMenu = i, this;
  }, a(document).on("click", e.button, function (c) {
    c.preventDefault(), b.call(a(this), "toggle");
  }), a(window).on("load", function () {
    b.call(a(e.button));
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);if (!f) {
        var h = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, f = new g(e, h));
      }if ("string" == typeof f) {
        if (void 0 === f[b]) throw new Error("No method named " + b);f[b]();
      }
    });
  }var c = "lte.todolist",
      d = { onCheck: function (a) {
      return a;
    }, onUnCheck: function (a) {
      return a;
    } },
      e = { data: '[data-widget="todo-list"]' },
      f = { done: "done" },
      g = function (a, b) {
    this.element = a, this.options = b, this._setUpListeners();
  };g.prototype.toggle = function (a) {
    if (a.parents(e.li).first().toggleClass(f.done), !a.prop("checked")) return void this.unCheck(a);this.check(a);
  }, g.prototype.check = function (a) {
    this.options.onCheck.call(a);
  }, g.prototype.unCheck = function (a) {
    this.options.onUnCheck.call(a);
  }, g.prototype._setUpListeners = function () {
    var b = this;a(this.element).on("change ifChanged", "input:checkbox", function () {
      b.toggle(a(this));
    });
  };var h = a.fn.todoList;a.fn.todoList = b, a.fn.todoList.Constructor = g, a.fn.todoList.noConflict = function () {
    return a.fn.todoList = h, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var e = a(this);if (!e.data(c)) {
        var f = a.extend({}, d, e.data(), "object" == typeof b && b);e.data(c, new h(e, f));
      }
    });
  }var c = "lte.tree",
      d = { animationSpeed: 500, accordion: !0, followLink: !1, trigger: ".treeview a" },
      e = { tree: ".tree", treeview: ".treeview", treeviewMenu: ".treeview-menu", open: ".menu-open, .active", li: "li", data: '[data-widget="tree"]', active: ".active" },
      f = { open: "menu-open", tree: "tree" },
      g = { collapsed: "collapsed.tree", expanded: "expanded.tree" },
      h = function (b, c) {
    this.element = b, this.options = c, a(this.element).addClass(f.tree), a(e.treeview + e.active, this.element).addClass(f.open), this._setUpListeners();
  };h.prototype.toggle = function (a, b) {
    var c = a.next(e.treeviewMenu),
        d = a.parent(),
        g = d.hasClass(f.open);d.is(e.treeview) && (this.options.followLink && "#" !== a.attr("href") || b.preventDefault(), g ? this.collapse(c, d) : this.expand(c, d));
  }, h.prototype.expand = function (b, c) {
    var d = a.Event(g.expanded);if (this.options.accordion) {
      var h = c.siblings(e.open),
          i = h.children(e.treeviewMenu);this.collapse(i, h);
    }c.addClass(f.open), b.slideDown(this.options.animationSpeed, function () {
      a(this.element).trigger(d);
    }.bind(this));
  }, h.prototype.collapse = function (b, c) {
    var d = a.Event(g.collapsed);b.find(e.open).removeClass(f.open), c.removeClass(f.open), b.slideUp(this.options.animationSpeed, function () {
      b.find(e.open + " > " + e.treeview).slideUp(), a(this.element).trigger(d);
    }.bind(this));
  }, h.prototype._setUpListeners = function () {
    var b = this;a(this.element).on("click", this.options.trigger, function (c) {
      b.toggle(a(this), c);
    });
  };var i = a.fn.tree;a.fn.tree = b, a.fn.tree.Constructor = h, a.fn.tree.noConflict = function () {
    return a.fn.tree = i, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "ctpP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "vMYC":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAgICAgIDAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCACgAKADAREAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAAUGBwgBAwQCCf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAb/AAAAAB5AyYMmQAAAAAAAAGKQQRaRQOkseWNO06AAAAAAAKelIRFOI8nkcZORdcl4yAAAAADNPkcNI5xyk/iEQqN0sSX6JaAAAAACoRQ8jw3llSxZ0EflXhsF+y5wAAAAAfPMqiMk7i0BO5sEIYJGZ9CyYwAAAAAo4JxT4fBNw1BTHMaSRS4QAAAAABUQ5yv5Lw0SHRVEIaJcYugKoAAAB5PRXQY5X4sYd5Doki0IRO5IBNoAAABEwsm4q6exwiqcQ1TQLBZEfAAAAAEeDLJ2KyjUNh7GgYGuXBJWAAAAACPSNCcSsAhm05TiG4JJ9DBWAAAAACPCGzlEcRCPB7GBqk3FrgAAAAA5iHiPThOY6iFBpDnFgv0LAAAAAGoiwYQhiYN0WxLK5EUF5i7oAAABX4i0i4lAXSLCQBGOcXyOiuhIRbItIbAAAPlYaTUWhHaVcJfI9IQJ0GUNo7jnHkWAJ1H8AHyoOU1loR8iCM8hYbpIRDAC8KJxG83kkF3h5nyoOckkng8CeQ2RsbTeYNBkyaTnMm0kc+iR8qDBc08DaIuIbOw6yTiOzAGoDlOcybS+R/8QALBAAAQQCAAUEAgEFAQAAAAAABAECAwUABgcREhMwEBQgMRUhIyIlMjZAQf/aAAgBAQABBQLwqvLEVFTOf/BabJTU6H8Ta6RhHE61WU3bLUqYHc7UNNW3YCeKE0SfGyMf5Nw3h8ZJBRBEsksjUWTraPDNIizPjcKZC1azeiw49VQjs+K+toqWsuDnqS2V2d5edcBKdOPrjViMpP47CkICVncjbrezGCs1WyLOD8PE8rk42JY288i/z1zkmQMajXQsXDwYnONrZQ5myy93hNK5fFxBY8vZTyHS+g7HPko68uJI+bUc5UwlepTIGTK2jmW907XH6+L4dvC91u9jRoULID7MmtaKOv5G1GAbu8MjotvrJ8YWOY2drOuo111kd4rr/cHCivdtLGPuA68ZBLTX3dIlDOgjqlCp0Ij1o0g8g92i7JX64AGcHYQfNVRPTdxXCLAUOaMUiT20MfTGq/qRhVXGw5ytlqWD1Gua8MZa7Nw+12MHQdbm1mi+e1O6ItdOeWJsoBFnRx1DQqn8UHzjdn3kqouFzwjZ3YSB9Toy/fRVZjyvBs0KTVutu7Fjl1IkhEM3cGbj5VY38lykeXDPkfNCdQg7dX4dmlSKtrlfDb2JKCiEv7kn6hXupk6JM32Ab0KBlZkPfZOCMgYfh2dvVUyST+1ks7iYX7Wxa90IthIj2TNcj+a5OkzHajUOsCvDLKyCOztHGxrIxioncdD20kK6HpaBf0w2MkKpZJMlYIZeFgBRV4nge9kbbOyFNR8LH5IBExZ51SKYhI7AV/U0+Frozx3xuOJXODPKIX5l7+CxhXEC4kwm6sDlou6oNq+aKCn2ZxdhbN/hhnryAwbAWeJIu/l8OxsUdZzmiKLr5dZ4g+5Vrmvb8XKvU52c81tP7XYQNmHt6j25SJOS7ZJq+jahZpDhdo9vCRcpbPc5znI1Eb08srLu1rVruJMmV2zUtmvq77d6VHVBW9XXHKIydtcJJXpckIeWxOl1/cNu8LrmzLEYWMkRcRSZ9Zz54kmVu23lXlHcwXYOL6UOuSW2TMa1UkyQhGpb3CvXETnnTnTiszpRETHN+GuXUtKfHIyaPnkcck0okbAA1TqR8cuXh/smNXExn3Ua9Ncj+nLP/cVOXo76Yv70Sy95Uf/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8BSH//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/AUh//8QAQhAAAgEDAgEHCAcGBQUAAAAAAQIDAAQREiExBRMiMkFRYRAUMFJxgZHBI0JicqGx0SAkQ4KS4QYzNEBEVKKy0vD/2gAIAQEABj8C9Dk7AcTWRuDwP+yPnt6iOP4K9J/gKkjtLKWSPteQhM8OypebCCE7Iunh761z3rSY4RDq/AV1ugftt+TZrza+uzHKGbRlcDBOwz4UOZuY5cjUNLA7V0WB/wDsekl5K5Mfm+ZyLi44b/pTkyDXneQ7sa0F9I7RmmGcvnYCi4znvrTcIWUdWsr0T7aMKCOWSVl1XL7uQOAJ40GuJNcjx85J96Rs+juL2TrDoQJ60jcBTyM+p5CW1bitanrVxB9tBQOiOu2PwrOqjDJEMdktMydNB8QKDofaKW3HKbcmp6+XYfDeib2dbo68QTrjJXGeljb0XJ1qX0hVMqqeBZjpFNLJuzdFE7M9/kFcONADhXAGm1LkMNqlRRmPVlfCsRuy9hSuVIXy5TQdZ7Nz+fopYpmLxQqmmM9i6Qdq5vm+aiTqLjHkVUGWPAClZ0IHjQr20u/DjWSMHOc4qK1tgGkvkBhjPbzn96ufONPnV64eXTvgDgM+i6QzBDZpPJH2Ow6IDUIr3mpTcK3NDSE5p8ZXTini5QgcqvUEfzoXNnGVkHY6/I1BynccmB7Cc6IrpWxvvsRk44VIIuT53EezMBqH4ViaXzRx64NB4LhZOO44YpsMPo8Z3/WrXluLZLFIEiIPWdZdT/Aej5Q1f9LCY/cd/lVnPI2uZ33J4g77ew0kMC76F5w91RRGMNheNM9qcA9ZKt5UuZIonyzxr2jV+eKcQjVF2JNg1cQSwmZTEGXR0uaJ7D4GmMStCvXZixzv2nAqW15XuWzcTazMkiTpHtjpIh5xf6aW5sbqK8t36s0LB1+I9BuceSH/ABBDDznm+mK8x2xE4P50sscqtGelDL3Y7vZRznXI4z44paKEZ2owRWzXNmCSkZ2dM74VuDDuzijHybyVdPevtrlQBU8dWcVexS4muLpGa9n9ZiPyHZVtA6aY5CvP6Prgb71e8pWq3FlcwKZLeOJ9StL9RQr6us2BtQtbvR59dTNc3YTcKXwAmfAD0Fk2eMpT4inimOqa0bQSe1T1a5RsbUgXE0f0ergSpDY9+K5Ns5860jZ5fvOxY1a3gjxNoBY95G3yrHk0DjTNcTrbQwrqlkbhXOQ3CXELrlWXcGjLZXptFtQcK8YmQdgGCQR8aiueU+UvPlt+lbWiQiGJX9c7uWI7N/Q5PGKVGB/D51NCT/qYc796H+/kyO750qfWhLIR78j8/Lsc+NZkRW+8M0y24WKJ21sR3+yuePWuHJJ9nosHhLKifP5VydMT9FLqj/qGBU0vbjCe0130T2Md62oK/VoaFWEnu6INYR9vH9ajg5r6SbGl856223jVvar/AAUCn29vopPsyIfxqB7YfvUB1Qj7Q3H41AvLMkTT5JxCMKPCt6PN/GjBN0XXqN31ufdWnNdCbNRcpXA/drDaL7cg/T0TyyHSiDLGjAI9EJIO/WOK0g9I9lSRP2/5VESHJT6lHm1Hc1a12I+NYc7jtoEfnXMWMRcAgTTfUQH1jUFnD1IVxnvPaff6Eu7BEXdnbYCo4rW4EsY3Z0O2eGKKc7WpXfUN85zSPjDxt0qQscc6pGPyqXV63Gm4b0TjauaQnfjiuV4HP0s7xzIp46VGkn8R6A+Y2stxJ9vCr+BJo8ykFqO5RqPxaiZ7ua4J/hu+E/pqJmzISzaj76aQQHKDUHjIPD24qO2uEEQkVhHv1mH9qJgGWIPRqKUSAzkaj35A4U8atomQn6JvrD1hW/Cjgb088n8i1HNYXL20lumI5I9vbSWnLuiKQ7R367Kfvjs9tBkYOrbqw3B/aPtreuNWp+s2r/yrmzuD1/ZUF3AuE1l8Dsxg1byQsujAJPga55Yzzt4xRI4+PiaV4Y1s0G6SSZLfhikFxYtLKEGqRTp1/aCkdtMRIoA4242Ye0HegF2Re2j4isjsrPJ99JBjdrfrRt/IdqVOU7AOe2a2OP8Asf8A9qCW96qTH/jTfRv8G4+79jPlsFYYJjzj7xJrFBW4NkCpOcbKjqDuotjMcPQiP5mkbAOluB4Va/uxiFvrOpn1HL46K7DCjGwoSoxinXqyitF5amcD/kQ/MV9CGGOvrGMeHlzWluHZQjhu+fgHCCfpj3dopLqLoyDo3MHqP5D7T5DczPzFihxqHWcjiF/Wl0jCp0VHgKNbNv8AVFNa27bDaST5D0eainUkwv0bqL1kpJY21RyKGRu8Gm8DUcMQ1SzMERfE1DZR9W3TTnvPafeaasK/RNczG+biX63qjtP7F3NFdJCbdtCIVLamKlukR1Rtx9APGs91ebO2ZbBtH8jbrX//xAAnEAEAAgIBBAIDAAMBAQAAAAABABEhMUFRYXGRMIGhscEQ0fAg4f/aAAgBAQABPyH4QCgC00QElCw5P8Uq7x1giCZHT8+m8183Ti+5owI4F8F4q+YEXRQFWuEFghmU77mZUCoUCFXtEOfXaCVeI9sB/wAPE27+zabaHvH0dLsHo29J8jj1sCTYg4adt+IeDlzxzQ6hC3qpk/uZvbE31vrDI21y9w1vwv8A3Cho5tTVfqdachBiWi99sRFnkOljVKVj3fxvmI/SH9nsMbdUgszmyGEdcf3Gx5u5+J0OfUK6IVbydLIt8tohKikb1GxqHQ/L58xz4S7g8WUdjEeLGcDaO7n7z8VcL8Kye40NeZaITiBXa+o7AtXN/vuCqwOzNDT+5hLYOl2QcH6AZ/3OM6jq6doAVlwtZrCEIqAF3ATPh6+LDXYJV+TWFljmyxNEr7ipG8qKcVdPohoN4s4qXGbNEIDDIbFPqYYhBKnGpUcMurKwuMCLaZQ6FrQvK/FQIJA1kmOHHpIiYQDzyAtMUy6B6ycjnjZ4llYBWnp/TGpK4y3BZU22ETuOHFYu9IIORVC8YZj0zEyD219TJULA7bzyj/b6Sse3xnSDec7D4YuNaNyig/YQQmDxXgC4Lpy95YC/Jk8xE0qGl2ETRzNQ0z3phqNW2XlUoUMHOSDU7blMM1iDuAwYOU2VatdZm7cMjtY57fBSUWaLaz/hzaPJoWetPaXatUYSzZ0ophVRdN5ivqiHRtQJtxbVXqKIASm1VW64XGrYuWLG7l2qpZUqC1ig/wCW9szwjKGHTsa4jdCjttAFdAM3BaCu0rQLrDWLusfAxaBo42j+IgXas5CX2fUNlKvIJ9EUJF4pf7cl+LcFoFVIfXw9IfQJUp4TKAw0FtcRduC6id4HKAqLB8DFTiXMDwKIdVcqm6vPw56Ua4tv+IZRTFXbfhRxmE8Bdx3TKixyCrL9Qk9xG3T+KiWzxqmZcPzDSK8MVE5Z43w4I9HnLtMP3fxUltZ7ZCGtw9yy+6ROO8uuA/3FHNqpi65nII13XECptPROjFziZ4zWsTGdbrl9P9TM+jEDKhTq6zXo860y+34u/A/x/sIabhpKbU6ULllR6m2gXVg5Fl/6o8LNU/zOsQjQ6eZvz1Xebil8RMIL0zRBLTqj6vfmvjq7Az6xvYsvgma3aGKvdmzquIOaxXPdir9WIKHEC2W2dDO/U8WuspAwZsU+oXoyB6poCuNvELmjdbcvdZ+ED+2ADqrEak35jk7RAlYWg015lMDQ8WczEkwuw/6hILb37X7hpvp7GpU1kbjPW7c14dqrHSOme4Ij6T7PgrgLuu9p6joqtCPPov6mbFgsHuGvRHcpeqrdUHBASVj4RyW+cRcwAWKDk42jZ46nNCyt9JsSQsbJfos7rNvJ+pfL3vRBXQoxKdYuv6QRRmrYpDwjyMHGnBv9P12OoQ9hWYDqJ/62vIqZa83rN8Rl+Fd9rER5CU620y2JO+Hg7TKUAZ61fUCVpAKxZClV/Ys+rIdchQRHprJVdkeUYR+79G/hAZsW9UAUuw9y/EYtSVYfKy+lSpgcXPzZUHgLk8JR7H/w7XUt+ZlK02TOoHjE/DC49V0qUTXdvYlwhW5c4F8ReAmBfNh5ZgAg1Wq4TpM6onS1uh3XOZlJ61u+/M4cZpVO7UOIzuy0ayiWRt3qmdRnmMhkGVyPaEp0KGM4T+BlX+8LQ2eHY9P8ORq4BZq/wYAOVCQjgeCo9EcKWjjPE4gcdxxcTC3m/KQmJ2T9zTMRLONwYxV7nRMVwxF0kGtsGYtdi5hnP2bIQ4p9DsfUbuWVuUP4Ll6Ie9kp8v3izNGiMumnJ/ZTUqh9H+B/8nd8sS8xV+E5gjDiYMdL4ufuY54jhKCKreo/ccM7RUHVFPQnfoTf8jJ9T//aAAwDAQACAAMAAAAQAAAAEkgAAAAAAAkkAEAAAAAEgEEEgAAAAkAkgggAAAAkkEEkAAAAAgkEgAgAAAAkkEEkAAAAAAkgAEgAAAAEggAkgAAAAkkkEEAAAAEgkgEAAAAAkgkgAAAAAAggggAAAAAEkEgEAAAAAggAgEAAAAkkkEkkkAAAkAEkkgEgAAkggEAEkAgggkAAgAAkkkEEkgkgAggg/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPxBIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8QSH//xAAlEAEBAAICAgICAgMBAAAAAAABEQAhMUFRYXGBMLGRoRDB0SD/2gAIAQEAAT8Q/Cn8CEAKqugDAHgIUQoj4TFAVYG1cRoCLtqecdMAINEexPzWYkPEB7Sit9jGGcLA47XaHCuR1YwjRdyiIXp+8poNDisl2d1HNdDnCtIV7GumLaIhrtSAeE0aPbB7sI0cFUgI5MOIyCUvweQPh/IdbTUGAEfaFbei6sJPcSqFdJwZBCODVoapL5MFSD1VTa5feGFpVEIcgk283N/kBRA1RrnvvIZ1KdxEqMTA66Ss1OriHbydYsRwAB9yAgHOx4oCOz8QFyv5tMdg3KR6tuU4Je1d6wHAlULNTg0jgbPdAr+E23izgjTCGcMO3t7yly6QW2WcvGbo0ACJu+zrLjJIvcHyJ2OXyKjaTot/kxkXE76VpAOCAe83WG6b1YkNG6AH8Rx+GDFLyBU9vOBJv5FkQpUDtyXJqdF74xb7IJUT94U9hgAnuOGWALVNXU+3JBo2xCeMGsUE6AH9sHxpQ3rduVCHrHzlCA86LUeZgXFVC0KaECYb5WH4nd9iMVdona2q+cuIs1GFDiQK/wDcVraObOfjCsLAK2wofrvArslsx6iYgtQDToPfNzZ2IgN3Dl/Wa0oLNt5ioPYYQYSgE02N7MnL3IBHiNm9T6wISTXkIBCNE/EqAzjWEFtuBs7GLzwmKERoga947j9s0YvDWWOM9EI97NJnf2YaqiKNKMSLAvGMnEPqKp0Zqm80IRbupRUj8+5j1Ha8A8wrb9sNBIpOKKlJwJgeD+Io48X2+WHb+NxSM8Lxn8zgeC971XH2OysfkBdMx69UZBWB5hV4/WACvY1CvltySjmiiSLqll5MFO9AxokEQbMbRPQNXQ+Sc7xiPagqAQAlUNU4HPe/MkFHTQzAhRV12AfUHScB/Q6WB0QF2tnZ+CmPJSpcBe/8G5CSczHV2JwkXZkTyWqYgC6DkaOHmvnsEAj5B8lwbQ8Bwak30e8WSVD0KxP3ihKzzspSsDdMIfUaArNXR0Wfplmf6jg7BgNfYzUA4AWLIyOsKYCKgowbzECsGRWSGNKRdA7Bhf8A3PVI15knCMnzlbd8RV5tZtxBDD11vE4s75cgRH8eGbhAD0YsQ/O9Ib0OMU2NbHS8097wDjoCtvBxMqOvh8a94yUQuSBdl2AAbXNmMHlSUO/IxOMlvTrHodBZoGgYQfSeJStBN7Uax+ABBKzZbXquVz9WQmmu24gKYG1fGbktRwAIPpzWZcjZv+gfWUI7ZZ4nP1iRM2VgHC3jOWcQg54teOeMXIhZmktoafOFRBLiCgZUgz/WIlc1GmK91fiV1RgKBQr1qcYYJA2OuF3wHDJCT6RsPgv0xxEpoW6zWA1fUZq/zgNyXYraaSc47pYlTtMJpw+hDuwRMlTybzo0NwY3tUTE9YAETWUVHcEE5yOkK8HX3q/iuwWKcmmv1if5cgau1rq1vFQWUopQ1g1k3Dytyrp8YiAI5M1T5ecRlqKItV6HHkwDOXUgo6dt+DAsM19FLp18Ycy0+IFfJwushNjoSesVq+jz+IwLDRYHABtV0HbiB/iufAQ6Cm8bR0EJTQS61h/QkM9jbzTZgnNhH0A3P3kGnQCAMh4vWTOTo0REb3OnBEHLMCok4bzOcucegDuVTWTnWI0i0IjK0QOQemMiPtSr5/CoookvKwAeVy2zOB0dDzaU3gsBaUTNV1gePCkPRQ61s7zVN0avIfl3Anxk2jmT0Mv53HTki8yGJAUImc8ae82A0A65xhS4oKOknLjv7noyF5BPwDuctIDtT4NHzjUg9znho8JOPWaAhxsgdA5WUMqxygRHQXXnNzarohSFDTROS7xoDRkBjBToK7x3mJ0dIHeBM4VHBTq2J7uOXlUOA7UShvsSOaIRpqTxltdtA64+sMAWE74dv29ZO4wMZDFUQCJyYW53hea0T5fU7wA90YdiSI+R/wDR4o3BvS4gK9Xl9qc4DfdeDnOONBvZfwZpSYToNm8Jyd5qYJiWYeiGYAQF6FZM5S5hchkRGAAsLeRnBa2sqUx6v851jMXAoAQoEeHH7idMXgip5YyFAlG11MmFWHkYB/lxlVVSMk8TDEg2G7hB8hXY5GcbFzhTK70PRgrrMK3WmfW+8v8AlEP+gR/WSiVTxhbAnO8aYnAaIe/IOQK3W/g7wCx5QhBx2Yz8i82BlYC+McxlgoHUv/MMV5C5mF8pIU8YaFWwRI6oGouxxnTisi4q0feEAtDFu+c9k+MRtSqxEOS2sZxhXN+Z5yKatDxxi3Cvp574xabD6SV1iGd0gS2wk0g5rAkks7YvUt+whhUdavtv+8tFuPoDxYcTyAdjQLZwkVzCM+AMNoLbh7cYUZ3M+el8VcVmGh1s7Tbt+jI48anWKolYHOgXX3iNlv8ArHF8+cPkJ2f3kgtsjv5wRa55pjqBTv1jTJXqYl4XnKep299f3glyz6C8b6+ScLi2NBoA/pQ4Qmgx8xxEwNKglrqu/WUTFpzVXv7RjMu7V6+8Cs5TwdoT9YEPe4dB53v5LhUtV2jVXfbnGUf1iAk6rrk/3ho3CsFjL8LwzIssTyHxxcRLw8MKAjVGZxG67fnGycvRjbAbfgHOVjq6yW3Tv0F/5m8EF/LOjmxVUXzEfGM//9k="

/***/ }),

/***/ "wqBJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "x2bO":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.8
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}

/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 500,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before AdminLTE's app.js
  enableFastclick: false,
  //Control Sidebar Tree views
  enableControlTreeView: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions

  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true, $.AdminLTE.options, AdminLTEOptions);
  }

  //Easy access to options
  var o = $.AdminLTE.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.AdminLTE.layout.activate();

  //Enable sidebar tree view controls
  if (o.enableControlTreeView) {
    $.AdminLTE.tree('.sidebar');
  }

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector,
      container: 'body'
    });
  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });
  });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.AdminLTE.layout.activate()
   *        $.AdminLTE.layout.fix()
   *        $.AdminLTE.layout.fixSidebar()
   */

  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $('body, html, .wrapper').css('height', 'auto');
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      // Remove overflow from .wrapper if layout-boxed exists
      $(".layout-boxed > .wrapper").css('overflow', 'hidden');
      //Get window height and the wrapper height
      var footer_height = $('.main-footer').outerHeight() || 0;
      var neg = $('.main-header').outerHeight() + footer_height;
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height() || 0;
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - footer_height);
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth) $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }
      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({ destroy: true }).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({ destroy: true }).height("auto");
          //Add slimscroll
          $(".sidebar").slimScroll({
            height: $(window).height() - $(".main-header").height() + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.AdminLTE.options.screenSizes;

      //Enable sidebar toggle
      $(document).on('click', toggleBtn, function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > screenSizes.sm - 1) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
            if ($("body").hasClass('sidebar-open')) {
              $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
            } else {
              $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
            }
          }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= screenSizes.sm - 1 && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.AdminLTE.options.sidebarExpandOnHover || $('body').hasClass('fixed') && $('body').hasClass('sidebar-mini')) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini') && $("body").hasClass('sidebar-collapse') && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-expanded-on-hover') && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(document).off('click', menu + ' li a').on('click', menu + ' li a', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if (checkElement.is('.treeview-menu') && checkElement.is(':visible') && !$('body').hasClass('sidebar-collapse')) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if (checkElement.is('.treeview-menu') && !checkElement.is(':visible')) {
          //Get the parent menu
          var parent = $this.parents('ul').first();
          //Close all open menus within the parent
          var ul = parent.find('ul:visible').slideUp(animationSpeed);
          //Remove the menu-open class from the parent
          ul.removeClass('menu-open');
          //Get the parent li
          var parent_li = $this.parent("li");

          //Open the target menu and add the menu-open class
          checkElement.slideDown(animationSpeed, function () {
            //Add the class active to the parent li
            checkElement.addClass('menu-open');
            parent.find('li.active').removeClass('active');
            parent_li.addClass('active');
            //Fix the layout in case the sidebar stretches over the height of the window
            _this.layout.fix();
          });
        }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.AdminLTE.controlSidebar.activate(options)
   */
  $.AdminLTE.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.AdminLTE.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open') && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        if (_this.hasBindedResize) {
          return;
        }
        $(window).resize(function () {
          _this._fix(sidebar);
        });
        _this.hasBindedResize = true;
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first").removeClass(_this.icons.collapse).addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first").removeClass(_this.icons.open).addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }
  };
})(jQuery);

/*
 * EXPLICIT BOX CONTROLS
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 * @usage $("#box-widget").toggleBox();
 * @usage $("#box-widget").removeBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

  $.fn.toggleBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
    $.AdminLTE.boxWidget.collapse(button);
  };

  $.fn.removeBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.remove, this);
    $.AdminLTE.boxWidget.remove(button);
  };
})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {

  'use strict';

  $.fn.todolist = function (options) {
    // Render options
    var settings = $.extend({
      //When the user checks the input
      onCheck: function (ele) {
        return ele;
      },
      //When the user unchecks the input
      onUncheck: function (ele) {
        return ele;
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          if ($('input', ele).is(":checked")) {
            settings.onCheck.call(ele);
          } else {
            settings.onUncheck.call(ele);
          }
        });
      }
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N"), __webpack_require__("7t+N")))

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_vue__ = __webpack_require__("Cz8s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu_vue__ = __webpack_require__("zIkb");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'app',
	components: {
		'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header_vue__["a" /* default */],
		'v-menu': __WEBPACK_IMPORTED_MODULE_1__components_menu_vue__["a" /* default */]
	},
	created() {
		// this.$http.post('/api/getBoardList')
		//  .then(function (response) {
		//   console.log(response.data);
		//   alert('成功了');
		//  })
		//  .catch(function (code) {
		//   alert('失败了');
		//   console.log(code);
		//  });
	}
});

/***/ }),

/***/ "yyxi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"main-header"},[_c('a',{staticClass:"logo",attrs:{"href":"#"}},[_c('span',{staticClass:"logo-mini"},[_vm._v("大数据")]),_vm._v(" "),_c('span',{staticClass:"logo-lg"},[_vm._v("校园大数据")])]),_vm._v(" "),_c('nav',{staticClass:"navbar navbar-static-top",attrs:{"role":"navigation"}},[_c('a',{staticClass:"sidebar-toggle",attrs:{"href":"javascript:","data-toggle":"offcanvas","role":"button"}},[_c('span',{staticClass:"sr-only"},[_vm._v("切换")]),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"})]),_vm._v(" "),_c('div',{staticClass:"navbar-custom-menu"},[_c('ul',{staticClass:"nav navbar-nav"})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zIkb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__("ctpP");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0910f3d3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__("3yOa");
function injectStyle (ssrContext) {
  __webpack_require__("8eSV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0910f3d3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0910f3d3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["NHnr"]);