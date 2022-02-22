import React, {ChangeEvent} from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updTextPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState();

    let addPostText = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (newText: string) => {
        props.store.dispatch(updTextPostAC(newText));

    }
    return (<MyPosts newPostText={state.profilePage.newPostText} updNewPostText={onPostChange} addPost={addPostText}
                     posts={state.profilePage.posts}/>)
};