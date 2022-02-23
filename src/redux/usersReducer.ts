export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type initialStateType = {
    users: UserType[]
}

const initialState: initialStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
            followed: false,
            fullName: 'Rozalind',
            status: "I'm crazy",
            location: {city: 'Madrid', country: 'Spain'}
        },
        {
            id: 2,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
            followed: true,
            fullName: 'Polina',
            status: "I'm a boss girl",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
            followed: false,
            fullName: 'Mailo',
            status: "I'm a dog",
            location: {city: 'Bali', country: 'Indonesia'}
        },
        {
            id: 4,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
            followed: true,
            fullName: 'Kevin',
            status: "I'm a children!",
            location: {city: 'Colorado', country: 'USA'}
        },
    ]
};

export const userReducer = (state: initialStateType = initialState, action: usersReducerType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state;
    }
}

//автогенерация
export type usersReducerType = followACType | unfollowACType | setUsersType

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>


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

