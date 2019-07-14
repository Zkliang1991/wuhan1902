



import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import { Guide } from "./guide";
import {App} from "./app";
import { Search } from "./search";
import { Login } from "./login";
import { Scan } from "./scan";
import {connect} from "react-redux";
import { setOldUrl, setNewUrl } from "../actions";
import { Good } from "./good";
import {Comment} from "./comment";
import {Register} from "./register";

export class IndexView extends Component{
    render(){
        // console.log(this.props);
        return (
            <Router
            basename = "/"
            >
                <div id = "main">
                    <Route component = {Layout}/>
                </div>
            </Router>
        )
    }
}
// 所有路由配置在layout
@connect(
    state=>{
        return {
            newUrl:state.myUrl.newUrl
        }
    }
)
export class Layout extends Component{

    componentWillUpdate(){
        var hash = location.hash;
        const tab = hash.split("#/app/")[1];
        // console.log(tab);
        const {newUrl} = this.props;
        this.props.dispatch(setOldUrl(newUrl)); 
        this.props.dispatch(setNewUrl(tab)); 

    }


    render(){
        return (
            <Switch>
                <Route path = "/" component = {Guide} exact />
                <Route path = "/guide" component = {Guide} />
                <Route path = "/app" component = {App} />
                <Route path = "/search" component = {Search} />
                <Route path = "/login" component = {Login} />
                <Route path = "/scan" component = {Scan} />
                <Route path = "/good/detail/:goodId?" component = {Good} />
                <Route path = "/comment" component = {Comment} />
                <Route path = "/register" component = {Register} />
                <Route 
                    render ={
                        ()=>(<Redirect to = "/app/home" />)
                    }
                />
                
            </Switch>
        )
    }
}
// Layout.childContextTypes = {
//     history:PropTypes.object.isRequired,
//     match:PropTypes.object.isRequired,
//     location:PropTypes.object.isRequired
// }