import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../../redux/state";


type PropsType = {
    dialogPage: DialogPageType
}


const Dialogs = (props: PropsType) => {

    let sendMessage = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(sendMessage.current?.value)
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
            {MessagesElements} {/*Отрисовка компоненты через переменную и маппинг*/}
        </div>
    </div>
    <div>
        <textarea className={style.button}  ref={sendMessage}></textarea>
        <button  onClick={addMessage}>Send</button>
    </div>
</div>
    )
}

export default Dialogs;