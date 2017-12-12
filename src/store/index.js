/**
 * Created by fuzl on 2017-10-30.
 */
import requester from "./request"
// 配合vuex，剔除第一个store参数
let wrapRequester = {}
for (let i in requester) {
	wrapRequester[i] = function(){
		let args = Array.from(arguments).slice(1)
		return requester[i].apply(null, args)
	}
}
//初始默认一个管理员的账号
export default {
	state: {
		data:[{login:'123',pass:'123',name:'manager',adr:'滨江高新软件园税友大厦',phone:'18888888888'}],
		logined:-1
	},
	actions: Object.assign(wrapRequester, {

	}),
	mutations: {

	},
	getters: {

	}
}