/**
 * Created by fuzl on 2017/6/6.
 */
import Vue from "vue"
import VueX from "vuex"
import HomeVue from "./home.vue"
import storeConfig from "../../store"

new Vue({
	el: "#app",
	store: new VueX.Store(storeConfig),
	render(h){
		return h(HomeVue)
	}
})