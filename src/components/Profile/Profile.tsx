import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfilePageType) => void

}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo}/>
            <MyPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}/>
        </div>
    )
}