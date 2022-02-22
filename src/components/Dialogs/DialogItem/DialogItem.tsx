import React from "react";
import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.css"
import {DialogType} from "../../../redux/dialogsReducer";




type PropsType = {
    dialogs: DialogType
}

const DialogItem = (props: PropsType) => {
    let path = "/dialogs/" + props.dialogs.id
    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} to={path}>
                {props.dialogs.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;