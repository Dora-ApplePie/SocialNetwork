import React from "react";
import style from "./Info.module.css"
import {ProfileInfoType} from "../../../../redux/profileReducer";



export const Info: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div><img className={style.imgHead} alt={'head-img'}
                      src={props.imgBar}/></div>
            <div className={style.main}>
                <img className={style.imgProfile} alt={'ava'}
                     src={props.imgAvatar}/>
                <div className={style.description}>
                    <h2>{props.name}</h2>
                    <p>{props.birthday}</p>
                    <p>{props.city}</p>
                    <p>{props.education}</p>
                    <p>{props.mobile}</p>
                </div>
            </div>
        </div>
    )
}
