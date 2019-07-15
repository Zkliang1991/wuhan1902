import React , {Component} from "react"
import { NavBar, Icon,List,InputItem,Button,Toast,Modal} from 'antd-mobile';
import {history,axios} from "../../../utils"

const alert = Modal.alert;
let timer = null
export class Reg extends Component{
    state={
        hasError:false,
        hasError1:false,
        error:"",
        error1:"",
        change:true,
        yzm:true,
        ts:"请先输入手机号",
        changecode:true,
        all:0,
        scode:"获取验证码",
        count:6,
        cd:false,
        erro:{
            display:"block",
            color:"#FB7299"
        },
    }
    gohome(){
        history.push("/app/mine")
    }
    sendError=()=>{
        Toast.fail(this.state.error);
    }
    sendError1=()=>{
        Toast.fail(this.state.error1);
    }
    sendCode=(mobile)=>{
        console.log(this.mobile.state.value)
        var mReg = /^1(3|5|7|8|9)\d{9}$/
        if(!mReg.test(this.mobile.state.value)){
            this.setState({
                hasError:true,
                error:"请输入正确的手机号!"
            });
        } else{
            axios.post("/vue/checkPhone",{    //有BUG   无法验证手机号是否注册
                phone:this.mobile.state.value
            }).then(res=>{
                console.log(res)
                if(res.data.type===2){
                    alert('', '此手机号码已经注册,是否前往登录页面', [
                        { text: '否' },
                        { text: '前往', onPress: () => history.push("/login")},
                      ])
                } else{
                    alert('是否发送验证码?', '点击发送后您将不能修改手机号,请确认手机号是否正确！', [
                        { text: '修改'},
                        { text: '发送', onPress: () => {
                            this.setState({
                            change:false,
                            yzm:false,
                            ts:"请输入验证码",
                            })
                            this.startTime();
                            axios.post("/vue/sendCode",{
                                mobile:this.mobile.state.value
                            }).then(res=>{
                                console.log(res)
                            })
                        }},
                      ])
                    }
                })
                this.setState({
                    hasError:false,
                });
        }
    }
    startTime=()=>{
        timer=setInterval(()=>{
            if(this.state.count>0){
                this.setState({
                  count:-- this.state.count,
                  scode:this.state.count + "s",
                  cd:true
                })
            }else{
            clearInterval(timer);
            this.setState({
                count:5,
                scode:"重新发送",
                cd:false
                })
            }
        },1000) 
    }
    checkCode=(code)=>{
        var cReg =  /^\d{6}$/
        if(!cReg.test(this.code.state.value)){   //验证码前端验证未通过
            this.setState({
                hasError1:true,
                error1:"请确认您是否输入正确"
            });
        } else{         //验证码通过前端认证
            axios.post("/vue/checkCode",{
                mobile:this.mobile.state.value,
                code:this.code.state.value
            }).then(res=>{
                console.log(res.data.type)
                if(res.data.type===2){
                    this.setState({
                        changecode:false,
                        erro:{
                            display:"none",
                            color:"#FB7299"
                        }
                    });
                    Toast.success('验证通过', 1);
                } else if(res.data.type===1){
                    this.setState({
                        hasError1:true,
                        error1:"验证码超时未验证"
                    });
                } else {
                    this.setState({
                        hasError1:true,
                        error1:"验证码错误"
                    });
                }
            })
        }
    }
    checkUsername=(name)=>{
        console.log(name)
        if(name===""){
            Toast.fail("请输入用户名");
        } else{
            axios.post("/vue/checkName",{
                username:name
            }).then(res=>{
                if(res.data.type===2){
                    Toast.fail("用户名已被注册");
                } else{
                }
            })
        }
    }
    pwd(inputRef){
        var pwReg=/^[a-z0-9A-Z]{6,16}$/
        if(!pwReg.test(inputRef)){
            Toast.fail("密码安全度较低");
        } else{
        }
    }
    login(){
        const username= this.name.state.value;
        const password = this.inputRef.state.value;
        const phone = this.mobile.state.value;
        console.log(username,password,phone)
        if(username&&password&&phone){
            axios.post("/vue/reg",{
                username:username,
                password:password,
                mobile:phone,
            }).then(res=>{
                if(res.data.type===2){
                    Toast.fail("用户名已被注册");
                } else {
                    Toast.success("注册成功,正在前往登录页面");
                    history.push("/login")
                }
            })
        }else{
            Toast.fail("请确认您输入的信息是否完整");
        }
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    style={{background:"#FB7299"}}
                    icon={<Icon type="cross-circle" />}
                    onLeftClick={this.gohome}
                >注册账号</NavBar>
                <List style={{marginTop:"20px"}} ref="two">
                    <InputItem
                    clear
                    placeholder="请输入常用手机号"
                    error={this.state.hasError}
                    onErrorClick={this.sendError}
                    editable={this.state.change}
                    ref={el=>this.mobile=el}
                    extra={<Button disabled={this.state.cd} onClick={this.sendCode} style={{color:"#FB7299",width:"80px",height:"20px",lineHeight:"20px",fontSize:"16px"}}>{this.state.scode}</Button>}
                    maxLength="11"
                >手机号</InputItem>
                <InputItem
                    clear
                    placeholder={this.state.ts}
                    ref={el => this.code = el}
                    onChange={this.getCode}
                    disabled={this.state.yzm}
                    maxLength="6"
                    extra={<span style={this.state.erro} onClick={this.checkCode}>验证</span>}
                    error={this.state.hasError1}
                    onErrorClick={this.sendError1}
                    editable={this.state.changecode}
                >验证码</InputItem>
                    <InputItem
                    key="1"
                    clear
                    placeholder="请输入用户名"
                    ref={el=>this.name=el}
                    onBlur={this.checkUsername}
                    name="username"
                    >账户名</InputItem>
                    <InputItem
                    style={{position:"relative"}}
                    clear
                    placeholder="建议6~16位,区分大小写"
                    ref={el => this.inputRef = el}
                    maxLength="16"
                    onBlur={this.pwd}
                    >密码</InputItem>
                </List>
                <Button onClick={()=>this.login()} style={{marginTop:"20px",width:"80%",backgroundColor:"#FB7299",color:"white"}}>完成注册并登录</Button>
                <span style={{display:"block",marginTop:"20px",fontSize:"14px"}}>点击"获取验证码"按钮,即表示同意<a href="http://localhost:3000/#/xieyi" style={{fontSzie:"20px",color:"#FB7299"}}>注册协议</a></span>
            </div>
        )
    }
}