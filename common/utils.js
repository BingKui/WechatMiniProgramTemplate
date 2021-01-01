// 基础方法封装

// 判断类

export const isBoolean = b => (b === !!b);
export const isString = s => (s === s + '');
export const isNumber = n => (n === +n);
export const isInteger = i => (Number.isInteger(i));
export const isObject = o => (o === Object(o));
export const isArray = a => {
    if (typeof Array.isArray === "function") {
        return Array.isArray(a)
    } else {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
};
export const isEmpty = (o) => {
    if (isString(o) || isArray(o)) {
        return o.length === 0
    } else if (isNumber(o) || isBoolean(o) || isInteger(o)) {
        return (o + '').length === 0
    } else if (isObject(o)) {
        Object.keys(o).length === 0
    }
    return false
};

// 格式化类

/**
 * 格式化时间
 * @param {Date|String} date 日期
 * @param {String} format 格式化方式
 */
export const formatDate = (date, format) => {
    let foramtDate = date;
    if (!isObject(date)) {
        foramtDate = new Date(date);
    }
    var o = {
        "M+": foramtDate.getMonth() + 1, //月份
        "D+": foramtDate.getDate(), //日
        "d+": foramtDate.getDate(), //日
        "H+": foramtDate.getHours(), //小时
        "m+": foramtDate.getMinutes(), //分
        "s+": foramtDate.getSeconds(), //秒
        "q+": Math.floor((foramtDate.getMonth() + 3) / 3), //季度
        "f+": foramtDate.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(format) || /(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (foramtDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return format;
};
