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

export const authReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {
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

//автогенерация
export type usersReducerType = setUserDataACType

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


