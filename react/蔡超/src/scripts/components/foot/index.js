



import React, { Component } from 'react';

import { setTime, setPlay, setPlayList, setLyricTop, setPlayNumAdd, setPlayNumCut, setPlayNum, setLoadText, setPlayed, setPlayId, setLyricList } from '~/actions'
import { Toast } from 'antd-mobile';

import { connect } from 'react-redux';

import './index.scss';

@connect(
    state => {
        return {
            player: state.player,
            songlist: state.songlist,
            music: state.music
        }
    },
    dispatch => {
        return {
            setTime: (time) => dispatch(setTime(time)),
            setPlay: (play) => dispatch(setPlay(play)),
            setPlayList: ({ url, params }) => dispatch(setPlayList({ url, params })),
            setPlayNum: (num) => dispatch(setPlayNum(num)),
            setPlayNumAdd: () => dispatch(setPlayNumAdd()),
            setPlayNumCut: () => dispatch(setPlayNumCut()),
            setLoadText: (text) => dispatch(setLoadText(text)),
            setPlayed: (time) => dispatch(setPlayed(time)),
            setPlayId: (id) => dispatch(setPlayId(id)),
            setLyricTop: (str) => dispatch(setLyricTop(str)),
            setLyricList: ({ url, params }, cb) => dispatch(setLyricList({ url, params }, cb))
        }
    }
)
class Foot extends Component {
    timer = null
    lyricTimer = null;
    getPlay = (num) => {
        if (this.props.songlist.playList.length) {
            var audio = this.refs.audio;
            if (num) {
                this.props.setPlay(num);
            } else {
                this.props.setPlay();
            }
            setTimeout(() => {
                if (this.props.player.play) {
                    let songid = this.props.songlist.playList[this.props.player.playNum].id;
                    this.props.setPlayId(songid);
                    this.props.setLyricList({ url: 'https://v1.itooi.cn/netease/lrc', params: { id: songid } })
                    audio.play();
                    audio.onloadeddata = () => {
                        this.props.setLoadText('加载中...');
                        this.props.setPlay(false);
                        this.refs.audio.pause();
                    }
                    audio.oncanplay = () => {
                        this.props.setTime(this.refs.audio.duration)
                        this.props.setLoadText('');
                        this.props.setPlay(true);
                        this.refs.audio.play();
                    }
                    if (!this.timer) {
                        this.timer = setInterval(() => {
                            var ct = this.refs.audio.currentTime;
                            this.props.setPlayed(ct);
                            this.props.music.lyricList.map((item, i) => {
                                if (parseInt(ct) == item.time) {
                                    console.log(parseInt(ct), item, i);
                                    this.props.getMusicNum(i);
                                }
                            })
                        }, 1000)
                    }
                } else {
                    audio.pause();
                    audio.onloadeddata = null;
                    audio.oncanplay = () => {
                        this.props.setTime(this.props.songlist.playList[this.props.player.playNum].time)
                    };
                    clearInterval(this.timer);
                    this.timer = null
                }
            }, 10)
        } else {
            Toast.fail('当前播放列表并无歌曲！请前去添加歌曲！')
        }
    }
    // 接口
    componentWillMount() {
        this.props.setPlayList({ url: 'http://47.93.187.155:1998/react/songlist', params: { count: localStorage.use } });
    }
    componentDidMount() {
        this.props.onRef(this);

        this.refs.audio.addEventListener('ended', () => {
            this.props.setMusicTop();
            var length = this.props.songlist.playList.length
            this.getPlay()
            if (this.props.player.playNum >= length - 1) {
                this.props.setPlayNum(0);

            } else {
                this.props.setPlayNumAdd();
            }
            this.getPlay()
        }, false)
    }

    setsonglist = () => {
        this.props.getSongList();
    }
    setMusic = () => {
        this.props.getMusic();
    }
    setCurrentTime = (time) => {
        this.refs.audio.currentTime = time
    }
    render() {

        const {
            player: {
                time,
                play,
                playNum,
                loadtext
            },
            songlist: {
                playList
            }
        } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100vw', position: 'fixed', bottom: '0', left: '0', height: '54px', background: 'white', borderTop: '1px solid #dfdfdf', zIndex: 30 }}>
                <div onClick={this.setMusic} style={{ display: 'flex' }}>
                    <div style={{ width: '60px', height: '55px', textAlign: 'center', paddingTop: '3.5px' }}>
                        <img
                            src={playList && playList[playNum] ? playList[playNum].pic : "./img/demo.jpg"}
                            style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'inline-block' }} alt=""
                        />
                    </div>
                    <div style={{ paddingTop: '13px', width: '50vw' }}>
                        <div style={{ fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{playList && playList[playNum] ? playList[playNum].name : '播放列表暂时没有歌曲哦！快去添加吧'}</div>
                        <div style={{ fontSize: '8px', color: '#555555' }}>{loadtext ? loadtext : '点击此处可以进入播放详情哦'}</div>
                    </div>

                </div>
                <div style={{ width: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', lineHeight: '55px' }}>
                    <div style={{ width: '34px', height: '34px', position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                width: '28px',
                                height: '28px',
                                border: '3px solid  #dfdfdf',
                                borderRadius: '50%'
                            }}>

                        </div>

                        <div className='bar' style={{
                            left: '0',
                        }}>
                            <div ref='left'
                                className='bar-line'
                                style={{
                                    borderBottom: '3px solid black',
                                    borderLeft: '3px solid black',
                                    left: 0,
                                    animation: 'load_left ' + time + 's linear infinite',
                                    animationPlayState: 'paused'
                                }}
                            >
                            </div>
                        </div>
                        <div className='bar' style={{
                            right: '0',
                        }}>
                            <div
                                ref='right'
                                className='bar-line'
                                style={{
                                    borderTop: '3px solid black',
                                    borderRight: '3px solid black',
                                    right: 0,
                                    animation: 'load_right ' + time + 's linear infinite',
                                    animationPlayState: 'paused'

                                }}
                            >
                            </div>
                        </div>
                        <span className="iconfont icon-bofang bar-icon" onClick={() => this.getPlay(true)} style={{ display: play ? 'none' : 'block' }}></span>
                        <span className="iconfont icon-zanting bar-icon" onClick={() => this.getPlay(false)} style={{ display: play ? 'block' : 'none' }} ></span>
                    </div>
                    <div>
                        <span onClick={this.setsonglist} style={{ fontSize: '26px' }} className="iconfont icon-bofangliebiao"></span>
                    </div>
                </div>
                <audio
                    ref='audio'
                    style={{
                        display: 'none'
                    }}
                    onCanPlay={() => {
                        this.props.setTime(this.refs.audio.duration)
                    }}
                    src={playList && playList[playNum] ? 'https://v1.itooi.cn/netease/url?id=' + playList[playNum].id + '&quality=flac' : ''}
                    controls="controls"
                />
            </div>
        )
    }
}

export default Foot;