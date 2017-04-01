"use strict";
const Promise = require('./es6-promise').Promise;
const config = require('../config/config');

// 登录功能，返回下一步所需的code
function loginFn() {
    console.log("执行了loginfn()");
    return new Promise((resolve, reject) => {
        wx.login({
            success: res => {
                resolve(res.code);
            },
            fail: res => {
                reject(res);
            }
        });
    });
}
//  获取用户信息
function getUserInfoFn() {
    console.log("getUserInfoFn()");
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            withCredentials: true,
            success: res => {
                resolve(res);
            },
            fail: res => {
                reject(res);
            }
        });
    });
}
module.exports = {
    loginFn,
    getUserInfoFn
}