// Http 请求基础 code
// 正常状态码
export const SUCCESS_HTTP_CODE = 200;

// 基本错误状态码
export const ERROR_HTTP_CODE = [{
    code: 400,
    text: '错误请求，请检查请求参数',
}, {
    code: 401,
    text: '请求需要认证',
}, {
    code: 403,
    text: '服务器拒绝',
}, {
    code: 404,
    text: '请求资源不存在',
}, {
    code: 405,
    text: '客户端禁用该请求',
}, {
    code: 406,
    text: '服务器无法完成请求',
}, {
    code: 407,
    text: '需要使用代理身份认证',
}, {
    code: 408,
    text: '请求超时',
}, {
    code: 410,
    text: '请求资源已不存在',
}, {
    code: 500,
    text: '服务器内部错误',
}, {
    code: 501,
    text: '服务器不支持该请求',
}, {
    code: 502,
    text: '无效的响应',
}, {
    code: 503,
    text: '由于超载或系统维护，服务器暂时的无法处理客户端的请求',
}, {
    code: 505,
    text: '服务器不支持请求的HTTP协议的版本，无法完成处理',
}];

// 自定义状态码
export const CUSTOM_HTTP_CODE = [];