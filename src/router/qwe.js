import Hi from '../pages/qwe/hi.vue'
import Hello from '../pages/qwe/hello.vue'
import Pay from '../pages/qwe/pay.vue'
export default [
    {
        path: "/hello",
		component: Hello,
		name: "hello" 
    },
	{
		path: "/hi",
		component: Hi,
		name: "hi"
	},
	{
		path: "/pay",
		component: Pay,
		name: "pay"
	}
]