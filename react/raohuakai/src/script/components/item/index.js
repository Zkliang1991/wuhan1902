

import React,{Component} from "react";
import "./index.scss";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
        num:state.data.num
    }
}
class Item1 extends Component{
    render(){
        const {
            item
        }=this.props;
        return (<div className="item-box item-action">
                <div className="item-name">姓名:<span>{item.name}</span></div>
                <div>班级:<span>{item.classes}</span></div>
                <div>科目:<span>{item.subject}</span></div>
                <div>成绩:<span>{item.result}</span></div>
                <div>提交时间:<span>{item.time}</span></div>
                <p>查看详情</p>
        </div>)
    }
}
var Item=connect(mapStateToProps)(Item1)
export {Item}