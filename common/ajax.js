import { SUCCESS_HTTP_CODE, ERROR_HTTP_CODE, CUSTOM_HTTP_CODE } from '../constants/httpcode';
import { showToast } from './env';

/**
 * 处理请求
 * @param {Number} code 请求状态码
 */
const handlerHttpStatusCode = (code) => {
    if (code === SUCCESS_HTTP_CODE) return true;
    const codeList = [...ERROR_HTTP_CODE, ...CUSTOM_HTTP_CODE];
    let text = '未知状态码';
    for (let i = 0; i < codeList.length; i++) {
        const item = codeList[i];
        if (code === item.code) {
            text = item.text;
            break;
        }
    }
    showToast(text);
    return false;
};

/**
 * 基础请求 Promise 封装
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 * @param {String} method 请求方法
 * @param {Object} header 请求头
 */
const baseAjax = (url, param, method = 'GET', header = {}, otherSetting = {}) => {
    const _header = {
        'content-type': 'application/json',
        ...header,
    };
    return new Promise((reslove, reject) => {
        wx.request({
            url,
            method,
            data: {
                ...param,
            },
            header: _header,
            ...otherSetting,
            success(res) {
                const { statusCode, data } = res;
                handlerHttpStatusCode(statusCode) ? reslove(data) : reject(new Error('请求错误'));
            },
            fail(err) {
                reject(err);
            },
        });
    });
};

/**
 * 基础 get 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const get = (url, param) => {
    return baseAjax(url, param);
};

/**
 * 基础 post 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const post = (url, param) => {
    return baseAjax(url, param, 'POST');
};

/**
 * 基础 delete 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const del = (url, param) => {
    return baseAjax(url, param, 'DELETE')
};

/**
 * 基础 put 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const put = (url, param) => {
    return baseAjax(url, param, 'PUT')
};

/**
 * 基础 patch 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const patch = (url, param) => {
    return baseAjax(url, param, 'PATCH')
};

/**
 * 基础 connect 请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const connect = (url, param) => {
    return baseAjax(url, param, 'CONNECT')
};

/**
 * 用户自定义请求
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
export const custom = (url, param) => {
    return baseAjax(url, param, 'GET', {}, {
        dataType: 'json',
        responseType: 'arraybuffer', // 默认：text
        enableHttp2: false, // 开启 HTTP2
        enableQuic: false, // 开启 quic
        enableCache: false, // 开启缓存
    });
};