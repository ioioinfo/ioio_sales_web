var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_demand_byId",{id:id},function(data){
    var id = data.rows[0].id;
    var thread_id = data.rows[0].thread_id;
    var training_goal = data.rows[0].training_goal;
    var disadvantage = data.rows[0].disadvantage;
    var learning_time = data.rows[0].learning_time;
    var intention_city = data.rows[0].intention_city;
    var intention_school = data.rows[0].intention_school;
    var intention_level = data.rows[0].intention_level;
    var visit_time = data.rows[0].visit_time;
    var intention_product = data.rows[0].intention_product;
    var source_type = data.rows[0].source_type;
    var phone = data.rows[0].phone;
    $('#id').val(id);
    $('#thread_id').val(thread_id);
    $('#training_goal').val(training_goal);
    $('#disadvantage').val(disadvantage);
    $('#learning_time').val(learning_time);
    $('#intention_city').val(intention_city);
    $('#intention_school').val(intention_school);
    $('#intention_level').val(intention_level);
    $('#visit_time').val(visit_time);
    $('#intention_product').val(intention_product);
    $('#source_type').val(source_type);
    $('#phone').val(phone);
  })
}
// 编辑
function alertEdit(refresh){
  var id = $('#id').val();
  var thread_id = $('#thread_id').val();
  var training_goal = $('#training_goal').val();
  var disadvantage = $('#disadvantage').val();
  var learning_time = $('#learning_time').val();
  var intention_city = $('#intention_city').val();
  var intention_school = $('#intention_school').val();
  var intention_level = $('#intention_level').val();
  var visit_time = $('#visit_time').val();
  var intention_product = $('#intention_product').val();
  var source_type = $('#source_type').val();
  var phone = $('#phone').val();
  console.log(thread_id);
  console.log(training_goal);
  console.log(disadvantage);
  console.log(learning_time);
  var demand = {id:id, thread_id:thread_id, training_goal:training_goal, disadvantage:disadvantage, learning_time:learning_time, intention_city:intention_city,
                intention_school:intention_school, intention_level:intention_level, visit_time:visit_time, intention_product:intention_product, source_type:source_type, phone:phone,}
  $.post("/update_demand",{demand:JSON.stringify(demand)},function(data){
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
var training_goal = $('#new_training_goal').val();
var disadvantage = $('#new_disadvantage').val();
var learning_time = $('#new_learning_time').val();
var intention_city = $('#new_intention_city').val();
var intention_school = $('#new_intention_school').val();
var intention_level = $('#new_intention_level').val();
var visit_time = $('#new_visit_time').val();
var intention_product = $('#new_intention_product').val();
var source_type = $('#new_source_type').val();
var phone = $('#new_phone').val();
var demand = {id:id, thread_id:thread_id, training_goal:training_goal, disadvantage:disadvantage, learning_time:learning_time, intention_city:intention_city,
              intention_school:intention_school, intention_level:intention_level, visit_time:visit_time, intention_product:intention_product, source_type:source_type, phone:phone,}
  $.post("/save_demand",{demand:JSON.stringify(demand)},function(data){
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
          <span className="edit_part_div_name">培训目的:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="training_goal"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">弱点环节:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="disadvantage"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">上课时间:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="learning_time"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向城市:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="intention_city"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向校区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="intention_school"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向等级:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="intention_level"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">可咨询时间:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="visit_time"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向产品:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="intention_product"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">资源类别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="source_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="phone"/></span>
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
          <span className="edit_part_div_name">培训目的:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_training_goal"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">弱点环节:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_disadvantage"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">上课时间:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_learning_time"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向城市:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_intention_city"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向校区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_intention_school"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向等级:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_intention_level"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">可咨询时间:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_visit_time"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">意向产品:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_intention_product"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">资源类别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_source_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_phone"/></span>
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
              url: "/delete_demand",
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
