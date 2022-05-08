import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateProfileStatus} from "../../redux/profileReducer";

type ProfileProps = {
    profile: any
    status: string
    updateProfileStatus: (status: string) => void
}
export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
            <MyPostsContainer />
        </div>
    )
}