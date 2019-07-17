import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

import { NavLink } from 'react-router-dom';

import './index.scss';

class Head extends Component {

    setSearch = () => {
        this.props.getSearch();
    }
    setSidebar = () => {
        this.props.getSidebar()
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <NavBar
                    mode="light"
                    icon={<span style={{ fontSize: '29px', color: 'black' }} className="iconfont icon-caidan"></span>}
                    onLeftClick={this.setSidebar}
                    rightContent={[
                        <Icon
                            key="0"
                            type="search"
                            onClick={this.setSearch}
                            style={{ marginRight: '5px', color: 'black' }}
                        />,
                    ]}
                >
                    <NavLink
                        style={{ margin: ' 0 3vw', fontSize: '16px', fontWeight: '700', color: '#696969' }}
                        activeStyle={{ fontSize: '18px', color: 'black' }}
                        to='/app/home'
                        data-id={0}
                    >
                        我的
                    </NavLink>
                    <NavLink
                        style={{ margin: ' 0 3vw', fontSize: '16px', fontWeight: '700', color: '#696969' }}
                        activeStyle={{ fontSize: '18px', color: 'black' }}
                        to='/app/find'
                        data-id={1}
                    >
                        发现
                    </NavLink>
                    <NavLink style={{ margin: ' 0 3vw', fontSize: '16px', fontWeight: '700', color: '#696969' }}
                        activeStyle={{ fontSize: '18px', color: 'black' }}
                        to='/app/dynamic'
                        data-id={2}
                    >
                        分类
                    </NavLink>
                </NavBar>
            </div>

        )
    }
}

export default Head;