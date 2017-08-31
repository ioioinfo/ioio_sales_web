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
var r = require('request');
var moment = require('moment');
var eventproxy = require('eventproxy');

var moduel_prefix = 'ioio_sales_main';

exports.register = function(server, options, next) {
    var wx_api = server.plugins.services.wx_api;
    var person = server.plugins.services.person;

    var cookie_options = {ttl:10*365*24*60*60*1000};
    var cookie_key = "ioio_sales_cookie";

    server.route([
        //首页
        {
            method: 'GET',
            path: '/index',
            handler: function(request, reply) {
                return reply.view("index");
            },
        },

        //渠道部门
        {
            method: 'GET',
            path: '/departments_list',
            handler: function(request, reply) {
                return reply.view("departments_list");
            },
        },

        //渠道部门信息
        {
            method: 'GET',
            path: '/channels',
            handler: function(request, reply) {
                return reply.view("channels");
            },
        },

        //渠道预算
        {
            method: 'GET',
            path: '/budgets',
            handler: function(request, reply) {
                return reply.view("budgets");
            },
        },

        //地摊点信息
        {
            method: 'GET',
            path: '/points',
            handler: function(request, reply) {
                return reply.view("points");
            },
        },

        //到点签到历史信息
        {
            method: 'GET',
            path: '/histories',
            handler: function(request, reply) {
                return reply.view("histories");
            },
        },

        //呼叫中心列表
        {
            method: 'GET',
            path: '/call_centers',
            handler: function(request, reply) {
                return reply.view("call_centers");
            },
        },

    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
