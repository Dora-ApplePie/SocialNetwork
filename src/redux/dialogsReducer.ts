export type initialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
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
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action: DialogsReducerType): initialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MSG-BODY':
            return { ...state, newMessageBody: action.body};

        case 'SEND-MSG ':
            let body = state.newMessageBody;
            return { ...state, messages: [...state.messages, {id: 6, message: body}], newMessageBody:''};
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

type newMessageBodyType = ReturnType<typeof newMessageBodyAC>

type sendMessageType = ReturnType<typeof sendMessageAC>

export type DialogsReducerType = newMessageBodyType | sendMessageType