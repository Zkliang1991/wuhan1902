import React from 'react';
import { Guide } from "./views/guide"
import { Home } from "./views/home"
import { Classify } from "./views/classify"
import { Rank } from "./views/rank"
import { My } from "./views/my"
import { Majortype } from "./views/majortype"
import { Detail } from "./views/detail"
import { Catalogue } from "./views/catalogue"
import { Content } from "./views/content"
import { Search } from "./views/search"
import { Head } from "./components/head"
import { Foot } from "./components/foot"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"

export class App extends React.Component {
    render() {
        return (
            <HashRouter basename="/">
                <div style={{ width: "100%", height: "100%" }}>
                        <Route component={Layout} />
                </div>
            </HashRouter>
        )
    }
}


export class Layout extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Switch>
                    <Route path="/" component={Guide} exact />
                    <Route path="/guide" component={Guide} exact />
                    <Route path="/main" component={Mainpage} />
                    <Route path="/classify" component={classifyMajor} />
                    <Route path="/detail" component={DetailBookid} />
                    <Route path="/catalogue" component={Cata} />
                    <Route path="/content" component={Cont} />
                    <Route path="/search" component={Search} />
                    <Route
                        render={() => (<Redirect to="/main/home"></Redirect>)}
                    />
                </Switch>
            </div>
        )
    }
}

export class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/main/home" component={Home} exact />
                    <Route path="/main/classify/" component={Classify} exact />
                    <Route path="/main/rank" component={Rank} exact />
                    <Route path="/main/my" component={My} exact />
                    <Route
                        render={() => (<Redirect to="/main/home"></Redirect>)}
                    />
                </Switch>
                <Foot></Foot>
            </div>
        )
    }
}

export class classifyMajor extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/classify/:major" component={Majortype} exact />
                </Switch>
            </div>
        )
    }
}

export class DetailBookid extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/detail/:bookid" component={Detail} exact />
                </Switch>
            </div>
        )
    }
}

export class Cata extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/catalogue/:bookid" component={Catalogue} exact />
                </Switch>
            </div>
        )
    }
}

export class Cont extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Switch>
                    <Route path="/content/:link" component={Content} exact />
                </Switch>
            </div>
        )
    }
}