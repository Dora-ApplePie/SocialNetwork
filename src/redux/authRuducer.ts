import {authAPI, AuthUserDataType, profileAPI, UserProfileType} from "../api/api";
import {AppDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";


const initialState: initialStateType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
    authUserData: {} as AuthUserDataType,
    authUserProfile: {} as UserProfileType
};

export const authReducer = (state: initialStateType = initialState, action: authReducerType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        case REMOVE_USER_DATA:
            return {...state, authUserData: {} as AuthUserDataType, isAuth: false}
        case SET_AUTH_USER_PROFILE:
            return {...state, authUserProfile: action.payload.profile}
        case REMOVE_AUTH_USER_PROFILE: {
            return {...state, authUserProfile: {} as UserProfileType}
        }
        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return (dispatch: AppDispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(true, id, login, email));
                }
            })
    }
};

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
};

export const logoutThunkCreator = () => (dispatch: AppDispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(false, 0, '', ''));
            }
        })
};

export const removeUserDataAC = () => {
    return {
        type: REMOVE_USER_DATA,
    } as const
}

const setAuthUserData = (isAuth: boolean, id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        }
    } as const
}

export const setAuthUserProfileAC = (profile: UserProfileType) => {
    return {
        type: SET_AUTH_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}

export const removeAuthUserProfileAC = () => {
    return {
        type: REMOVE_AUTH_USER_PROFILE,
    } as const
}

export const setAuthUserTC = () => async (dispatch: AppDispatch) => {
    try {
        const data = await authAPI.me();
        if (!data.data.resultCode) {
            const userData = data.data.data;
            dispatch(setAuthUserData(true, userData.id, userData.email, userData.login));
            const profile = await profileAPI.getProfile(userData.id);
            dispatch(setAuthUserProfileAC(profile.data));
        }
    } catch (e) {
        const err = e as Error;
        console.error('setAuthUserTC: ' + err.message);
    }
}


//types
export type authReducerType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof removeUserDataAC>
    | ReturnType<typeof setAuthUserProfileAC>
    | ReturnType<typeof removeAuthUserProfileAC>

export type initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    authUserData: AuthUserDataType
    authUserProfile: UserProfileType
}

const SET_USER_DATA = 'SET-USER-DATA';
const REMOVE_USER_DATA = 'REMOVE-USER-DATA';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';
const REMOVE_AUTH_USER_PROFILE = 'REMOVE-AUTH-USER-PROFILE';



