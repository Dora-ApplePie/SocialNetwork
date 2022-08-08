import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5fa5e884-bc01-4fa7-a760-a9be4c50cb3a",
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users`, {
            params: {
                count: pageSize,
                page: currentPage
            }
        })
            .then(response => response.data);
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },

    getProfile(userId: number) {
        //backward compatibility
        console.warn('Obsolete method. Please profileAPI obj')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/` + userId)
    },

    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthUserDataType>>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`);
    },
}

//types

export type GetUsersResponseType = {
    error: null | string
    items: Array<UserDataType>
    totalCount: number
}

export type UserDataType = {
    name: string
    id: number
    photos: PhotosUserType
    status: null | string
    followed: boolean
}

export type PhotosUserType = {
    small: null | string
    large: null | string
}


export type ResponseType<D = {}> = {
    data: D
    messages: Array<any>
    resultCode: number
}

export type AuthUserDataType = {
    id: number
    email: string
    login: string
};

export type UserProfileType = {
    aboutMe: string | null
    contacts: ContactsUserType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number,
    photos: PhotosUserType
}

export type ContactsUserType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
