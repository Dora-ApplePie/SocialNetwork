import {addPostAC, deletePostAC, InitialStateType, profileReducer} from './profileReducer'
import {v1} from 'uuid'
import {PostType} from '../api/api'

const postId1= v1()
const postId2= v1()

const state: InitialStateType = {
    posts: [
        {id: postId1, message: 'Hello everyone!', likes: 69},
        {id: postId2, message: 'Have a nice day!', likes: 108}
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
    status: ''}

test('New post should be added', () => {
    // 1. test data
    const action = addPostAC('Hello')
    // 2. action
    const newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('Hello')
    expect(newState.posts[2].likes).toBe(0)
})

test('Post should be deleted', () => {
    // 1. test data
    const action = deletePostAC(postId1)
    // 2. action
    const newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(1)
})
