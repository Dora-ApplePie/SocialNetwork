import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updNewPostText: (text: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo} />
            <MyPosts updNewPostText={props.updNewPostText} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addPost={props.addPost} />
        </div>
    )
}