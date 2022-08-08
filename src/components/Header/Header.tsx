import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/HeadLogo.png'
import {NavLink} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks'
import {logout} from '../../redux/authReduser'
import {getIsAuth, getLogin} from '../../redux/authSelectors'

export const Header = () => {
    const dispatch = useAppDispatch()

    const login = useAppSelector(getLogin)
    const isAuth = useAppSelector(getIsAuth)

    const onClickLogoutButton = () => {
        dispatch(logout())
    }

    return (
        <header className={styles.header}>
            <img
                src={logo} alt="logo"/>

            <div className={styles.loginBlock}>
                {isAuth ?
                    <div className={styles.item}>{login} - <button onClick={onClickLogoutButton}>Logout</button></div>
                    : <NavLink to={'/login'} className={styles.item}>Login</NavLink>}
            </div>
        </header>)
}