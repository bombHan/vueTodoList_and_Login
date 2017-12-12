/**
 * Created by fuzl on 2017-11-2.
 */
let toString = Object.prototype.toString

let util = {
	isObject(obj){
		return obj && typeof obj === "object" && toString.call(obj) === "[object Object]"
	},
	isFunction(fn){
		return typeof fn === "function"
	},
	isEmptyArray(arr){
		return arr === null || arr === undefined || arr.length === 0
	},
	noop(){
		return
	},
	isDef(obj){
		return obj !== undefined
	},
	isUndef(obj){
		return obj === undefined
	},
	asserts: {
		/**
		 * @description 在map中不存在propertyName
		 * @param {String} propertyName
		 * @param {Object} map
		 * @return {Boolean}
		 * */
		noExistPropertyInMap(propertyName, map){
			if (util.isDef(map[propertyName])) {
				throw new util.errors.DuplicateKeyError(propertyName, map)
			} else {
				return true
			}
		}
	},
	errors: {
		DuplicateKeyError(propertyName){
			this.message = propertyName + "已存在，重复添加"
		}
	}
}

export default util