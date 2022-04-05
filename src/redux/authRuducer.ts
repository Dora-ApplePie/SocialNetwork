import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

const initialState: initialStateType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
};

export const authReducer = (state: initialStateType = initialState, action: authReducerType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthData = () => {
    return (dispatch: Dispatch<authReducerType>) => {
        userAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            })
    }
}

//автогенерация
export type authReducerType = setUserDataACType

export type setUserDataACType = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login,
        }
    } as const
}


