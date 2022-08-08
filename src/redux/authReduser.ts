import {AppThunkType} from './reduxStore'
import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DARE = 'SET_USER_DARE'

type initialStateType = typeof initialState

export type setAuthUserDateAT = ReturnType<typeof setAuthUserDateAC>

export type AuthReducerAT = setAuthUserDateAT

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: AuthReducerAT) => {
    switch (action.type) {
        case SET_USER_DARE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserDateAC = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DARE,
    payload: {id, email, login, isAuth}
})

export const getAuthUserDateTC = (): AppThunkType<Promise<void>> => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserDateAC(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDateTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): AppThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDateAC(0, '', '', false))
    }
}