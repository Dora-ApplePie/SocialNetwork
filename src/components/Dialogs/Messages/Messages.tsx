import React from "react";
import style from "./Messages.module.css";
import {MessageType} from "../../../redux/dialogsReducer";


type PropsType = {
    messages: MessageType
}

const Messages = (props: PropsType) => {

    return (
        <div>
            <div className={style.message}>{props.messages.message}</div>
        </div>
    )
}

export default Messages;