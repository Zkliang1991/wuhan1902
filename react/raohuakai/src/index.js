// //文件主入口

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './script/App';
import * as serviceWorker from './serviceWorker';
import {conso} from "&"
//样式引入
import "./styles/index.scss";
conso();


// // 渲染页面
ReactDOM.render(<App />, document.getElementById('root'));


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  //未开启缓存unregister()，   开启缓存register()


// import "./script/redux";
// import "./script/reactredux";
