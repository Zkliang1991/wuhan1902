

import "./index.scss";
import {Badge} from "antd-mobile"
import {NavLink} from "react-router-dom";
import React, { Component } from "react";

export const foots = [
    {txt:"首页",path:"/lyra/home",name:"home",icon:"icon-zhuye"},
    {txt:"发现",path:"/lyra/find",name:"find",icon:"icon-dengpao"},
    {txt:"活动",path:"/lyra/activity",name:"activity",icon:"icon-huodong"},
    {txt:"工具",path:"/lyra/tool",name:"tool",icon:"icon-gongju"},
    {txt:"我的",path:"/lyra/mine",name:"mine",icon:"icon-shouye-copy"}
];

export class Foot extends Component{
    state = {
        foots
    }
    render(){
        const {
            foots
        }  = this.state;
        return (
            <footer>
                {
                    foots.map((foot,i)=>{
                        return (
                            <div key={i}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont icon " +foot.icon}> </i>
                                    <span> {foot.txt}</span>
                                    {i==2&&<Badge  className="hot" text="10" hot style={{ marginLeft: 12 }} />}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}