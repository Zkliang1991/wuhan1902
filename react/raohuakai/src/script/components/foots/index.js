import React,{Component} from "react";

import "./index.scss"
import {Link,NavLink} from "react-router-dom"
export class Foot extends Component{
    constructor(props){
        super(props);
        this.state={
            foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"icon-group"},
                {txt:"分类",path:"/app/classify",name:"classify",icon:"icon-Stone-analytics"},
                {txt:"个人",path:"/app/cars",name:"car",icon:"icon-Stone-cafe"},
                {txt:"我",path:"/app/my",name:"my",icon:"icon-my"}
            ]
        }
    }
    render(){
        const {foots}=this.state
        return(
            <div className="app-foot">
                {foots.map((item,i)=>{
                    return (
                        
                        <div key={i} className="foot-div">
                        <NavLink to={item.path} activeClassName="nav-active" className="foot-div">
                            <p className={"iconfont icon "+item.icon+" foot-logo"}></p> 
                            <p><span >{item.txt}</span></p>
                        </NavLink>
                        </div>
                    )
                })}
            </div>
        )
    }
}
