import {v1} from 'uuid';

export const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type initialStateType = typeof initialState

export type SendNewMessageBodyACType = ReturnType<typeof sendNewMessageBodyAC>

export type DialogsReducerAT = SendNewMessageBodyACType

let initialState = {
    dialogs: [
        {id: v1(), name: 'Sabrina'},
        {id: v1(), name: 'Patricia'},
        {id: v1(), name: 'Jessica'},
        {id: v1(), name: 'Ronda'},
        {id: v1(), name: 'Kevin'}
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: "Yo! What's up dude?"},
        {id: v1(), message: 'Hola, como estas?'},
        {id: v1(), message: 'Good evening!'}
    ] as Array<MessageType>,
}

export const dialogsReducer =
    (state: initialStateType = initialState, action: DialogsReducerAT): initialStateType => {
        switch (action.type) {
            case SEND_MESSAGE:
                let newMessage = {id: v1(), message: action.newMessageBody}
                return {
                    ...state,
                    messages: [...state.messages, newMessage],

                }
            default:
                return state
        }
    }

export const sendNewMessageBodyAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)