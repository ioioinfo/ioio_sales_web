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
        //预算删除
        {
            method: "POST",
            path: '/delete_budget',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_budget(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找预算
        {
            method: "GET",
            path: '/search_budget_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_budget_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新预算
        {
            method: "POST",
            path: '/update_budget',
            handler: function(request, reply) {
                var budget = request.payload.budget;
                budget = JSON.parse(budget);
                if (!budget.name || !budget.channel_id || !budget.employees_cost || !budget.locations_cost || !budget.materials_cost || !budget.medias_cost
                || !budget.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "budget" : JSON.stringify(budget)
                };
                api.update_budget(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有地点
        {
            method: 'GET',
            path: '/get_points',
            handler: function(request, reply) {
                api.get_points(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增地点
        {
            method: 'POST',
            path: '/save_point',
            handler: function(request, reply) {
                var point = request.payload.point;
                point = JSON.parse(point);
                if (!point.name || !point.code || !point.address ||
                !point.province || !point.city || !point.district) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "point":JSON.stringify(point)
                };

                api.save_point(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //地点删除
        {
            method: "POST",
            path: '/delete_point',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_point(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找地点
        {
            method: "GET",
            path: '/search_point_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_point_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新地点
        {
            method: "POST",
            path: '/update_point',
            handler: function(request, reply) {
                var point = request.payload.point;
                point = JSON.parse(point);
                if (!point.name || !point.code || !point.address ||
                !point.province || !point.city || !point.district || !point.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "point" : JSON.stringify(point)
                };
                api.update_point(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有签到历史
        {
            method: 'GET',
            path: '/get_histories',
            handler: function(request, reply) {
                api.get_histories(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增签到历史
        {
            method: 'POST',
            path: '/save_history',
            handler: function(request, reply) {
                var person_id = request.payload.person_id;
                var point_id = request.payload.point_id;
                var sign_date = request.payload.sign_date;

                if (!person_id || !point_id || !sign_date) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "person_id":person_id,
                    "point_id":point_id,
                    "sign_date":sign_date
                };

                api.save_history(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //签到历史删除
        {
            method: "POST",
            path: '/delete_history',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_history(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找签到历史
        {
            method: "GET",
            path: '/search_history_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_history_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新签到历史
        {
            method: "POST",
            path: '/update_history',
            handler: function(request, reply) {
                var person_id = request.payload.person_id;
                var point_id = request.payload.point_id;
                var sign_date = request.payload.sign_date;
                var id = request.payload.id;

                if (!person_id || !point_id || !sign_date || !id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "person_id" : person_id,
                    "point_id" : point_id,
                    "sign_date" : sign_date,
                    "id" : id
                };
                api.update_history(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有呼叫中心
        {
            method: 'GET',
            path: '/get_call_centers',
            handler: function(request, reply) {
                api.get_call_centers(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增呼叫中心
        {
            method: 'POST',
            path: '/save_center',
            handler: function(request, reply) {
                var school_id = request.payload.school_id;
                var telephone = request.payload.telephone;
                var responsible_person = request.payload.responsible_person;
                if (!school_id || !telephone || !responsible_person) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "school_id":school_id,
                    "telephone":telephone,
                    "responsible_person":responsible_person
                };

                api.save_center(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //呼叫中心删除
        {
            method: "POST",
            path: '/delete_center',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_center(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找呼叫中心
        {
            method: "GET",
            path: '/search_center_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_center_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新呼叫中心
        {
            method: "POST",
            path: '/update_center',
            handler: function(request, reply) {
                var id = request.payload.id;
                var school_id = request.payload.school_id;
                var telephone = request.payload.telephone;
                var responsible_person = request.payload.responsible_person;
                if (!school_id || !telephone || !responsible_person || !id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "school_id" : school_id,
                    "telephone" : telephone,
                    "responsible_person" : responsible_person,
                    "id" : id
                };
                api.update_center(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有线索
        {
            method: 'GET',
            path: '/get_threads',
            handler: function(request, reply) {
                api.get_threads(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增线索
        {
            method: 'POST',
            path: '/save_thread',
            handler: function(request, reply) {
                var thread = request.payload.thread;
                thread = JSON.parse(thread);
                if (!thread.name || !thread.sex || !thread.phone || !thread.address || !thread.channel_id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "thread":JSON.stringify(thread)
                };

                api.save_thread(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //线索删除
        {
            method: "POST",
            path: '/delete_thread',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_thread(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找线索
        {
            method: "GET",
            path: '/search_thread_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_thread_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新线索
        {
            method: "POST",
            path: '/update_thread',
            handler: function(request, reply) {
                var thread = request.payload.thread;
                thread = JSON.parse(thread);
                if (!thread.name || !thread.sex || !thread.phone || !thread.address || !thread.channel_id || !thread.id || !thread.state) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "thread":JSON.stringify(thread)
                };
                api.update_thread(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新线索状态
        {
            method: "POST",
            path: '/update_thread_state',
            handler: function(request, reply) {
                var id = request.payload.id;
                var state = request.payload.state;

                if (!id || !state) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "id":id,
                    "state":state
                };
                api.update_thread_state(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有需求
        {
            method: 'GET',
            path: '/get_demands',
            handler: function(request, reply) {
                api.get_demands(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增需求
        {
            method: 'POST',
            path: '/save_demand',
            handler: function(request, reply) {
                var demand = request.payload.demand;
                demand = JSON.parse(demand);
                if (!demand.thread_id || !demand.training_goal ||
                !demand.disadvantage || !demand.learning_time || !demand.intention_city || !demand.intention_school || !demand.intention_level || !demand.visit_time || !demand.intention_product || !demand.source_type || !demand.phone) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "demand":JSON.stringify(demand)
                };

                api.save_demand(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //需求删除
        {
            method: "POST",
            path: '/delete_demand',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_demand(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找线索
        {
            method: "GET",
            path: '/search_demand_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_demand_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新线索
        {
            method: "POST",
            path: '/update_demand',
            handler: function(request, reply) {
                var demand = request.payload.demand;
                demand = JSON.parse(demand);
                if (!demand.thread_id || !demand.training_goal ||
                !demand.disadvantage || !demand.learning_time || !demand.intention_city || !demand.intention_school || !demand.intention_level || !demand.visit_time || !demand.intention_product || !demand.source_type || !demand.phone ||
                !demand.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "demand":JSON.stringify(demand)
                };
                api.update_demand(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有分配
        {
            method: 'GET',
            path: '/get_allocations',
            handler: function(request, reply) {
                api.get_allocations(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增分配
        {
            method: 'POST',
            path: '/save_allocation',
            handler: function(request, reply) {
                var allocation = request.payload.allocation;
                allocation = JSON.parse(allocation);
                if (!allocation.thread_id || !allocation.person_id1 || !allocation.person_id2 || !allocation.department_id1 || !allocation.department_id2) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "allocation":JSON.stringify(allocation)
                };

                api.save_allocation(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //分配删除
        {
            method: "POST",
            path: '/delete_allocation',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_allocation(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找分配
        {
            method: "GET",
            path: '/search_allocation_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_allocation_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新分配
        {
            method: "POST",
            path: '/update_allocation',
            handler: function(request, reply) {
                var allocation = request.payload.allocation;
                allocation = JSON.parse(allocation);
                if (!allocation.thread_id || !allocation.person_id1 || !allocation.person_id2 || !allocation.department_id1 || !allocation.department_id2 || !allocation.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "allocation":JSON.stringify(allocation)
                };
                api.update_allocation(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有分配历史
        {
            method: 'GET',
            path: '/get_allocation_histories',
            handler: function(request, reply) {
                api.get_allocation_histories(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增分配
        {
            method: 'POST',
            path: '/save_allocation_history',
            handler: function(request, reply) {
                var allocation_history = request.payload.allocation_history;
                allocation_history = JSON.parse(allocation_history);
                if (!allocation_history.thread_id || !allocation_history.person_id1 || !allocation_history.person_id2 || !allocation_history.department_id1 || !allocation_history.department_id2) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "allocation_history":JSON.stringify(allocation_history)
                };

                api.save_allocation_history(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //根据id查找分配
        {
            method: "GET",
            path: '/search_allocation_history_byId',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_allocation_history_byId(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //分配删除
        {
            method: "POST",
            path: '/delete_allocation_history',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_allocation_history(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新分配
        {
            method: "POST",
            path: '/update_allocation_history',
            handler: function(request, reply) {
                var allocation_history = request.payload.allocation_history;
                allocation_history = JSON.parse(allocation_history);
                if (!allocation_history.thread_id || !allocation_history.person_id1 || !allocation_history.person_id2 || !allocation_history.department_id1 || !allocation_history.department_id2 || !allocation_history.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "allocation_history":JSON.stringify(allocation_history)
                };
                api.update_allocation_history(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有商机
        {
            method: 'GET',
            path: '/get_customers',
            handler: function(request, reply) {
                api.get_customers(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增商机
        {
            method: 'POST',
            path: '/save_customer',
            handler: function(request, reply) {
                var customer = request.payload.customer;
                customer = JSON.parse(customer);
                if (!customer.thread_id || !customer.phone || !customer.name || !customer.sex || !customer.relationship || !customer.email) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "customer":JSON.stringify(customer)
                };

                api.save_customer(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新商机
        {
            method: "POST",
            path: '/update_customer',
            handler: function(request, reply) {
                var customer = request.payload.customer;
                customer = JSON.parse(customer);
                if (!customer.thread_id || !customer.phone || !customer.name || !customer.sex || !customer.relationship || !customer.id || !customer.email || !customer.state) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "customer":JSON.stringify(customer)
                };
                api.update_customer(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //商机删除
        {
            method: "POST",
            path: '/delete_customer',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_customer(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找商机
        {
            method: "GET",
            path: '/search_customer_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_customer_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有跟踪学员信息
        {
            method: 'GET',
            path: '/get_students',
            handler: function(request, reply) {
                api.get_students(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增学员
        {
            method: 'POST',
            path: '/save_student',
            handler: function(request, reply) {
                var student = request.payload.student;
                student = JSON.parse(student);
                if (!student.thread_id || !student.phone || !student.student_name || !student.sex || !student.birthday
                     || !student.hobby || !student.school_type || !student.is_foreign_teacher ||
                     !student.training_experience || !student.training_type || !student.training_way ||
                     !student.learning_stage || !student.age_stage || !student.person_character) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "student":JSON.stringify(student)
                };

                api.save_student(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新学员
        {
            method: "POST",
            path: '/update_student',
            handler: function(request, reply) {
                var student = request.payload.student;
                student = JSON.parse(student);
                if (!student.thread_id || !student.phone || !student.student_name || !student.sex || !student.birthday
                     || !student.hobby || !student.school_type || !student.is_foreign_teacher ||
                     !student.training_experience || !student.training_type || !student.training_way ||
                     !student.learning_stage || !student.age_stage || !student.person_character|| !student.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "student":JSON.stringify(student)
                };
                api.update_student(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找学员
        {
            method: "GET",
            path: '/search_student_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_student_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //学员删除
        {
            method: "POST",
            path: '/delete_student',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_student(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有需求老师信息
        {
            method: 'GET',
            path: '/get_teachers',
            handler: function(request, reply) {
                api.get_teachers(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增老师
        {
            method: 'POST',
            path: '/save_teacher',
            handler: function(request, reply) {
                var teacher = request.payload.teacher;
                teacher = JSON.parse(teacher);
                if (!teacher.thread_id || !teacher.nationality || !teacher.pronunciation || !teacher.sex
                    || !teacher.phone) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "teacher":JSON.stringify(teacher)
                };

                api.save_teacher(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新需求老师信息
        {
            method: "POST",
            path: '/update_teacher',
            handler: function(request, reply) {
                var teacher = request.payload.teacher;
                teacher = JSON.parse(teacher);
                if (!teacher.thread_id || !teacher.nationality || !teacher.pronunciation || !teacher.sex
                    || !teacher.phone|| !teacher.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "teacher":JSON.stringify(teacher)
                };
                api.update_teacher(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //老师信息删除
        {
            method: "POST",
            path: '/delete_teacher',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_teacher(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找学员
        {
            method: "GET",
            path: '/search_teacher_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_teacher_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有业绩信息
        {
            method: 'GET',
            path: '/get_achievements',
            handler: function(request, reply) {
                api.get_achievements(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增业绩信息
        {
            method: 'POST',
            path: '/save_achievement',
            handler: function(request, reply) {
                var achievement = request.payload.achievement;
                achievement = JSON.parse(achievement);
                if (!achievement.thread_id || !achievement.phone || !achievement.promoter_id ||
                    !achievement.choose_id || !achievement.school_id || !achievement.visit_type
                     || !achievement.other_recommend || !achievement.origin_source || !achievement.master
                     || !achievement.temp_promoter_id || !achievement.point_id || !achievement.marketing_master
                     || !achievement.marketing_activity || !achievement.recommend_student || !achievement.mark) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "achievement":JSON.stringify(achievement)
                };

                api.save_achievement(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //根据id查找业绩
        {
            method: "GET",
            path: '/search_achievement_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_achievement_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //业绩信息删除
        {
            method: "POST",
            path: '/delete_achievement',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_achievement(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //更新需求老师信息
        {
            method: "POST",
            path: '/update_achievement',
            handler: function(request, reply) {
                var achievement = request.payload.achievement;
                achievement = JSON.parse(achievement);
                if (!achievement.thread_id || !achievement.phone || !achievement.promoter_id ||
                    !achievement.choose_id || !achievement.school_id || !achievement.visit_type
                     || !achievement.other_recommend || !achievement.origin_source || !achievement.master
                     || !achievement.temp_promoter_id || !achievement.point_id || !achievement.marketing_master
                     || !achievement.marketing_activity || !achievement.recommend_student || !achievement.mark
                     || !achievement.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "achievement":JSON.stringify(achievement)
                };
                api.update_achievement(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有预约信息
        {
            method: 'GET',
            path: '/get_appointments',
            handler: function(request, reply) {
                api.get_appointments(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //根据id查找预约
        {
            method: "GET",
            path: '/search_appointment_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_achievement_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //新增预约信息
        {
            method: 'POST',
            path: '/save_appointment',
            handler: function(request, reply) {
                var appointment = request.payload.appointment;
                appointment = JSON.parse(appointment);
                if (!appointment.customer_id || !appointment.name || !appointment.phone || !appointment.sex || !appointment.relationship || !appointment.order_date|| !appointment.order_person || !appointment.order_school) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "appointment":JSON.stringify(appointment)
                };

                api.save_appointment(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新需求预约信息
        {
            method: "POST",
            path: '/update_appointment',
            handler: function(request, reply) {
                var appointment = request.payload.appointment;
                appointment = JSON.parse(appointment);
                if (!appointment.customer_id || !appointment.name || !appointment.phone || !appointment.sex || !appointment.relationship || !appointment.order_date|| !appointment.order_person || !appointment.order_school|| !appointment.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "appointment":JSON.stringify(appointment)
                };
                api.update_appointment(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //预约信息删除
        {
            method: "POST",
            path: '/delete_appointment',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_appointment(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有到访信息
        {
            method: 'GET',
            path: '/get_visit_records',
            handler: function(request, reply) {
                api.get_visit_records(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增到访信息
        {
            method: 'POST',
            path: '/save_visit',
            handler: function(request, reply) {
                var visit = request.payload.visit;
                visit = JSON.parse(visit);
                if (!visit.customer_id || !visit.name || !visit.phone || !visit.sex || !visit.relationship
                 || !visit.visit_date || !visit.reception_person || !visit.school) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "visit":JSON.stringify(visit)
                };

                api.save_visit(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新到访信息
        {
            method: "POST",
            path: '/update_visit',
            handler: function(request, reply) {
                var visit = request.payload.visit;
                visit = JSON.parse(visit);
                if (!visit.customer_id || !visit.name || !visit.phone || !visit.sex || !visit.relationship
                 || !visit.visit_date || !visit.reception_person || !visit.school || !visit.id) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "visit":JSON.stringify(visit)
                };
                api.update_visit(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找到访信息
        {
            method: "GET",
            path: '/search_visit_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_visit_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //到访信息删除
        {
            method: "POST",
            path: '/delete_visit',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_visit(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //查询所有到合同
        {
            method: 'GET',
            path: '/get_contracts',
            handler: function(request, reply) {
                api.get_contracts(function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //新增合同
        {
            method: 'POST',
            path: '/save_contract',
            handler: function(request, reply) {
                var contract = request.payload.contract;
                contract = JSON.parse(contract);
                if (!contract.customer_id || !contract.amount || !contract.quantity || !contract.discount
                 || !contract.actual_price || !contract.person_id || !contract.school_id || !contract.state) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }
                var data = {
                    "contract":JSON.stringify(contract)
                };

                api.save_contract(data,function(err,rows){
                    if (!err) {
                        return reply({"success":true,"message":rows.message});
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            },
        },
        //更新合同
        {
            method: "POST",
            path: '/update_contract',
            handler: function(request, reply) {
                var contract = request.payload.contract;
                contract = JSON.parse(contract);
                if (!contract.customer_id || !contract.amount || !contract.quantity || !contract.discount|| !contract.id
                 || !contract.actual_price || !contract.person_id || !contract.school_id || !contract.state) {
                    return reply({"success":false,"message":"params wrong","service_info":service_info});
                }

                var data = {
                    "contract":JSON.stringify(contract)
                };
                api.update_contract(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //合同删除
        {
            method: "POST",
            path: '/delete_contract',
            handler: function(request, reply) {
                var id = request.payload.id;
                if (!id) {
                    return reply({"success":false,"message":"id wrong","service_info":service_info});
                }
                var data = {
                    "id" : id
                };
                api.delete_contract(data,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },
        //根据id查找到访信息
        {
            method: "GET",
            path: '/search_contract_by_id',
            handler: function(request, reply) {
                var id = request.query.id;
                if (!id) {
                    return reply({"success":false,"message":"id null","service_info":service_info});
                }
                api.search_contract_by_id(id,function(err,rows){
                    if (!err) {
                        return reply(rows);
                    }else {
                        return reply({"success":false,"message":rows.message});
                    }
                });
            }
        },



    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
