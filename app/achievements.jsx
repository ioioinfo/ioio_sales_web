var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_achievement_by_id",{id:id},function(data){
    var id = data.rows[0].id;
    var thread_id = data.rows[0].thread_id;
    var phone = data.rows[0].phone;
    var promoter_id = data.rows[0].promoter_id;
    var choose_id = data.rows[0].choose_id;
    var school_id = data.rows[0].school_id;
    var visit_type = data.rows[0].visit_type;
    var other_recommend = data.rows[0].other_recommend;
    var origin_source = data.rows[0].origin_source;
    var master = data.rows[0].master;
    var temp_promoter_id = data.rows[0].temp_promoter_id;
    var point_id = data.rows[0].point_id;
    var marketing_master = data.rows[0].marketing_master;
    var marketing_activity = data.rows[0].marketing_activity;
    var recommend_student = data.rows[0].recommend_student;
    var mark = data.rows[0].mark;
    $('#id').val(id);
    $('#thread_id').val(thread_id);
    $('#phone').val(phone);
    $('#promoter_id').val(promoter_id);
    $('#choose_id').val(choose_id);
    $('#school_id').val(school_id);
    $('#visit_type').val(visit_type);
    $('#other_recommend').val(other_recommend);
    $('#origin_source').val(origin_source);
    $('#master').val(master);
    $('#temp_promoter_id').val(temp_promoter_id);
    $('#point_id').val(point_id);
    $('#marketing_master').val(marketing_master);
    $('#marketing_activity').val(marketing_activity);
    $('#recommend_student').val(recommend_student);
    $('#mark').val(mark);
  })
}
// 编辑
function alertEdit(refresh){
  var id = $('#id').val();
  var thread_id = $('#thread_id').val();
  var phone = $('#phone').val();
  var promoter_id = $('#promoter_id').val();
  var choose_id = $('#choose_id').val();
  var school_id = $('#school_id').val();
  var visit_type = $('#visit_type').val();
  var other_recommend = $('#other_recommend').val();
  var origin_source = $('#origin_source').val();
  var master = $('#master').val();
  var temp_promoter_id = $('#temp_promoter_id').val();
  var point_id = $('#point_id').val();
  var marketing_master = $('#marketing_master').val();
  var marketing_activity = $('#marketing_activity').val();
  var recommend_student = $('#recommend_student').val();
  var mark = $('#mark').val();
  var achievement  = {id:id, thread_id:thread_id, phone:phone, promoter_id:promoter_id,
                choose_id:choose_id, school_id:school_id, visit_type:visit_type, other_recommend:other_recommend,
                origin_source:origin_source,master:master, mark:mark,
                temp_promoter_id:temp_promoter_id, point_id:point_id, marketing_master:marketing_master,
                marketing_activity:marketing_activity, recommend_student:recommend_student,
                  }
  $.post("/update_achievement",{achievement :JSON.stringify(achievement)},function(data){
    if(data.success){
      alert('修改成功');
      $('#edit_part').hide();
      $('#background').hide();
      refresh();
    }

  })
}

// 新建
function alertNew(refresh){
  var thread_id = $('#new_thread_id').val();
  var phone = $('#new_phone').val();
  var promoter_id = $('#new_promoter_id').val();
  var choose_id = $('#new_choose_id').val();
  var school_id = $('#new_school_id').val();
  var visit_type = $('#new_visit_type').val();
  var other_recommend = $('#new_other_recommend').val();
  var origin_source = $('#new_origin_source').val();
  var master = $('#new_master').val();
  var temp_promoter_id = $('#new_temp_promoter_id').val();
  var point_id = $('#new_point_id').val();
  var marketing_master = $('#new_marketing_master').val();
  var marketing_activity = $('#new_marketing_activity').val();
  var recommend_student = $('#new_recommend_student').val();
  var mark = $('#new_mark').val();
  var achievement  = {thread_id:thread_id, phone:phone, promoter_id:promoter_id,
                choose_id:choose_id, school_id:school_id, visit_type:visit_type, other_recommend:other_recommend,
                origin_source:origin_source,master:master, mark:mark,
                temp_promoter_id:temp_promoter_id, point_id:point_id, marketing_master:marketing_master,
                marketing_activity:marketing_activity, recommend_student:recommend_student,
                  }
  $.post("/save_achievement",{achievement:JSON.stringify(achievement)},function(data){
    if(data.success){
      alert('新建成功');
      $('#new_part').hide();
      $('#background').hide();
      refresh();
    }
  })
}
class AdminIndex extends React.Component {
  render() {
    return (
      <div className="admin_index position_relative">
        <AdminLeft/>
        <AdminRight/>
      </div>
    );
  }
};



// 右边
class AdminRight extends React.Component {
  constructor(props) {
      super(props);
      this.setPage=this.setPage.bind(this);
      this.handleSort=this.handleSort.bind(this);
      this.loadData=this.loadData.bind(this);
      this.refresh=this.refresh.bind(this);
      this.handNew=this.handNew.bind(this);
      // 初始化一个空对象
      this.state = {tabthitems:[],tabtritems:[],allNum:0,everyNum:20,thisPage:1,sort:{name:"",dir:""}};
  }
  loadData(params1) {
      var params = {thisPage:this.state.thisPage,sort:this.state.sort};
      $.extend(params,params1);

      getTableData(params,function(data) {
          $.extend(data,params1);
          this.setState(data);
      }.bind(this));
  }
  componentDidMount() {
      var tableHeight = $(window).height()-195;
      $("#table").css("height",tableHeight+"px");
      this.loadData({});
  }
  setPage(thisPage) {
      this.loadData({thisPage:thisPage});
  }
  handleSort(sort){
      this.loadData({sort:sort});
  }
  refresh(){
    this.loadData({});
  }

  // 新建
  handNew(e){
    $('#background').show();
    $('#new_part').show();
  }
  render() {
    return (
      <div className="admin_right col-xs-12 col-sm-8 col-md-10 position_relative">
        <AdminRightTop/>
        <div className="admin_creat">
            <span className="admin_creat_search"><input className="admin_creat_input" type="search" placeholder="请输入关键字" /></span><button className="admin_creat_button">搜 索</button>
            <button className="admin_creat_button1" onClick={this.handNew}>新 建</button>
        </div>
        <Table tabthitems={this.state.tabthitems} tabtritems={this.state.tabtritems} sort={this.state.sort} onSort={this.handleSort} refresh={this.refresh}  checkTd={checkTd} />
        <PageTab setPage={this.setPage} allNum={this.state.allNum} everyNum={this.state.everyNum} thisPage={this.state.thisPage} />
        <AlertEdit refresh={this.refresh}/>
        <AlertNew refresh={this.refresh}/>
        <div id="background" className="position_absolute"></div>
      </div>
    );
  }
};
class AlertEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handClick=this.handClick.bind(this);
    this.handSave=this.handSave.bind(this);
  }
  handClick(e){
    $('#edit_part').hide();
    $('#background').hide();
  }
  handSave(){
    var refresh = this.props.refresh;
    alertEdit(refresh);
  }
  render() {
    return (
      <div id="edit_part" className="position_absolute animation_one">
        <div className="text_align_right"><i className="fa fa-times fa-fw" onClick={this.handClick}></i></div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">线索id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="thread_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="phone"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">推广id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="promoter_id"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">筛选id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="choose_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">校区id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="school_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">访问类型:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="visit_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">转介绍人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="other_recommend"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">原始来源:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="origin_source"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">负责人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="master"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">临时推广员:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="temp_promoter_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">booth点:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="point_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市场主管:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="marketing_master"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市场活动:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="marketing_activity"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">推荐学员:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="recommend_student"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">备注:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="mark"/></span>
        </div>
        <div className="edit_button_wrap" onClick={this.handSave}>修 改</div>
      </div>
    );
  }
};

class AlertNew extends React.Component {
  constructor(props) {
    super(props);
    this.handClick=this.handClick.bind(this);
    this.handNew=this.handNew.bind(this);
  }
  handClick(e){
    $('#new_part').hide();
    $('#background').hide();
  }
  handNew(){
    var refresh = this.props.refresh;
    alertNew(refresh);
  }
  render() {
    return (
      <div id="new_part" className="position_absolute animation_one">
        <div className="text_align_right"><i className="fa fa-times fa-fw" onClick={this.handClick}></i></div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">线索id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_thread_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_phone"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">推广id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_promoter_id"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">筛选id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_choose_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">校区id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_school_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">访问类型:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_visit_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">转介绍人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_other_recommend"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">原始来源:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_origin_source"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">负责人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_master"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">临时推广员:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_temp_promoter_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">booth点:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_point_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市场主管:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_marketing_master"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市场活动:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_marketing_activity"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">推荐学员:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_recommend_student"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">备注:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_mark"/></span>
        </div>

        <div className="edit_button_wrap" onClick={this.handNew}>新 建</div>
      </div>
    );
  }
};

// 右边 头部
class AdminRightTop extends React.Component {
  render() {
    return (
      <div className="admin_index_top ">
        <a className="admin_index_header"><i className="fa fa-user-o fa-fw"></i>&nbsp; 请登录</a>
        <a className="admin_index_exit"><i className="fa fa-power-off fa-fw"></i>&nbsp; 退出</a>
      </div>
    );
  }
};

  //判断特殊列
  var checkTd = function(defaultTd) {
        var props = this.props;
        id = props.item.id;

        var handEdit = function(id){
          alertSearch(id);
        }
        var delect = function(e){
          $.ajax({
              url: "/delete_achievement",
              dataType: 'json',
              type: 'POST',
              data: {"id":id},
              success: function(data) {
                  if (data.success) {
                      props.refresh();
                      alert("删除成功！");
                  }else {
                      alert("删除失败！");
                  }
              }.bind(this),
              error: function(xhr, status, err) {
              }.bind(this)
          });

        }

        if(this.props.thitem.type=="operation"){
          return (
              <td>
              <span className="" onClick={handEdit.bind(this,id)}><i className="fa fa-pencil btn_style btn_style_edit"></i></span>
              <span className="" onClick={delect}><i className="fa fa-trash-o btn_style btn_style_delect"></i></span>
              </td>
          );
        }else if (this.props.thitem.type=="check") {
          return (
            <td>
              <input type="checkbox" name="checkbox" />
            </td>
          );
        }else {
        return defaultTd;
    }
};

// 返回到页面
ReactDOM.render(
    <AdminIndex/>,
    document.getElementById("admin")
);
