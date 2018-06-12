<template>
	<div class="wrapper">

		<v-header></v-header>
		<v-menu></v-menu>
		<div class="content-wrapper">
			<router-view></router-view>

		</div>
		<!-- /.content-wrapper -->
		<footer class="main-footer">
		    <!-- <div class="pull-right hidden-xs">
		        <b>Version</b> 2.4.0
		    </div> -->
		    <strong>版权所有 © 2018 浙江曙光信息技术有限公司 </strong> 
		</footer>
	</div>

</template>

<script>
	import header from "@/components/header.vue"
	import menu from "@/components/menu.vue"
	export default {
		name: 'app',
		components:{
			'v-header':header,
		    'v-menu':menu
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
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	.leftMenu {
		position: absolute;
		height: 100%;
		width: 100px;
		background: red;
	}
	.router-link-exact-active{
		color:#fff!important;
	}
</style>