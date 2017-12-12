/**
 * Created by fuzl on 2017-11-1.
 */
import axios from "axios"
// 发送请求之前，对参数操作，添加header
axios.interceptors.request.use(function(config){
	return config
})

// response interceptor
axios.interceptors.response.use(function(response){
	let config = response.config
	let data = response.data
	if (data.success) {
        // keepOriginResponse === true 返回后端原始对象
		return config.keepOriginResponse ? data: data.data
	} else {
		return Promise.reject(normalizeErrorMessage(data))
	}
}, function(response){
	return Promise.reject(wrapperHttpException(response))
})

/**
 * 封装httpError，非200状态请求，返回统一的数据格式
 * */
function wrapperHttpException(/*response*/) {
	return {
		message: "服务繁忙，请稍后再试",
		messageCode: "NETWORK_FAILED"
	}
}

/**
 * @description 根据messageCode统一提示信息
 * @param {object} data
 * @return {object}
 */
function normalizeErrorMessage(data) {
    // 可以格式化错误信息
	return data
}

export default axios