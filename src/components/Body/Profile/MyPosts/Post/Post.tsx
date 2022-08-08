import React from 'react'
import s from './Post.module.css'
import {useAppDispatch} from '../../../../../hooks/hooks'
import {deletePostAC} from '../../../../../redux/profileReducer'

type PostPropsType = {
    id: string
    message: string
    likes: number
}

export const Post: React.FC<PostPropsType> = React.memo(({id, message, likes}) => {
    const dispatch = useAppDispatch()
    const onDeleteButtonClick = () => {
        dispatch(deletePostAC(id))
    }

    return (
        <div className={s.content}>
            <img
                src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg"
                alt=""/>
            <span>{message}</span>
            <span>  Likes {likes}</span>
            <button onClick={onDeleteButtonClick}>X</button>
        </div>
    )
})