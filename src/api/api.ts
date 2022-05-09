import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5fa5e884-bc01-4fa7-a760-a9be4c50cb3a",
    },
});

type ResponseType = {
    resultCode: number
    messages: [string],
    data: {}
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => response.data);
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },

    getProfile(userId: string) {
        //backward compatibility
        console.warn('Obsolete method. Please profileAPI obj')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {

    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
