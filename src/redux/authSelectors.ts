import {AppRootStateType} from './reduxStore'

export const getId = (state: AppRootStateType) => state.auth.id
export const getLogin = (state: AppRootStateType) => state.auth.login
export const getIsAuth = (state: AppRootStateType) => state.auth.isAuth