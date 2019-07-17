
import React, { Component } from 'react';

import { NavBar, Icon, WhiteSpace, WingBlank, InputItem, Button, NoticeBar, Toast } from 'antd-mobile';

import { connect } from 'react-redux'

import { setLoginOpen, setToken, getLikeSheet, getCollect, setUserName, setUserImg, setFlag, setCount, setDisabled, setMobile, getCode, getLogin, setCode } from '~/actions'

import './index.scss';

const mobileReg = /^1(3|5|7|8|9)\d{9}$/;
const codeReg = /^\d{4}$/;

@connect(
    state => {
        return {
            login: state.login
        }
    },
    dispatch => {
        return {
            setLoginOpen: () => dispatch(setLoginOpen()),
            setFlag: (flag, cb) => dispatch(setFlag(flag, cb)),
            setCount: (count) => dispatch(setCount(count)),
            setDisabled: (disabled) => dispatch(setDisabled(disabled)),
            setMobile: (mobile) => dispatch(setMobile(mobile)),
            getCode: ({ url, params }, cb) => dispatch(getCode({ url, params }, cb)),
            getLogin: ({ url, params }, cb) => dispatch(getLogin({ url, params }, cb)),
            setCode: (code) => dispatch(setCode(code)),
            setToken: (token) => dispatch(setToken(token)),
            setUserName: (name) => dispatch(setUserName(name)),
            setUserImg: (img) => dispatch(setUserImg(img)),
            getLikeSheet: ({ url, params }, cb) => dispatch(getLikeSheet({ url, params }, cb)),
            getCollect: ({ url, params }, cb) => dispatch(getCollect({ url, params }, cb)),
        }
    }
)
class Login extends Component {
    goback = () => {
        if (this.props.login.loginOpen) {
            this.refs.login.className = 'login-out'
            setTimeout(() => {
                this.props.setLoginOpen();
            }, 200);
        } else {
            this.refs.login.className = 'login-in';
            this.props.setLoginOpen();
        }


    }
    getVCode = () => {
        var timer = null;
        Toast.loading('发送中', 3000)
        this.props.getCode({ url: 'http://47.93.187.155:1998/react/sendCode', params: { mobile: this.props.login.mobile } })
        this.props.setFlag(false, () => {
            this.props.setDisabled(true);
            setTimeout(() => {
                if (!this.props.login.flag) {
                    timer = setInterval(() => {
                        var count = this.props.login.count - 1;
                        this.props.setCount(count);
                        if (count < 1) {
                            clearInterval(timer);
                            this.props.setCount(3);
                            this.props.setFlag(true)
                            this.props.setDisabled(false);
                        }
                    }, 1000);
                }
            }, 10)
        });
    }
    getLogin = () => {
        this.props.getLogin({ url: 'http://47.93.187.155:1998/react/login', params: { mobile: this.props.login.mobile, code: this.props.login.code } }, (res) => {
            this.props.setToken(res.data.token);
            this.props.setUserName(res.data.username);
            this.props.setUserImg(res.data.img);

            sessionStorage.token = res.data.token;

            this.props.getLikeSheet({ url: 'http://47.93.187.155:1998/react/like', params: { user: res.data.username } }, () => {
                this.props.getCollect({ url: 'http://47.93.187.155:1998/react/collect', params: { user: res.data.username } })
            });
            this.goback();

        })
    }
    change = (e) => {
        this.props.setMobile(e);
        mobileReg.test(e) ? this.props.setDisabled(false) : this.props.setDisabled(true)
    }
    setCode = (e) => {
        this.props.setCode(e);
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const {
            login: {
                loginOpen,
                flag,
                vcode,
                count,
                disabled
            }
        } = this.props;
        return (
            <div
                ref='login'
                style={{
                    position: 'fixed',
                    left: '0',
                    // top: 0,
                    top: loginOpen ? 0 : '100vh',
                    zIndex: '102',
                    background: 'white',
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <NavBar
                    style={{ color: '#DC2C1F' }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.goback}
                ><p style={{ color: '#DC2C1F' }}>登录</p></NavBar>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    未注册用户在输入手机号获取验证码登录后自动注册。
                </NoticeBar>
                <WhiteSpace />
                <WingBlank>
                    <InputItem
                        type="text"
                        ref='mobile'
                        placeholder="请输入手机号"
                        onChange={(event) => this.change(event)}
                    >手机号码</InputItem>
                    <InputItem
                        type="text"
                        maxLength={5}
                        onChange={(event) => this.setCode(event)}
                        placeholder="验证码"
                    >
                        验证码
                    <Button
                            disabled={disabled}
                            onClick={this.getVCode}
                            style={{
                                fontSize: '16px',
                                width: '30vw',
                                height: '100%',
                                position: 'absolute',
                                top: '0',
                                right: '0'
                            }} type='warning'
                        >
                            {flag ? vcode : count + 's'}
                        </Button>
                    </InputItem>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.getLogin} type="primary">登录</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;


