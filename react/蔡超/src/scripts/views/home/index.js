import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from 'antd-mobile/lib/tab-bar';
import { Accordion, Toast, Icon, Button } from 'antd-mobile';

import { getLikeSheet, setSheetData, getSheet, setSheet, getCollect, disCollect } from '../../actions';

@connect(
    state => {
        return {
            demo: state.demo,
            home: state.home
        }
    },
    dispatch => {
        return {
            getLikeSheet: ({ url, params }, cb) => dispatch(getLikeSheet({ url, params }, cb)),
            getSheet: ({ url, params }, cb) => dispatch(getSheet({ url, params }, cb)),
            setSheetData: (data) => dispatch(setSheetData(data)),
            setSheet: () => dispatch(setSheet()),
            getCollect: ({ url, params }, cb) => dispatch(getCollect({ url, params }, cb)),
            disCollect: ({ url, params }, cb) => dispatch(disCollect({ url, params }, cb)),
        }
    }

)

class Home extends Component {
    goSheet = (data) => {
        this.props.setSheet();
        Toast.loading('加载中，请稍等...', 3, () => {
            Toast.hide();
            Toast.loading('加载速度较慢，请稍等....', 60)
        });
        this.props.setSheetData(data);
        this.props.getSongSheet();
        this.props.getSheet({ url: 'https://v1.itooi.cn/netease/songList', params: { id: data.id, format: 1 } }, () => {
            Toast.success('获取成功', 1);
        })
    }
    goLike = (data) => {
        this.props.setSheet();
        Toast.loading('加载中，请稍等...', 3, () => {
            Toast.hide();
            Toast.loading('加载速度较慢，请稍等....', 60)
        });
        this.props.setSheetData(data);
        this.props.getSongSheet();
        this.props.getSheet({ url: 'http://localhost:1998/react/like', params: { user: this.props.demo.username } }, () => {
            Toast.success('获取成功', 1);
        })
    }
    goDisColl(e, id) {
        e.stopPropagation();
        this.props.disCollect({ url: 'http://localhost:1998/react/discollect', params: { id: id, user: this.props.demo.username } })
    }
    componentWillMount() {
        if (sessionStorage.token) {
            this.props.getLikeSheet({ url: 'http://localhost:1998/react/like', params: { token: sessionStorage.token } }, () => {
                this.props.getCollect({ url: 'http://localhost:1998/react/collect', params: { token: sessionStorage.token } })
            });
        } else {
            Toast.fail('当前未登录！登录后可查看本页内容!', 1)
        }

    }
    componentDidMount() {
        if (this.props.demo.token || sessionStorage.token) {
        } else {
            setTimeout(() => {
                this.props.getUser();
            }, 1000)
        }
    }
    render() {
        const {
            demo: {
                token,
                username
            },
            home: {
                likeSheet,
                collect
            }
        } = this.props
        return (
            <div style={{ width: '100%', height: '100%', background: 'white', overflowY: 'scroll' }}>
                {/* 个人歌单详情 */}
                <div style={{ display: token ? 'none' : 'block', textAlign: 'center' }}>
                    当前未登录，登录后显示当前页内容！
                </div>
                <div style={{ display: token ? 'block' : 'none' }}>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Panel header='我的音乐歌单(1)'>
                            <div onClick={() => this.goLike({ img: likeSheet && likeSheet[0] && likeSheet[0].pic, name: '我喜欢的音乐', nickname: username, playCount: 0, tags: '', nickImg: './img/demo.jpg' })} style={{ width: '100vw' }}>
                                <div style={{ width: '100vw', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', padding: '0 15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: 60, height: 60, position: 'relative' }}>
                                            <img style={{ width: '100%', height: '100%' }} src={likeSheet && likeSheet[0] && likeSheet[0].pic} alt="" />
                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }}></div>
                                            <span style={{ display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', fontSize: 28, color: 'rgba(255,255,255,0.4)' }} className='iconfont icon-aixin'></span>
                                        </div>
                                        <div style={{ paddingLeft: 10 }}>
                                            <div style={{ fontSize: '0.45rem' }}>我喜欢的音乐</div>
                                            <div style={{ fontSize: '0.3rem' }}>{token ? likeSheet ? likeSheet.length : 0 : 0}首</div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='iconfont icon-shenglve'></span>
                                    </div>

                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Panel header={'收藏的歌单(' + collect.length + ')'}>
                            {
                                collect && collect.map((item, i) => {
                                    return (
                                        <div key={i} onClick={() => this.goSheet(item)}>
                                            <div style={{ width: '100vw', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', padding: '0 15px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ width: 60, height: 60, position: 'relative' }}>
                                                        <img style={{ width: '100%', height: '100%' }} src={item.img} alt="" />

                                                    </div>
                                                    <div style={{ paddingLeft: 10 }}>
                                                        <div style={{ fontSize: '0.45rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '65vw' }}>{item.name}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Icon onClick={(e) => this.goDisColl(e, item.id)} type='cross' />
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div >
        )
    }
}

export default Home;