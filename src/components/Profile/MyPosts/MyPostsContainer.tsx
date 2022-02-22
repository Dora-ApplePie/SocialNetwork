import React from "react";
import {
    addPostAC, PostType,
    updTextPostAC,
} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    newPostText: string
    posts: PostType[]
}

type MapDispatchToPropsType = {
    updNewPostText: (newText: string) => void
    addPost: () => void
}

export type PostPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updNewPostText: (newText: string) => {
            dispatch(updTextPostAC(newText));
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;