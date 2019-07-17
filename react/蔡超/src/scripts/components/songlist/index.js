

import React, { Component } from 'react';

import { NavBar, Icon, Toast } from 'antd-mobile';
import { connect } from 'react-redux';

import './index.scss'

import { setSongListOpen, setPlayNum, disPlayList, disAllPlayList, addLikeSheet } from '~/actions'

@connect(
    state => {
        return {
            songlist: state.songlist,
            player: state.player,
            demo: state.demo
        }
    },
    dispatch => {
        return {
            setSongListOpen: () => dispatch(setSongListOpen()),
            setPlayNum: (num) => dispatch(setPlayNum(num)),
            disPlayList: ({ url, params }, cb) => dispatch(disPlayList({ url, params }, cb)),
            disAllPlayList: ({ url, params }) => dispatch(disAllPlayList({ url, params })),
            addLikeSheet: ({ url, params }, cb) => dispatch(addLikeSheet({ url, params }, cb)),
        }
    }
)
class SongList extends Component {
    goback = () => {
        if (this.props.songlist.songListOpen) {
            this.refs.songlist.className = 'songlist-out'
            setTimeout(() => {
                this.props.setSongListOpen();
            }, 200);

        } else {
            this.refs.songlist.className = 'songlist-in';
            this.props.setSongListOpen();
        }
    }
    setNum(i) {
        this.props.setMusicTop();
        this.props.setPlayNum(i)
        this.props.getPlay(true);
    }
    disAll = () => {
        this.props.disAllPlayList({ url: 'http://47.93.187.155:1998/react/disallsonglist', params: { count: localStorage.use } })
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
    detSong(e, id) {
        e.stopPropagation();
        this.props.disPlayList({ url: 'http://47.93.187.155:1998/react/songlist/dis', params: { id: id, count: localStorage.use } })
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const {
            songlist: {
                songListOpen,
                playList
            },
            player: {
                playNum
            }
        } = this.props;
        return (
            <div
                ref='songlist'
                style={{
                    width: '100vw',
                    position: 'fixed',
                    left: 0,
                    bottom: songListOpen ? '0' : '-50vh',
                    // bottom: 0,
                    background: 'white',
                    height: '50vh',
                    boxSizing: 'border-box',
                    border: '1px solid #dfdfdf',
                    borderRadius: '8vw 8vw 0 0',
                    overflowY: 'scroll',
                    zIndex: 110,
                }}
            >
                <NavBar
                    style={{ borderBottom: '1px solid #dfdfdf' }}
                    mode="light"
                    icon={<Icon type="down" size='lg' color='black' />}
                    onLeftClick={this.goback}
                    rightContent={[
                        <div onClick={this.disAll} key='0' style={{ color: 'black' }}>删除全部</div>
                    ]}
                >播放列表</NavBar>
                <div style={{ position: 'absolute', top: 46, bottom: 0, width: '100vw', overflowY: 'scroll' }}>
                    {
                        playList && playList.map((item, i) => {
                            return (
                                <div onClick={() => this.setNum(i)} className={playNum == i ? 'songlist-active' : ''} key={i} style={{ height: '50px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', borderBottom: '1px solid #dfdfdf', boxSizing: 'border-box' }}>
                                    <div>
                                        <span
                                            className='iconfont icon-bofang'
                                            style={{
                                                color: '#DC2C1F',
                                                display: playNum == i ? 'block' : 'none'
                                            }}
                                        ></span>
                                        <span style={{ display: playNum == i ? 'none' : 'block' }}>
                                            {i + 1}
                                        </span>

                                    </div>
                                    <div style={{
                                        width: '35vw',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}
                                    >{item.name}</div>
                                    <div style={{
                                        width: '20vw',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>{item.singer}</div>
                                    <div style={{ width: '20vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <span onClick={(e) => this.addLike(e, item)} style={{ fontSize: '14px' }} className='iconfont icon-aixin'></span>
                                        <Icon onClick={(e) => this.detSong(e, item.id)} type='cross' size='md' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}




export default SongList;