<template>
	 <!-- Main content -->
    <section class="content">
      <!-- Info boxes -->
      <div class="row">
      	<div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">CPU Traffic</span>
              <span class="info-box-number">90<small>%</small></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Likes</span>
              <span class="info-box-number">41,410</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->

        <!-- fix for small devices only -->
        <div class="clearfix visible-sm-block"></div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-green"><i class="ion ion-ios-cart-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Sales</span>
              <span class="info-box-number">760</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">New Members</span>
              <span class="info-box-number">2,000</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->



      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">行图表</h3>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="row">
	                <div class="col-md-6">
	                  <p class="text-center">
	                    <strong>教师分布图</strong>
	                  </p>

	                  <div class="chart">
	                    <!-- Sales Chart Canvas -->
	                    <div id="main"  :style="{height:'300px'}"></div>
	                  </div>
	                  <!-- /.chart-responsive -->
	                </div>
	                <!-- /.col -->
	                <div class="col-md-6">
	                  <p class="text-center">
	                    <strong>教师柱状图</strong>
	                  </p>
	                  <div class="chart">


	                  	<div class="city-select">
						   <select v-model="selectedProvince" name="province">
						     <option v-for="(item, index) in provinces"
						       v-if="item.level === 1"
						       :value="item">
						       {{ item.name }}
						     </option>
						   </select>
						   <select v-model="selectedCity" name="city">
						     <option
						       v-for="(item, index) in cities"
						       :value="item">
						       {{ item.name }}
						     </option>
						   </select>
						   <select v-model="selectedBlock" name="block">
						     <option
						       v-for="(item, index) in blocks"
						       :value="item">
						       {{ item.name }}
						     </option>
						   </select>
						 </div>



	                    <!-- <div id="mycharts2" style="height: 300px;">546</div> -->
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
      <!-- /.row -->




      
    </section>
</template>

<script>
	import provinces from '../../assets/js/provinces.js'
	var echarts = require('echarts');
	export default{
        // data (){
        //     return {
        //         msg:"123"
        //     }
        // },
        mounted(){
		    this.drawLine();
		},
        methods:{
        	drawLine(){
        		var myChart = echarts.init(document.getElementById('main'));
	            myChart.setOption({
	                title: { text: '' },
	                tooltip: {},
	                xAxis: {
	                    data: ["初级","中级","高级","副教授","教授","未定级"]
	                },
	                yAxis: {},
	                series: [{
	                    name: '销量',
	                    type: 'bar',
	                    data: [5, 20, 36, 10, 10, 20]
	                }]
	            });
        	}
            
        },
        created() {
	  		// 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
	   		let beijing = this.provinces.slice(0, 19)
	  		this.cities = beijing.filter(item => {
		     	if (item.level === 2) {
		      		return true
		    	}
	   		})
		    this.selectedCity = this.cities[0]
		    this.blocks = beijing.filter(item => {
		        if (item.level === 3) {
		       		return true
		   		}
	    	})
   			this.selectedBlock = this.blocks[0]
 		},
		watch: {
		    selectedProvince(newVal, oldVal) {
		     // 港澳台数据只有一级,特殊处理
		        if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
		        this.cities = [newVal]
		        this.blocks = [newVal]
		        } else {
		            this.cities = this.provinces.filter(item => {
		            	if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
		           			return true
		           		}
		        	})
		     	}
		        // 此时在渲染DOM,渲染结束之后再选中第一个
			    Vue.nextTick(() => {
			        this.selectedCity = this.cities[0]
			        this.$emit('input', this.info)
			    })
		    },
		    selectedBlock() {
		        Vue.nextTick(() => {
		        	this.$emit('input', this.info)
		        })
		    },
		    selectedCity(newVal) {
		        // 选择了一个市,要选择区了 di是城市的代表,sheng
		        if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
		        	this.blocks = [newVal]
		        	this.cities = [newVal]
		        } else {
		        	this.blocks = this.provinces.filter(item => {
		        		if (item.level === 3 && item.sheng && item.sheng == newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
		            		return true
		            	}
		        	})
		    	}
		        Vue.nextTick(() => {
		        	this.selectedBlock = this.blocks[0]
		       	    // 触发与 v-model相关的 input事件
		       		this.$emit('input', this.info)
		     	})
		   	}
		},
		computed: {
		   	info() {
		     	return {
		       		province: this.selectedProvince,
		       		city: this.selectedCity,
		       		block: this.selectedBlock
		     	}
		   	}
		},
		data() {
		    return {
		       	selectedProvince: provinces[0],
		       	selectedCity: 0,
		       	selectedBlock: 0,
		       	cities: 0,
		       	provinces,
		       	blocks: 0
		    }
		}

    }
</script>

<style scoped>

</style>