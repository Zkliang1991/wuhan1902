
import React ,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import { Home } from "../home";
import { Cars } from "../cars";
import { My } from "../my";
import { Classify } from "../classify";
import "./index.scss"
import{Foot} from "@/script/components/foots"

//Switch   匹配url对应的第一个路由组件，如果第一个匹配成功，
//则拦截后面的路由组件，一般Seitch和exact配合使用，switch包裹路由组件，而exact放在父路由上使用

export class IndexApp extends Component{
    render(){
        return(
        
            <div >
                <div className="img-backgroued">
                    <img src={require("@/assets/images/350.png")} alt="" width="100%" height="100%"/>
                </div>
                <Switch>
                    <Route path="/app" component={Home} exact/>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/cars" component={Cars} />
                    <Route path="/app/my" component={My} />
                    <Route path="/app/classify" component={Classify} />
                    <Route 
                        render={
                            ()=> (<Redirect to="/app/home"  />)
                        }
                    />
                    
                    
                </Switch>
                <div className="head-cen"></div>
                <Foot></Foot>
            </div>
           
        )
    }
}