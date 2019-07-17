

import React, { Component } from 'react';
import { Icon, Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';

import './index.scss';

import { setUserOpen } from '~/actions';
import { setChecked } from '../../actions';

@connect(
    state => {
        return {
            user: state.user
        }
    },
    dispatch => {
        return {
            setUserOpen: () => dispatch(setUserOpen()),
            setChecked: () => dispatch(setChecked())
        }
    }
)
class User extends Component {
    goback = () => {
        if (this.props.user.userOpen) {
            this.refs.user.className = 'user-out'
            setTimeout(() => {
                this.props.setUserOpen();
            }, 300);
        } else {
            this.refs.user.className = 'user-in';
            this.props.setUserOpen();
        }


    }
    getLogin = () => {
        if (this.props.user.checked) {
            this.props.getLogin();
            this.goback();
        } else {
            Toast.info('请同意《用户协议》和《隐私政策》', 1);
        }

    }
    componentDidMount() {
        this.props.onRef(this);
    }
    setCheck = () => {
        this.props.setChecked();
    }
    render() {
        const {
            user: {
                userOpen
            },
        } = this.props
        return (
            <div
                ref='user'
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    background: 'white',
                    top: userOpen ? 0 : '100vh',
                    zIndex: 101,
                    backgroundImage: 'url(./img/user.jpg)',
                    backgroundSize: '100%'
                }}
            >
                <Icon onClick={this.goback} type='down' size='lg' color='white' />
                <div style={{ position: 'absolute', bottom: '70px', textAlign: 'center', width: '100vw' }}>
                    <Button onClick={this.getLogin} style={{ display: 'inline-block', width: '65vw', height: '30px', borderRadius: '15px', lineHeight: '30px', fontSize: '14px', color: '#DC2C1F', fontWeight: '600' }}>手机号登录</Button>
                </div>
                <div>

                </div>
                <p style={{ color: '#DDDDDD', position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', fontSize: '9px' }}>
                    <input onClick={this.setCheck} type="checkbox" />
                    同意
                <span style={{ color: 'black' }}>《用户协议》</span>
                    和
                <span style={{ color: 'black' }}>《隐私政策》</span>
                </p>
            </div>
        )
    }
}
export default User