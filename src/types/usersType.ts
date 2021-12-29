import {addressType} from './addressType';
import {companyType} from './companyType';
import {postType} from "./postType";

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: addressType,
    phone: string,
    website: string,
    company: companyType
}

export type sortPropType = {
    sort: boolean,
    setSort: (sort: boolean) => void,
}

export type changePostIdType = (id: number) => void

export type usersPropsType = {
    users: UserType[],
    sortObj: sortPropType,
    posts: Array<postType>
    getPosts: changePostIdType
    clearPosts: () => void


}
export type userPropType = {
    user: UserType
    getPosts: changePostIdType
    key?: number
}