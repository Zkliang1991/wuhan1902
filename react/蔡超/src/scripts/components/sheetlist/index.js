import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Icon, Toast } from 'antd-mobile'
import './index.scss';
import { addPlayList, setPlayNum, addLikeSheet, addCollect, disLikeSheet, setSheet } from '../../actions';

@connect(
    state => {
        return {
            songsheet: state.songsheet,
            songlist: state.songlist,
            player: state.player,
            demo: state.demo
        }
    },
    dispatch => {
        return {
            setPlayNum: (num) => dispatch(setPlayNum(num)),
            addPlayList: ({ url, params }, cb) => dispatch(addPlayList({ url, params }, cb)),
            addLikeSheet: ({ url, params }, cb) => dispatch(addLikeSheet({ url, params }, cb)),
            addCollect: ({ url, params }, cb) => dispatch(addCollect({ url, params }, cb)),
            disLikeSheet: ({ url, params }, cb) => dispatch(disLikeSheet({ url, params }, cb)),
            setSheet: (arr) => dispatch(setSheet(arr))
        }
    }
)

class SheetList extends Component {
    gobtm(e, i) {
        e.stopPropagation();
        if (this.refs['songbtm' + i].style.height === '0px') {
            this.refs['song' + i].style.height = this.refs['song' + i].clientHeight + 51 + 'px'
            this.refs['songbtm' + i].style.height = '50px';
        } else {
            this.refs['song' + i].style.height = '';
            this.refs['songbtm' + i].style.height = '0px';
        }
    }
    addList(e, song) {
        e.stopPropagation();
        song.count = localStorage.use;
        this.props.addPlayList({ url: 'http://47.93.187.155:1998/react/songlist/add', params: song })
    }
    addLike(e, song) {
        e.stopPropagation();
        if (this.props.demo.token) {
            song.user = this.props.demo.username
            this.props.addLikeSheet({ url: 'http://47.93.187.155:1998/react/addlike', params: song })
        } else {
            Toast.fail('当前未登录！请登录后进行此操作', 1)
            this.props.getUser();
        }

    }
    disLike(e, id) {
        e.stopPropagation();
        this.props.disLikeSheet({ url: 'http://47.93.187.155:1998/react/dislike', params: { id: id, user: this.props.demo.username } }, (res) => {
            this.props.setSheet(res.data.data)
        })
    }
    addPlay(song) {
        let flag = false;
        let num = null;
        this.props.songlist.playList.map((item, i) => {
            if (item.id == song.id && item.count == localStorage.use) {
                flag = true;
                num = i
            }
        })
        if (flag) {
            this.props.setPlayNum(num);
            this.props.getPlay(true);
        } else {
            this.props.setMusicTop();
            song.count = localStorage.use;
            this.props.addPlayList({ url: 'http://47.93.187.155:1998/react/songlist/add', params: song }, () => {
                let timer = setInterval(() => {
                    if (this.props.songlist.playList[this.props.songlist.playList.length - 1].id == song.id) {
                        this.props.setPlayNum(this.props.songlist.playList.length - 1);
                        clearInterval(timer);
                        this.props.getPlay(true);
                    }
                }, 500)
            })
        }

    }
    render() {
        const {
            songsheet: {
                sheet,
                sheetData
            },
            player: {
                playId
            }
        } = this.props;
        return (
            <div>
                {
                    sheet && sheet.map((song, i) => {
                        return (
                            <div className={playId == song.id ? 'play-active' : ''} onClick={() => this.addPlay(song)} ref={'song' + i} key={i} style={{ position: 'relative', animation: ' flipInX ' + 0.2 * i + 's' }}>
                                <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #444444' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <div style={{ padding: '0 4vw' }}>
                                            <span style={{ color: '#C62F2F', display: playId == song.id ? 'block' : 'none' }} className='iconfont icon-bofang'></span>
                                            <span style={{ display: playId == song.id ? 'none' : 'block' }}>{i + 1}</span>
                                        </div>
                                        <div style={{ paddingLeft: '0.3vw', width: '40vw' }}>
                                            <div style={{ fontSize: '0.4rem', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{song.name}</div>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '0.38rem', width: '25vw', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{song.singer}</div>
                                    <div style={{ padding: '0 4vw' }}>
                                        <span onClick={(e) => this.gobtm(e, i)} className='iconfont icon-shenglve'></span>
                                    </div>
                                </div>
                                <div ref={'songbtm' + i} style={{ position: 'absolute', height: '0px', width: '100vw', top: '40px', boxSizing: 'border-box', borderBottom: '1px solid #333333', display: 'flex', justifyContent: 'space-around', alignItems: 'center', overflow: 'hidden' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div onClick={(event) => this.addList(event, song)}>
                                            <span className='iconfont icon-jiahao'></span>
                                        </div>
                                        <div style={{ fontSize: '0.2rem', padding: '0.1rem 0' }}>播放列表</div>
                                    </div>
                                    <div onClick={(event) => this.addLike(event, song)} style={{ textAlign: 'center', display: sheetData.name == '我喜欢的音乐' ? 'none' : 'block' }}>
                                        <div>
                                            <span className='iconfont icon-aixin'></span>
                                        </div>
                                        <div style={{ fontSize: '0.2rem', padding: '0.1rem 0' }}>喜欢</div>
                                    </div>
                                    <div onClick={(e) => this.disLike(e, song.id)} style={{ textAlign: 'center', display: sheetData.name == '我喜欢的音乐' ? 'block' : 'none' }}>
                                        <div>
                                            <Icon type='cross' />
                                        </div>
                                        <div style={{ fontSize: '0.2rem', padding: '0.1rem 0' }}>删除</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SheetList