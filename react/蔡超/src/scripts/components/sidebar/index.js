import React, { Component } from 'react';
import { Button, Icon, List } from 'antd-mobile';
import { connect } from 'react-redux';

import './index.scss';

import { setSidebarOpen, shangChuan } from '~/actions';
const Item = List.Item;
@connect(
    state => {
        return {
            demo: state.demo,
            sidebar: state.sidebar,
        }
    },
    dispatch => {
        return {
            setSidebarOpen: () => dispatch(setSidebarOpen()),
            shangChuan: ({ url, params }, cb) => dispatch(shangChuan({ url, params }, cb))
        }
    }
)
class Sidebar extends Component {
    goback = () => {
        if (this.props.sidebar.sidebarOpen) {
            this.refs.sidebar.className = 'sidebar-out'
            setTimeout(() => {
                this.props.setSidebarOpen();
            }, 300);
        } else {
            this.refs.sidebar.className = 'sidebar-in';
            this.props.setSidebarOpen();
        }


    }
    uploadImg = () => {
        this.refs.one.click();
    }
    shangchuan = () => {
        let file = this.refs.one.files[0]; //需要上传图片
        let data = new FormData(); //新建 表单对象   <from></from>
        data.append("avatar", file);
        var token = this.props.demo.token;
        this.props.shangChuan({
            url: 'http://47.93.187.155:1998/react/getheadimg?token=' + token, params: {
                type: "POST",
                contentType: false,
                processData: false,
                data: data
            }
        })
    }
    setUser = () => {
        this.goback();
        this.props.getUser();
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const {
            demo: {
                token
            },
            sidebar: {
                sidebarOpen
            }
        } = this.props
        return (
            <div ref='sidebar' style={{ width: '80vw', height: '100vh', background: 'white', position: 'fixed', top: '0', zIndex: '100', left: sidebarOpen ? '0' : '-100vw' }}>
                <Icon onClick={this.goback} type='left' size='lg' style={{ position: 'absolute', right: '0', zIndex: 120 }} />
                <div style={{ width: '100%', height: '180px', background: '#EBEBEB', position: 'relative' }}>
                    <img style={{
                        display: token ? 'block' : 'none',
                        width: '100%',
                        height: '100%', position: 'absolute', zIndex: 99
                    }} src="./img/back.jpg" alt="" />
                    <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 110 }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: token ? 'flex' : 'none',
                            flexDirection: 'column', justifyContent: 'center', alignItem: 'center',

                        }}>
                            <div style={{ width: '100%', height: 70, textAlign: 'center' }}>
                                <img style={{ display: 'inline-block', width: 70, height: '100%', borderRadius: '50%', border: '3px solid white' }} src={this.props.demo.userImg ? this.props.demo.userImg : "./img/demo.jpg"} alt="" />
                            </div>
                            <p style={{ padding: '15px 0', fontSize: '0.5rem', textAlign: 'center', color: 'white' }}>欢迎您,{this.props.demo.username}</p>
                        </div>
                        <div style={{
                            display: token ? 'none' : 'block',
                            paddingTop: '80px', textAlign: 'center', fontSize: '12px', lineHeight: '20px'
                        }}>
                            <div>登录网易云音乐</div>
                            <div>手机电脑多端同步，尽享海量高品质音乐</div>
                            <Button
                                onClick={this.setUser}
                                style={{ width: '80px', height: '24px', borderRadius: '12px', lineHeight: '24px', fontSize: '11px', display: 'inline-block', marginTop: '5px' }}>立即登录</Button>
                        </div>
                    </div>

                </div>
                <div style={{ position: 'absolute', top: '180px', bottom: '40px', width: '80vw', overflowY: 'scroll' }}>
                    <List>
                        <Item
                            arrow="horizontal"
                            onClick={() => this.uploadImg()}
                            style={{ display: this.props.demo.token ? 'block' : 'none' }}
                        >
                            上传头像
                            <input type="file" ref="one" accept="image/*" onChange={this.shangchuan} style={{ display: 'none' }} />
                        </Item>
                    </List>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5vw', position: 'absolute', bottom: '0', left: '0', height: '39px', borderTop: '1px solid #dfdfdf', width: '70vw', lineHeight: '39px' }}>
                    <div >
                        <Button style={{ width: '70px', height: '39px', lineHeight: '39px', fontSize: '11px' }}>
                            夜间模式
                        </Button>
                    </div>
                    <div >
                        <Button style={{ width: '70px', height: '39px', lineHeight: '39px', fontSize: '11px' }}>
                            设置
                        </Button>
                    </div>
                    <div >
                        <Button style={{ width: '70px', height: '39px', lineHeight: '39px', fontSize: '11px', boxShadow: '0' }}>
                            退出
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar