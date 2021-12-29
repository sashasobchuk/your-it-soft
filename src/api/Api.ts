import {Api} from './config';


export const profileAPI = {
    getAllUsers(page: number, limit: number, searchValue: string, sort: boolean) {
        if (sort) {
            return Api.get(`users?_page=${page}&_limit=${limit}&q=${String(searchValue)}&_sort=name&_order=asc`)
        } else {
            return Api.get(`users?_page=${page}&_limit=${limit}&q=${String(searchValue)}`)
        }
    },
    getUserPosts(userId: number) {
        return Api.get(`/users/${userId}/posts`)
    },
}
