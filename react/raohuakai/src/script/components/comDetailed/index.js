import React ,{Component} from "react";
import {axios} from "&";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import "./index.scss";
// import {Comments} from "../comment"

import {connect} from "react-redux";

var mapStateToprops=(state)=>{
    return{
      num:state.data.num,
    }
 }
class ComDetailed1 extends Component {
    constructor(props){
        super(props);
        this.state={
            goods:[]
        }
    }
    //初始化请求页面数据
    getadd=()=>{
        this.$axios.get("/react/getOneSublect",{
            params:{
                _id:this.props.addPro.match.params._id
            }
        }).then(res=>{
            var data=res.data.result
            this.props.dispatch({type:"XINGQING",data})
            
        })
    }


    componentWillMount(){
        if(!!this.props.addPro){
            this.getadd()
        }      
    }
    render(){
        const {
            item,
            num,
        }=this.props
        const {
            goods
        }=this.state
        return(
            <div className="comDetailed-box">
                
                <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <Card>
                <Card.Header
                    title={item.name+"   科目:"+item.subject}
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>得分:{item.result} </span>}
                />
                <Card.Body>
                <div>项目网址:<a href={item.website}>{item.website}</a></div>
                <hr/>
                    <div>项目特点:{item.core}</div>
                </Card.Body>
                <hr/>
                <Card.Footer content={item.classes} extra={<div>{item.time}</div>} />
                </Card>
                <WhiteSpace size="lg" />
                </WingBlank>
            </div>

        )
    }
}

const ComDetailed = connect(mapStateToprops)(ComDetailed1)
export {ComDetailed}