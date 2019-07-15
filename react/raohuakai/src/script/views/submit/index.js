
import React,{Component} from "react";
import {Head} from "@/script/components/head";
import { List, InputItem ,Picker, Button} from 'antd-mobile';
import {axios} from "&"
// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
};
const seasons = [
    [
      {
        label: '高数',
        value: '高数',
      },
      {
        label: '计算机基础',
        value: '计算机基础',
      },
      {
        label: '专业课',
        value: '专业课',
      },
      {
        label: '职业素养',
        value: '职业素养',
      }
    ],
  ];
const seasons2=[
  [
    {
      label: '软件开发-1811',
      value: '软件开发-1811',
    },
    {
      label: '软件开发-1901',
      value: '软件开发-1901',
    },
    
    {
      label: '软件开发-1902',
      value: '软件开发-1902',
    },
    {
      label: '软件开发-1903',
      value: '软件开发-1903',
    },
    {
      label: '软件开发-1904',
      value: '软件开发-1904',
    },
    {
      label: '软件开发-1905',
      value: '软件开发-1905',
    },
    {
      label: '软件开发-1906',
      value: '软件开发-1906',
    },
    {
      label: '软件开发-1907',
      value: '软件开发-1907',
    },
  ]
]
class Submit extends Component{
    state={
        schema:[
            {title:"姓名",toast:"请输入姓名"},
            // {title:"班级",toast:"例:软件测试-1902"},
            {title:"试卷网址",toast:"例:www.xxxx.com"},
            {title:"核心考点",toast:"例:vue框架"}
        ],
        sValue: ['高数'],
        svalue2:['软件开发-1902']
    }
    //获取科目类容
    getSubject(v){
      console.log(v[0])
      this.setState({ sValue: v })
    }
    //获取班级类容
    getSubject2(v){
      console.log(v[0])
      this.setState({ sValue2: v })
    }
    //获取input框内容
    inpValue(e){
      console.log(e)
    }
    //提交科目数据
    submitData=()=>{
      // this.refs.one0
     var subject=this.state.sValue[0];
     var classes=this.state.svalue2[0];
      
    var arr=[];
      for(var i in this.refs ){
       arr.push(this.refs[i].state.value);

      }
      console.log(subject,classes)
      console.log(arr)
      axios.post("/react/submitResult",{
        subject,
        classes,
        name:arr[0],
        website:arr[1],
        core:arr[2]
      }).then(res=>{
        console.log(res)
      })

    }
    render(){
        const {
            schema,
            district
        }=this.state
        return(
            <div>
                
                <div className="head-position">
                    <Head title="上传项目"></Head>
                </div>
                    <div className="head-cen"></div>
                <Picker
                    data={seasons}
                    title="选择科目"
                    cascade={false}
                    extra="请选择科目"
                    value={this.state.sValue}
                    onChange={(v)=>this.getSubject(v)}
                    onOk={v => this.setState({ sValue: v })}
                    >
                    <List.Item arrow="horizontal">科目</List.Item>
                </Picker>
                <Picker
                    data={seasons2}
                    title="选择班级"
                    cascade={false}
                    extra="请选择班级"
                    value={this.state.sValue2}
                    onChange={(v)=>this.getSubject2(v)}
                    onOk={v => this.setState({ sValue2: v })}
                    >
                    <List.Item arrow="horizontal">班级</List.Item>
                </Picker>
                {schema.map((item,i)=>{
                    return(
                        <div key={i}>
                            <InputItem
                                ref={"one"+i}
                                placeholder={item.toast}
                                clear
                                moneyKeyboardAlign="left"
                                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                                onChange={(e)=>this.inpValue(e)}
                            >{item.title}</InputItem>
                        </div>
                    )
                })}
                
                <Button type="primary"
                onClick={this.submitData}
                >确认提交</Button>
            </div>
        )
    }
}

export {Submit}