import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import store, {ProfilePageType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PropsType = {
    profilePage: ProfilePageType
    store: StoreType

}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}