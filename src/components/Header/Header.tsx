import React from 'react';
import style from "./Header.module.css"

type PropsTypeGen = {
    imgHeader: string
}

export const Header = (props: PropsTypeGen) => {
    return (
        <header className={style.header}>
            <img alt={'Logo'}
                 src={props.imgHeader}/>
        </header>
    )
}