/**
 * Created by fuzl on 2017-11-7.
 */
import UrlEnum from "../constants/url"
export default {
	[UrlEnum.GetUserList]: {
		type: "get",
		url: "/api/getUserList",
		headers: {},
		params: {/* 默认参数 */},
		// 立即请求下一步，传递相同的参数，直接调用UrlEnum.GetOrderList对应的方法，参数依赖上一个接口的返回的，使用下面的方式
		next: UrlEnum.GetOrderList,
		/*next: {
			type: "get",
			url: "/api/getOrderList",
			/!**
			 * @param {Object} params - 传入的参数
			 * @param {Object} responseData - 接口返回参数
			 * *!/
			data(params, responseData){
				// 根据上一个接口的返回结果，自行组合查询参数
				return {
					userId: params.id,
					orderId: responseData.id
				}
			}
		}*/
	},
	[UrlEnum.GetOrderList]: {
		type: "get",
		url: "/api/getOrderList"
	}
}