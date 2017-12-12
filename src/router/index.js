/**
 * Created by fuzl on 2017-11-9.
 * 路由配置，可以建多个路由配置文件，在不同页面中引用
 */
import Test from "../views/test.vue"

let Async = (h) => require.ensure(["../views/async.vue"], () => {
	return h(require("../views/async.vue"))
})

export default [
	{
		path: "/test",
		component: Test,
		name: "test"
	},
	{
		path: "/async",
		component: Async,
		name: "async"
	}
]