import React from 'react';
import "./index.scss";
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import axios from 'axios'
import { Head } from "@/scripts/components/head/index.js"

export class My extends React.Component {
    gotologin() {
        this.setState({
            changenum: 1
        })
    }
    gotophone() {
        this.setState({
            changenum: 2
        })
    }
    gotoregiste() {
        this.setState({
            changenum: 3
        })
    }
    getchecknum() {
        var mReg = /^1(3|5|6|7|8|9)\d{9}$/;
        if (mReg.test(this.mobile.value)) {
            this.setState({
                checkDiable: "disabled",
                loginDisable: ""
            })
            var time = 10
            var timer = setInterval(() => {
                time = time - 1
                this.checkbt.innerHTML = time;
                if (time == 0) {
                    clearInterval(timer);
                    this.setState({
                        checkDiable: "",
                    })
                    this.checkbt.innerHTML = "获取验证码";
                }
            }, 1000);
            axios.post("/react/sendCode", {
                mobile: this.mobile.value
            }).then(res => {
                this.setState({
                    code: res.data.result
                })
                console.log(this.state.code)
            })
        } else {
            Toast.fail("请输入正确的手机号", 1, null, true)
        }
    }
    phoneLogin() {
        axios.post("/react/checkCode", {
            mobile: this.mobile.value,
            code: this.state.code
        }).then(res => {
            if (!!res.data.type) {
                var token = res.data.token;
                sessionStorage.userInfo = JSON.stringify({ token });
                sessionStorage.userId = this.mobile.value
                this.props.history.push("/main/home")
            } else {
                sessionStorage.userInfo = ""
            }
        })
    }
    userLogin() {
        console.log("账号登录")
        this.state.body.username = this.loginuser.value;
        this.state.body.password = this.loginpwd.value;
        console.log(this.state.body)
        axios.post('/react/login', {
            username: this.state.body.username,
            password: this.state.body.password
        }).then(res => {
            console.log(res)
            if(!!res.data.type){
                sessionStorage.userInfo = res.data.token;
                sessionStorage.userId = JSON.parse(res.config.data).username;
                Toast.success(res.data.msg, 1.5, null, true);
                setTimeout(() => {
                    this.setState({
                        changenum: 4,
                    })
                }, 1500);
            }else{
                Toast.fail(res.data.msg, 1.5, null, true);
                this.setState({
                        changenum: 1,
                    })
            }
            this.loginuser.value = "";
            this.loginpwd.value = "";
        })
    }
    userRegiste() {
        var uRem = /^[0-9a-zA-Z]{6,12}$/;
        if (uRem.test(this.userAccount.value)) {
            if (uRem.test(this.userPassword.value)) {
                if (this.userPassword.value == this.userDbPassword.value) {
                    axios.post('/react/registe', {
                        username: this.userAccount.value,
                        password: this.userPassword.value
                    }).then(res => {
                        if (res.data.type == 1) {
                            Toast.success(res.data.msg, 1.5, null, true);
                            setTimeout(() => {
                                this.setState({
                                    changenum: 1
                                })
                            }, 1500);
                        } else {
                            Toast.fail(res.data.msg, 1.5, null, true)
                        }
                        this.userAccount.value = "";
                        this.userPassword.value = "";
                        this.userDbPassword.value = "";
                    })
                } else {
                    Toast.fail("两次密码不一致", 1, null, true)
                }
            } else {
                Toast.fail("密码格式不正确", 1, null, true)
            }
        } else {
            Toast.fail("请输入正确的账号", 1, null, true)
        }
    }
    quit() {
        sessionStorage.removeItem("userInfo")
        sessionStorage.removeItem("userId")
        this.setState({
            changenum: 1
        })
    }
    state = {
        changenum: 1,
        checkDiable: "",
        loginDisable: "disabled",
        code: "",
        body: {},
    }
    componentDidMount() {
        if (sessionStorage.userInfo&&sessionStorage.userId) {
            this.setState({
                changenum: 4
            })
        }
    }
    render() {
        return (
            <div className="box">
                <Head title="我的"></Head>
                <div className="up" style={{ display: this.state.changenum == 1 ? "block" : "none" }}>
                    <h2>账号密码登录:</h2>
                    <div className="userbar">
                        <label htmlFor="user">账号：</label>
                        <input ref={el => this.loginuser = el} type="text" className="user" id="user" placeholder="请输入账号"></input>
                    </div>
                    <div className="pwdbar">
                        <label htmlFor="password">密码：</label>
                        <input ref={el => this.loginpwd = el} type="password" className="password" id="password" placeholder="请输入密码"></input>
                    </div>
                    <button className="bt" onClick={() => this.userLogin()}>登录</button>
                    <div className="other">
                        <span onClick={() => this.gotophone()}>手机号验证登录</span>
                        <span onClick={() => this.gotoregiste()}>立即注册</span>
                    </div>
                </div>
                <div className="phone" style={{ display: this.state.changenum == 2 ? "block" : "none" }}>
                    <h2>手机号登录:</h2>
                    <span style={{marginTop:"10px",fontSize:"12px",color:"#1875FA"}}>没有实名制，只能我自己用</span>
                    <div className="userbar">
                        <label htmlFor="phonenum">账号：</label>
                        <input ref={el => this.mobile = el} type="text" className="user" id="phonenum" placeholder="请输入手机号"></input>
                    </div>
                    <div className="pwdbar">
                        <input type="password" className="password" id="checknum" placeholder="请输入验证码"></input>
                        <button ref={el => this.checkbt = el} disabled={this.state.checkDiable} className="getcheck" onClick={() => this.getchecknum()}>获取验证码</button>
                    </div>
                    <button disabled={this.state.loginDisable} className="bt" onClick={() => this.phoneLogin()}>登录</button>
                    <div className="other">
                        <span onClick={() => this.gotologin()}>账号密码登录</span>
                        <span onClick={() => this.gotoregiste()}>立即注册</span>
                    </div>
                </div>
                <div className="registe" style={{ display: this.state.changenum == 3 ? "block" : "none" }}>
                    <h2>注册:</h2>
                    <div className="userbar">
                        <label htmlFor="reguser">账号：</label>
                        <input ref={el => this.userAccount = el} type="text" className="user" id="reguser" placeholder="6~12位英文或数字"></input>
                    </div>
                    <div className="pwdbar">
                        <label htmlFor="regpwd">密码：</label>
                        <input ref={el => this.userPassword = el} type="password" className="password" id="regpwd" placeholder="请输入密码"></input>
                    </div>
                    <div className="pwdbar2">
                        <label htmlFor="regpwd2">确认密码：</label>
                        <input ref={el => this.userDbPassword = el} type="password" className="password" id="regpwd2" placeholder="请再次输入密码"></input>
                    </div>
                    <button className="bt" onClick={() => this.userRegiste()}>注册</button>
                    <div className="other">
                        <span onClick={() => this.gotophone()}>手机号验证登录</span>
                        <span onClick={() => this.gotologin()}>账号密码登录</span>
                    </div>
                </div>
                <div className="usermsg" style={{ display: this.state.changenum == 4 ? "block" : "none" }}>
                    <h2>个人信息:</h2>
                    <p>用户名：{sessionStorage.userId}</p>
                    <button onClick={() => this.quit()}>注销</button>
                </div>
            </div>
        )
    }
}