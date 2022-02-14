import {PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: profileReducerType) => {
    switch (action.type) {
        case "ADD-POST":
            let NewPost: PostType = {
                id: new Date().getTime(),
                img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
                text: state.newPostText,
                LikeCount: 0,
            };
            state.posts.push(NewPost)
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

//автогенерация
export type profileReducerType = ReturnType<typeof addPostAC> | ReturnType<typeof updTextPostAC>

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

