import React , {Component} from "react"
import { NavBar, Icon, List, InputItem ,Toast} from 'antd-mobile';
import {history, axios} from "../../../utils"

export class Mhead extends Component{
    state = {
        img1:require("../../../assets/images/1.png"),
        img2:require("../../../assets/images/l1.png"),
        img3:require("../../../assets/images/r1.png")
    }
    gohome(){
        history.push("/app/mine")
    }
    handleClick(){
        this.setState({
            img2:require("../../../assets/images/l1.png"),
            img3:require("../../../assets/images/r1.png")
        })
    }
    handreClick(){
        this.setState({
            img2:require("../../../assets/images/l2.png"),
            img3:require("../../../assets/images/r2.png")
        })
    }
    reg(){
        history.push("/reg")
    }
    login(){
        const phone = this.autoFocusInst.state.value;
        const pwd = this.inputRef.state.value;
        console.log(pwd)
        if(sessionStorage.username){
            Toast.fail('您已登录,请不要反复登录', 1);
        } else {
            axios.post("/vue/login",{
                phone,
                pwd
            }).then(res=>{
                console.log(res);
                sessionStorage.username=res.data.result.username;
                sessionStorage.phone = res.data.result.phonenum;
                sessionStorage.regtime = res.data.result.date;
                sessionStorage.uid = res.data.result.uid;
                history.push("/app/home")
            })
        }
    }
    repwd(){
        history.push("/repassword")
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    style={{background:"#FB7299"}}
                    icon={<Icon type="cross-circle" />}
                    onLeftClick={this.gohome}
                    rightContent={<span onClick={this.repwd}>忘记密码?</span>}
                >登录</NavBar>
                <div style={{height:"80px",width:"100%",position:"relative"}}>
                    <img style={{height:"80px"}} src={this.state.img2} alt=""/>
                    <img style={{height:"80px",position:"absolute",right:"37%",top:0}} src={this.state.img1} alt=""/>
                    <img style={{height:"80px",position:"absolute",right:0,top:0}} src={this.state.img3} alt=""/>
                </div>
                <List>
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                        ref={el => this.autoFocusInst = el}
                        onClick={()=>this.handleClick()}
                    >账号</InputItem>
                    <InputItem
                        clear
                        type="password"
                        placeholder="请输入密码"
                        ref={el => this.inputRef = el}
                        onClick={()=>this.handreClick()}
                    >密码</InputItem>
                    <List.Item style={{backgroundColor:"#F5F4F0"}}>
                        <div
                        style={{ width: '40%',height:"30px",lineHeight:"30px",color: 'black', textAlign: 'center',marginLeft:"8%",display:"inline-block",backgroundColor:"white",borderRadius:"7px"}}
                        onClick={()=>this.reg()}
                        >
                        注册
                        </div>
                        <div
                        style={{ width: '40%',height:"30px",lineHeight:"30px", color: 'white', textAlign: 'center',marginLeft:"8%",display:"inline-block",backgroundColor:"#FB7299",borderRadius:"7px"}}
                        onClick={()=>this.login()}
                        >
                        登录
                        </div>
                    </List.Item>
                </List>
            </div>
        )
    }
}