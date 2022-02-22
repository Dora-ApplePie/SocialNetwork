import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state);
})

