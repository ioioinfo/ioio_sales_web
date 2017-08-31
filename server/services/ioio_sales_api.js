/**
 ┌──────────────────────────────────────────────────────────────┐
 │               ___ ___ ___ ___ ___ _  _ ___ ___               │
 │              |_ _/ _ \_ _/ _ \_ _| \| | __/ _ \              │
 │               | | (_) | | (_) | || .` | _| (_) |             │
 │              |___\___/___\___/___|_|\_|_| \___/              │
 │                                                              │
 │                                                              │
 │                       set up in 2015.2                       │
 │                                                              │
 │   committed to the intelligent transformation of the world   │
 │                                                              │
 └──────────────────────────────────────────────────────────────┘
*/

var _ = require('lodash');
var eventproxy = require('eventproxy');
const util = require('util');
const uu_request = require('../utils/uu_request');

var host = "http://211.149.248.241:18028/";

var nav = function(server) {
    return {
        //保存预算
        save_budget: function(data,cb) {
            var url = host + "save_budget";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有预算
        get_budgets: function(cb) {
            var url = host + "get_budgets";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找渠道
        search_channel_byId: function(id,cb) {
            var url = host + "search_channel_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //渠道删除
        delete_channel: function(data,cb) {
            var url = host + "delete_channel";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新渠道
        update_channel: function(data,cb) {
            var url = host + "update_channel";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存渠道
        save_channel: function(data,cb) {
            var url = host + "save_channel";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有渠道
        get_channels: function(cb) {
            var url = host + "get_channels";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新部门
        update_department: function(data,cb) {
            var url = host + "update_department";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找部门
        search_department_byId: function(id,cb) {
            var url = host + "search_department_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除部门
        delete_department: function(data,cb) {
            var url = host + "delete_department";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存部门
        save_department: function(data,cb) {
            var url = host + "save_department";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询部门
        get_departments: function(cb) {
            var url = host + "get_departments";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },

    };
};

module.exports = nav;
