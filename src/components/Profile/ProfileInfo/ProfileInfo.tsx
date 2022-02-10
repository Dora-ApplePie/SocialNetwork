import React from "react";
import {ProfileInfoType} from "../../../redux/state";
import {Info} from "./Info/Info";

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
