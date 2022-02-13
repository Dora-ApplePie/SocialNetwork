import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from "./redux/state";

let rerenderTrie = (state: RootStateType) => {
    ReactDOM.render(
        <App updNewPostText={store.updNewPostText.bind(store)}
             state={state}
             addPost={store.addPost.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderTrie(store.getState());

store.subscribe(rerenderTrie)

