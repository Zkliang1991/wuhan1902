import React , {Component} from "react"
import "./index.scss"
import {Switch,Route,Redirect} from "react-router-dom"

import {Home} from "../home"
import {Classify} from "../classify"
import {Cart} from "../cart"
import {Mine} from "../mine"
import {Foot} from "../../components/foot/index.js"

export class App extends Component{
    render(){
        return(
            <div className="box">
                <Switch>
                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/classify/:type?" component={Classify}/>
                    <Route path="/app/cart" component={Cart}/>
                    <Route path="/app/mine" component={Mine}/>

                    <Route  render={
                        ()=>(<Redirect to="/app/home"/>)
                    }/>
                </Switch>
                <Foot/>
            </div>
        )
    }
}
// //<Route  render={
//     ()=>(<Redirect to="/app/home"/>)
// }/>