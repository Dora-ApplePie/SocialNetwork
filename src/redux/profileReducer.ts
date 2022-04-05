import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}

export type PostType = {
    id: number
    img: string
    text: string
    LikeCount: number
}

let initialState: InitialStateType = {
    posts: [
        {
            id: 1,
            img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
            text: 'Hello, Patricia! How are you?',
            LikeCount: 20,
        },
        {
            id: 2,
            img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
            text: "It's my firs program!",
            LikeCount: 40,
        },
        {
            id: 3,
            img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
            text: "Hi, bitch!",
            LikeCount: 1400,
        },
        {
            id: 4,
            img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
            text: "VK is the boolshit",
            LikeCount: 40000,
        }],
    newPostText: '',
    profile: null,
}

export const profileReducer = (state = initialState, action: profileReducerType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let NewPost: PostType = {
                id: new Date().getTime(),
                img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
                text: state.newPostText,
                LikeCount: 0,
            };
            return {...state, posts: [...state.posts, NewPost], newPostText: ''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        default:
            return state;
    }
}

export const setUserProfileData = (userId: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        if (!userId) {
            userId = "21450";
        }
        userAPI.setUserProfile(userId)
            .then(
                response => {
                    dispatch(setUserProfile(response.data));
                });
    }
}

//автогенерация
export type profileReducerType = addPostACType | updTextPostACType | setUserProfileType

export type addPostACType = ReturnType<typeof addPostAC>
export type updTextPostACType = ReturnType<typeof updTextPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updTextPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}

