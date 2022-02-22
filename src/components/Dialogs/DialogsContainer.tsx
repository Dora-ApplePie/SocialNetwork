import React from "react";
import {StoreType} from "../../redux/store";
import {newMessageBodyAC, sendMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type PropsType = {
    store: StoreType
    newMessageBody: string
}


const DialogsComponent = (props: PropsType) => {

    //let sendMessage = React.createRef<HTMLTextAreaElement>(); по максимуму не используем

    let state = props.store.getState().dialogPage

    let onSendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onChangeNewMessage = (body: string) => {
        props.store.dispatch(newMessageBodyAC(body))
    }

    return (
        <Dialogs updNewMessageBody={onChangeNewMessage}
                 sendMessage={onSendMessage}
                 dialogPage={state}
                 newMessageBody={props.newMessageBody}/>)
}

export default DialogsComponent;