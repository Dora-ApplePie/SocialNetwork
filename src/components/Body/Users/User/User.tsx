import React from 'react'
import {NavLink} from 'react-router-dom'
import userPhoto from '../img/userPhoto.png'
import s from '../Users.module.css'
import {followTC, unfollowTC} from '../../../../redux/usersReducer'
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks'
import {UserType} from '../../../../api/api'
import {getFollowingInProgress} from '../../../../redux/usersSelectors'

type UserPropsType = {
    user: UserType
}

export const User: React.FC<UserPropsType> = React.memo(({
                                                             user
                                                         }) => {
    const dispatch = useAppDispatch()

    const followingInProgress = useAppSelector(getFollowingInProgress)

    const follow = (userId: number) => {
        dispatch(followTC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowTC(userId))
    }
    return (
        <div>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}
                                 alt={'avatar'}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}
                                >Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}
                                >Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
        </div>
    )
})