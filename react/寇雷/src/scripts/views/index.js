import React , {Component} from "react"
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import { Guide } from "./guide";
import { App } from "./app";
import { Xieyi } from "./xieyi";
import { Repassword } from "./repassword";
import { GetCode } from "./getCode";
import { SetCode } from "./setCode";
import { Login } from "./login";
import { Reg } from "./reg";
import { Search } from "./search";
import  Video  from "./av";
import  VideoType from "./videotype"
import {Personal} from "./personal"
import {Usersetting} from "./usersetting"
export class IndexView extends Component{
    render(){
        return(
            <Router
                basename="/"
            >
                <div id="main">
                    <Route component={Layout}/>
                </div>
            </Router>
        )
    }
}
//所有的路由配置到Layout
export class Layout extends Component{
    // getChildContext(){   //通过context传递数据给FOOT实现跳转功能   已废弃
    //     return{
    //         history:this.props.history,
    //         location:this.props.location,
    //         match:this.props.match
    //     }
    // }
    render(){
        return(
            <Switch>
                <Route path="/" component={Guide} exact/>
                <Route path="/guide" component={Guide}/>
                <Route path="/app" component={App}/>
                <Route path="/xieyi" component={Xieyi}/>
                <Route path="/repassword" component={Repassword}/>
                <Route path="/getCode" component={GetCode}/>
                <Route path="/setCode" component={SetCode}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path="/search/:keyword?" component={Search}/>
                <Route path="/video/:av/:name?" component={Video}/>
                <Route path="/videoType/:type" component={VideoType}/>
                <Route path="/personal/:username?" component={Personal}/>
                <Route path="/usersetting/:username?" component={Usersetting}/>


                <Route
                    render={
                        ()=>(<Redirect to="/app/home"/>)
                    }
                />
            </Switch>
        )
    }
}
// Layout.childContextTypes={   //已废弃
//     history:PropTypes.object.isRequired,
//     location:PropTypes.object.isRequired,
//     match:PropTypes.object.isRequired
// }