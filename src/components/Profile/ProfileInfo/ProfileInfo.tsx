import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

type ProfileProps = {
    profile: any
    status: string
    updateProfileStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.main}>
                <img className={styles.imgProfile} src={props.profile.photos.large} alt={"large pic"}/>
                <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                <div className={styles.description}>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                </div>

            </div>
        </div>
    )
}
