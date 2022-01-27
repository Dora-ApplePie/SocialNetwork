import {rerenderTrie} from "../render";

export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SideBarType
    header: HeaderType
    navbar: NavbarType
}

export type NavbarType = {
    profileLink: string
    messagesLink: string
    newsLink: string
    musicLink: string
    settingsLink: string
}


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    profileInfo: Array<ProfileInfoType>
    newPostText: string
}

export type PostType = {
    id: number
    img: string
    text: string
    LikeCount: number
}

export type ProfileInfoType = {
    imgBar: string
    imgAvatar: string
    name: string
    birthday: string
    city: string
    education: string
    mobile: string

}

export type SideBarType = {}

export type HeaderType = {
    logoImg: string
}

let state: RootStateType = {
    profilePage: {
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
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Patricia"},
            {id: 2, name: "Helga"},
            {id: 3, name: "Regan"},
            {id: 4, name: "Vidra"},
            {id: 5, name: "Mouse"},
            {id: 6, name: "Dog"}
        ],
        messages: [
            {id: 1, message: 'Hello, how is your life, baby?'},
            {id: 2, message: "Yo! What's up dude?"},
            {id: 3, message: 'This is the reason of the night...ooohh'},
            {id: 4, message: 'Hola, como estas?'},
            {id: 5, message: 'Good evening, Ms. Dark'}
        ]
    },

    sidebar: {},

    header: {
        logoImg: 'https://pngimg.com/uploads/eagle/eagle_PNG1232.png',
    },
    navbar: {
        profileLink: 'Profile',
        messagesLink: 'Messages',
        newsLink: 'News',
        musicLink: 'Music',
        settingsLink: 'Settings',
    },
}

export const addPost = () => {
    const NewPost: PostType = {
        id: 5,
        img: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg',
        text: state.profilePage.newPostText,
        LikeCount: 0,
    }
    state.profilePage.posts.push(NewPost)
    state.profilePage.newPostText= '';
    rerenderTrie(state);
}

export const updNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderTrie(state);
}

export default state;
