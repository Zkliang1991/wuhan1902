import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import { Icon, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import {axios} from "@/utils/"
import userInfo from "../../react-redux/mobx/userInfo";

console.log(userInfo);
let timer = null;
const mReg = /^1(3|5|7|8|9)\d{9}$/;
const cReg = /^\d{4}$/;
class Login extends Component {
  state = {
    mDisable: true,
    loginDis: true,
    txt: "验证码(60s)",
    count: 5,
    flag: true
  };

  getMobile = mobile => {
    if (this.state.flag) {
      this.setState({
        mDisable: !mReg.test(mobile)
      });
    }

    this.setState({
      loginDis: !(mReg.test(mobile) && cReg.test(this.code.state.value))
    });
  };

  getCodes = () => {

    axios.post("/react-lyra/sendCode",{
      mobile:this.mobile.state.value
    }).then(res=>{

    })

    this.setState({
      mDisable: true,
      flag: false
    });
    this.startTime();
  };

  startTime = () => {
    timer = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({
          count: --this.state.count,
          txt: "倒计时" + this.state.count + "s"
        });
      } else {
        clearInterval(timer);
        this.setState({
          count: 5,
          txt: "验证码(60s)",
          mDisable: false,
          flag:true
        });
      }
    }, 1000);
  };

  checkCode = code => {
    this.setState({
      loginDis: !(mReg.test(this.mobile.state.value) && cReg.test(code))
    });
  };

  loginAuth=()=>{
    axios.post("/react-lyra/checkCode",{
      mobile:this.mobile.state.value,
      code:this.code.state.value
    }).then(res=>{
      console.log(res);
      if(!!res.data.type){
        var token = res.data.token;
        sessionStorage.userInfo = JSON.stringify({token});
        userInfo.getInfo(
          {token},
          true,
          this.mobile.state.value
        )
        setTimeout(() => {
          this.props.history.push("/lyra/mine");
        }, 1000);
      }else{
        sessionStorage.userInfo = "";
        userInfo.getInfo(
          {},
          false,
          ""
        )
      }
    })
  }

  render() {
    const { history } = this.props;
    const { mDisable, loginDis, txt } = this.state;
    return (
      <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <Head
          left={
            <Icon
              key="0"
              type="left"
              onClick={() => {
                history.goBack();
              }}
            />
          }
        />
        <div>
          <img src={require("@/assets/images/login.png")} width="100%" alt="" />
        </div>
        <WingBlank>
          <WingBlank>
            <div>
              <InputItem
                // {...getFieldProps('focus')}
                type="tel"
                clear
                placeholder="请输入手机号"
                ref={el => (this.mobile = el)}
                onChange={this.getMobile}
              >
                <i
                  className="icon iconfont icon-wode"
                  style={{ color: "#B9B9B9" }}
                />
              </InputItem>
              <hr />

              <WhiteSpace />

              <div style={{ position: "relative" }}>
                <InputItem
                  // {...getFieldProps('focus')}
                  type="number"
                  clear
                  placeholder="请输入验证码"
                  ref={el => (this.code = el)}
                  onChange={this.checkCode}
                >
                  <i
                    className="icon iconfont icon-suo"
                    style={{ color: "#B9B9B9" }}
                  />
                </InputItem>
                <Button
                  onClick={this.getCodes}
                  disabled={mDisable}
                  inline
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  {txt}
                </Button>
              </div>
              <hr />

              <WhiteSpace size="lg" />
              <Button
                style={{ backgroundColor: "#FFD500", borderRadius: "23.5px" }}
                disabled={loginDis}
                onClick={this.loginAuth}
              >
                登录
              </Button>
              <WhiteSpace size="lg" />
              <WhiteSpace size="lg" />
              <p style={{ color: "#B9B9B9", textAlign: "center" }}>
                <span
                  style={{
                    lineHeight: "8px",
                    display: "inline-block",
                    borderTop: "1px dashed #B9B9B9",
                    width: "30%",
                    height: "5px"
                  }}
                />
                <span style={{ display: "inline-block", padding: "0px 5px" }}>
                  第三方登录
                </span>
                <span
                  style={{
                    lineHeight: "8px",
                    display: "inline-block",
                    borderTop: "1px dashed #B9B9B9",
                    width: "30%",
                    height: "5px"
                  }}
                />
              </p>
              <p
                style={{
                  fontSize: "26px",
                  textAlign: "center",
                  padding: "25px 0"
                }}
              >
                <i
                  className="icon iconfont icon-qq"
                  style={{
                    fontSize: "40px",
                    textAlign: "center",
                    color: "skyblue",
                    padding: "0 10px"
                  }}
                />
                <i
                  className="icon iconfont icon-weixin"
                  style={{
                    fontSize: "40px",
                    textAlign: "center",
                    color: "#3CAF36",
                    padding: "0 10px"
                  }}
                />
              </p>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
