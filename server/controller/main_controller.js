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

        //借书详情
        {
            method: 'GET',
            path: '/borrow_view',
            handler: function(request, reply) {
                return reply.view("borrow_view");
            },
        },


    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
