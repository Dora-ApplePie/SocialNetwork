export type UserType = {
    id: number
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    name: string
    status: string
    // location: {
    //     city: string
    //     country: string
    // }
}

export type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

export const userReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.payload.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state;
    }
}

//автогенерация
export type usersReducerType =
    followACType
    | unfollowACType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType

export type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>


export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            count: totalUsersCount
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

