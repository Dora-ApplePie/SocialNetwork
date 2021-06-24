import React from "react";
import style from "./Navbar.module.css"


type PropsTypeAll = {
    linkProfile: string
    linkMessages: string
    linkNews: string
    linkMusic: string
    linkSet: string
}


export const Navbar = (props: PropsTypeAll) => {
    return (<nav className={style.nav}>
        <div className={style.item}>
            <a className={style.active} href={'s#'}>{props.linkProfile}</a>
        </div>
        <div className={style.item}>
            <a href={'s#'}>{props.linkMessages}</a>
        </div>
        <div className={style.item}>
            <a href={'s#'}>{props.linkNews}</a>
        </div>
        <div className={style.item}>
            <a href={'s#'}>{props.linkMusic}</a>
        </div>

        <div className={style.item}>
            <a href={'s#'}>{props.linkSet}</a>
        </div>
    </nav>)
}