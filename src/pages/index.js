/**
 * Created by fuzl on 2017-10-30.
 */
import Vue from "vue"
import IndexVue from './index.vue'

new Vue({
	el: "#app",
	render(h){
		return h(IndexVue)
	}
})