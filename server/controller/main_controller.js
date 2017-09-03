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

        // 线索信息列表
        {
            method: 'GET',
            path: '/threads',
            handler: function(request, reply) {
                return reply.view("threads");
            },
        },

        // 线索需求信息列表
        {
            method: 'GET',
            path: '/demands',
            handler: function(request, reply) {
                return reply.view("demands");
            },
        },

        // 分配信息列表
        {
            method: 'GET',
            path: '/allocations',
            handler: function(request, reply) {
                return reply.view("allocations");
            },
        },

        // 分配历史信息列表
        {
            method: 'GET',
            path: '/allocation_histories',
            handler: function(request, reply) {
                return reply.view("allocation_histories");
            },
        },

        // 业务机会列表
        {
            method: 'GET',
            path: '/customers',
            handler: function(request, reply) {
                return reply.view("customers");
            },
        },

        // 教育培训学员信息列表
        {
            method: 'GET',
            path: '/students_list',
            handler: function(request, reply) {
                return reply.view("students_list");
            },
        },

        // 教育培训老师需求列表
        {
            method: 'GET',
            path: '/teachers_list',
            handler: function(request, reply) {
                return reply.view("teachers_list");
            },
        },

        // 线索跟踪业绩信息列表
        {
            method: 'GET',
            path: '/achievements',
            handler: function(request, reply) {
                return reply.view("achievements");
            },
        },

        // 预约信息列表
        {
            method: 'GET',
            path: '/appointments_list',
            handler: function(request, reply) {
                return reply.view("appointments_list");
            },
        },

        // 到访信息列表
        {
            method: 'GET',
            path: '/visit_records',
            handler: function(request, reply) {
                return reply.view("visit_records");
            },
        },

        // 合同列表信息
        {
            method: 'GET',
            path: '/contracts_list',
            handler: function(request, reply) {
                return reply.view("contracts_list");
            },
        },

        // 合同明细列表
        {
            method: 'GET',
            path: '/contract_detail_list',
            handler: function(request, reply) {
                return reply.view("contract_detail_list");
            },
        },

        // 定金信息列表
        {
            method: 'GET',
            path: '/prepayments_list',
            handler: function(request, reply) {
                return reply.view("prepayments_list");
            },
        },

        // 联系方式列表
        {
            method: 'GET',
            path: '/connection_ways_list',
            handler: function(request, reply) {
                return reply.view("connection_ways_list");
            },
        },

        // 线索联系记录信息列表
        {
            method: 'GET',
            path: '/threads_customers_list',
            handler: function(request, reply) {
                return reply.view("threads_customers_list");
            },
        },

        // 商机联系记录列表
        {
            method: 'GET',
            path: '/intentions_customers_list',
            handler: function(request, reply) {
                return reply.view("intentions_customers_list");
            },
        },

        // CPQ信息列表
        {
            method: 'GET',
            path: '/cpqs_list',
            handler: function(request, reply) {
                return reply.view("cpqs_list");
            },
        },

        // cpq明细列表
        {
            method: 'GET',
            path: '/cpq_details_list',
            handler: function(request, reply) {
                return reply.view("cpq_details_list");
            },
        },


    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
