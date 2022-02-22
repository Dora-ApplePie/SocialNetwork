import React from "react";
import {addPostAC, updTextPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let addPostText = () => {
                    store.dispatch(addPostAC());
                }

                let onPostChange = (newText: string) => {
                    store.dispatch(updTextPostAC(newText));

                }
                return <MyPosts newPostText={store.getState().profilePage.newPostText}
                                updNewPostText={onPostChange}
                                addPost={addPostText}
                                posts={store.getState().profilePage.posts}/>
            }
        }
        </StoreContext.Consumer>)
};