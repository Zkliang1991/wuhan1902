
import React,{Component} from "react";
import {connect} from "react-redux"
import { List, InputItem,Button ,Tabs, WhiteSpace, Badge} from 'antd-mobile';
import "./index.scss";
// import { createForm } from 'rc-form';
import {history} from "@/utils"
import {axios} from "&"
//修复虚拟键盘滚动穿透问题
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
var  timer=null;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
var  IRegExp=/^1(3|5|7|8|9)\d{9}$/;
var  cRegExp=/^\d{4}$/;
@connect(
    state=>{
        return{
            test:state.test
        }
    }
)
class Login  extends Component {
    //不需要共享的数据
    state = {
        iDisable:true,
        cDisable:true,
        codeTxt:" 发送验证码",
        codeNum:60,
        flag:true,
        loginDisabled:true,
    };
    //正则判断手机号
    checkNumber(val){
        if(this.state.flag){
            this.setState({
                iDisable:!IRegExp.test(val)
            })
        }
    };
     //获取验证码点击事件
     getCode=()=>{
        axios.post("/react/sendCode",{
            mobile:this.mobile.state.value
        }).then(res=>{
            console.log(res.data);
        });
       this.startTimer();
    };
    //60秒倒计时封装
    startTimer(){
        this.setState({
            codeTxt:"已发送"+this.state.codeNum+"s"
        });
         timer=setInterval(() => {
            //60s倒计时
             this.setState({
                    codeNum: --this.state.codeNum,
                    codeTxt:"已发送"+this.state.codeNum+"s"
                });
            //判断条件
            this.state.codeNum<=1&&clearInterval(timer);
            this.state.codeNum<=1&&this.setState({
                iDisable:false,
                codeTxt:"发送验证码"
            })
    
            }, 1000);
            this.setState({
                iDisable:true,
                flag:false
            })
    }
    //判断验证码
    checkCode(val){
        this.setState({
            loginDisabled:!(cRegExp.test(val)&&IRegExp.test(this.mobile.state.value))
        })
        // console.log(this.state.loginDisabled)
    };

    //点击登陆按钮
    loginTo=()=>{
        axios.post("/react/checkCode",{
            mobile:this.mobile.state.value,
            checkCode:this.code.state.value
        }).then(res=>{
            console.log(res);
            if(res.data.type){
                clearInterval(timer)
                var token=res.data.token;
                sessionStorage.userInfo=JSON.stringify({token});
                setTimeout(() => {
                    history.push("/app/my")
                }, 2000);
                
            }else{
                sessionStorage.userInfo=""
            }
        })
    }

   


    //   渲染页面部分
    render(){
        //props取值
        const {
            test
        }=this.props;
        //标签页配置
        const tabs = [
            { title: <Badge>登陆</Badge> },
            // { title: <Badge>注册</Badge> },
        ];
        //this.state取值
        const {
            iDisable,
            cDisable,
            loginDisabled,
            codeTxt
        }=this.state
        return(
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div className="login-box">
                            <InputItem
                            placeholder="请输入手机号"
                            clear
                            ref={el=>this.mobile=el}
                            onChange={(val)=>this.checkNumber(val)}
                            moneyKeyboardAlign="left"
                            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        >账号</InputItem>
                        <InputItem
                            placeholder="请输入验证码"
                            clear
                            ref={el=>this.code=el}
                            onChange={(val)=>this.checkCode(val)}
                            moneyKeyboardAlign="left"
                            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        >验证码</InputItem>

                        {/* 登陆按钮 */}
                         <Button type="primary" 
                         disabled={loginDisabled}
                         onClick={this.loginTo}
                         >马上登陆</Button>
                         {/* 获取验证码的按钮 */}
                         <div className="login-codeBtn">
                                <Button type="warning" 
                                    inline 
                                    disabled={iDisable}
                                    onClick={this.getCode}
                                    >
                                       {codeTxt}</Button>
                         </div>
                     
                        
                       
                    </div>
                    <div>
                            <InputItem
                                placeholder="请输入手机号"
                                clear
                                moneyKeyboardAlign="left"
                                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                            >账号</InputItem>
                            <InputItem
                                placeholder="请输入验证码"
                                clear
                                moneyKeyboardAlign="left"
                                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                            >密码</InputItem>
                            <Button type="primary">马上注册</Button>
                    </div>
                </Tabs>
                <WhiteSpace />
               
            </div>

        )
    }
} 

export default  Login

