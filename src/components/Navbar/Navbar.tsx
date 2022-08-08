import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {useAppSelector} from '../../hooks/hooks'
import {getId} from '../../redux/authSelectors'

type ActionType = {
    [key: string]: boolean
}

export const Navbar = () => {
    const authUserId = useAppSelector(getId)

    const setAction = ({isActive}: ActionType) => isActive ? s.active : s.item

    return (
        <nav className={s.nav}>
            <div><NavLink to={'/profile/' + authUserId} className={setAction}>Profiles</NavLink></div>
            <div><NavLink to="/dialogs" className={setAction}>Messages</NavLink></div>
            <div><NavLink to="/users" className={setAction}>Users</NavLink></div>
            <div><NavLink to="/news" className={setAction}>News</NavLink></div>
            <div><NavLink to="/music" className={setAction}>Music</NavLink></div>
            <div><NavLink to="/setting" className={setAction}>Settings</NavLink></div>
        </nav>
    )
}