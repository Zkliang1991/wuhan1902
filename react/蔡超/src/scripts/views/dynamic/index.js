import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs, Toast } from 'antd-mobile';

import { getTabs, tabsList, getSheet, setSheetData, setSheet, setTabList } from '~/actions';

@connect(
    state => {
        return {
            dynamic: state.dynamic,
            songsheet: state.songsheet
        }
    },
    dispatch => {
        return {
            getTabs: ({ url }, cb) => dispatch(getTabs({ url }, cb)),
            tabsList: ({ url, params }, cb) => dispatch(tabsList({ url, params }, cb)),
            getSheet: ({ url, params }, cb) => dispatch(getSheet({ url, params }, cb)),
            setSheetData: (data) => dispatch(setSheetData(data)),
            setSheet: () => dispatch(setSheet()),
            setTabList: () => dispatch(setTabList())
        }
    }
)
class Dynamic extends Component {

    goSheet = (data) => {
        this.props.setSheet();
        Toast.loading('加载中...', 10, () => {
            Toast.loading('获取时间较长,请稍等....', 60)
        });
        this.props.setSheetData(data);
        this.props.getSongSheet();
        this.props.getSheet({ url: 'https://v1.itooi.cn/netease/songList', params: { id: data.id, format: 1 } }, () => {
            Toast.success('获取成功', 1);
        })
    }

    setList(tab) {
        this.props.setTabList();
        Toast.loading('加载中...', 10, () => {
            Toast.loading('获取时间较长,请稍等.....', 60)
        });
        this.props.tabsList({ url: 'https://v1.itooi.cn/netease/songList/hot', params: { categoryType: tab.name, page: 0 } }, () => {
            Toast.success('获取成功！', 1)

        })
    }
    componentWillMount() {
        Toast.loading('加载中...', 100);
        this.props.getTabs({ url: 'http://47.93.187.155:1998/react/dynamic/tab' }, (res) => {
            Toast.success('获取成功！', 1)
            var name = res.data.result[0].name
            this.props.tabsList({ url: 'https://v1.itooi.cn/netease/songList/hot', params: { categoryType: name, page: 0 } })
        });

    }
    render() {
        const {
            dynamic: {
                tabs,
                tabsList
            }
        } = this.props;
        return (
            <div style={{ width: '100%', height: '100%', background: 'white' }}>
                {/* 分类名 */}
                <Tabs tabs={tabs}
                    prerenderingSiblingsNumber={false}
                    tabBarPosition="left"
                    tabDirection="vertical"
                    onChange={(tab) => this.setList(tab)}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={15} />}
                >
                    {
                        tabs && tabs.map((tab, i) => {
                            return (
                                //每个分类的内容
                                <div ref='tablist' key={i}>
                                    {
                                        tabsList.map((item, i) => {
                                            return (
                                                <div onClick={() => { this.goSheet({ img: item.coverImgUrl, name: item.name, nickname: item.creator.nickname, playCount: item.playCount, tags: item.tags, nickImg: item.creator.avatarUrl, id: item.id }) }} key={i} style={{ width: '100%', height: '100%', background: '#efefef', animation: ' zoomIn ' + 0.2 * i + 's' }}>
                                                    <div style={{ width: '100%', height: '120px', display: 'flex', borderLeft: '5px solid white', borderRight: '5px solid white', borderBottom: '5px solid white' }}>
                                                        <div style={{ height: '120px', width: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <div style={{ height: '100px', width: '100px', position: 'relative' }}>
                                                                <img style={{ width: '100%', height: '100%' }} src={item.coverImgUrl} alt="" />
                                                                <div style={{ position: 'absolute', right: '5px', top: 0, fontSize: '0.2rem', color: 'white' }}>
                                                                    <span className='iconfont icon-ting'></span>{item.playCount}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ padding: '10px 0', position: 'relative', flex: 1 }}>
                                                            <div style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                display: 'box',
                                                                whiteSpace: 'nowrap',
                                                                fontSize: '0.42rem',
                                                                width: '40vw'
                                                            }}>{item.name}</div>

                                                            <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '35px' }}>
                                                                <img style={{ width: '22px', height: '22px', borderRadius: '50%', marginRight: '3px' }} src={item.creator.avatarUrl} alt="" />
                                                                <span style={{ fontSize: '0.3rem', }}>{item.creator.nickname}</span>
                                                            </div>
                                                            <div style={{ fontSize: '0.2rem', position: 'absolute', bottom: '5px', right: '5px' }}>查看详情</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            )

                        })
                    }
                </Tabs>
            </div>
        )
    }
}

export default Dynamic;