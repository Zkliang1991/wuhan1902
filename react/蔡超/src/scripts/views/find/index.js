import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { Swipe } from '~/components/swipe'

import ShowCase from '~/components/showcase';

import { getBanner, getHighList } from '~/actions'

import './index.scss'
import { getHotList, getNewList, getSheet, setSheetData, setSheet } from '../../actions';

const SwipeItem = Swipe.item
@connect(
    state => {
        return {
            find: state.find,
            songsheet: state.songsheet
        }
    },
    dispatch => {
        return {
            getBanner: ({ url }) => dispatch(getBanner({ url })),
            getHighList: ({ url, params }, cb) => dispatch(getHighList({ url, params }, cb)),
            getHotList: ({ url, params }, cb) => dispatch(getHotList({ url, params }, cb)),
            getNewList: ({ url, params }, cb) => dispatch(getNewList({ url, params }, cb)),
            getSheet: ({ url, params }, cb) => dispatch(getSheet({ url, params }, cb)),
            setSheetData: (data) => dispatch(setSheetData(data)),
            setSheet: () => dispatch(setSheet())

        }
    }
)

class Find extends Component {
    // 进入歌单详情
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
    // 精品歌单
    newHighList = () => {
        Toast.loading('Loading...', 60)
        this.props.getHighList({ url: 'https://v1.itooi.cn/netease/songList/highQuality?', params: { cat: '全部', pageSize: 6 } }, () => {
            Toast.success('获取成功', 1);
        })
    }
    // 最热歌单
    newHotList = () => {
        var num = parseInt(Math.random() * 30);
        Toast.loading('Loading...', 60)
        this.props.getHotList({ url: 'https://v1.itooi.cn/netease/songList/hot?', params: { cat: '全部', pageSize: 6, page: num } }, () => {
            Toast.success('获取成功', 1);
        })
    }
    // 最新歌单
    newNewList = () => {
        var num = parseInt(Math.random() * 30);
        Toast.loading('Loading...', 60)
        this.props.getNewList({ url: 'https://v1.itooi.cn/netease/songList/hot?', params: { cat: '全部', orderType: 'new', pageSize: 6, page: num } }, () => {
            Toast.success('获取成功', 1);
        })
    }
    // 初始获取数据
    componentWillMount() {
        this.props.getBanner({ url: 'https://v1.itooi.cn/netease/banner' })
        if (!this.props.find.highList.length && !this.props.find.hotList.length && !this.props.find.newList.length) {
            this.props.getHighList({ url: 'https://v1.itooi.cn/netease/songList/highQuality?', params: { cat: '全部', pageSize: 6 } }, () => {
                this.props.getHotList({ url: 'https://v1.itooi.cn/netease/songList/hot?', params: { cat: '全部', pageSize: 6 } }, () => {
                    this.props.getNewList({ url: 'https://v1.itooi.cn/netease/songList/hot?', params: { cat: '全部', orderType: 'new', pageSize: 6 } })
                })
            })
        }

    }
    render() {
        const {
            find: {
                banner,
                highList,
                hotList,
                newList
            }
        } = this.props;
        return (
            <div style={{ width: '100%', height: '100%', background: 'white', overflowY: 'scroll' }}>
                {/* 轮播图 */}
                <Swipe id='banner' options={{
                    loop: true,
                    autoplay: true,
                    speed: 700,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                }} constyle={{ width: '100vw', height: '46vw' }}>
                    {
                        banner.length > 0 && banner.map((item, i) => {
                            return (
                                <SwipeItem key={i}>
                                    <div style={{ width: '100vw', height: '46vw', textAlign: 'center', paddingTop: '3vw' }}>
                                        <img style={{ width: '92vw', height: '42vw', borderRadius: '3vw', display: 'inline-block' }} src={item.picUrl} alt="" />
                                    </div>
                                </SwipeItem>
                            )
                        })
                    }
                </Swipe>
                <ShowCase title='精品歌单' list={highList} getNewList={this.newHighList} goSheet={this.goSheet} />
                <ShowCase title='热门歌单' list={hotList} getNewList={this.newHotList} goSheet={this.goSheet} />
                <ShowCase title='最新歌单' list={newList} getNewList={this.newNewList} goSheet={this.goSheet} />
            </div >
        )
    }
}

export default Find;