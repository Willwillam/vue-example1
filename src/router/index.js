import Vue from 'vue'
import VueRouter from 'vue-router'
 

Vue.use(VueRouter)

import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'
import user from '@/components/user'

import study from '@/view/study'
import work from '@/view/work'
import hobby from '@/view/hobby'

import slider from '@/view/slider'

let router =new VueRouter({
	mode: 'history',
	linkActiveClass:'is-active',
	scrollBehavior(to,from,savePosition){
		//点击浏览器前进后退 切换导航
		//console.log(to);//要进入的目标路由对象
		//console.log(from);//离开的路由对象
		//console.log(savePosition);//记录滚动条的值,点击前进后退有值
		
		/*if(savePosition){
			return savePosition;
		}else{
			return {x:0,y:0}
		}*/
		
		/*if(to.hash){
			return {
				selector:to.hash
			}
		}*/
	},
	routes:[
		{
			path:'/',
			component:home,
			meta:{
				index:0,
				title:"home"				
			}
		},
		{
			path:'/user/:tip?/:userId?',
			component:user,
			meta:{
				index:3,
				title:"user"
			}
		},
		{
			path:'/home',
			name:'Home',
			component:home,
			alias:'/index'
		},
		{
			path:'/about',
			component:about,
			
			children:[
				{
					path:'',
					name:'about',
					meta:{
					index:2,
					title:"about"
					},
					component:study
				},
				{
					path:'/work',
					name:'work',
					component:work
				},
				{
					path:'/hobby',
					name:'hobby',
					component:hobby
				}				
			]
		},
		{
			path:'/document',
			name:"document",
			beforeEnter(to,from.next){
				console.log("beforeEnter")
				next()
			},
			meta:{
				index:1,
				title:"document",
				login:true
			},
			components:{
				default:document,
				slider:slider
			}
		},
//		{
//			path:'*',
////			component: home
////			redirect:{path:'/home'}
////			redirect:{name:'document'}
//			redirect:(to)=>{
//				//动态设置重定向的目标
//				if(to.path==="/123"){
//					return '/home'
//				}else if(to.path==="/456"){
//					return '/document'
//				}
//				else{
//					return {name:'about'}
//				}
////				console.log(to)
////				return "/home"
//			}
//		}
	]
})

/* router.beforeEach((to,from,next)=>{
	console.log("baforeEach")
	//next()
	if(to.meta.login==true){
		next('/login')
	}else{
		next()
	}
	next()
})*/

/*router.afterEach((to,from)=>{
	if(to.meta.title){
		window.document.title = to.meta.title
	}else{
		window.document.title ="miaov"
	}
})*/


export default router;