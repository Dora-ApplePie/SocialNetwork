import {DialogPageType} from "./state";

export const dialogsReducer = (state: DialogPageType, action: DialogsReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MSG-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MSG ':
            let body = state.newMessageBody;
            state.messages.push({id: 6, message: body})
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}


export const newMessageBodyAC = (newMsgText: string) => {
    return {
        type: 'UPDATE-NEW-MSG-BODY',
        body: newMsgText
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MSG '
    } as const
}

export type DialogsReducerType = ReturnType<typeof newMessageBodyAC> | ReturnType<typeof sendMessageAC>