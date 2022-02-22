import React from "react";
import {newMessageBodyAC, sendMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsComponent = () => {

    //let sendMessage = React.createRef<HTMLTextAreaElement>(); по максимуму не используем

    return <StoreContext.Consumer>
        { store => {
            let onSendMessage = () => {
                store.dispatch(sendMessageAC())
            }

            let onChangeNewMessage = (body: string) => {
                store.dispatch(newMessageBodyAC(body))
            }
        return <Dialogs updNewMessageBody={onChangeNewMessage}
                 sendMessage={onSendMessage}
                 dialogPage={store.getState().dialogPage}
                 newMessageBody={store.getState().dialogPage.newMessageBody}/>}
    }
    </StoreContext.Consumer>
}

export default DialogsComponent;