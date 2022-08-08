import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPosts} from './MyPosts/MyPosts'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import {Navigate, useParams} from 'react-router-dom'
import {getStatus, getUserProfile} from '../../../redux/profileReducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {getIsAuth} from '../../../redux/authSelectors'


export const ProfileForRedirect = () => {
    const dispatch = useAppDispatch()
    const params = useParams()
    const isAuth = useAppSelector(getIsAuth)

    let {userId} = params
    userId && dispatch(getUserProfile(+userId))
    userId && dispatch(getStatus(+userId))

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default withAuthRedirect(ProfileForRedirect)
