export default class {
	constructor() {
		this.events = {}
	}

	/**
	 * 注册事件及其回调函数
	 * @param {*} name 事件名称
	 * @param {*} callback 回调函数
	 */
	on(name, ...callback) {
		if (this.events[name]) {
			this.events[name].push(...callback)
		} else {
			this.events[name] = callback
		}
	}

	/**
	 * 触发事件
	 * @param {*} name 事件名称
	 * @param {*} para 传入回调函数中的参数
	 */
	emit(name, ...para) {
		if (!this.events[name]) {
			throw new Error("event inexistence")
		}
		this.events[name].forEach(fn => fn(...para))
	}

	/**
	 * 清除事件
	 * @param {*} name 事件名称
	 */
	clear(name) {
		if (!this.events[name]) {
			throw new Error("event inexistence")
		}
		delete this.events[name]
	}
}
