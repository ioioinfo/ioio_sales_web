var React = require('react');
var ReactDOM = require('react-dom');


var AdminLeft = require('nav');
var Table = require('Table');
var PageTab = require('PageTab');;
// 查看
function alertSearch(id){
  $('#background').show();
  $('#edit_part').show();
  $.get("/search_student_by_id",{id:id},function(data){
    var id = data.rows[0].id;
    var thread_id = data.rows[0].thread_id;
    var student_name = data.rows[0].student_name;
    var sex = data.rows[0].sex;
    var age_stage = data.rows[0].age_stage;
    var birthday = data.rows[0].birthday;
    var hobby = data.rows[0].hobby;
    var person_character = data.rows[0].person_character;
    var school_type = data.rows[0].school_type;
    var is_foreign_teacher = data.rows[0].is_foreign_teacher;
    var training_experience = data.rows[0].training_experience;
    var training_type = data.rows[0].training_type;
    var training_way = data.rows[0].training_way;
    var learning_stage = data.rows[0].learning_stage;
    var phone = data.rows[0].phone;
    $('#id').val(id);
    $('#thread_id').val(thread_id);
    $('#student_name').val(student_name);
    $('#sex').val(sex);
    $('#age_stage').val(age_stage);
    $('#birthday').val(birthday);
    $('#hobby').val(hobby);
    $('#person_character').val(person_character);
    $('#school_type').val(school_type);
    $('#is_foreign_teacher').val(is_foreign_teacher);
    $('#training_experience').val(training_experience);
    $('#training_type').val(training_type);
    $('#training_way').val(training_way);
    $('#learning_stage').val(learning_stage);
    $('#phone').val(phone);
  })
}
// 编辑
function alertEdit(refresh){
var id = $('#id').val();
var thread_id = $('#thread_id').val();
var student_name = $('#student_name').val();
var sex = $('#sex').val();
var age_stage = $('#age_stage').val();
var birthday = $('#birthday').val();
var hobby = $('#hobby').val();
var person_character = $('#person_character').val();
var school_type = $('#school_type').val();
var is_foreign_teacher = $('#is_foreign_teacher').val();
var training_experience = $('#training_experience').val();
var training_type = $('#training_type').val();
var training_way = $('#training_way').val();
var learning_stage = $('#learning_stage').val();
var phone = $('#phone').val();
  var student = {id:id, thread_id:thread_id, student_name:student_name, sex:sex,
                age_stage:age_stage, hobby:hobby, person_character:person_character, school_type:school_type,
                is_foreign_teacher:is_foreign_teacher,training_experience:training_experience,
                training_type:training_type, training_way:training_way, learning_stage:learning_stage,
                phone:phone, birthday:birthday,
                  }
  $.post("/update_student",{student:JSON.stringify(student)},function(data){
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
var student_name = $('#new_student_name').val();
var sex = $('#new_sex').val();
var age_stage = $('#new_age_stage').val();
var birthday = $('#new_birthday').val();
var hobby = $('#new_hobby').val();
var person_character = $('#new_person_character').val();
var school_type = $('#new_school_type').val();
var is_foreign_teacher = $('#new_is_foreign_teacher').val();
var training_experience = $('#new_training_experience').val();
var training_type = $('#new_training_type').val();
var training_way = $('#new_training_way').val();
var learning_stage = $('#new_learning_stage').val();
var phone = $('#new_phone').val();
  var student = {thread_id:thread_id, student_name:student_name, sex:sex,
                age_stage:age_stage, hobby:hobby, person_character:person_character, school_type:school_type,
                is_foreign_teacher:is_foreign_teacher,training_experience:training_experience,
                training_type:training_type, training_way:training_way, learning_stage:learning_stage,
                phone:phone, birthday:birthday,
                  }
  $.post("/save_student",{student:JSON.stringify(student)},function(data){
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
          <span className="edit_part_div_name">姓名:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="student_name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">年龄:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="age_stage"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">性别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="sex"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">生日:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="birthday"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">兴趣:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="hobby"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">性格:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="person_character"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学校类型:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="school_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">是否上过外教:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="is_foreign_teacher"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">培训经历:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="training_experience"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">培训形式:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="training_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学习方式:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="training_way"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学生性质:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="learning_stage"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">线索手机:</span>
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
          <span className="edit_part_div_name">id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">线索id:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_thread_id"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">姓名:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_student_name"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">年龄:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_age_stage"/></span>
        </div>

        <div className="edit_part_div">
          <span className="edit_part_div_name">性别:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_sex"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">生日:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_birthday"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">兴趣:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_hobby"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">性格:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_person_character"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学校类型:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_school_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">是否上过外教:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_is_foreign_teacher"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">培训经历:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_training_experience"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">培训形式:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_training_type"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学习方式:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_training_way"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">学生性质:</span>
          <span className="edit_part_div_input_wrap"><input type="text" className="edit_part_div_input" id="new_learning_stage"/></span>
        </div>
        <div className="edit_part_div">
          <span className="edit_part_div_name">线索手机:</span>
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
              url: "/delete_student",
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
