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
        //更新商机
        update_customer: function(data,cb) {
            var url = host + "update_customer";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存商机
        save_customer: function(data,cb) {
            var url = host + "save_customer";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有商机
        get_customers: function(cb) {
            var url = host + "get_customers";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新分配
        update_allocation_history: function(data,cb) {
            var url = host + "update_allocation_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除分配
        delete_allocation_history: function(data,cb) {
            var url = host + "delete_allocation_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找分配
        search_allocation_history_byId: function(id,cb) {
            var url = host + "search_allocation_history_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存分配历史
        save_allocation_history: function(data,cb) {
            var url = host + "save_allocation_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有分配历史
        get_allocation_histories: function(cb) {
            var url = host + "get_allocation_histories";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新分配
        update_allocation: function(data,cb) {
            var url = host + "update_allocation";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找分配
        search_allocation_byId: function(id,cb) {
            var url = host + "search_allocation_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除分配
        delete_allocation: function(data,cb) {
            var url = host + "delete_allocation";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存分配
        save_allocation: function(data,cb) {
            var url = host + "save_allocation";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有分配
        get_allocations: function(cb) {
            var url = host + "get_allocations";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新需求
        update_demand: function(data,cb) {
            var url = host + "update_demand";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找需求
        search_demand_byId: function(id,cb) {
            var url = host + "search_demand_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除需求
        delete_demand: function(data,cb) {
            var url = host + "delete_demand";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存需求
        save_demand: function(data,cb) {
            var url = host + "save_demand";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有需求
        get_demands: function(cb) {
            var url = host + "get_demands";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新线索状态
        update_thread_state: function(data,cb) {
            var url = host + "update_thread_state";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新线索
        update_thread: function(data,cb) {
            var url = host + "update_thread";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找线索
        search_thread_byId: function(id,cb) {
            var url = host + "search_thread_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //线索删除
        delete_thread: function(data,cb) {
            var url = host + "delete_thread";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存线索
        save_thread: function(data,cb) {
            var url = host + "save_thread";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有线索
        get_threads: function(cb) {
            var url = host + "get_threads";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新呼叫中心
        update_center: function(data,cb) {
            var url = host + "update_center";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找呼叫中心
        search_center_byId: function(id,cb) {
            var url = host + "search_center_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //呼叫中心删除
        delete_center: function(data,cb) {
            var url = host + "delete_center";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存呼叫中心
        save_center: function(data,cb) {
            var url = host + "save_center";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有签到历史
        get_call_centers: function(cb) {
            var url = host + "get_call_centers";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新签到历史
        update_history: function(data,cb) {
            var url = host + "update_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找签到历史
        search_history_byId: function(id,cb) {
            var url = host + "search_history_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //签到历史删除
        delete_history: function(data,cb) {
            var url = host + "delete_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存签到历史
        save_history: function(data,cb) {
            var url = host + "save_history";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有签到历史
        get_histories: function(cb) {
            var url = host + "get_histories";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新预算
        update_point: function(data,cb) {
            var url = host + "update_point";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找预算
        search_point_byId: function(id,cb) {
            var url = host + "search_point_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //地点删除
        delete_point: function(data,cb) {
            var url = host + "delete_point";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存地点
        save_point: function(data,cb) {
            var url = host + "save_point";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有地点
        get_points: function(cb) {
            var url = host + "get_points";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新预算
        update_budget: function(data,cb) {
            var url = host + "update_budget";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找预算
        search_budget_byId: function(id,cb) {
            var url = host + "search_budget_byId?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //预算删除
        delete_budget: function(data,cb) {
            var url = host + "delete_budget";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
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
