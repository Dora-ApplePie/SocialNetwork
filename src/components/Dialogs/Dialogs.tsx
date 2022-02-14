import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType, StoreType} from "../../redux/store";
import {newMessageBodyAC, sendMessageAC} from "../../redux/dialogsReducer";


type PropsType = {
    dialogPage: DialogPageType
    store: StoreType
    newMessageBody: string
}


const Dialogs = (props: PropsType) => {

    //let sendMessage = React.createRef<HTMLTextAreaElement>(); по максимуму не используем

    let addMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(newMessageBodyAC(body))
    }

    let DialogElements = props.dialogPage.dialogs
        .map(d => <DialogItem dialogs={d}/>);

    debugger;
    let MessagesElements = props.dialogPage.messages
        .map(m => <Messages messages={m}/>)

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {DialogElements} {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
                <div className={style.messages}>
                    <div>{MessagesElements}</div>
                    {/*Отрисовка компоненты через переменную и маппинг*/}
                </div>
            </div>
            <div>
                <textarea className={style.button} onChange={changeMessage} value={props.newMessageBody}
                          placeholder={"Enter your massage..."}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;