import React from "react";
import {Info} from "./Info/Info";



export const ProfileInfo: React.FC = () => {
    const profileInfo = [{
        imgBar: 'https://png.pngtree.com/thumb_back/fw800/background/20191025/pngtree-red-smoke-in-black-background-image_320082.jpg',
        imgAvatar: 'https://habrastorage.org/files/60c/afa/aba/60cafaaba7584b6a85be69d843d751e7.jpeg',
        name: 'Daria Don',
        birthday: 'Date of Birth: 13 September',
        city: 'City: Washington',
        education: 'Education: Standford',
        mobile: 'Mobile: +375(29)666-66-66',
    }]
    let PageInfoElements =
        profileInfo
            .map((p,index) => <Info mobile={p.mobile}
                            imgBar={p.imgBar}
                            imgAvatar={p.imgAvatar}
                            birthday={p.birthday}
                            name={p.name}
                            city={p.city}
                            education={p.education}
                            key={index}
            />)
    return (
        <div>
            {PageInfoElements}
        </div>
    )
}
