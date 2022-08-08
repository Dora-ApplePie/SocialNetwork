import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {useAppSelector} from '../../../hooks/hooks'
import {getIsAuth} from '../../../redux/authSelectors'
import {Navigate} from 'react-router-dom'

export const MusicForRedirect = () => {
    const isAuth = useAppSelector(getIsAuth)

    if (!isAuth) return <Navigate to="/login"/>
    return (
        <div>
            Music
        </div>
    )
}

export const Music = withAuthRedirect(MusicForRedirect)