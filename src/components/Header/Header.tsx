import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Header.module.css"

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img alt={'Logo'}
                 src={"https://pngimg.com/uploads/eagle/eagle_PNG1232.png"}/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}