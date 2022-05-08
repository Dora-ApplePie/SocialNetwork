export type initialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

let initialState: initialStateType = {
    dialogs: [
        {id: 1, name: "Patricia"},
        {id: 2, name: "Helga"},
        {id: 3, name: "Ronda"},
        {id: 4, name: "Jessica"},
        {id: 5, name: "Tatiana"},
        {id: 6, name: "Doctor"}
    ],
    messages: [
        {id: 1, message: 'Hello, how is your life, baby?'},
        {id: 2, message: "Yo! What's up dude?"},
        {id: 3, message: 'This is the reason of the night...ooohh'},
        {id: 4, message: 'Hola, como estas?'},
        {id: 5, message: 'Good evening, Ms. Dark'}
    ],
}

export const dialogsReducer = (state = initialState, action: DialogsReducerType): initialStateType => {
    switch (action.type) {
        case 'SEND-MSG ':
            let body = action.newMessageBody;
            return { ...state, messages: [...state.messages, {id: 6, message: body}]};
        default:
            return state;
    }
}



export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'SEND-MSG ',
        newMessageBody
    } as const
}



type sendMessageType = ReturnType<typeof sendMessageAC>

export type DialogsReducerType = sendMessageType