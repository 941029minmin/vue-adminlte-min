<template>
	<div class="">
		<div class="col-xs-3">
	   		<select id="prov" v-on:change="getProv()" v-model="selectProv" class="form-control">
		      <option value="">选择校区</option>
		      <option v-for="(item,province) in district" :key="province"
		            :value="province">{{item.name}}</option>
		    </select>
   		</div>
   		<div class="col-xs-3">
	   		<select id="city" v-on:change="getTeacher()" v-model="selectCity" class="form-control">
		      <option value="" >选择学院</option>
		      <option v-if="selectProv!=''" v-for="(item, city) in citys" :key="city" :value="city">{{item.name}}</option>
		    </select>
   		</div>
   		<div class="col-xs-3">
	   		 <select id="teacher" class="form-control">
		      <option value="">选择教师</option>
		      <option v-if="selectCity!=''" v-for="(item,teacher) in teachers" :key="teacher">{{item}}</option>
		    </select>
   		</div> 
   		<div class="col-xs-3 pull-right">
      	    <input id = "listSearch" type="button" value="submit" class = "btn btn-primary" @click="getSearch()">
    	</div>
  </div>

</template>

<script>
	//import 'bootstrap-daterangepicker/daterangepicker.js'
	export default {
		data() {
			return {
				district: {
			        '130000': {
			            'name': '校本部',
			            'child': {
			                '130100': {
			                    'name': '计算机学院',
			                    'child':{
			                    	'130101': '梨花 ',
			                        '130102': '李华',
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                },
			                '130200': {
			                    'name': '文学院',
			                    'child':{
			                    	
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                },
			                '130300': {
			                    'name': '化学化工学院',
			                    'child':{
			                        '130102': '李华',
			                        '130105': '加特'
			                    }
			                }
			            }
			        },
			        '140000': {
			            'name': '第二校区',
			            'child': {
			                '140100': {
			                    'name': '管理学院',
			                    'child':{
			                    	'130101': '梨花 ',
			                        '130104': '凯欣'
			                    }
			                },
			                '140200': {
			                    'name': '设计艺术学院',
			                    'child': []
			                },
			                '140300': {
			                    'name': '建筑学院',
			                    'child':{
			                    	'130101': '梨花 ',
			                        '130102': '李华',
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                },
			                '140400': {
			                    'name': '外语学院',
			                    'child':{
			                    	'130101': '梨花 ',
			                        '130102': '李华',
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                },
			                '140500': {
			                    'name': '生物学院',
			                    'child':{
			                    	'130101': '梨花 ',
			                        '130102': '李华',
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                }
			            }
			        },
			    },
			    citys: {},
			    teachers:{},
			    selectProv: '',
			    selectCity: '',
			    selectTeacher: '',
			    objSearch:{},
			}
		},
		components: {
			
		},
		mounted(){
			/**$('#reservation').daterangepicker({
			 	timePicker: true, timePickerIncrement: 7, format: 'YYYY-MM-DD' 
			})*/
		},
		methods: {
		    getProv: function (prov) {
		    	this.citys = this.district[this.selectProv].child
			    this.selectCity = ''
		    },
		    getTeacher: function (city) {
		    	this.teachers = this.district[this.selectProv].child[this.selectCity].child;
		    },
		    getSearch:function(){
		    	// $('#reservation').daterangepicker()
		    	this.objSearch = {
		    		selectProv:this.selectProv,
		    		selectCity:this.selectCity,
		    		selectTeacher:this.selectTeacher
		    	}
		    	this.$emit('searchEvent',this.selectProv,this.selectCity,this.selectTeacher);
		    }
		}
	}

</script>

<style scoped>
@import '../../node_modules/bootstrap-daterangepicker/daterangepicker.css'

</style>