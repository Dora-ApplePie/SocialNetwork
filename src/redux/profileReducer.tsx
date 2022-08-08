import {v1} from 'uuid'
import {getProfileResponseType, PostType, profileAPI} from '../api/api'
import {AppThunkType} from './reduxStore'

export const ADD_POST = 'ADD_POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
export const DELETE_POST = 'DELETE_POST'

export type InitialStateType = typeof initialState

export type AddPostAT = ReturnType<typeof addPostAC>
export type setStatusAT = ReturnType<typeof setStatusAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type deletePostAT = ReturnType<typeof deletePostAC>

export type ProfileReducerAT = AddPostAT | setStatusAT | setUserProfileAT | deletePostAT

let initialState = {
    posts: [
        {id: v1(), message: 'Hello everyone!', likes: 69},
        {id: v1(), message: 'Have a nice day!', likes: 108}
    ] as Array<PostType>,
    profile: {
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: NaN,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerAT): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likes: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfileAC = (profile: getProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number): AppThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}
export const getStatus = (userId: number): AppThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}