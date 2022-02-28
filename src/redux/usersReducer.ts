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
}

const initialState: initialStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
        //     followed: false,
        //     fullName: 'Rozalind',
        //     status: "I'm crazy",
        //     location: {city: 'Madrid', country: 'Spain'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
        //     followed: true,
        //     fullName: 'Polina',
        //     status: "I'm a boss girl",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
        //     followed: false,
        //     fullName: 'Mailo',
        //     status: "I'm a dog",
        //     location: {city: 'Bali', country: 'Indonesia'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
        //     followed: true,
        //     fullName: 'Kevin',
        //     status: "I'm a children!",
        //     location: {city: 'Colorado', country: 'USA'}
        // },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
        default:
            return state;
    }
}

//автогенерация
export type usersReducerType = followACType | unfollowACType | setUsersType | setCurrentPageType | setTotalUsersCountType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            count: totalUsersCount
        }
    } as const
}

