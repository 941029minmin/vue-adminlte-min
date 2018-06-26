<template>
   <!-- Main content -->
    <section class="content">
    <!-- 教职工分布 -->
      <div class="row">
        <div class="col-md-12">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">标签</h3>
                    <div class="box-tools pull-right">
                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="teaLable" v-for="item in biaoqian" >
                          <input type="checkbox" name="checkbox" :data-labelauty="item" v-model="biaoqianArr" :value="item">
                      </div>
                     </div>
                  </div>
                </div>
                <div class="box-footer text-black">
                  <div class="row">
                    <!-- <div class="col-xs-8">
                      <div class="input-group">
                        <input type="text" class="form-control">
                        <div class="input-group-btn">
                          <button type="button" class="btn btn-warning dropdown-toggle">
                            <i class="fa fa-search"></i>&nbsp;标签检索</button>
                        </div>
                      </div>
                    </div> -->
                    <div class="col-xs-2 pull-right">
                      <div class = "btn btn-primary ">
                        <i class="fa fa-search"></i>&nbsp;标签检索
                      </div>
                    </div>
                  </div>
                </div>

          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-lg-4 col-xs-12">
              <!-- small box -->
              <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>1505</h3>
                    <p>总教职工人数</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-xs-12">
            <!-- small box -->
            <div class="small-box bg-green">
                <div class="inner">
                    <h3>53<sup style="font-size: 20px">%</sup></h3>
                    <p>在编在岗</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
              </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-xs-12">
              <!-- small box -->
              <div class="small-box bg-yellow">
                <div class="inner">
                   <h3>44</h3>

                    <p>外聘教师</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
              </div>
          </div>
          <!-- ./col -->
      </div>
      <!-- 教职工分布 -->
      <div class="row">
        <div class="col-md-12">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">教职工分布</h3>
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
      </div>
      <!-- 科研分布 -->
      <div class="row">
        <div class="col-md-6">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">编制类别分布</h3>
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
                          <div id="TeaCharts2"  :style="{height:'250px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">性别分布</h3>
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
       <!-- 学历分布 -->
      <div class="row">
        <div class="col-md-6">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">学历分布</h3>
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
                          <div id="TeaCharts4"  :style="{height:'250px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
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
                          <div id="TeaCharts5"  :style="{height:'250px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <!-- 年龄分布 -->
      <div class="row">
        <div class="col-md-12">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">年龄分布</h3>
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
                          <div id="TeaCharts6"  :style="{height:'300px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <!-- 学历分布 -->
      <div class="row">
        <div class="col-md-6">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">工龄校龄分布</h3>
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
                          <div id="TeaCharts7"  :style="{height:'250px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">本学期代课情况分析</h3>
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
                          <div id="TeaCharts8"  :style="{height:'250px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <!-- 教学质量分析 -->
      <div class="row">
        <div class="col-md-12">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">教学质量分析</h3>
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
                          <div id="TeaCharts9"  :style="{height:'300px'}"></div>
                        </div>
                  </div>
                </div>
          </div>
        </div>
      </div> 
      <!-- 教师业绩排名 -->
      <div class="row">
        <div class="col-md-12">
          <div class="box box-success">
            <div class="box-header with-border">
                  <h3 class="box-title">教师业绩排名</h3>
                    <div class="box-tools pull-right">
                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                    <tr>
                      <th>教师业绩</th>
                      <th>本单位排名</th>
                      <th>全校排名</th>
                      <th>任职单位</th>
                      <th>单位编号</th>
                      <th>姓名</th>
                      <th>工号</th>
                      <th>来校日期</th>
                      <th>最高学历</th>
                      <th>编制类型</th>
                      <th>联系方式</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>89.5</td>
                      <td>5</td>
                      <td>15</td>
                      <td>马克思主义学院（社会科学部）</td>
                      <td>1150000</td>
                      <td>张薇</td>
                      <td>20080759</td>
                      <td>2011/7/1</td>
                      <td>硕士研究生</td>
                      <td>在编在岗</td>
                      <td>13890758975</td>
                    </tr>
                    <tr>
                      <td>89.5</td>
                      <td>5</td>
                      <td>15</td>
                      <td>马克思主义学院（社会科学部）</td>
                      <td>1150000</td>
                      <td>张薇</td>
                      <td>20080759</td>
                      <td>2011/7/1</td>
                      <td>硕士研究生</td>
                      <td>在编在岗</td>
                      <td>13890758975</td>
                    </tr>
                    </tbody>
                    <!-- <tfoot>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                    </tfoot> -->
                  </table>
                </div>
          </div>
        </div>
      </div>           
    </section>
</template>

<script>
  import  '../../assets/js/jquery-labelauty.js'
  var echarts = require('echarts');
  export default{
        data (){
            return {
                // msg:"123"
                name:"",
                biaoqian: ['老当益壮', '发明家','青年才俊','雷厉风行','硕学通儒','交际能手','完美主义'],
                biaoqianArr:[]
            }
        },
        created(){
          console.log(this.name)
        },
        mounted(){
          $(':input').labelauty();
          this.drawTeaCharts1();
          this.drawTeaCharts2();
          this.drawTeaCharts3();      
          this.drawTeaCharts4();
          this.drawTeaCharts5();
          this.drawTeaCharts6();
          this.drawTeaCharts7();
          this.drawTeaCharts8();
          this.drawTeaCharts9();
        },
        methods:{
          drawTeaCharts1(){
            var myChart1 = echarts.init(document.getElementById('TeaCharts1'));
            var option1 = {
                color: ['#3398DB','#675bba'],
                tooltip : {
                    trigger: 'axis',
                    formatter: "{a}<br>{b} : {c}人",
                    axisPointer: {
                        type: 'cross',
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis : [
                    {
                      type : 'category',
                      name: '',
                      data : ['播音主持艺术学院','电视艺术学院','电影学院','电子信息学院','动画学院','管理学院','国际文化传播学院','设计艺术学院','文化创意学院','文学院'],
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel:{
                        interval: 0,
                        // rotate: 30,
                      }
                  }
                ],
                yAxis : [
                    {
                      type : 'value',
                      name:'教师人数',
                      nameTextStyle:{
                        // color:"#dfdfdf",
                      },
                      axisLabel:{
                        
                      },
                      splitLine: {
                        lineStyle: {
                          color: '#ccc',
                          // type: 'dashed'
                        }
                      }
                    }
                ],
                series : [
                    {
                        name:'教师人数',
                        type:'bar', 
                        barWidth: '20',
                        data:[10, 52, 100, 60, 50,58,69,35,96,100],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#eb65f9'},
                                        {offset: 1, color: '#8417bd'}
                                    ]
                                ),
                                
                            }
                        },
                    }
                ]
            };
            myChart1.setOption(option1);
          },
          drawTeaCharts2(){
            var myChart2 = echarts.init(document.getElementById('TeaCharts2'));
            var option2 = {
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
                    data: ['在编在岗','校聘人员','外籍教师','院聘人员'],
                }],
                yAxis: [{
                     
                }, {
                    type: 'value',
                    min: 0,
                    name: '人数',
                    position: 'left',
                    axisLabel:{
                    interval: 0,          
                },
                splitLine: {
                    lineStyle: {
                    color: '#ccc',
                    type: 'dashed'
                  }
                }
                }],
                series: [ {
                    name: '编制类别分类',
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
                  data:['男','女','null'],
                      height:"40",
                      top:"190"
              },
              series : [
                  {
                    name: '性别分布',
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
                            color: '#90B0E0',
                          }
                         },
                        name:'男'
                      },
                      {
                        value:400,
                        itemStyle: {
                          normal: {
                            color: '#F8A0FF',
                          }
                        },
                        name:'女'
                      },
                      {
                        value:100,
                        itemStyle: {
                          normal: {
                            color: '#DBE050',
                          }
                        },
                        name:'null'
                      }],
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
          drawTeaCharts4(){
            var myChart4 = echarts.init(document.getElementById('TeaCharts4'));
            var option4 = {
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  // orient: 'vertical',
                  data:['硕士研究生','博士研究生','本科','专科','高中及以下','其他'],
                      
                      height:"50",
                      top:"190"
                },
                series : [
                  {
                    name: '学历分布',
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
                        value:200,
                        itemStyle: {
                          normal: {
                            color: '#8dfcf8',
                          }
                        },
                        name:'硕士研究生'
                      },
                      {
                        value:150,
                        itemStyle: {
                          normal: {
                            color: '#f3a67a',
                          }
                        },
                        name:'博士研究生'
                      },
                      {
                        value:600,
                        itemStyle: {
                          normal: {
                            color: '#07c997',
                          }
                        },
                        name:'本科'
                      },
                      {
                        value:50,
                        itemStyle: {
                          normal: {
                            color: '#e6b600',
                          }
                        },
                        name:'专科'
                      },
                      {
                        value:30,
                        itemStyle: {
                          normal: {
                            color: '#f06060',
                          }
                        },
                        name:'高中及以下'
                      },
                      {
                        value:10,
                        itemStyle: {
                          normal: {
                            color: '#ffeeba',
                          }
                        },
                        name:'其他'
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
          drawTeaCharts5(){
            var myChart5 = echarts.init(document.getElementById('TeaCharts5'));
            var option5 = {
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  data:['高级教师','一级教师','二级教师','三级教师'],                      
                  height:"50",
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
                        name:'高级教师'
                      },
                      {
                        value:150,
                        itemStyle: {
                          normal: {
                            color: '#8597f2',
                          }
                        },
                        name:'一级教师'
                      },
                      {
                        value:180,
                        itemStyle: {
                          normal: {
                            color: '#22c3aa',
                          }
                        },
                        name:'二级教师'
                      },
                      {
                        value:250,
                        itemStyle: {
                          normal: {
                            color: '#1af4e2',
                          }
                        },
                        name:'三级教师'
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
          drawTeaCharts6(){
            var myChart6 = echarts.init(document.getElementById('TeaCharts6'));
            var dataColor = ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#d87a80", "#f2ebbf", "#8cbeb2", "#f3b562", "#f06060", '#5ab1ef']
            var dataName = ['初级','中级','未定级','其他','副高','正高','员级','见习','普通工','高级工','技师']
            var option6 = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                },
                position:function(p){ //其中p为当前鼠标的位置 
                  return [p[0] + 10, p[1] - 80]; 
                }

              },
              grid: {
                top:30,
                bottom: 80
              },
              legend: { 
                data: dataName,
                textStyle: {
                  fontSize: 14
                },
                bottom:"20",
              },
              xAxis: [{
                type: 'category',
                data: ['小于30', '30-35', '35-40', '40-45', '45-50', '50-55', '55-60' , '大于60'],
                axisLabel: {
                  // formatter: '{value}',
                  textStyle: {
                    fontSize: 14
                  }
                }
              }],
              yAxis: [{ 
                  type: 'value',
                  nameLocation: 'end',
                  nameTextStyle: {
                    color: "#dfdfdf",
                  },
                  axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                      fontSize: 14
                    },
                  },
                  axisLine: {
                    show: false
                  },
                  splitLine: {
                    lineStyle: {
                      color: '#3f7098',
                      type: 'dashed'
                    }
                  }
              }
              ],
              series: [{
                  name: '初级',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[0]
                    }
                  },
                  data: [2, 4.9, 7.0, 23.2, 25.6, 80.7, 115.6,2]
                },
                {
                  name: '中级',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[1]
                    }
                  },
                  data: [4, 5, 6, 7, 5, 6, 10,4]
                },
                {
                  name: '未定级',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[2]
                    }
                  },
                  data: [8, 6, 7, 4, 3, 2, 2,8]
                },
                {
                  name: '其他',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[3]
                    }
                  },
                  data: [2, 3, 4, 10, 3, 2, 2,8]
                },
                {
                  name: '副高',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[4]
                    }
                  },
                  data: [8, 6, 7, 4, 3, 2, 2,8]
                },
                {
                  name: '正高',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[5]
                    }
                  },
                  data: [8, 6, 7, 4, 3, 2, 2,8]
                },
                {
                  name: '员级',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[6]
                    }
                  },
                  data: [4, 2, 3, 8, 2, 2, 3,6]
                },
                {
                  name: '见习',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[7]
                    }
                  },
                  data: [4, 2, 3, 8, 2, 2, 3,6]
                },
                {
                  name: '普通工',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[8]
                    }
                  },
                  data: [8, 7, 3, 7, 2, 2, 3,6]
                },
                {
                  name: '高级工',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[9]
                    }
                  },
                  data: [4, 2, 3, 2, 8, 6, 3,6]
                },
                {
                  name: '技师',
                  type: 'bar',
                  itemStyle: {
                    normal: {
                      color: dataColor[10]
                    }
                  },
                  data: [8, 6, 7, 4, 3, 2, 2,8]
                }
              ]
            };
            myChart6.setOption(option6);
          },
          drawTeaCharts7(){
            var myChart7 = echarts.init(document.getElementById('TeaCharts7'));
            var option7 = {
              color: ['#f06060','#f3b562'],
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              legend: {
                  data:['工龄','校龄'],
                  textStyle: {
                    fontSize: 14
                  },
                  bottom: "20"
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  top: '10%',
                  bottom: '30%',
                  containLabel: true
              },
              xAxis : [
                  {
                    type : 'category',
                    data : ['小于10','10-20','20-30','30-40','大于40'],
                    axisLabel:{
                      interval: 0,
                    
                    }
                  }
              ],
              yAxis : [
                  {
                    type : 'value',
                    axisLabel: {},
                    splitLine: {
                        lineStyle: {
                            // color: ['#222b73']
                        }
                    }
                  }
              ],
              series : [
                  {
                      name:'工龄',
                      type:'bar',
                      barWidth: '10',
                      data:[320, 332, 301, 334, 390]
                  },
                  {
                      name:'校龄',
                      type:'bar',
                      barWidth: '10',
                      data:[120, 132, 101, 134, 90]
                  }
              ]
            };
            myChart7.setOption(option7);
          },
          drawTeaCharts8(){
            var myChart8 = echarts.init(document.getElementById('TeaCharts8'));
            var option8 = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    data:['1门课','2门课','3门课','4门课'],
                    height:"40",
                    top:"200"
                },
                series : [
                    {
                        name: '本学期代课情况分析',
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
                          color: '#db9200',
                        }
                      },
                      name:'1门课'
                            },
                            {
                              value:400,
                              itemStyle: {
                        normal: {
                          color: '#6ddbaa',
                        }
                      },
                      name:'2门课'
                            },
                            {
                              value:250,
                              itemStyle: {
                        normal: {
                          color: '#24b6aa',
                        }
                      },
                      name:'3门课'
                            },
                            {
                              value:50,
                              itemStyle: {
                        normal: {
                          color: '#f06060',
                        }
                      },
                      name:'4门课'
                            
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
            myChart8.setOption(option8);
          },
          drawTeaCharts9(){
            var myChart9 = echarts.init(document.getElementById('TeaCharts9'));
            var option9 = {
                color: ['#3398DB','#675bba'],
                tooltip : {
                    trigger: 'axis',
                    formatter: "{a}<br>{b} : {c}课时",
                    axisPointer: {
                        type: 'cross',
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top:"5%",
                    bottom: '15%',
                    containLabel: true
                },
                xAxis : [
                    {
                      type : 'category',
                      name: '',
                      data : ['播音主持艺术学院','电视艺术学院','电影学院','电子信息学院','动画学院','管理学院','国际文化传播学院','设计艺术学院','文化创意学院','文学院'],
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel:{
                        interval: 0,
                        rotate: 30,
                      }
                  }
                ],
                yAxis : [
                    {
                      type : 'value',
                      name:'任课时长',
                      nameTextStyle:{
                        // color:"#dfdfdf",
                      },
                      axisLabel:{
                        
                      },
                      splitLine: {
                        lineStyle: {
                          color: '#ccc',
                          // type: 'dashed'
                        }
                      }
                    }
                ],
                series : [
                    {
                        name:'任课时长',
                        type:'bar', 
                        barWidth: '20',
                        data:[10, 52, 100, 60, 50,58,69,35,96,100],
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#6193ff'},
                                        {offset: 1, color: '#24459e'}
                                    ]
                                ),
                                
                            }
                        },
                    }
                ]
            };
            myChart9.setOption(option9);
          },
        }
         

    }
</script>

<style scoped>
   @import "../../assets/css/jquery-labelauty.css";
   .teaLable{
    float: left;
    padding:5px 10px;
   }
    /*ul{list-style-type: none;}
    li{display: inline-block;}
    li{margin: 10px 0;}
    input.labelauty + label{font:12px "Microsoft Yahei";}*/
</style>