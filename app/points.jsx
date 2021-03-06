var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_point_byId",{id:id},function(data){
    var id = data.rows[0].id;
    var name = data.rows[0].name;
    var code = data.rows[0].code;
    var address = data.rows[0].address;
    var province = data.rows[0].province;
    var city = data.rows[0].city;
    var district = data.rows[0].district;
    $('#id').val(id);
    $('#name').val(name);
    $('#code').val(code);
    $('#address').val(address);
    $('#province').val(province);
    $('#city').val(city);
    $('#district').val(district);
  })
}
// 编辑
function alertEdit(refresh){
  var id = $('#id').val();
  var name = $('#name').val();
  var code = $('#code').val();
  var address = $('#address').val();
  var province = $('#province').val();
  var city = $('#city').val();
  var district = $('#district').val();
  var point = {id:id, name:name, code:code, address:address,
                province:province, city:city, district:district, }
  $.post("/update_point",{point:JSON.stringify(point)},function(data){
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
var name = $('#new_name').val();
var code = $('#new_code').val();
var address = $('#new_address').val();
var province = $('#new_province').val();
var city = $('#new_city').val();
var district = $('#new_district').val();
var point = {name:name, code:code, address:address,
              province:province, city:city, district:district, }
  $.post("/save_point",{point:JSON.stringify(point)},function(data){
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
    var name = $('#new_name').val('');
    var code = $('#new_code').val('');
    var source_level = $('#new_source_level').val('');
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
          <span className="edit_part_div_name">摊点名称:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">编号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="code"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">省:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="district"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="city"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="province"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">详细地址:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="address"/></span>
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
          <span className="edit_part_div_name">摊点名称:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">编号:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_code"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">省:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_district"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">市:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_city"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">区:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_province"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">详细地址:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_address"/></span>
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
              url: "/delete_point",
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
