


import "./index.scss";
import { Head } from "../../components/head/head";
import {WingBlank,List,InputItem,WhiteSpace,Button} from "antd-mobile";
import {axios} from "&";
import {Link} from "react-router-dom";
var timer = null;
export const  mobileReg = /^1(3|5|7|8|9)\d{9}$/
export const  codeReg = /^\d{4}$/
export class Login extends Component{
    state = {
        mDisable:true,
        loginDisable:true,
        txt:"验证码(60s)",
        count:60,
        // 最强认证  以时间为准
        flag:true
    }

    getMobile = (val)=>{
        if(this.state.flag){
            this.setState({
                mDisable:!mobileReg.test(val)
            })
        }
        this.setState({
            loginDisable:!(mobileReg.test(val)&&codeReg.test(this.code.state.value))
        })
        
    }
    
    sendCode=()=>{
        //ajax
        axios.post("/react/sendCode",{
            mobile:this.mobile.state.value
        }).then(res=>{
            console.log(res.data)
        })

        this.setState({
            mDisable:true,
            flag:false
        })
        this.startTime();
    }
    startTime = ()=>{
        timer = setInterval(()=>{
            if(this.state.count>0){
                this.setState({
                    count:--this.state.count,
                    txt:"倒计时"+this.state.count+"s",
                   
                })
            }else{
                clearInterval(timer);
                this.setState({
                    count:60,
                    txt:"验证码(60s)",
                    flag:true
                })
            }
        },1000)
    }
    checkCode = (code)=>{
            this.setState({
                loginDisable:!(mobileReg.test(this.mobile.state.value)&&codeReg.test(code))
            })
    }
    loginAuth = ()=>{
        axios.post("/react/checkCode",{
            mobile:this.mobile.state.value,
            code:this.code.state.value
        }).then(res=>{
            console.log(res);
            if(!!res.data.type){
                var token = res.data.token;
                var username = res.data.result.username;
                var mobile = res.data.result.mobile
                sessionStorage.mobile = JSON.stringify({mobile});
                sessionStorage.user = JSON.stringify({username});
                sessionStorage.userInfo = JSON.stringify({token});
                this.props.history.push('/app/my');
            }else{
                sessionStorage.userInfo = "";
                this.props.history.push('/register');
            }
        })
    }
    render(){
        const {
            mDisable,
            loginDisable,
            txt,
        } = this.state
        return (
            <div>
                <Head title = "登录" show = {true} search = {true}/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                    <WhiteSpace/>
                    <InputItem
                        type="tel"                   
                        placeholder="请输入手机号"
                        clear
                        ref = {el=>this.mobile=el}
                        onChange = {this.getMobile}
                    >手机号</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="number"                   
                        placeholder="请输入验证码"
                        clear
                        ref = {el=>this.code=el}
                        onChange = {this.checkCode}
                    >验证码</InputItem>
                    <Button onClick = {this.sendCode} type = "warning" disabled = {mDisable} inline style = {{position:"absolute",right:"0",top:"56px"}}>{txt}</Button>
                    <WhiteSpace/>
                    <Button onClick = {this.loginAuth} type = "primary" disabled = {loginDisable} >登录</Button>
                    </List>
                </WingBlank>

                <div style = {{fontSize:"18px",color:"#999",textAlign:"center",marginTop:"20px"}}><Link to = "/register">  注册>> </Link> </div>
            </div>
        )
    }
}