import React,{Component} from "react"
import { Head } from "../../components/head";
import { history } from "../../../utils";
import {SegmentedControl,WingBlank,NoticeBar} from "antd-mobile"


export class Personal extends Component{
    state = {
        tx:require("../../../assets/images/bannerTop.png"),
        bj:require("../../../assets/images/y27.png"),
        noContent:require("../../../assets/images/noContent.png"),
    }
    fkel=(e)=>{
        var num = e.nativeEvent.selectedSegmentIndex
        if(num===1){
            this.refs.his.style.display="none"
            this.refs.my.style.display="block"
        } else{
            this.refs.my.style.display="none"
            this.refs.his.style.display="block"
        }
    }
    render(){
        var id = sessionStorage.username
        return(
            <div>
                <Head title="用户信息"/>
                <div style={{marginTop:"45px",height:"290px",width:"100%",position:"relative"}}>
                    <img src={this.state.tx} alt="" style={{width:"100%",height:"130px"}}/>
                    <div style={{width:"80px",height:"80px",position:"absolute",top:"90px",left:"20px",borderRadius:"40px"}}>
                        <img src={this.state.bj} alt="" style={{width:"80px",height:"80px"}}/>
                    </div>
                    <p onClick={()=>history.push(`/usersetting/${id}`)} style={{textAlign:"right",marginTop:"20px",marginRight:"20px",color:"#FB7299",fontSize:"14px"}}>账号资料</p>
                    <p style={{marginTop:"20px",marginLeft:"30px",fontSize:"26px",textAlign:"left"}}>{id}</p>
                    <p style={{marginTop:"20px",marginLeft:"30px",textAlign:"left"}}>
                        <span>0 </span>
                        <span>关注</span>
                        <span style={{marginLeft:"20px"}}>0 </span>
                        <span>粉丝</span>
                    </p>
                    <WingBlank>
                        <SegmentedControl values={['历史记录', '我的投稿']} style={{margin:"20px",height:"40px"}} tintColor="#FB7299" onChange={this.fkel}/>
                    </WingBlank>
                    <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
                        浏览记录仅会在本次会话中记录,退出即会被销毁
                    </NoticeBar>
                    <div ref="his">
                        <p>功能施工中</p>
                    </div>
                    <div ref="my" style={{display:"none"}}>
                        <img src={this.state.noContent} alt="" style={{width:"280px",height:"160px",margin:"0 auto"}}/>
                        <p>你还没有投过稿件哦</p>
                        <p>
                            快去发现<span onClick={()=>history.push("/app/home")} style={{color:"#FB7299"}}>新内容</span>吧!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}