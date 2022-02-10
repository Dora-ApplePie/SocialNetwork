import React from 'react';
import style from "./Header.module.css"

type PropsTypeGen = {
    imgHeader: string
}

export const Header: React.FC <PropsTypeGen> = (props) => {
    return (
        <header className={style.header}>
            <img alt={'Logo'}
                 src={props.imgHeader}/>
        </header>
    )
}