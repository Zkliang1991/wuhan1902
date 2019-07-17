
import React, { Component } from 'react';

import { Icon, Button, Toast } from 'antd-mobile';

import SheetList from '../sheetlist';

import { connect } from 'react-redux';

import { setSongSheetOpen, addCollect, disAllPlayList, addAllPlay } from '~/actions'

import './index.scss';


@connect(
    state => {
        return {
            demo: state.demo,
            songsheet: state.songsheet,
        }
    },
    dispatch => {
        return {
            setSongSheetOpen: () => dispatch(setSongSheetOpen()),
            addCollect: ({ url, params }, cb) => dispatch(addCollect({ url, params }, cb)),
            disAllPlayList: ({ url, params }, cb) => dispatch(disAllPlayList({ url, params }, cb)),
            addAllPlay: ({ url, params }, cb) => dispatch(addAllPlay({ url, params }, cb)),

        }
    }
)
class SongSheet extends Component {
    allPlay = () => {
        this.props.setMusicTop();
        this.props.disAllPlayList({ url: 'http://47.93.187.155:1998/react/disallsonglist', params: { count: localStorage.use } }, () => {
            this.props.addAllPlay({ url: 'http://47.93.187.155:1998/react/allplay', params: { sheet: this.props.songsheet.sheet, count: localStorage.use } }, () => {
                this.props.getPlay(true);
            })
        })
    }
    goCollect(e) {
        if (!!this.props.demo.token) {
            e.stopPropagation();
            Toast.loading('正在收藏中。。。', 300);
            let data = this.props.songsheet.sheetData;
            data.user = this.props.demo.username;
            this.props.addCollect({ url: 'http://47.93.187.155:1998/react/addcollect', params: data }, () => {
            })
        } else {
            Toast.fail('当前未登录！请登录后进行此操作', 1)
            this.props.getUser();
        }

    }
    goback = () => {
        if (this.props.songsheet.songSheetOpen) {
            this.refs.songsheet.className = 'songsheet-out'
            setTimeout(() => {
                this.props.setSongSheetOpen();
            }, 200);

        } else {
            this.refs.songsheet.className = 'songsheet-in';
            this.props.setSongSheetOpen();
        }
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const {
            songsheet: {
                songSheetOpen,
                sheet,
                sheetData
            }
        } = this.props;
        return (
            <div
                ref='songsheet'
                style={{
                    position: 'fixed',
                    width: '100vw',
                    left: songSheetOpen ? 0 : '100vw',
                    // left: 0,
                    top: 0,
                    bottom: '55px',
                    zIndex: '50',
                    background: '#14161A',
                    color: 'white'
                }}
            >
                <div style={{ width: '100vw', height: '55px', background: '#17181B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', paddingRight: '3vw', borderBottom: '1px solid #696969' }}>
                    <Icon type='left' size='lg' onClick={this.goback} />
                    <div style={{ fontSize: '0.5rem' }}>歌单详情</div>
                    <div>
                        <span className='iconfont icon-fenxiang' style={{ fontSize: '0.6rem' }}></span>
                    </div>
                </div>
                <div style={{ width: '100vw', background: '#17181B', height: '150px', display: 'flex', boxSizing: 'border-box', borderBottom: '1px solid #696969' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: 120, height: 120, position: 'relative' }}>
                            <img src={sheetData && sheetData.img ? sheetData.img : './img/demo.jpg'} style={{ width: '100%', height: '100%', borderRadius: '5px' }} alt="" />
                            <div style={{
                                display: (sheetData && sheetData.name == '我喜欢的音乐') ? 'block' : 'none',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.4)'
                            }}
                            ></div>
                            <span
                                style={{
                                    display: (sheetData && sheetData.name == '我喜欢的音乐') ? 'block' : 'none',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translateX(-50%) translateY(-50%)',
                                    fontSize: 60,
                                    color: 'rgba(255,255,255,0.4)'
                                }}
                                className='iconfont icon-aixin'>
                            </span>
                            <div style={{ position: 'absolute', top: 2, right: 2, fontSize: '0.2rem', display: sheetData && sheetData.playCount ? 'block' : 'none' }}>
                                <span className='iconfont icon-ting'></span>
                                <span>{sheetData ? sheetData.playCount : 0}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, boxSizing: 'border-box', paddingTop: '20px' }}>
                        <div style={{
                            width: '45vw',
                            overflow: 'hidden',
                            display: 'box',
                            textOverflow: 'ellipsis',
                            boxOrient: 'vertical',
                            lineClamp: 2,
                            fontSize: '0.4rem',
                            paddingTop: '5px'
                        }}>{sheetData ? sheetData.name : ''}</div>
                        <div style={{ fontSize: '0.2rem', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '25px', height: '25px', borderRadius: '50%', paddingRight: '5px' }} src={sheetData ? sheetData.nickImg : './img/demo.jpg'} alt="" />
                            <span >{sheetData ? sheetData.nickname : ''}</span>
                        </div>
                        <div style={{ fontSize: '0.15rem', color: '#DD001B', paddingTop: '15px' }}>
                            {
                                sheetData && sheetData.tags && sheetData.tags.map((tag, i) => {
                                    return (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '10px',
                                                border: '1px solid #DD001B',
                                                padding: '1px 10px',
                                                borderRadius: '21px',
                                                marginRight: '5px'
                                            }}>{tag}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div >
                <div className='allPlayer' onClick={this.allPlay} style={{ width: '100vw', height: 45, boxSizing: 'border-box', paddingLeft: '5vw', display: 'flex', borderBottom: '1px solid #696969', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ height: 25, width: 25, borderRadius: '50%', border: '1px solid white', position: 'relative' }}>
                            <span className='iconfont icon-bofang' style={{ position: 'absolute', left: '30%', top: '28%', fontSize: '0.2rem' }}></span>
                        </div>
                        <div onClick={() => this.allPlay} style={{ paddingLeft: '3vw' }}>播放全部</div>
                        <div>（共{sheet ? sheet.length : 0}首）</div>
                    </div>

                    <Button onClick={(e) => this.goCollect(e)} style={{ width: '30vw', height: '100%', borderRadius: '0', border: 0, display: sheetData.name == '我喜欢的音乐' ? 'none' : 'block' }} type='warning'>收藏歌单</Button>
                </div>
                <div style={{ width: '100vw', position: 'absolute', top: 250, bottom: 0, overflowY: 'scroll' }}>
                    <SheetList style={{ width: '100%', height: '100%' }} getPlay={this.props.getPlay} getUser={this.props.getUser} setMusicTop={this.props.setMusicTop} />
                </div>

            </div >
        )
    }
}

export default SongSheet;