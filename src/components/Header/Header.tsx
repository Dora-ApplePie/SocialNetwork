import React from 'react';
import style from "./Header.module.css"

export const Header: React.FC  = () => {
    const header = {
        imgHeader: 'https://pngimg.com/uploads/eagle/eagle_PNG1232.png',
    }
    return (
        <header className={style.header}>
            <img alt={'Logo'}
                 src={header.imgHeader}/>
        </header>
    )
}