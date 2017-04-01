//app.js
"use strict";
const Promise = require('./utils/es6-promise').Promise;
const utils = require('./utils/util');
const config = require('./config/config');

App({
    onLaunch: function() {
        //调用API从本地缓存中获取数据
    },
    setGlobalData: function(userinfo) {
        this.globalData.userInfo = userinfo;
        console.log(this.globalData);
    },
    globalData: {
        userInfo: null,
        staticServerUrl: config.staticServerUrl,
        apiServerUrl: config.apiServerUrl
    }
})