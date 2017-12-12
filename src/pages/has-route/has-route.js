/**
 * Created by fuzl on 2017-11-9.
 */
import Vue from "vue"
import VueX from "vuex"
import VueRouter from "vue-router"
import storeConfig from "../../store"
import routerConfig from "../../router"
import HasRouteVue from "./has-route.vue"

new Vue({
	el: "#app",
	store: new VueX.Store(storeConfig),
	router: new VueRouter({
		routes: routerConfig
	}),
	render: h => h(HasRouteVue)
})