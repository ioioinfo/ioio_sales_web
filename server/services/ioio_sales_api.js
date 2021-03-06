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
        //根据id查找CQP明细
        search_cpq_detail_by_id: function(id,cb) {
            var url = host + "search_cpq_detail_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新CQP明细
        update_cpq_detail: function(data,cb) {
            var url = host + "update_cpq_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除CQP明细
        delete_cpq_detail: function(data,cb) {
            var url = host + "delete_cpq_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增线CQP明细
        save_cpq_detail: function(data,cb) {
            var url = host + "save_cpq_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有CQP明细
        get_cpq_details: function(cb) {
            var url = host + "get_cpq_details";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找CQP
        search_cpq_by_id: function(id,cb) {
            var url = host + "search_cpq_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新CQP
        update_cpq: function(data,cb) {
            var url = host + "update_cpq";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除CQP
        delete_cpq: function(data,cb) {
            var url = host + "delete_cpq";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增线CQP
        save_cpq: function(data,cb) {
            var url = host + "save_cpq";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有CQP
        get_cpqs: function(cb) {
            var url = host + "get_cpqs";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找商机联系方式
        search_intentions_record: function(id,cb) {
            var url = host + "search_intentions_record?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增商机短信联系方式
        save_intention_by_message: function(data,cb) {
            var url = host + "save_intention_by_message";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增商机邮件联系方式
        save_intention_by_email: function(data,cb) {
            var url = host + "save_intention_by_email";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增商机电话联系方式
        save_intention_by_phone: function(data,cb) {
            var url = host + "save_intention_by_phone";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有商机联系记录
        get_intentions_customers: function(cb) {
            var url = host + "get_intentions_customers";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除联系记录
        delete_connection_record: function(data,cb) {
            var url = host + "delete_connection_record";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找线索联系方式
        search_threads_record: function(id,cb) {
            var url = host + "search_threads_record?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增线索短信联系方式
        save_threads_by_message: function(data,cb) {
            var url = host + "save_threads_by_message";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增线索邮件联系方式
        save_threads_by_email: function(data,cb) {
            var url = host + "save_threads_by_email";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //新增线索电话联系方式
        save_threads_by_phone: function(data,cb) {
            var url = host + "save_threads_by_phone";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有线索联系方式
        get_threads_customers: function(cb) {
            var url = host + "get_threads_customers";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找定金
        search_by_id: function(id,cb) {
            var url = host + "search_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除联系方式
        delete_connection_way: function(data,cb) {
            var url = host + "delete_connection_way";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存联系方式
        save_connection_way: function(data,cb) {
            var url = host + "save_connection_way";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有联系方式
        get_connection_ways: function(cb) {
            var url = host + "get_connection_ways";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新合同明细
        update_prepayment: function(data,cb) {
            var url = host + "update_prepayment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除合同明细
        delete_prepayment: function(data,cb) {
            var url = host + "delete_prepayment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存合同明细
        save_prepayment: function(data,cb) {
            var url = host + "save_prepayment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找定金
        search_prepayment_by_id: function(id,cb) {
            var url = host + "search_prepayment_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有定金
        get_prepayments: function(cb) {
            var url = host + "get_prepayments";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找合同明细
        search_detail_by_id: function(id,cb) {
            var url = host + "search_detail_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除合同明细
        delete_detail: function(data,cb) {
            var url = host + "delete_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新合同明细
        update_detail: function(data,cb) {
            var url = host + "update_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存合同明细
        save_detail: function(data,cb) {
            var url = host + "save_detail";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有合同明细
        get_details: function(cb) {
            var url = host + "get_details";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找合同
        search_contract_by_id: function(id,cb) {
            var url = host + "search_contract_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除合同
        delete_contract: function(data,cb) {
            var url = host + "delete_contract";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新合同
        update_contract: function(data,cb) {
            var url = host + "update_contract";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存合同
        save_contract: function(data,cb) {
            var url = host + "save_contract";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有合同
        get_contracts: function(cb) {
            var url = host + "get_contracts";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除到访
        delete_visit: function(data,cb) {
            var url = host + "delete_visit";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找到访
        search_visit_by_id: function(id,cb) {
            var url = host + "search_visit_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新到访
        update_visit: function(data,cb) {
            var url = host + "update_visit";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存到访
        save_visit: function(data,cb) {
            var url = host + "save_visit";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有预约信息
        get_visit_records: function(cb) {
            var url = host + "get_visit_records";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除预约
        delete_appointment: function(data,cb) {
            var url = host + "delete_appointment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新预约
        update_appointment: function(data,cb) {
            var url = host + "update_appointment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存预约
        save_appointment: function(data,cb) {
            var url = host + "save_appointment";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找预约
        search_appointment_by_id: function(id,cb) {
            var url = host + "search_appointment_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有预约信息
        get_appointments: function(cb) {
            var url = host + "get_appointments";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新业绩
        update_achievement: function(data,cb) {
            var url = host + "update_achievement";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除业绩
        delete_achievement: function(data,cb) {
            var url = host + "delete_achievement";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找业绩
        search_achievement_by_id: function(id,cb) {
            var url = host + "search_achievement_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存业绩
        save_achievement: function(data,cb) {
            var url = host + "save_achievement";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有业绩信息
        get_achievements: function(cb) {
            var url = host + "get_achievements";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找老师
        search_teacher_by_id: function(id,cb) {
            var url = host + "search_teacher_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除老师信息
        delete_teacher: function(data,cb) {
            var url = host + "delete_teacher";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新老师信息
        update_teacher: function(data,cb) {
            var url = host + "update_teacher";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存老师信息
        save_teacher: function(data,cb) {
            var url = host + "save_teacher";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有需求老师信息
        get_teachers: function(cb) {
            var url = host + "get_teachers";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除学员
        delete_student: function(data,cb) {
            var url = host + "delete_student";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找学员
        search_student_by_id: function(id,cb) {
            var url = host + "search_student_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //更新学员
        update_student: function(data,cb) {
            var url = host + "update_student";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //保存学员
        save_student: function(data,cb) {
            var url = host + "save_student";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //查询所有跟踪学员信息
        get_students: function(cb) {
            var url = host + "get_students";
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //根据id查找分配
        search_customer_by_id: function(id,cb) {
            var url = host + "search_customer_by_id?id=" + id;
            uu_request.get(url, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    cb(err,JSON.parse(body));
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
        //删除商机
        delete_customer: function(data,cb) {
            var url = host + "delete_customer";
            uu_request.request(url, data, function(err, response, body) {
                if (!err && response.statusCode === 200) {
                    // var info = JSON.parse(body);
                    cb(err,body);
                } else {
                    cb(true,{message:"网络错误"});
                }
            });
        },
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
