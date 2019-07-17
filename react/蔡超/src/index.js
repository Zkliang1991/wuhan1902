import React from 'react';
import ReactDOM from 'react-dom';
import { AllView } from './scripts';
import { Provider } from 'react-redux';
import '@/styles/index.scss';
import * as serviceWorker from './serviceWorker';
import store from './scripts/store'
ReactDOM.render(
    <Provider store={store}>
        <AllView />

    </Provider >
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
