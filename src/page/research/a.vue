<template>
	<div class="row">
    	<div class="col-xs-3">
      	    <input type="text" class="form-control" placeholder=".col-xs-3" v-model="name">
    	</div>
    	<div class="col-xs-3">
      		<input type="text" class="form-control" placeholder=".col-xs-3" v-model="name2">
   		 </div>
    	<div class="col-xs-3">
      	    <input type="button" value="submit" @click="getall()" class = "btn btn-primary">
    	</div>
    	<!-- <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p> -->
	    <button @click="httpGet">get test</button>
	    <p>{{reponseData}}</p>
    </div>
    
	
</template>

<script>
	import { getTest } from "../../api/index";

	export default {
		data() {
			return {
				name:"搜索一",
				name2:"搜索二",
				reponseData:'',
				ajaxData:{
					name:"",
					name2:""
				}
			}
		},
		components: {
			 // CitySelect
		}, 
		methods: {
			getall:function(){
				alert(this.name)
				alert(this.name2)
			},
			httpGet() {
				this.ajaxData = {
					name:this.name,
					name2:this.name2
				}
			    getTest('menu',this.ajaxData).then(response => {
			        this.reponseData = response.data.data.result; 
			    });
			}
		},
		created() {
			getTest('menu',this.ajaxData)
			.then(response => {
			        this.reponseData = response.data.success; 
			        console.log(this.reponseData)
			}).catch(function (response) {
		        console.log("false");
		    });
			// console.log(this.name)
			// console.log(this.name2)
			// console.log($("#series").html());
			 // $("#series").chained("#mark");
		},
		
	}

</script>

<style scoped>

</style>