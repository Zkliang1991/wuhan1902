
import React, { Component } from 'react';
import { SearchBar, Icon,Toast,Button } from 'antd-mobile';
import { connect } from 'react-redux';

import './index.scss';

import { setSearchOpen } from '~/actions';
import { getSearchList,setPageNum,setSearchList,setSearchValue,setPlayNum,addPlayList,addLikeSheet } from '../../actions';

@connect(
    state => {
        return {
            search: state.search,
            player:state.player,
            songlist:state.songlist,
            demo:state.demo
        }
    },
    dispatch => {
        return {
            setSearchOpen: () => dispatch(setSearchOpen()),
            getSearchList: ({ url, params }, cb) => dispatch(getSearchList({ url, params }, cb)),
            setSearchList: () => dispatch(setSearchList()),
            setPageNum:(num) => dispatch(setPageNum(num)),
            setSearchValue:(value)=>dispatch(setSearchValue(value)),
            setPlayNum: (num) => dispatch(setPlayNum(num)),
            addPlayList: ({ url, params }, cb) => dispatch(addPlayList({ url, params }, cb)),
            addLikeSheet:({ url, params }, cb) => dispatch(addLikeSheet({ url, params }, cb)),
        }
    }
)
class Search extends Component {
    addList(e, song) {
        e.stopPropagation();
        this.props.addPlayList({ url: 'http://47.93.187.155:1998/react/songlist/add', params: song })
    }
    addPlay(song) {
        let flag = false;
        let num = null;
        this.props.songlist.playList.map((item, i) => {
            if (item.id == song.id&&item.count== localStorage.use) {
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
    getSearch=(value)=>{
        this.props.setSearchValue(value);
        this.props.setSearchList();
        Toast.loading('搜索中...', 60)
        this.props.getSearchList({url:'https://v1.itooi.cn/netease/search',params:{keyword:value,type:'song',pageSize:'30',page:0,format:1}},()=>{
            Toast.success('搜索成功！',1)
        })
    }
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
    goback = () => {
        
        if (this.props.search.searchOpen) {
            this.props.setSearchList();
            this.refs.search.className = 'search-out'
            setTimeout(() => {
                this.props.setSearchOpen();
            }, 200);
        } else {
            
            this.refs.search.className = 'search-in';
            this.props.setSearchOpen();
        }
    }
    goPageNum=()=>{
        var num = this.props.search.pageNum+1;
        this.props.setSearchList();
        this.props.getSearchList({url:'https://v1.itooi.cn/netease/search',params:{keyword:this.props.search.searchValue,type:'song',pageSize:'30',page:num,format:1}},()=>{
            this.props.setPageNum(num);  
            Toast.success('搜索成功！',2)
        })
    }
    backPageNum=()=>{
        if(this.props.search.pageNum<1){
            Toast.fail('这已经是第一页了！',1)
        }else{
           var num = this.props.search.pageNum-1;
            this.props.setSearchList();
            this.props.getSearchList({url:'https://v1.itooi.cn/netease/search',params:{keyword:this.props.search.searchValue,type:'song',pageSize:'30',page:num,format:1}},()=>{
                this.props.setPageNum(num);  
                Toast.success('搜索成功！',1)
            }) 
        }
        
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const {
            search: {
                searchOpen,
                searchList,
                pageNum
            },
            player:{
                playId
            }
        } = this.props
        return (
            <div
                ref='search'
                style={{
                    width: '100vw',
                    background: 'white',
                    position: 'fixed',
                    top: searchOpen ? 0 : '100vh',
                    // top: 0,
                    bottom: '55px',
                    zIndex: '29',
                    left: 0
                }}>
                <Icon onClick={this.goback} style={{ position: 'absolute', left: '0', top: '0', zIndex: '10', width: '8vw', height: '28px', padding: '8px 0', }} type='down' />
                <SearchBar
                    cancelText='搜索'
                    showCancelButton
                    style={{ width: '89vw', paddingRight: '2vw', paddingLeft: '9vw' }}
                    placeholder="请输入你想搜的歌曲"
                    onCancel={(value) =>this.getSearch(value)}
                />
                <div style={{ position: "absolute", top: '44px', bottom: 0, width: '100vw',overflowY:'scroll' }}>
                    {
                        searchList&&searchList.map((song,i)=>{
                            return(
                                <div
                                    className={playId == song.id ? 'search-active' : ''} 
                                    onClick={() => this.addPlay(song)} 
                                    ref={'song' + i} 
                                    key={i} 
                                    style={{
                                        position: 'relative',
                                        animation:' flipInX '+0.2*i+'s'
                                    }}
                                >
                                    <div style={{position: 'relative', width: '100%',display: 'flex',justifyContent: 'space-between',alignItems: 'flex-end',padding: '10px 0',borderBottom: '1px solid #AFAFAF'}}>
                                        <div style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center'}}>
                                            <div style={{padding: '0 4vw'}}>
                                                <span style={{color: '#C62F2F', display: playId == song.id ? 'block' : 'none'}} className='iconfont icon-bofang'></span>
                                                <span style={{ display: playId == song.id ? 'none' : 'block' }} >
                                                    {i + 1}
                                                </span>
                                            </div>
                                            <div style={{ paddingLeft: '0.3vw', width: '40vw', display:'flex' }} >
                                                <div  style={{ fontSize: '0.4rem', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >
                                                    {song.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ fontSize: '0.38rem',  width: '25vw', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                            {song.singer}
                                        </div>
                                        <div style={{ padding: '0 4vw' }}>
                                            <span onClick={(e) => this.gobtm(e, i)} className='iconfont icon-shenglve'></span>
                                        </div>
                                    </div>
                                    <div ref={'songbtm' + i} style={{ position: 'absolute', height: '0px', width: '100vw', top: '40px', boxSizing: 'border-box', borderBottom: '1px solid #555555', display: 'flex', justifyContent: 'space-around', alignItems: 'center', overflow: 'hidden' }} >
                                        <div onClick={(e) => this.addList(e, song)} style={{textAlign: 'center' }}>
                                            <div>
                                                <span 
                                                className='iconfont icon-jiahao
                                                '> 
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '0.2rem', padding: '0.1rem 0'}} >
                                                播放列表
                                            </div>
                                        </div>
                                        <div onClick={(e)=>this.addLike(e,song)} style={{ textAlign: 'center' }}>
                                            <div>
                                                <span className='iconfont icon-aixin'></span>
                                            </div>
                                            <div style={{ fontSize: '0.2rem', padding: '0.1rem 0' }}>喜欢</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{display:searchList.length ? 'flex' : 'none',justifyContent:'space-around',padding:'2vh 0',}}>
                        <Button style={{width:'20vw',height:'10vw',lineHeight:'10vw'}} onClick={this.backPageNum}>上一页</Button>
                        <div style={{width:'20vw',height:'10vw',lineHeight:'10vw',textAlign:'center'}}>第{pageNum+1}页</div>
                        <Button style={{width:'20vw',height:'10vw',lineHeight:'10vw'}} onClick= {this.goPageNum}>下一页</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search
