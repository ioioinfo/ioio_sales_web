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

var moduel_prefix = 'ioio_sales_data';

exports.register = function(server, options, next) {
    var service_info = "ioio sales";

    var person = server.plugins.services.person;
    var task = server.plugins.services.task;
    var hr = server.plugins.services.hr;
    var notify = server.plugins.services.notify;
    var api = server.plugins.services["ioio_sales_api"];

    var cookie_options = {ttl:10*365*24*60*60*1000};
    var cookie_key = "ioio_sales_cookie";

    server.route([
        //查询数据
        {
            method: "GET",
            path: '/list_data',
            handler: function(request, reply) {
                return reply({"success":true,"rows":[],"num":0});
            }
        },
        //查询部门
        {
            method: 'GET',
            path: '/get_departments',
            handler: function(request, reply) {
                api.get_departments(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //保存部门
        {
            method: 'POST',
            path: '/save_department',
            handler: function(request, reply) {
                var name = request.payload.name;
                var code = request.payload.code;
                var source_level = request.payload.source_level;
                if (!name || !code || !source_level) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "name":name,
                    "code":code,
                    "source_level":source_level
                };

                api.save_department(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //部门删除
        {
            method: "POST",
            path: '/delete_department',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_department(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找部门
        {
            method: "GET",
            path: '/search_department_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_department_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新部门
        {
            method: "POST",
            path: '/update_department',
            handler: function(request, reply) {
                var id = request.payload.id;
                var name = request.payload.name;
                var code = request.payload.code;
                var source_level = request.payload.source_level;

                if (!id || !name || !code || !source_level) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "id" : id,
                    "name" : name,
                    "code" : code,
                    "source_level" : source_level
                };
                api.update_department(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有渠道
        {
            method: 'GET',
            path: '/get_channels',
            handler: function(request, reply) {
                api.get_channels(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增渠道
        {
            method: 'POST',
            path: '/save_channel',
            handler: function(request, reply) {
                var name = request.payload.name;
                var code = request.payload.code;
                var department_id = request.payload.department_id;
                if (!name || !code || !department_id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "name":name,
                    "code":code,
                    "department_id":department_id
                };

                api.save_channel(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新渠道
        {
            method: "POST",
            path: '/update_channel',
            handler: function(request, reply) {
                var id = request.payload.id;
                var name = request.payload.name;
                var code = request.payload.code;
                var department_id = request.payload.department_id;

                if (!id || !name || !code || !department_id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "id" : id,
                    "name" : name,
                    "code" : code,
                    "department_id" : department_id
                };
                api.update_channel(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //渠道删除
        {
            method: "POST",
            path: '/delete_channel',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_channel(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找渠道
        {
            method: "GET",
            path: '/search_channel_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_channel_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有预算
        {
            method: 'GET',
            path: '/get_budgets',
            handler: function(request, reply) {
                api.get_budgets(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增预算
        {
            method: 'POST',
            path: '/save_budget',
            handler: function(request, reply) {
                var budget = request.payload.budget;
                budget = JSON.parse(budget);
                if (!budget.name || !budget.channel_id || !budget.employees_cost || !budget.locations_cost || !budget.materials_cost || !budget.medias_cost) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "budget":JSON.stringify(budget)
                };

                api.save_budget(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },



    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
