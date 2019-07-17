


import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon, Toast } from 'antd-mobile';
import { setPlay, setLyricTop, setLyricNum, setMusicOpen, setPlayNumAdd, addLikeSheet, setPlayNumCut, setPlayNum, setPlayed, setLyric } from '~/actions'

import './index.scss'

@connect(
    state => {
        return {
            player: state.player,
            music: state.music,
            songlist: state.songlist,
            demo: state.demo
        }
    },
    dispatch => {
        return {
            setPlay: (play) => dispatch(setPlay(play)),
            setMusicOpen: () => dispatch(setMusicOpen()),
            setPlayNumAdd: () => dispatch(setPlayNumAdd()),
            setPlayNumCut: () => dispatch(setPlayNumCut()),
            setPlayNum: (num) => dispatch(setPlayNum(num)),
            setPlayed: (time) => dispatch(setPlayed(time)),
            addLikeSheet: ({ url, params }, cb) => dispatch(addLikeSheet({ url, params }, cb)),
            setLyric: (bul) => dispatch(setLyric(bul)),
            setLyricTop: (str) => dispatch(setLyricTop(str)),
            setLyricNum: (num) => dispatch(setLyricNum(num))

        }
    }
)
class Music extends Component {
    goback = () => {
        if (this.props.music.musicOpen) {
            this.refs.music.className = 'music-out'
            setTimeout(() => {
                this.props.setMusicOpen();
            }, 670);

        } else {
            this.refs.music.className = 'music-in';
            this.props.setMusicOpen();
        }
    }
    backSong = () => {
        this.setTop();
        var length = this.props.songlist.playList.length
        if (this.props.player.playNum < 1) {
            this.props.setPlayNum(length - 1);
        } else {
            this.props.setPlayNumCut();
        }

    }
    setNum = (num) => {
        var top = this.refs.lyric.offsetHeight / 1.7;
        for (var i = 0; i <= num; i++) {
            top = top - (this.refs['lyric' + i].offsetHeight);
        }
        this.props.setLyricTop(top)
        this.props.music.lyricList.map((item, i) => {
            this.refs['lyric' + i].className = 'lyric-text';
        })
        this.refs['lyric' + num].className = 'lyric-active';

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

    goSong = () => {
        this.setTop();
        var length = this.props.songlist.playList.length
        this.props.getPlay()
        if (this.props.player.playNum >= length - 1) {
            this.props.setPlayNum(0);

        } else {
            this.props.setPlayNumAdd();
        }
        this.props.getPlay()
    }
    touch(e) {
        e.persist();
        var length = (e.pageX / e.target.offsetWidth) * 100;
        var newTime = this.props.player.time * (e.pageX / e.target.offsetWidth);
        this.props.music.lyricList.map((item, i) => {
            if (parseInt(newTime) - 10 < item.time && parseInt(newTime) + 10 > item.time) {
                this.setNum(i);
            }
        })
        this.props.setPlayed(newTime);
        this.props.getCurrentTime(newTime);
        this.refs.jindu.style.width = length + 'vw'
    }
    setTop = () => {
        var top = this.refs.lyric.offsetHeight / 1.7;
        this.props.setLyricTop(top)
    }
    componentDidMount() {
        this.props.onRef(this);
        this.setTop();
    }
    render() {
        const {
            player: {
                time,
                play,
                playNum,
                played
            },
            songlist: {
                playList
            },
            music: {
                lyric,
                lyricTop,
                lyricList,
                lyricNum
            }
        } = this.props
        return (
            <div
                ref='music'
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    left: this.props.music.musicOpen ? 0 : '100vw',
                    // left: '0',
                    top: '0',
                    zIndex: 80,
                    background: '#15141A',
                    color: 'white',
                    overflow: 'hidden'
                }}
            >

                <div style={{ width: '100vw', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', padding: '0 0.3rem', borderBottom: '1px solid #111111' }}>
                    <div style={{ width: '10vw', height: '10vw' }}>
                        <Icon onClick={this.goback} type='right' size='lg' />
                    </div>
                    <div style={{ textAlign: 'center', lineHeight: '30px' }}>
                        <div style={{ fontSize: '0.46rem', width: '60vw', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{playList && playList[playNum] && playList[playNum].name}</div>
                        <div>{playList && playList[playNum] && playList[playNum].singer}</div>
                    </div>
                    <div style={{ width: '10vw', height: '10vw' }}>分享</div>
                </div>
                {/* 中间 */}
                <div style={{ position: "absolute", top: 80, bottom: 205, width: '100vw' }}>
                    <div style={{ position: "absolute", width: '100%', height: '100%', display: lyric ? 'none' : 'block' }}>
                        <div style={{ width: '65vw', height: '65vw', borderRadius: '50%', position: 'absolute', left: '50%', top: '22%', transform: 'translateX(-50%)', background: 'black', animation: 'xuanzhuan 25s linear infinite', animationPlayState: play ? 'running' : 'paused' }}>
                            <img src={playList && playList[playNum] ? playList[playNum].pic : "./img/demo.jpg"} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt="" />
                        </div>
                    </div>
                    <div style={{ position: "absolute", width: '100%', height: '100%', overflow: 'hidden', display: lyric ? 'block' : 'none' }}>

                        <div ref='lyric' style={{ width: '100%', height: '100%', position: 'absolute', top: lyricTop + 'px' }}>
                            <div style={{ width: '100%', textAlign: 'center', display: lyricList.length ? 'none' : 'block' }}>当前歌曲暂无歌词！</div>
                            {
                                lyricList && lyricList.map((item, i) => {
                                    return (
                                        <div key={i} ref={'lyric' + i} className='lyric-text'>
                                            <div style={{ fontSize: 17 }}>{item.text[0]}</div>
                                            <div style={{ fontSize: 14, paddingTop: 8, display: item.text[1] ? ' block' : 'none' }}>{item.text[1]}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'absolute', width: '100vw', justifyContent: 'center', bottom: -35 }}>
                        <div style={{ display: 'flex', width: '30vw', justifyContent: 'space-around' }}>
                            <div className={lyric ? 'button' : 'button btn-active'} onClick={() => { this.props.setLyric(false) }}>封面</div>
                            <div className={lyric ? 'button btn-active' : 'button'} onClick={() => { this.props.setLyric(true) }}>歌词</div>
                        </div>
                    </div>
                </div>

                {/* 下面 */}
                <div style={{ height: '4px', width: '100vw', position: 'absolute', bottom: '140px', background: '#444444' }}>
                    <div style={{ position: 'absolute', right: 6, top: -19, fontSize: '0.3rem' }}>
                        {
                            ((parseInt(time / 60) < 10) ? ('0' + parseInt(time / 60)) : parseInt(time / 60)) + ' : ' + (parseInt(time / 60) ? (parseInt(time % (parseInt(time / 60) * 60)) < 10) ? ('0' + parseInt(time % (parseInt(time / 60) * 60))) : parseInt(time % (parseInt(time / 60) * 60)) : parseInt(time))
                        }
                    </div>
                    <div style={{ position: 'absolute', left: 6, top: -19, fontSize: '0.3rem' }}>
                        {
                            (parseInt(played / 60) < 10 ? '0' + parseInt(played / 60) : parseInt(played / 60)) + ' : ' + (parseInt(played / 60) ? (parseInt(played % (parseInt(played / 60) * 60)) < 10) ? ('0' + parseInt(played % (parseInt(played / 60) * 60))) : parseInt(played % (parseInt(played / 60) * 60)) : (parseInt(played) < 10 ? '0' + parseInt(played) : parseInt(played)))

                        }
                    </div>
                    <div
                        ref='jindu'
                        style={{
                            height: '4px',
                            width: (played / time) * 100 + 'vw',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            background: '#dfdfdf'
                        }}
                    >
                        <div style={{ height: '14px', width: '14px', position: 'absolute', borderRadius: '50%', background: '#dfdfdf', zIndex: '81', right: '-12px', top: '50%', transform: 'translateY(-50%)' }}>
                        </div>
                    </div>
                    <div onClick={(event) => this.touch(event)} style={{ height: '4px', width: '100vw', position: 'absolute', top: 0 }}>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100vw', height: '140px', boxSizing: 'border-box', borderTop: '1px solid #696969' }}>
                    <div style={{ position: 'absolute', left: '7vw', top: '50%', transform: 'translateY(-50%)' }}>
                        <span onClick={(e) => this.addLike(e, playList[playNum])} style={{ fontSize: '23px' }} className='iconfont icon-aixin'></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                        <div style={{ width: '60vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <div onClick={this.backSong} style={{ border: '2px solid white', width: '40px', height: '40px', borderRadius: '50%', position: 'relative' }}>
                                <Icon style={{ position: 'absolute', left: '0', top: 0, bottom: 0, right: '15px', margin: 'auto auto' }} type='left' size='lg' />
                            </div>
                            <div onClick={() => { this.props.getPlay() }} style={{ border: '2px solid white', width: '60px', height: '60px', borderRadius: '50%', position: 'relative' }}>
                                <span style={{ display: play ? 'none' : 'block', position: 'absolute', left: '55%', top: '50%', transform: 'translateX(-50%) translateY(-50%)', fontSize: '26px' }} className="iconfont icon-bofang"></span>
                                <span style={{ display: play ? 'block' : 'none', position: 'absolute', left: '53%', top: '50%', transform: 'translateX(-50%) translateY(-50%)', fontSize: '26px' }} className="iconfont icon-zanting"></span>
                            </div>
                            <div onClick={this.goSong} style={{ border: '2px solid white', width: '40px', height: '40px', borderRadius: '50%', position: 'relative' }}>
                                <Icon style={{ position: 'absolute', left: '0', top: 0, bottom: 0, right: 0, margin: 'auto auto' }} type='right' size='lg' />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { this.props.getSongList() }} style={{ position: 'absolute', right: '8vw', top: '50%', transform: 'translateY(-50%)' }}>
                        <span style={{ fontSize: '30px' }} className="iconfont icon-bofangliebiao"></span>
                    </div>
                </div>
            </div >
        )
    }
}


export default Music;