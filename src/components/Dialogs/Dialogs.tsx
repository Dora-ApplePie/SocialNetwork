import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../../redux/store";


type PropsType = {
    dialogPage: DialogPageType
    newMessageBody: string
    updNewMessageBody: (body: string) => void
    sendMessage: () => void
}


const Dialogs = (props: PropsType) => {

    //let sendMessage = React.createRef<HTMLTextAreaElement>(); по максимуму не используем

    let dialogElements = props.dialogPage.dialogs
        .map(d => <DialogItem dialogs={d}/>)

    let messagesElements = props.dialogPage.messages
        .map(m => <Messages messages={m}/>)

    let onChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updNewMessageBody(body)

    };

    let onSendMessage = () => {
        props.sendMessage();
    };


    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {dialogElements} {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
                <div className={style.messages}>
                    <div>{messagesElements}</div>
                    {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
            </div>
            <div>
                <textarea className={style.button} onChange={onChangeNewMessage} value={props.newMessageBody}
                          placeholder={"Enter your massage..."}/>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;