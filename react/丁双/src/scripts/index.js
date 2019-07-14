

console.log("这是js的主入口文件");


import ReactDom,{render} from "react-dom";
import {IndexView} from "./views";

const rootEle = document.getElementById("app");

import {Provider} from "react-redux";
import store from "./store";

const hotRender = ()=>{
    render(
        <Provider store = {store}>
            <IndexView/>
        </Provider>,
        rootEle
    )
}
hotRender();

// import "./redux";

// import "./reactredux";