<template>
  <div id="app">
  	
  	<div class="nav-box">
  			<ul>				
	  				<router-link to="/" exact  tag="div" event="mouseover">
	  				<i class ="fa fa-home"></i>
	  				<span>home</span>
	  				</router-link>  			
	  			<li>	  			
	  				<router-link :to="{path:'/document#abc'}" event="mouseover" active-class="activeClass">document</router-link>
	  			</li>
	  			<li>	  	
	  				<router-link to="/about" event="mouseover">about</router-link>
	  			</li>
	  			<li>	  	
	  				<router-link to="/user" event="mouseover">user</router-link>
	  			</li>
  			</ul>
  	</div>
  	
  	<input type="button" value='后退' @click="backHandle()"/>
  	<input type="button" value='前进' @click="forwordHandle()"/>
  	<input type="button" value='控制制定的导航' @click="pushHandle()"/>
  	<input type="button" value='替换某一个导航' @click="replaceHandle()"/>
  	
  	
  	
    <transition  :name = "names" >
    	<router-view class="center"></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  watch:{
  	$route(to,from){
  			//console.log(to.meta.index)//
  			//console.log(from.meta.index)//
  			if(to.meta.index<from.meta.index){
  				this.names = "right"
  			}else{
  				this.names = "left"
  			}
  	}
  },
  data(){
  	return {
  		index : '/home',
  		names:'left'
  	}
  },
  methods:{
  	backHandle(){
  		this.$router.back()
  	},
  	forwordHandle(){
  		this.$router.forward()
  	},
  	pushHandle(){
  		this.$router.push('/document')
  		this.$router.push({path:'/document'})
  	},
  	replaceHandle(){
  		this.$router.replace('/document')
  	}
  }
}
</script>

<style>
		.v-enter{
			opacity:0
		}
		.v-enter-to{
			opacity:1
		}
		.v-enter-active{
			transition: 1s;
		}
		.v-leave{
			opacity:1
		}
		.v-leave-to{
			opacity:0
		}
		.v-leave-active{
			transition: 2s;
		}
		.left-enter{
			 transform: translateX(100%);
		}
	
		.left-enter-active{
			 transition: 1s;
		}
	
		.left-leave-to{
			 transform: translateX(-100%);
		}
		.left-leave-active{
			 transition: 1s;
		}
		
		.right-enter{
			 transform: translateX(-100%);
		}
	
		.right-enter-active{
			 transition: 1s;
		}
	
		.right-leave-to{
			 transform: translateX(100%);
		}
		.right-leave-active{
			 transition: 1s;
		}
</style>
