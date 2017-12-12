import Vue from "vue"
import VueX from "vuex"
import QweVue from './qwe.vue'
import storeConfig from "../../store"
import Router from '../../router/qwe'
import VueRouter from "vue-router"

const routerr=new VueRouter({
	routes: Router
});
const storee=new VueX.Store(storeConfig);

new Vue({
	el: "#app",
    store: storee,
    router:routerr,
	render(h){
		return h(QweVue)
	}
})

routerr.beforeEach(function(to,from,next){
	let logined=storee.state.logined;
	console.log(logined)
   if(logined<0 && to.path==='/pay'){
		next('/hi');
		alert('请先登录谢谢！')
   }else{
	   next();
   }
})