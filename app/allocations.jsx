var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_allocation_byId",{id:id},function(data){
    var id = data.rows[0].id;
    var thread_id = data.rows[0].thread_id;
    var person_id1 = data.rows[0].person_id1;
    var person_id2 = data.rows[0].person_id2;
    var department_id1 = data.rows[0].department_id1;
    var department_id2 = data.rows[0].department_id2;
    $('#id').val(id);
    $('#thread_id').val(thread_id);
    $('#person_id1').val(person_id1);
    $('#person_id2').val(person_id2);
    $('#department_id1').val(department_id1);
    $('#department_id2').val(department_id2);
  })
}
// 编辑
function alertEdit(refresh){
  var id = $('#id').val();
  var thread_id = $('#thread_id').val();
  var person_id1 = $('#person_id1').val();
  var person_id2 = $('#person_id2').val();
  var department_id1 = $('#department_id1').val();
  var department_id2 = $('#department_id2').val();
  var allocation = {id:id, thread_id:thread_id, person_id1:person_id1, person_id2:person_id2,
                    department_id1:department_id1, department_id2:department_id2,
                  }
  $.post("/update_allocation",{allocation:JSON.stringify(allocation)},function(data){
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
var person_id1 = $('#new_person_id1').val();
var person_id2 = $('#new_person_id2').val();
var department_id1 = $('#new_department_id1').val();
var department_id2 = $('#new_department_id2').val();
var allocation = {thread_id:thread_id, person_id1:person_id1, person_id2:person_id2,
                  department_id1:department_id1, department_id2:department_id2,
                }
  $.post("/save_allocation",{allocation:JSON.stringify(allocation)},function(data){
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
          <span className="edit_part_div_name">分配人id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="person_id1"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接受人id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="person_id2"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">分配人部门id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="department_id1"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接受人部门id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="department_id2"/></span>
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
          <span className="edit_part_div_name">分配人id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_person_id1"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接受人id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_person_id2"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">分配人部门id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_department_id1"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接受人部门id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_department_id2"/></span>
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
              url: "/delete_allocation",
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
