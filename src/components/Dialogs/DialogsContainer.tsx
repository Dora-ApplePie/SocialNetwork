import React from "react";
import {initialStateType, newMessageBodyAC, sendMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

type MapStateToPropsType = {
    dialogPage: initialStateType,
}

type MapDispatchToPropsType = {
    sendMessage: () => void,
    updNewMessageBody: (body: string) => void,
}

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => { //это функция которая принимает стейт
    return {
        dialogPage: state.dialogPage,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);