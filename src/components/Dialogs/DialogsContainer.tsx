import React from "react";
import {initialStateType, newMessageBodyAC, sendMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogPage: initialStateType,
    newMessageBody: string,
}

type MapDispatchToPropsType = {
    sendMessage: () => void,
    updNewMessageBody: (body: string) => void,
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => { //это функция которая принимает стейт
    return {
        dialogPage: state.dialogPage,
        newMessageBody: state.dialogPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updNewMessageBody: (body: string) => {
            dispatch(newMessageBodyAC(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;