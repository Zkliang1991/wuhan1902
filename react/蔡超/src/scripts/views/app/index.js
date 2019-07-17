import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Head from '~/components/head';
import Foot from '~/components/foot';



import Home from '../home';
import Find from '../find';
import Dynamic from '../dynamic';

import './index.scss';

import User from '~/components/user';
import Search from '~/components/search';
import Sidebar from '~/components/sidebar';
import Login from '~/components/login';
import Shadow from '~/components/shadow';
import Music from '~/components/music';
import SongList from '~/components/songlist';
import SongSheet from '~/components/songsheet';



import { setToken, setUserName, setUserImg, getOpenOne } from '../../actions';
@connect(
    state => {
        return {

        }
    },
    dispatch => {
        return {
            setToken: (token) => dispatch(setToken(token)),
            setUserName: (name) => dispatch(setUserName(name)),
            setUserImg: (img) => dispatch(setUserImg(img)),
            getOpenOne: ({ url, params }, cb) => dispatch(getOpenOne({ url, params }, cb))
        }
    }
)
class App extends Component {
    // 第一次进入给一个标记 用来分辨用户本机的播放列表
    componentWillMount() {
        if (!localStorage.use) {
            var count = parseInt((Math.random() * 900000000) + 100000000);
            localStorage.use = count;

        }
    }
    // 每次进入检查是否登录
    componentDidMount() {
        if (sessionStorage.token) {
            this.props.getOpenOne({ url: 'http://47.93.187.155:1998/react/openone', params: { token: sessionStorage.token } }, (res) => {
                this.props.setToken(res.data.token)
                this.props.setUserName(res.data.username)
                this.props.setUserImg(res.data.img)
            })
        } else {
            this.props.getOpenOne({ url: 'http://47.93.187.155:1998/react/openone' }, (res) => {
                this.props.setToken(res.data.token)
                this.props.setUserName(res.data.username)
                this.props.setUserImg(res.data.img)
            })
        }

    }
    onUser = (ref) => {
        this.user = ref;
    }
    onSearch = (ref) => {
        this.search = ref;
    }
    onSidebar = (ref) => {
        this.sidebar = ref;
    }
    onLogin = (ref) => {
        this.login = ref
    }
    onMusic = (ref) => {
        this.music = ref
    }
    onSongList = (ref) => {
        this.songlist = ref
    }
    onFoot = (ref) => {
        this.foot = ref
    }
    onSongSheet = (ref) => {
        this.songsheet = ref
    }



    getUser = () => {
        this.user.goback();
    }
    getSearch = () => {
        this.search.goback();
    }
    getSidebar = () => {
        this.sidebar.goback();
    }
    getLogin = () => {
        this.login.goback();
    }

    getMusic = () => {
        this.music.goback();
    }
    getMusicNum = (num) => {
        this.music.setNum(num)
    }
    setMusicTop = () => {
        this.music.setTop();
    }
    getSongList = () => {
        this.songlist.goback();
    }

    getPlay = (num) => {
        this.foot.getPlay(num);
    }
    getCurrentTime = (time) => {
        this.foot.setCurrentTime(time)
    }

    getSongSheet = () => {
        this.songsheet.goback();
    }

    render() {
        return (
            <div>
                {/* 头部 */}
                <Head getSearch={this.getSearch} getSidebar={this.getSidebar} />
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.location.pathname}
                        classNames="fade"
                        timeout={300}
                    >
                        <div style={{ width: '100vw', position: 'fixed', top: '45px', bottom: '55px', left: 0, right: 0 }} >
                            <Switch location={this.props.location}>
                                {/* 我的 */}
                                <Route path='/app/home' render={(props) => <Home {...props} getSongSheet={this.getSongSheet} getUser={this.getUser} />} />
                                {/* 发现 */}
                                <Route path='/app/find' render={(props) => <Find {...props} getSongSheet={this.getSongSheet} />} />
                                {/* 歌单分类 */}
                                <Route path='/app/dynamic' render={(props) => <Dynamic {...props} getSongSheet={this.getSongSheet} />} />
                                <Route render={() => (
                                    <Redirect to='/app/find' />
                                )} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                {/* 脚部 */}
                <Foot onRef={this.onFoot} getMusic={this.getMusic} getSongList={this.getSongList} getMusicNum={this.getMusicNum} setMusicTop={this.setMusicTop} />
                {/* 登录过渡 */}
                <User onRef={this.onUser} getLogin={this.getLogin} />
                {/* 查询 */}
                <Search onRef={this.onSearch} getPlay={this.getPlay} setMusicTop={this.setMusicTop} />
                {/* 左侧 */}
                <Sidebar onRef={this.onSidebar} getUser={this.getUser} />
                {/* 登录注册页 */}
                <Login onRef={this.onLogin} getUser={this.getUser} />
                {/* 阴影 */}
                <Shadow />
                {/* 音乐详情 */}
                <Music onRef={this.onMusic} getSongList={this.getSongList} getPlay={this.getPlay} getCurrentTime={this.getCurrentTime} />
                {/* 播放列表 */}
                <SongList onRef={this.onSongList} getPlay={this.getPlay} getUser={this.getUser} setMusicTop={this.setMusicTop} />
                {/* 歌单列表 */}
                <SongSheet onRef={this.onSongSheet} getPlay={this.getPlay} getUser={this.getUser} setMusicTop={this.setMusicTop} />
            </div >
        )
    }
}

export default App; 