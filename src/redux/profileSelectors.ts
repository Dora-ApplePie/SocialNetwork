import {AppRootStateType} from './reduxStore'

export const getPosts = (state: AppRootStateType) => state.profilePage.posts
export const getProfile = (state: AppRootStateType) => state.profilePage.profile
export const getStatus = (state: AppRootStateType) => state.profilePage.status