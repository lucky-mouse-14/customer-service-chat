import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import 'dayjs/locale/zh-cn'

/** format timestamp */
dayjs.extend(calendar)
dayjs.locale('zh-cn')
export function formatTimestamp(ts, simple = true) {
  return dayjs(ts).calendar(null, {
    sameDay: simple ? 'H:mm' : 'H:mm',
    lastDay: simple ? '[昨天]' : '[昨天] H:mm',
    lastWeek: simple ? 'dddd' : 'dddd H:mm',
    sameElse: simple ? 'YY/M/D' : 'YYYY年M月D日 H:mm',
  })
}

/** isSameMinute */
export function isSameMinute(curTime, lastTime) {
  return dayjs(curTime).isSame(lastTime, 'minute')
}

/**
 * @desc  格式化时间
 * @param {(Object|string|number)} time
 * @param {string} format
 * @returns {string | null}
 */
export function formatDateTime(time = undefined, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(time).format(format)
}

export function formatDate(date = undefined, format = 'YYYY-MM-DD') {
  return formatDateTime(date, format)
}

/**
 * @desc  函数节流
 * @param {Function} fn
 * @param {Number} wait
 * @returns {Function}
 */
export function throttle(fn, wait) {
  var context, args
  var previous = 0

  return function () {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

/**
 * @desc  函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(method, wait, immediate) {
  let timeout
  return function (...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    // 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
    if (immediate) {
      /**
       * 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
       * 这样确保立即执行后wait毫秒内不会被再次触发
       */
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(context, args)
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        /**
         * args是一个类数组对象，所以使用fn.apply
         * 也可写作method.call(context, ...args)
         */
        method.apply(context, args)
      }, wait)
    }
  }
}

/** get guid */
export function generateUUID() {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

/** json 转为 form-data */
export function makeFormData(obj, form_data) {
  var data = []
  if (obj instanceof File) {
    data.push({ key: '', value: obj })
  } else if (obj instanceof Array) {
    for (var j = 0, len = obj.length; j < len; j++) {
      var arr = makeFormData(obj[j])
      for (var k = 0, l = arr.length; k < l; k++) {
        var key = !!form_data ? j + arr[k].key : '[' + j + ']' + arr[k].key
        data.push({ key: key, value: arr[k].value })
      }
    }
  } else if (typeof obj == 'object') {
    for (var j in obj) {
      var arr = makeFormData(obj[j])
      for (var k = 0, l = arr.length; k < l; k++) {
        var key = !!form_data ? j + arr[k].key : '.' + j + '' + arr[k].key
        data.push({ key: key, value: arr[k].value })
      }
    }
  } else {
    data.push({ key: '', value: obj })
  }
  if (!!form_data) {
    // 封装
    for (var i = 0, len = data.length; i < len; i++) {
      form_data.append(data[i].key, data[i].value)
    }
  } else {
    return data
  }
}
