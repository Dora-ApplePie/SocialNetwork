import {PostType} from "./store";

let initialState = {
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
    profileInfo: [
        {
            imgBar: 'https://png.pngtree.com/thumb_back/fw800/background/20191025/pngtree-red-smoke-in-black-background-image_320082.jpg',
            imgAvatar: 'https://habrastorage.org/files/60c/afa/aba/60cafaaba7584b6a85be69d843d751e7.jpeg',
            name: 'Daria Don',
            birthday: 'Date of Birth: 13 September',
            city: 'City: Washington',
            education: 'Education: Standford',
            mobile: 'Mobile: +375(29)666-66-66',
        },
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action: profileReducerType) => {
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

