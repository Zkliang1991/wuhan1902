import React, {Component} from "react";
import "./index.scss";
import { Picker, List, WhiteSpace,Button,InputItem } from 'antd-mobile';
import {Head} from "../../components/head";
import {connect} from "react-redux";
import {getSpecificClass} from "../../actions";
import {ComDetailed} from "../../components/comDetailed";
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
            label: '全部科目',
            value: '全部科目',
        },
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
      ]
  ];
  const seasons2=[
    [   
        {
            label: '全部班级',
            value: '全部班级',
        },
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

//props的输入逻辑
 var mapStateToprops=(state)=>{
    return{
      getSpecificClass:state.data.getSpecificClass,
      num:state.data.num
    }
 }
class Grade1 extends Component{
    state = {
        sValue: ['全部科目'],
        sValue2: ['全部班级'],
      };
      
      //批改试卷的请求
      getClass(){
        console.log("---------3------------")
        var subject=this.refs.one1.props.value[0];
        var classes=this.refs.one2.props.value[0];
        this.props.dispatch(getSpecificClass("/react/getSpecificClass",{
            params:{
                subject,
                classes
            }
        }))
      };
      componentDidMount(){
        /**
         * 根据条件查询试卷数据   
         */
        console.log("-----------2")
        this.getClass()
      }
      //批改分数提交到数据库
      submitResult(i){
        var result=this.refs["grade"+i].state.value;
        var _id=this.props.getSpecificClass[i]._id;
        console.log("提交到数据库------1",result);
        axios.get("/react/submitResult",{
          params:{
            result,
            _id
          }
        }).then(res=>{
          this.getClass();
          console.log(this.getClass)
          
          this.refs["grade"+i].state.value=""
        })
      };
      //分数输入内容
      inpValue(e){
      }
        
      
    render(){
      const {
        getSpecificClass,
        num
      }=this.props
      console.log("getSpecificClass",getSpecificClass)
        return(
            <div>
                <div className="head-position">
                <Head title="批改试卷"></Head>
                </div>
                    <div className="head-cen"></div>
                <div>
                    <Picker
                    data={seasons}
                    title="选择科目"
                    cascade={false}
                    extra="请选择科目"
                    value={this.state.sValue}
                    onChange={v => this.setState({ sValue: v })}
                    onOk={v => this.setState({ sValue: v })}
                    ref="one1"
                    >
                    <List.Item arrow="horizontal">批改科目</List.Item>
                    </Picker>
                    <Picker
                    data={seasons2}
                    title="选择班级"
                    cascade={false}
                    extra="请选择班级"
                    value={this.state.sValue2}
                    ref="one2"
                    onChange={v => this.setState({ sValue2: v })}
                    onOk={v => this.setState({ sValue2: v })}
                    >
                    <List.Item arrow="horizontal">批改班级</List.Item>
                    </Picker>
                    <Button type="primary" onClick={()=>this.getClass()}>查询</Button>
                </div>

                
                <div>
                  {
                    getSpecificClass.map((item,i)=>{
                     return (
                       <div key={i}>
                          <ComDetailed  item={item} addPro=""></ComDetailed>
                          <div className="submit-grade-box">
                                 <InputItem
                                  placeholder="请为学生试卷打分"
                                  clear
                                  ref={"grade"+i}
                                  moneyKeyboardAlign="left"
                                  moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                                  clear
                                  onChange={(e)=>this.inpValue(e)}
                                >得分</InputItem>
                                <div className="submit-grade">
                                <Button 
                                type="primary"
                                inline
                                ref={i}
                                onClick={()=>this.submitResult(i)}
                                >提交分数</Button>
                            </div>
                          </div>
                    
                   
                       </div>
                    
                     )
                    })
                  }
                
                </div>
             
            </div>
        )
    }
}

const Grade=connect(mapStateToprops)(Grade1)
export {Grade}