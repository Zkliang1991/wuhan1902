import React , {Component} from "react"
import "./index.scss"
import {Head} from "../../components/head"
import {Button,Grid} from "antd-mobile"
import {history} from "../../../utils"

var views =[
    {txt:"离线缓存",path:"/mine/xz",name:"xz",img:require("../../../assets/images/m1.png")},
    {txt:"历史记录",path:"/mine/ls",name:"ls",img:require("../../../assets/images/m2.png")},
    {txt:"我的收藏",path:"/mine/sc",name:"sc",img:require("../../../assets/images/m3.png")},
    {txt:"我的关注",path:"/mine/gz",name:"gz",img:require("../../../assets/images/m4.png")},
    {txt:"稍后再看",path:"/mine/zk",name:"zk",img:require("../../../assets/images/m5.png")},
    {txt:"B币钱包",path:"/mine/qb",name:"qb",img:require("../../../assets/images/m6.png")},
    {txt:"会员积分",path:"/mine/jf",name:"jf",img:require("../../../assets/images/m7.png")},
    {txt:"游戏中心",path:"/mine/game",name:"game",img:require("../../../assets/images/m8.png")},
    {txt:"主题选择",path:"/mine/zt",name:"zt",img:require("../../../assets/images/m9.png")},
    {txt:"大会员",path:"/mine/hy",name:"hy",img:require("../../../assets/images/m10.png")},
    {txt:"免流量服务",path:"/mine/fw",name:"fw",img:require("../../../assets/images/m11.png")},
]

var msg=[
    {txt:"回复我的",path:"/mine/hf",name:"hf",img:require("../../../assets/images/m20.png")},
    {txt:"@我",path:"/mine/aw",name:"aw",img:require("../../../assets/images/m21.png")},
    {txt:"收到的赞",path:"/mine/z",name:"z",img:require("../../../assets/images/m22.png")},
    {txt:"私信",path:"/mine/sx",name:"sx",img:require("../../../assets/images/m23.png")},
    {txt:"系统消息",path:"/mine/xt",name:"xt",img:require("../../../assets/images/m24.png")},
]

const data = views.map((t, i) => ({
    icon: t.img,
    text: t.txt,
    path:t.path
}));

const data1 = msg.map((t, i) => ({
    icon: t.img,
    text: t.txt,
    path:t.path
}));

export class Mine extends Component{
    state={
        toxuiang:require("../../../assets/images/y27.png"),
        right:require("../../../assets/images/right.png"),
    }
    // window.location.reload()
    reg(){
        history.push("/reg")
    }
    login(){
        history.push("/login")
    }
    gouser(){
        history.push("/personal")
    }
    uploadtouxiang=()=>{
        this.refs.tx.click()
    }
    upload=(tx)=>{
        console.log(tx.target.files[0])
        let file = tx.target;
        // console.log(file)
        let data = new FormData();
        data.append("avatar",file.files[0]);
        console.log(data)
        // axios.post("/vue/uploadAvatar",{
        //     contentType:false,
        //     processData:false,
        //     data:data,
        //     username:sessionStorage.username
        // }).then((res)=>{
        //     console.log(res)
        // })
    }
    render(){
        const id =sessionStorage.username
        return(
            <div style={{width:"100%",height:"100%",marginBottom:"50px"}}>
                <Head title="个人中心"></Head>
                <div style={{width:"100%",height:"143px",backgroundColor:"#FB7299",}}>
                    <div style={{display:sessionStorage.username?"none":"block"}}>
                        <Button onClick={this.reg} style={{width:"25%",height:"30px",lineHeight:"30px",marginTop:"80px",backgroundColor:"#FC9EB9",color:"#FFFFFF"}}>注册</Button>
                        <Button onClick={this.login} style={{width:"25%",height:"30px",lineHeight:"30px",marginLeft:"10%",backgroundColor:"#FFFFFF",color:"#FB7299"}}>登录</Button>
                    </div>
                    <div style={{display:sessionStorage.username?"block":"none"}}>
                        <div style={{float:"left",marginTop:"50px",marginLeft:"18px",borderRadius:"37.5px"}}>
                            <img src={this.state.toxuiang} alt="" onClick={this.uploadtouxiang} style={{width:"75px",height:"75px"}}/>
                            <input type="file" ref="tx" accept="image/*" onChange={this.upload} style={{display:"none"}}/>
                        </div>
                        <div style={{float:"left",marginTop:"50px",marginLeft:"18px",height:"75px",width:"150px",textAlign:"left"}}>
                            <p style={{marginLeft:"10px",color:"white",overflow: "hidden", textOverflow: "ellipsis",whiteSpace:"nowrap",width:"150px",fontWeight:"bold"}}>{id}</p>
                            <div style={{marginLeft:"10px",marginTop:"10px",width:"100px",height:"20px",border:"1px solid white",textAlign:"center",lineHeight:"20px",fontSize:"14px",color:"white",borderRadius:"7px"}}>正式会员</div>
                            <span style={{marginLeft:"10px",lineHeight:"30px",color:"white",fontSize:"14px"}}>硬币: </span>
                            <span style={{marginLeft:"10px",color:"white",fontSize:"14px"}}>0</span>
                            <span style={{marginLeft:"30px",color:"white",fontSize:"14px"}}>B币:</span>
                            <span style={{marginLeft:"10px",color:"white",fontSize:"14px"}}>0</span>
                        </div>
                        <div onClick={this.gouser} style={{float:"left",marginLeft:"60px",width:"30px",height:"30px",marginTop:"72.5px"}}>
                            <img src={this.state.right} alt="" style={{width:"30px",height:"30px"}}/>
                        </div>
                    </div>
                </div>
                <div className="sub-title" style={{width:"96%",height:"18px",lineHeight:"7px",textAlign:"left",paddingLeft:"4%",fontSize:"16px",backgroundColor:"white"}}>个人中心</div>
                <Grid data={data} columnNum={4} onClick={_el => console.log(_el)}/><br/>
                <div className="sub-title" style={{width:"96%",height:"18px",lineHeight:"7px",textAlign:"left",paddingLeft:"4%",fontSize:"16px",backgroundColor:"white"}}>我的消息</div>
                <Grid data={data1} columnNum={4} onClick={_el => console.log(_el)}/>
            </div>
        )
    }
}