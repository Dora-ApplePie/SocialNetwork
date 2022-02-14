import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App store={store}
             dispatch={store.dispatch.bind(store)}
        />
        </BrowserRouter>
        ,document.getElementById('root')
    );
}
rerenderTree(store.getState());

store.subscribe(rerenderTree)

