// 接口调用方法
import url from '../constants/url';
import { get, post } from '../common/ajax';

export const userRegister = async (params) => {
    const res = await post(url.register, params);
    return res;
};

export const userLogin = async (params) => {
    const res = await post(url.login, params);
    return res;
};

export const getUserInfo = async () => {
    const res = await get(url.userInfo);
    return res;
};