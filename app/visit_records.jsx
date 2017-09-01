var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_visit_by_id",{id:id},function(data){
    var id = data.rows[0].id;
    var customer_id = data.rows[0].customer_id;
    var name = data.rows[0].name;
    var phone = data.rows[0].phone;
    var sex = data.rows[0].sex;
    var relationship = data.rows[0].relationship;
    var visit_date = data.rows[0].visit_date;
    var reception_person = data.rows[0].reception_person;
    var school = data.rows[0].school;
    $('#id').val(id);
    $('#customer_id').val(customer_id);
    $('#name').val(name);
    $('#phone').val(phone);
    $('#sex').val(sex);
    $('#relationship').val(relationship);
    $('#visit_date').val(visit_date);
    $('#reception_person').val(reception_person);
    $('#school').val(school);
  })
}
// 编辑
function alertEdit(refresh){
  var id = $('#id').val();
  var customer_id = $('#customer_id').val();
  var name = $('#name').val();
  var phone = $('#phone').val();
  var sex = $('#sex').val();
  var relationship = $('#relationship').val();
  var visit_date = $('#visit_date').val();
  var reception_person = $('#reception_person').val();
  var school = $('#school').val();
  var visit  = {id:id, customer_id:customer_id, name:name, phone:phone,
                sex:sex, relationship:relationship, visit_date:visit_date,
                 reception_person:reception_person, school:school
                  }
  $.post("/update_visit",{visit :JSON.stringify(visit)},function(data){
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
  var customer_id = $('#customer_id').val();
  var name = $('#name').val();
  var phone = $('#phone').val();
  var sex = $('#sex').val();
  var relationship = $('#relationship').val();
  var visit_date = $('#visit_date').val();
  var reception_person = $('#reception_person').val();
  var school = $('#school').val();
  var visit  = {id:id, customer_id:customer_id, name:name, phone:phone,
                sex:sex, relationship:relationship, visit_date:visit_date,
                 reception_person:reception_person, school:school
                  }
  $.post("/save_visit",{visit:JSON.stringify(visit)},function(data){
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
          <span className="edit_part_div_name">客户id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="customer_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">到访人姓名:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="phone"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">性别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="sex"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">关系:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="relationship"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">到访日期:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="visit_date"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接待人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="reception_person"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">校区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="school"/></span>
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
          <span className="edit_part_div_name">客户id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_customer_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">到访人姓名:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">手机号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_phone"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">性别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_sex"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">关系:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_relationship"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">到访日期:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_visit_date"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">接待人:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_reception_person"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">校区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_school"/></span>
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
              url: "/delete_visit",
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
