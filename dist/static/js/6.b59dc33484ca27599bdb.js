webpackJsonp([6],{Xqav:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{staticClass:"col-xs-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectProv,expression:"selectProv"}],staticClass:"form-control",attrs:{id:"prov"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectProv=a.target.multiple?e:e[0]},function(a){t.getProv()}]}},[e("option",{attrs:{value:""}},[t._v("选择校区")]),t._v(" "),t._l(t.district,function(a,v){return e("option",{key:v,domProps:{value:v}},[t._v(t._s(a.name))])})],2)]),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectCity,expression:"selectCity"}],staticClass:"form-control",attrs:{id:"city"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectCity=a.target.multiple?e:e[0]},function(a){t.getTeacher()}]}},[e("option",{attrs:{value:""}},[t._v("选择学院")]),t._v(" "),t._l(t.citys,function(a,v){return""!=t.selectProv?e("option",{key:v,domProps:{value:v}},[t._v(t._s(a.name))]):t._e()})],2)]),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("select",{staticClass:"form-control",attrs:{id:"teacher"}},[e("option",{attrs:{value:""}},[t._v("选择教师")]),t._v(" "),t._l(t.teachers,function(a,v){return""!=t.selectCity?e("option",{key:v},[t._v(t._s(a))]):t._e()})],2)]),t._v(" "),e("div",{staticClass:"col-xs-3 pull-right"},[e("input",{staticClass:"btn btn-primary",attrs:{id:"listSearch",type:"button",value:"submit"},on:{click:function(a){t.getSearch()}}})])])},staticRenderFns:[]};var s=e("VU/8")({data:function(){return{district:{130000:{name:"校本部",child:{130100:{name:"计算机学院",child:{130101:"梨花 ",130102:"李华",130104:"凯欣",130105:"加特"}},130200:{name:"文学院",child:{130104:"凯欣",130105:"加特"}},130300:{name:"化学化工学院",child:{130102:"李华",130105:"加特"}}}},140000:{name:"第二校区",child:{140100:{name:"管理学院",child:{130101:"梨花 ",130104:"凯欣"}},140200:{name:"设计艺术学院",child:[]},140300:{name:"建筑学院",child:{130101:"梨花 ",130102:"李华",130104:"凯欣",130105:"加特"}},140400:{name:"外语学院",child:{130101:"梨花 ",130102:"李华",130104:"凯欣",130105:"加特"}},140500:{name:"生物学院",child:{130101:"梨花 ",130102:"李华",130104:"凯欣",130105:"加特"}}}}},citys:{},teachers:{},selectProv:"",selectCity:"",selectTeacher:"",objSearch:{}}},components:{},mounted:function(){},methods:{getProv:function(t){this.citys=this.district[this.selectProv].child,this.selectCity=""},getTeacher:function(t){this.teachers=this.district[this.selectProv].child[this.selectCity].child},getSearch:function(){this.objSearch={selectProv:this.selectProv,selectCity:this.selectCity,selectTeacher:this.selectTeacher},this.$emit("searchEvent",this.selectProv,this.selectCity,this.selectTeacher)}}},v,!1,function(t){e("sD4z")},"data-v-98d9ef38",null).exports,_=e("XLwt"),i={data:function(){return{selectCollege:"",colleges:["校本部","安吉校区"],selectUnit:"",units:["单位1","单位2"],selectTeacher:"",teachers:["教师1","教师2"]}},components:{datapick:s},mounted:function(){this.drawTeaCharts3(),this.drawTeaCharts4()},methods:{drawTeaCharts1:function(){_.init(document.getElementById("TeaCharts1")).setOption({color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"4%",right:"8%",bottom:"10%",top:"5%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],min:0,max:100,interval:20,axisLabel:{formatter:"{value}%",textStyle:{fontWeight:"80"}}},yAxis:{type:"category",data:["设计艺术学院","文学院","管理学院","计算机学院","广播编导学院","生物学院","思政学院"],axisLabel:{show:!0,interval:0,rotate:0,margin:10,inside:!1,textStyle:{fontWeight:"50"}}},series:[{type:"bar",label:{normal:{show:!0,formatter:function(t){var a=t.data;return 0==a?"":a},color:"#fff"}},data:[22,33,44,55,66,77,88]}]})},drawTeaCharts2:function(){_.init(document.getElementById("TeaCharts2")).setOption({color:["#59C4E6","#7BD9A5","#4EA397","#E6B600","#93B7E3","#E60EF2","#7560BA","#EDF41A","#B8D2C7","#D34E21","#EDAD5A","#2AC1BC","#8DFCF8"],tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{data:["人事处","文学院","管理学院","电视艺术学院","播音主持学院","马克思主义学院（社会科学部）","新闻与传播学院","新媒体学院","设计艺术学院"],bottom:20,width:"80%"},grid:{top:"5%",bottom:"33%"},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisPointer:{label:{formatter:function(t){return t.value+" 访问量"+(t.seriesData.length?"："+t.seriesData[0].data:"")}}},data:["2013","2014","2015","2016","2017","2018"]}],yAxis:[{type:"value",splitNumber:4,axisLabel:{formatter:"{value}"},name:"数量",nameLocation:"middle",nameGap:"45",splitLine:{lineStyle:{color:"#ccc",type:"dashed"}}}],series:[{name:"人事处",type:"line",smooth:!0,data:[187,82,172,176,180,195]},{name:"文学院",type:"line",smooth:!0,data:[0,0,1,2,0,1]},{name:"管理学院",type:"line",smooth:!0,data:[35,16,41,37,39,35]},{name:"电视艺术学院",type:"line",smooth:!0,data:[0,0,0,0,0,0]},{name:"播音主持学院",type:"line",smooth:!0,data:[226,117,210,195,224,271]},{name:"马克思主义学院（社会科学部）",type:"line",smooth:!0,data:[258,150,225,247,262,303]},{name:"新闻与传播学院",type:"line",smooth:!0,data:[0,0,0,0,0,0]},{name:"新媒体学院",type:"line",smooth:!0,data:[0,0,0,0,0,0]},{name:"设计艺术学院",type:"line",smooth:!0,data:[380,214,341,356,373,411]}]})},drawTeaCharts3:function(){_.init(document.getElementById("TeaCharts3")).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:["共建国家大学科技园","技术开发","共同承担国家科技计划重大课题","共建研发机构","共同培养高层次人才","产学研合作"],height:"30",width:"95%",top:"190",type:"scroll"},series:[{name:"职称分布",type:"pie",radius:"60%",center:["50%","35%"],labelLine:{normal:{show:!1}},label:{normal:{show:!1}},data:[{value:400,itemStyle:{normal:{color:"#7bd9a5"}},name:"共建国家大学科技园"},{value:150,itemStyle:{normal:{color:"#8597f2"}},name:"技术开发"},{value:180,itemStyle:{normal:{color:"#22c3aa"}},name:"共同承担国家科技计划重大课题"},{value:250,itemStyle:{normal:{color:"#1af4e2"}},name:"共建研发机构"},{value:250,itemStyle:{normal:{color:"#1a4fe2"}},name:"共同培养高层次人才"},{value:250,itemStyle:{normal:{color:"#1a4fe2"}},name:"产学研合作"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},drawTeaCharts4:function(){_.init(document.getElementById("TeaCharts4")).setOption({tooltip:{trigger:"axis"},legend:{data:["教学工作","科研投入","讲师","助教","教授"],top:220},grid:{left:"3%",right:"4%",top:"5%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["2013","2014","2015","2016","2017","2018"]}],yAxis:[{type:"value"}],series:[{name:"教学工作",type:"line",stack:"总量",areaStyle:{normal:{}},data:[.2,.3,.5,.6,.4,.6]},{name:"科研投入",type:"line",stack:"总量",areaStyle:{normal:{}},data:[.4,.6,.4,.7,.3,.2]},{name:"讲师",type:"line",stack:"总量",areaStyle:{normal:{}},data:[.5,.2,.7,.5,.3,.6]},{name:"助教",type:"line",stack:"总量",areaStyle:{normal:{}},data:[.2,.3,.5,.7,.4,.8]},{name:"教授",type:"line",stack:"总量",areaStyle:{normal:{}},data:[.1,.4,.6,.8,.2,.5]}]})},searchEvent:function(t,a,e){console.log(t+","+a+","+e),this.drawTeaCharts2()}},created:function(){}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("section",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-success"},[t._m(0),t._v(" "),e("div",{staticClass:"box-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-3"},[e("Select",{attrs:{placeholder:"请选择校区"},model:{value:t.selectCollege,callback:function(a){t.selectCollege=a},expression:"selectCollege"}},t._l(t.colleges,function(a){return e("Option",{key:a,attrs:{value:a}},[t._v(t._s(a))])}))],1),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("Select",{attrs:{placeholder:"请选择单位"},model:{value:t.selectUnit,callback:function(a){t.selectUnit=a},expression:"selectUnit"}},t._l(t.units,function(a){return e("Option",{key:a,attrs:{value:a}},[t._v(t._s(a))])}))],1),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("搜索")])],1)])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"box box-success"},[t._m(4),t._v(" "),e("div",{staticClass:"box-body"},[e("div",{staticClass:"chart"},[e("div",{style:{height:"250px"},attrs:{id:"TeaCharts4"}})])])])]),t._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"box box-success"},[t._m(5),t._v(" "),e("div",{staticClass:"box-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"chart"},[e("div",{style:{height:"250px"},attrs:{id:"TeaCharts3"}})])])])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[this._v("搜索")]),this._v(" "),a("div",{staticClass:"box-tools pull-right"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[a("i",{staticClass:"fa fa-minus"})]),this._v(" "),a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[a("i",{staticClass:"fa fa-times"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-success"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("研究成果展示")]),t._v(" "),e("div",{staticClass:"box-tools pull-right"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[e("i",{staticClass:"fa fa-times"})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-striped",attrs:{id:"example1"}},[e("thead",[e("tr",[e("th",[t._v("科研单位")]),t._v(" "),e("th",[t._v("科研名称")]),t._v(" "),e("th",[t._v("当前状态")]),t._v(" "),e("th",[t._v("学科带头人")]),t._v(" "),e("th",[t._v("科研组成员")]),t._v(" "),e("th",[t._v("开始时间")]),t._v(" "),e("th",[t._v("结束时间")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-success"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("科研影响力排名")]),t._v(" "),e("div",{staticClass:"box-tools pull-right"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[e("i",{staticClass:"fa fa-times"})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-striped",attrs:{id:"example1"}},[e("thead",[e("tr",[e("th",[t._v("排名")]),t._v(" "),e("th",[t._v("影响力指数")]),t._v(" "),e("th",[t._v("单位名称")]),t._v(" "),e("th",[t._v("成果数量")]),t._v(" "),e("th",[t._v("国内期刊论文数量")]),t._v(" "),e("th",[t._v("被引频次（万次）")]),t._v(" "),e("th",[t._v("引占率")]),t._v(" "),e("th",[t._v("下载频次（万）")]),t._v(" "),e("th",[t._v("热门论文数量")]),t._v(" "),e("th",[t._v("国内专利数量")]),t._v(" "),e("th",[t._v("WOS期刊发文数量")]),t._v(" "),e("th",[t._v("国内期刊论文数量")]),t._v(" "),e("th",[t._v("专注发表数量")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("98")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("123214")]),t._v(" "),e("th",[t._v("1324231")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")])]),t._v(" "),e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("98")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("123214")]),t._v(" "),e("th",[t._v("1324231")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")])]),t._v(" "),e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("98")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("123214")]),t._v(" "),e("th",[t._v("1324231")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")])]),t._v(" "),e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("98")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("123214")]),t._v(" "),e("th",[t._v("1324231")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")])]),t._v(" "),e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("98")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("123214")]),t._v(" "),e("th",[t._v("1324231")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")]),t._v(" "),e("th",[t._v("134124")]),t._v(" "),e("th",[t._v("234124")]),t._v(" "),e("th",[t._v("546355")]),t._v(" "),e("th",[t._v("234623")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-success"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("重点学科")]),t._v(" "),e("div",{staticClass:"box-tools pull-right"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[e("i",{staticClass:"fa fa-times"})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-striped",attrs:{id:"example1"}},[e("thead",[e("tr",[e("th",[t._v("科研单位")]),t._v(" "),e("th",[t._v("科研名称")]),t._v(" "),e("th",[t._v("学科带头人")]),t._v(" "),e("th",[t._v("科研组成员")]),t._v(" "),e("th",[t._v("开始时间")]),t._v(" "),e("th",[t._v("结束时间")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])]),t._v(" "),e("tr",[e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("张薇")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")]),t._v(" "),e("th",[t._v("2015年9月")]),t._v(" "),e("th",[t._v("2015年12月")])])])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[this._v("科研影响因素")]),this._v(" "),a("div",{staticClass:"box-tools pull-right"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[a("i",{staticClass:"fa fa-minus"})]),this._v(" "),a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[a("i",{staticClass:"fa fa-times"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[this._v("科研合作构成")]),this._v(" "),a("div",{staticClass:"box-tools pull-right"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[a("i",{staticClass:"fa fa-minus"})]),this._v(" "),a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[a("i",{staticClass:"fa fa-times"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-primary"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("科研合作单位")]),t._v(" "),e("div",{staticClass:"box-tools pull-right"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[e("i",{staticClass:"fa fa-times"})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-striped",attrs:{id:"example1"}},[e("thead",[e("tr",[e("th",[t._v("合作单位")]),t._v(" "),e("th",[t._v("合作方式")]),t._v(" "),e("th",[t._v("科研名称")]),t._v(" "),e("th",[t._v("当前状态")]),t._v(" "),e("th",[t._v("科研带头人")]),t._v(" "),e("th",[t._v("科研组成员")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("中国十五治金有限公司")]),t._v(" "),e("th",[t._v("共建国家大学科技园")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("周公礼")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")])]),t._v(" "),e("tr",[e("th",[t._v("中国十五治金有限公司")]),t._v(" "),e("th",[t._v("共建国家大学科技园")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("周公礼")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")])]),t._v(" "),e("tr",[e("th",[t._v("中国十五治金有限公司")]),t._v(" "),e("th",[t._v("共建国家大学科技园")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("周公礼")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")])]),t._v(" "),e("tr",[e("th",[t._v("中国十五治金有限公司")]),t._v(" "),e("th",[t._v("共建国家大学科技园")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("周公礼")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")])]),t._v(" "),e("tr",[e("th",[t._v("中国十五治金有限公司")]),t._v(" "),e("th",[t._v("共建国家大学科技园")]),t._v(" "),e("th",[t._v("数字音乐在数字娱乐中的重要地位")]),t._v(" "),e("th",[t._v("已完结")]),t._v(" "),e("th",[t._v("周公礼")]),t._v(" "),e("th",[t._v("秦丽娜:1234567;李伟:1345678;李华:1456789")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-success"},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("单位科研产出TOP10")]),t._v(" "),e("div",{staticClass:"box-tools pull-right"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"remove"}},[e("i",{staticClass:"fa fa-times"})])])]),t._v(" "),e("div",{staticClass:"box-body"},[e("table",{staticClass:"table table-bordered table-striped",attrs:{id:"example1"}},[e("thead",[e("tr",[e("th",[t._v("排名")]),t._v(" "),e("th",[t._v("单位名称")]),t._v(" "),e("th",[t._v("科研产出总量")]),t._v(" "),e("th",[t._v("论文发表数量")]),t._v(" "),e("th",[t._v("著作数量")]),t._v(" "),e("th",[t._v("国内专利数量")]),t._v(" "),e("th",[t._v("艺术作品数量")]),t._v(" "),e("th",[t._v("发表专注数量")])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v("1")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")])]),t._v(" "),e("tr",[e("th",[t._v("2")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")])]),t._v(" "),e("tr",[e("th",[t._v("3")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")])]),t._v(" "),e("tr",[e("th",[t._v("4")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")])]),t._v(" "),e("tr",[e("th",[t._v("5")]),t._v(" "),e("th",[t._v("设计艺术学院")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")]),t._v(" "),e("th",[t._v("1243")]),t._v(" "),e("th",[t._v("5437")])])])])])])])])}]};var o=e("VU/8")(i,l,!1,function(t){e("euR6")},"data-v-c645b1e8",null);a.default=o.exports},euR6:function(t,a){},sD4z:function(t,a){}});