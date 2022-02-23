import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';


export const Navbar: React.FC = () => {

const navbar = {
    profileLink: 'Profile',
    messagesLink: 'Messages',
    newsLink: 'News',
    musicLink: 'Music',
    settingsLink: 'Settings',
    usersLink: 'Users',
}

    return (<nav className={style.nav}>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/profile'}>{navbar.profileLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/dialogs'}>{navbar.messagesLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/users'}>{navbar.usersLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/feed'}>{navbar.newsLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/music'}>{navbar.musicLink}</NavLink>
        </div>

        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/settings'}>{navbar.musicLink}</NavLink>
        </div>
    </nav>)
}