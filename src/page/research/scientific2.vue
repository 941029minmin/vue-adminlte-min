<template>
	<div class="">
		<div class="content-header">
			<h1>{{title}}</h1>
			<ol class="breadcrumb">
				<li>
					<a href="javascript:"><i class="fa fa-dashboard"></i>科研分析</a>
				</li>
				<li class="active">科研分析2</li>
			</ol>
		</div>

		<!-- <div class="content body"> aaa</div> -->
		<section class="content">
      		<div class="row">
      			<div class="box box-danger">
	            <!-- <div class="box-header with-border">
	                <h3 class="box-title">Different Width</h3>
	            </div> -->
	            <div class="box-body">
	            	<aa></aa>
	            </div>
	            <!-- /.box-body -->
	          </div>
      		</div>
      		<div class="cas-menu">
		    <select id="prov" v-on:change="getProv()"
		            v-model="selectProv">
		      <option value="0">选择省份</option>
		      <option v-for="(item,province) in district" :key="province"
		            :value="province">{{item.name}}</option>
		    </select>
		    <select id="city" v-on:change="getCity()"
		            
		            v-model="selectCity">
		      <option value="0" >选择城市</option>
		      <option v-if="selectProv!='0'" v-for="(item, city) in citys" :key="city" :value="city">{{item.name}}</option>
		    </select>
		    <select id="area"
		            >
		      <option value="0">选择区县</option>
		      <option v-if="selectCity!='0'" v-for="(item,index) in area" :key="index">{{item}}</option>
		    </select>

		    <h1 id="123">sss</h1>
		  </div>
      	</section>
	</div>

</template>

<script>
	// import '../../assets/js/jquery-chained/jquery.chained.js'
	import aa from "./a.vue"
	export default {
		data() {
			return {
				title: 'demo',
				cityInfo: '',
				district: {
			        '110000': {
			            'name': '北京市',
			            'child': {
			                '110100': {
			                    'name': '市辖区',
			                    'child': {
			                        '110101': '东城区',
			                        '110102': '西城区',
			                        '110105': '朝阳区',
			                        '110106': '丰台区',
			                        '110107': '石景山区',
			                        '110108': '海淀区',
			                        '110109': '门头沟区'
			                    } 
			                }
			            }
			        },
			        '120000': {
			            'name': '天津市',
			            'child': {
			                '120100': {
			                    'name': '市辖区',
			                    'child': {
			                        '120101': '和平区',
			                        '120102': '河东区',
			                        '120103': '河西区',
			                        '120104': '南开区'
			                    }
			                }
			            }
			        },
			        '130000': {
			            'name': '河北省',
			            'child': {
			                '130100': {
			                    'name': '石家庄市',
			                    'child': {
			                        '130101': '市辖区',
			                        '130102': '长安区',
			                        '130104': '桥西区',
			                        '130105': '新华区'
			                    }
			                },
			                '130200': {
			                    'name': '唐山市',
			                    'child': {
			                        '130201': '市辖区',
			                        '130202': '路南区',
			                        '130203': '路北区'
			                    }
			                },
			                '130300': {
			                    'name': '秦皇岛市',
			                    'child': {
			                        '130301': '市辖区',
			                        '130302': '海港区',
			                        '130303': '山海关区'
			                    }
			                },
			                '130400': {
			                    'name': '邯郸市',
			                    'child': {
			                        '130401': '市辖区',
			                        '130402': '邯山区',
			                        '130403': '丛台区',
			                        '130404': '复兴区'
			                    }
			                },
			                '130500': {
			                    'name': '邢台市',
			                    'child': {
			                        '130501': '市辖区',
			                        '130502': '桥东区',
			                        '130503': '桥西区',
			                        '130521': '邢台县'
			                    }
			                },
			                '130600': {
			                    'name': '保定市',
			                    'child': {
			                        '130601': '市辖区',
			                        '130602': '竞秀区',
			                        '130606': '莲池区'
			                    }
			                },
			                '130700': {
			                    'name': '张家口市',
			                    'child': {
			                        '130701': '市辖区',
			                        '130702': '桥东区',
			                        '130703': '桥西区'
			                    }
			                },
			                '130800': {
			                    'name': '承德市',
			                    'child': {
			                        '130801': '市辖区',
			                        '130802': '双桥区',
			                        '130803': '双滦区'
			                    }
			                },
			                
			                '131100': {
			                    'name': '衡水市',
			                    'child': {
			                        '131101': '市辖区',
			                        '131102': '桃城区',
			                        '131103': '冀州区'
			                    }
			                },
			                '139000': {
			                    'name': '省直辖县级行政区划',
			                    'child': {
			                        '139001': '定州市',
			                        '139002': '辛集市'
			                    }
			                }
			            }
			        },
			        '140000': {
			            'name': '山西省',
			            'child': {
			                '140100': {
			                    'name': '太原市',
			                    'child': {
			                        '140101': '市辖区',
			                        '140105': '小店区',
			                        '140106': '迎泽区',
			                        '140107': '杏花岭区'
			                    }
			                },
			                '140200': {
			                    'name': '大同市',
			                    'child': {
			                        '140201': '市辖区',
			                        '140202': '城区',
			                        '140203': '矿区',
			                        '140211': '南郊区'
			                    }
			                },
			                '140300': {
			                    'name': '阳泉市',
			                    'child': {
			                        '140301': '市辖区',
			                        '140302': '城区',
			                        '140303': '矿区',
			                        '140311': '郊区',
			                        '140321': '平定县',
			                        '140322': '盂县'
			                    }
			                },
			                '140400': {
			                    'name': '长治市',
			                    'child': {
			                        '140401': '市辖区',
			                        '140402': '城区',
			                        '140411': '郊区',
			                        '140421': '长治县',
			                        '140423': '襄垣县'
			                    }
			                },
			                '140500': {
			                    'name': '晋城市',
			                    'child': {
			                        '140501': '市辖区',
			                        '140502': '城区',
			                        '140521': '沁水县',
			                        '140522': '阳城县'
			                    }
			                },
			                '140600': {
			                    'name': '朔州市',
			                    'child': {
			                        '140601': '市辖区',
			                        '140602': '朔城区',
			                        '140603': '平鲁区',
			                        '140621': '山阴县',
			                        '140622': '应县',
			                        '140623': '右玉县',
			                        '140624': '怀仁县'
			                    }
			                },
			                '140700': {
			                    'name': '晋中市',
			                    'child': {
			                        '140701': '市辖区',
			                        '140702': '榆次区',
			                        '140721': '榆社县',
			                        '140722': '左权县',
			                        '140723': '和顺县'
			                    }
			                },
			                '140800': {
			                    'name': '运城市',
			                    'child': {
			                        '140801': '市辖区',
			                        '140802': '盐湖区',
			                        '140821': '临猗县'
			                    }
			                },
			                '140900': {
			                    'name': '忻州市',
			                    'child': {
			                        '140901': '市辖区',
			                        '140902': '忻府区',
			                        '140921': '定襄县',
			                        '140922': '五台县'
			                    }
			                },
			                '141000': {
			                    'name': '临汾市',
			                    'child': {
			                        '141001': '市辖区',
			                        '141002': '尧都区',
			                        '141021': '曲沃县',
			                        '141022': '翼城县'
			                    }
			                },
			                '141100': {
			                    'name': '吕梁市',
			                    'child': {
			                        '141101': '市辖区',
			                        '141102': '离石区',
			                        '141121': '文水县',
			                        '141122': '交城县'
			                    }
			                }
			            }
			        },
			        '710000': {
			            'name': '台湾省',
			            'child': []
			        },
			        '810000': {
			            'name': '香港特别行政区',
			            'child': []
			        },
			        '820000': {
			            'name': '澳门特别行政区',
			            'child': []
			        }
			    },
			    citys: {},
			    area: {},
			    selectProv: '0',
			    selectCity: '0'
			}
		},
		components: {
			aa,
			 // CitySelect
		},
		methods: {
		    getProv: function (prov) {
		      this.citys = this.district[this.selectProv].child
		      this.selectCity = '0'
		    },
		    getCity: function (city) {
		      this.area = this.district[this.selectProv].child[this.selectCity].child
		    }
		},
		watch:{
			// 'name':function(val,oldval){
			// 	console.log(val,oldval)
			// }
		},
		created() {
			// console.log(this.name)
			// console.log($("#series").html());
			 // $("#series").chained("#mark");
		},
		
	}

</script>

<style scoped>

html{
	overflow: hidden;
	
}
</style>