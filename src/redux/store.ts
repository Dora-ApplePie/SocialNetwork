import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

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
    newMessageBody: string
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

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: any) => void
}

// export type ActionsType = DialogsReducerType | profileReducerType


let store: StoreType = {
    _state: {
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
            ],
            newMessageBody: ""
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
    },
    _callSubscriber() {
        console.log("State was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        //переприсваеваем для перерисовки стейта
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state) //уведомляем подписчиков
    }
}

export default store;

//@ts-ignore
window.store=store


//store - OOP
