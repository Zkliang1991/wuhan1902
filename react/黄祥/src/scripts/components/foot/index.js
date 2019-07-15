import React from 'react';
import "./index.scss";
import { createHashHistory } from 'history';
const history = createHashHistory();

export class Foot extends React.Component {

    changefoot(tag) {
        for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
            document.getElementsByTagName("li")[i].className = ""
        }
        this.refs[tag].className = "selicon"
        history.push(`/main/${tag}`)
    }
    componentDidMount() {
        if (window.location.hash === "#/main/home" || "#/main/classify" || "#/main/rank" || "#/main/my") {
            console.log(window.location.hash)
            const nowroute = window.location.hash.replace("#/main/", "")
            for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
                document.getElementsByTagName("li")[i].className = ""
            }
            this.refs[nowroute].className = "selicon"
            console.log(nowroute)
            window.addEventListener('hashchange', () => {
                const nowroute = window.location.hash.replace("#/main/", "")

                console.log(nowroute)
                // for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
                //     document.getElementsByTagName("li")[i].className = ""
                // }
                // this.refs[nowroute].className = "selicon"
            })
        }
    }
    render() {
        return (
            <div className="footbar">
                <ul>
                    <li id="home" ref='home' onClick={() => this.changefoot("home")}>
                        <i className="iconfont icon-home"></i>
                        <p>
                            首页
                        </p>
                    </li>
                    <li id="classify" ref='classify' onClick={() => this.changefoot("classify")}>
                        <i className="iconfont icon-shu1"></i>
                        <p>
                            分类
                        </p>
                    </li>
                    <li id="rank" ref='rank' onClick={() => this.changefoot("rank")}>
                        <i className="iconfont icon-paihangbang--"></i>
                        <p>
                            排行榜
                        </p>
                    </li>
                    <li id="my" ref='my' onClick={() => this.changefoot("my")}>
                        <i className="iconfont icon-my"></i>
                        <p>
                            我的
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
