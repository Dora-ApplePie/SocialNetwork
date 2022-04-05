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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => response.data)
    },

    unfollow(userId = 1) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId = 1) {
        return instance.post(`follow/${userId}`, {})
    }
}
