

import "./index.scss";
import {Switch,Route,Redirect} from "react-router-dom";
import { Home } from "../home";
import { Cart } from "../cart";
import { Classify } from "../classify";
import { My } from "../my";
import { Foot } from "../../components/foot";
import { MFoot } from "../../components/mFoot/mFoot";

export class App extends Component{

    render(){
        return (
            <div className = "box">
                <Switch>
                    <Route path = "/app/home" component = {Home} />
                    <Route path = "/app/cart" component = {Cart} />
                    <Route path = "/app/classify" component = {Classify} />
                    <Route path = "/app/my" component = {My} />
                    <Route
                    render = {
                        ()=>(<Redirect to = "/app/home"/>)
                    }
                    />
                </Switch>
                {/* <Foot/> */}
                <MFoot/>
            </div>
        )
    }
}
