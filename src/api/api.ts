import axios from 'axios'


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            "API-KEY": "5fa5e884-bc01-4fa7-a760-a9be4c50cb3a",
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(
            `users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseApiType>(`/follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseApiType>(`/follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<getProfileResponseType>(`/profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<getStatusResponseType>(`/profile/status/${userId}`)
    },
    updateStatus (status:string) {
        return instance.put<updateStatusResponseType>(`/profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseApiType<getAuthMeResponseType>>(`auth/me`)
    },
    login(email:string, password:string, rememberMe:boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

//types
export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    uniqueUrlName?: string | null
}
export type PostType = {
    id: string
    message: string
    likes: number
}

export type ResponseApiType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type getUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    followed: boolean
}
export type getProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string

    }
}
export type getAuthMeResponseType = {
    id: number
    email: string
    login: string
}
export type getStatusResponseType = string
export type updateStatusResponseType={
    resultCode: number
    messages: string[],
    data: object
}