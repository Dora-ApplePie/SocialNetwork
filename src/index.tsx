import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, RootStateType, subscribe, updNewPostText} from "./redux/state";

let rerenderTrie = (state: RootStateType) => {
    ReactDOM.render(
        <App updNewPostText={updNewPostText} state={state} addPost={addPost} />,
        document.getElementById('root')
    );
}
rerenderTrie(state);

subscribe(rerenderTrie)

