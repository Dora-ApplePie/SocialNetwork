import {ResponseApiType, usersAPI, UserType} from '../api/api'
import {AppDispatch, AppThunkType} from './reduxStore'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type InitialStateType = typeof initialState

export type FollowAT = ReturnType<typeof followSuccessAC>
export type UnfollowAT = ReturnType<typeof unfollowSuccessAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgressAC>

export type UsersReducerAT = FollowAT | UnfollowAT | SetUsersAT |
    SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT | ToggleFollowingProgressAT

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAT): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccessAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccessAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const toggleFollowingProgressAC = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)

export const getUsersTC = (currentPage: number, pageSize: number): AppThunkType => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(toggleIsFetchingAC(true))

    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
    dispatch(toggleIsFetchingAC(false))
}

const followUnfollowFlow = async (dispatch: AppDispatch,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<ResponseApiType>,
                                  actionCreator: (userId: number) => FollowAT | UnfollowAT) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}

export const followTC = (userId: number): AppThunkType => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccessAC)
}
export const unfollowTC = (userId: number): AppThunkType => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccessAC)
}