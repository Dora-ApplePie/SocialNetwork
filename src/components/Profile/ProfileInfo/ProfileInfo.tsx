import React from "react";
import {Info} from "./Info/Info";
import {ProfileInfoType} from "../../../redux/profileReducer";

type PropsType = {
    profileInfo: Array<ProfileInfoType>
}

export const ProfileInfo: React.FC <PropsType> = (props) => {
    let PageInfoElements =
        props.profileInfo
            .map(p => <Info mobile={p.mobile}
                            imgBar={p.imgBar}
                            imgAvatar={p.imgAvatar}
                            birthday={p.birthday}
                            name={p.name}
                            city={p.city}
                            education={p.education}
            />)
    return (
        <div>
            {PageInfoElements}
        </div>
    )
}
