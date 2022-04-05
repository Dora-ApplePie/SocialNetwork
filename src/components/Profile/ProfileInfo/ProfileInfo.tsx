import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'

type ProfileProps = {
    profile: any
}

export const ProfileInfo = (props: ProfileProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.main}>
                <img className={styles.imgProfile} src={props.profile.photos.large} alt={"large pic"}/>
                <div className={styles.description}>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                </div>

            </div>
        </div>
    )
}
