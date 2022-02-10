import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';
import {NavbarType} from "../../redux/state";



type PropsType= {
    navbar: NavbarType
}

export const Navbar: React.FC <PropsType> = (props) => {


    return (<nav className={style.nav}>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/profile'}>{props.navbar.profileLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/dialogs'}>{props.navbar.messagesLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/feed'}>{props.navbar.newsLink}</NavLink>
        </div>
        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/music'}>{props.navbar.musicLink}</NavLink>
        </div>

        <div className={style.item}>
            <NavLink activeClassName={style.active} to={'/settings'}>{props.navbar.musicLink}</NavLink>
        </div>
    </nav>)
}