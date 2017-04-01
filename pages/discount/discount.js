//index.js
"use strict";
const Promise = require('../../utils/es6-promise').Promise;
const utils = require('../../utils/util');
const config = require('../../config/config');
var App = getApp();

Page({
    data: {
        globalData: App.globalData,
        userInfo: {},
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        console.log(config);
        utils.loginFn().then(utils.getUserInfoFn).then((res) => {
            App.setGlobalData(res.userInfo);
            that.setData({
                userInfo: res.userInfo,
                globalData: App.globalData
            })
        });
    }
})