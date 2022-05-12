import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Header.module.css"

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img alt={'Logo'}
                 src={"https://pngimg.com/uploads/eagle/eagle_PNG1232.png"}/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}