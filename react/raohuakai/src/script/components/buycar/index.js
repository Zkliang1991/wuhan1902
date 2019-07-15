
import React,{Component} from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import "./index.scss";
import { connect } from "react-redux";
import {deleteSubject} from "../../actions";
import { MySubmitProject } from "../../actions";
@connect(
    state=>{
        return{
            num:state.data.num,
        }
    }
)
class CarMould extends Component{

    //我的编辑
    MyEdit=()=>{
        console.log(111)
    }
    //单项删除
    MyDelete=()=>{
        this.props.dispatch(deleteSubject("/react/deleteSubject",{
            params:{
                _id:this.props.item._id
            }
        },()=>{
            this.props.dispatch(MySubmitProject("/react/MySubmitProject"))
        }))
    }
    render(){
        const {
            item
        }=this.props
        return(
            <div>
                <div>
                    
                    <div>
                       <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <div className="car-OneP">
                        <div className="car-OnePleft"><input type="checkbox"  
                        className="car-OneCheck"
                        /></div>
                        <div className="car-OnePright"><span
                        onClick={this.MyEdit}
                        >编辑</span>&emsp;
                        <span
                        onClick={this.MyDelete}
                        >删除</span></div>
                        </div>
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
                </div>
            </div>
        )
    }
}
export {CarMould}