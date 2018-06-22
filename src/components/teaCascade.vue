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
	   		<select id="city" v-on:change="getCity()" v-model="selectCity" class="form-control">
		      <option value="" >选择单位</option>
		      <option v-if="selectProv!=''" v-for="(item, city) in citys" :key="city" :value="city">{{item.name}}</option>
		    </select>
   		</div>
   		<div class="col-xs-3">
	   		 <select id="area" class="form-control" v-model="selectTeacher">
		      <option value="">选择教师</option>
		      <option v-if="selectCity!=''" v-for="(item,index) in area" :key="index">{{item}}</option>
		    </select>
   		</div> 
   		<div class="col-xs-3 pull-right">
      	    <input id = "listSearch" type="button" value="submit" class = "btn btn-primary" @click="getSearch()">
    	</div>
  </div>

</template>

<script>
	export default {
		data() {
			return {
				district: {
			        '130000': {
			            'name': '校本部',
			            'child': {
			                '130100': {
			                    'name': '教务处',
			                    'child': {
			                        '130101': '梨花 ',
			                        '130102': '李华',
			                        '130104': '凯欣',
			                        '130105': '加特'
			                    }
			                },
			                '130200': {
			                    'name': '图书馆',
			                    'child': {
			                        '130201': '格言1',
			                        '130202': '格言2',
			                        '130203': '格言3'
			                    }
			                },
			                '130300': {
			                    'name': '学工办',
			                    'child': {
			                        '130301': '学工1',
			                        '130302': '学工2',
			                        '130303': '学工3'
			                    }
			                }
			            }
			        },
			        '140000': {
			            'name': '安吉校区',
			            'child': {
			                '140100': {
			                    'name': '教务处',
			                    'child': {
			                        '140101': '教务处1',
			                        '140105': '教务处2',
			                        '140106': '教务处3',
			                        '140107': '教务处4'
			                    }
			                },
			                '140200': {
			                    'name': '图书馆',
			                    'child': {
			                        '140201': '图书馆1',
			                        '140202': '图书馆2',
			                        '140203': '图书馆3',
			                        '140211': '图书馆4'
			                    }
			                },
			                '140300': {
			                    'name': '宿舍',
			                    'child': {
			                        '140301': '宿舍1',
			                        '140302': '宿舍2',
			                        '140303': '宿舍3',
			                        '140311': '宿舍4',
			                        '140321': '宿舍5',
			                        '140322': '宿舍6'
			                    }
			                },
			                '140400': {
			                    'name': '财务处',
			                    'child': {
			                        '140401': '财务处',
			                        '140402': '财务处',
			                        '140411': '财务处',
			                        '140421': '财务处',
			                        '140423': '财务处'
			                    }
			                },
			                '140500': {
			                    'name': '餐厅',
			                    'child': {
			                        '140501': '餐厅1',
			                        '140502': '餐厅2',
			                        '140521': '餐厅3',
			                        '140522': '餐厅4'
			                    }
			                }
			            }
			        },
			    },
			    citys: {},
			    area: {},
			    selectProv: '',
			    selectCity: '',
			    selectTeacher:'',
			    objSearch:{},
			}
		},
		components: {
			
		},
		methods: {
		    getProv: function (prov) {
		      this.citys = this.district[this.selectProv].child
		      this.selectCity = ''
		    },
		    getCity: function (city) {
		      this.area = this.district[this.selectProv].child[this.selectCity].child
		    },
		    getSearch:function(){
		    	this.objSearch = {
		    		selectProv:this.selectProv,
		    		selectCity:this.selectCity,
		    		selectTeacher:this.selectTeacher,
		    	}
		    	this.$emit('searchEvent',this.selectProv,this.selectCity,this.selectTeacher);
		    }
		}
	}

</script>

<style scoped>

</style>