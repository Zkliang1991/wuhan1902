import React ,{Component} from "react"
import { TabBar } from 'antd-mobile';
import {NavLink} from "react-router-dom"
import {history} from "../../../utils"     //点击切换

export class Foot extends Component{
    state = {
        selectedTab: 'home',
    }

    renderContent=(tab,path)=>{
        return(
            <NavLink to={path}>



            </NavLink>
        )
    }

    componentWillMount(){
        const hash =window.location.hash;
        const tab = hash.replace("#/app/","")
        console.log(hash,tab)
        this.setState({
            selectedTab:tab
        })
    }


    render(){
        return(
            <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#FB7299"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="home"
                    icon={<i style={{
                        width: '22px',
                        height: '22px',
                        display:"block"
                        }}
                        className="iconfont icon-shouye"
                        />
                    }
                    selectedIcon={
                        <i 
                        className="iconfont icon-shouye1
                        "
                        style={{
                        width: '22px',
                        height: '22px',
                        display:"block"
                        }}
                    />
                    }
                    selected={this.state.selectedTab === 'home'}
                    // badge={1}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'home',
                    });
                    history.push("/app/home")
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <i style={{
                        width: '22px',
                        height: '22px',
                        display:"block"
                        }}
                        className="iconfont icon-fenquweixuanzhong"
                    />
                    }
                    selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        display:"block"
                    }}
                    className="iconfont icon-fenquxuanzhong"
                    />
                    }
                    title="分区"
                    key="classify"
                    // badge={'new'}
                    selected={this.state.selectedTab === 'classify'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'classify',
                    });
                    history.push("/app/classify")
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                    <i style={{
                        width: '22px',
                        height: '22px',
                        display:"block" }}
                        className="iconfont icon-dongtaiweixuanzhong"  
                    />
                    }
                    selectedIcon={
                    <i style={{
                        width: '22px',
                        height: '22px',
                        display:"block"}}
                        className="iconfont icon-dongtaixuanzhong"
                    />
                    }
                    title="动态"
                    key="cart"
                    // dot
                    selected={this.state.selectedTab === 'cart'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'cart',
                    });
                    history.push("/app/cart")
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<i style={{
                        width: '22px',
                        height: '22px',
                        display:"block" }}
                        className="iconfont icon-wode"
                    />}
                    selectedIcon={<i style={{
                        width: '22px',
                        height: '22px',
                        display:"block" }}
                        className="iconfont icon-wodedangxuan"  
                    />}
                    title="我的"
                    key="mine"
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'mine',
                    });
                    history.push("/app/mine")
                    }}
                >
                </TabBar.Item>
            </TabBar>
        </div>
        )
    }
}