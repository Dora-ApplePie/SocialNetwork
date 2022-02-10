import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updNewPostText} from "./redux/state";

export let rerenderTrie = (state: RootStateType) => {
    ReactDOM.render(
        <App updNewPostText={updNewPostText} state={state} addPost={addPost} />,
        document.getElementById('root')
    );
}

