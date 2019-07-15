import React,{Component} from "react";
import { Button, WingBlank, WhiteSpace,TextareaItem } from 'antd-mobile';
import {axios} from "&";
import {connect} from "react-redux";
import "./index.scss"
import {getAddcomment} from "../../actions"
//props的输入
var mapStateToProps=(state)=>{
    // console.log(state.data.intiComment)
    return{
        intiComment:state.data.intiComment,
        getAddcomment:state.data.getAddcomment,
    }
}
class Comments1 extends Component {
    state={
        show:true
    }
    //提交评论内容
    submiteComent=()=>{
        axios.get("/react/submitComment",{
            params:{
                content:this.autoFocusInst.state.value,
                goodId:this.props.goodId
            }
        }).then(res=>{
            this.autoFocusInst.state.value=""
                this.inifAjax()
        })
    };

    //初始化加载请求
    inifAjax=()=>{
        this.props.dispatch(getAddcomment("/react/getAddcomment",{
            params:{
                goodId:this.props.goodId
            }
        }))
    }
    componentDidMount(){
        setTimeout(() => {
            this.inifAjax()
        }, 2000);
        
    }
    //观察评论内容，提交按钮是否可点击
    changeValue=(val)=>{
        if(val){
            this.setState({
                show:false
            })
        }else{
            this.setState({
                show:true
            })
        }
        
    }

    render(){
        const {
            show
        }=this.state;
        const {
            intiComment,
            getAddcomment
        }=this.props;
        return(
            <div>
                <WingBlank size="lg">
                <div>
                    <span>评论</span><span className="iconfont icon-wechat" style={{fontSize:"20px"}}></span>
                </div>
                <ul className="comDetailed-ul">
                    {getAddcomment.map((item,i)=>{
                       return <li key={i}><span>{item.username}说:</span><span>{item.content}</span></li>
                    })}
                    {/* {intiComment.map((item,i)=>{
                       return <li key={i}><span>{item.username}说:</span><span>{item.content}</span></li>
                    })} */}
                    
                </ul>
                <WhiteSpace size="lg" />
                </WingBlank>
                <div className="head-cen"></div>
                <div className="head-cen"></div>
                <div className="subject-comment">
                <TextareaItem
                    title="晓说:"
                    placeholder="请输入评论..."
                    data-seed="logId"
                    ref={el => this.autoFocusInst = el}
                    autoHeight
                    onChange={this.changeValue}
                />
                <Button type="primary" onClick={this.submiteComent} disabled={show}>提交评论</Button><WhiteSpace />
                </div>
            </div>
        )
    }
}

const Comments=connect(mapStateToProps)(Comments1)
export {Comments}