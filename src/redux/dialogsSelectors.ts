import {AppRootStateType} from './reduxStore'

export const getDialogs = (state: AppRootStateType) => state.dialogsPage.dialogs
export const getMessages = (state: AppRootStateType) => state.dialogsPage.messages