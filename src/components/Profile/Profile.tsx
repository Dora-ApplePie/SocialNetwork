import React from "react";
import style from "./Profile.module.css"

type PropsTypeGen = {
    imgProfile01: string
    imgProfile02: string
}

export const Profile = (props: PropsTypeGen) => {
    return (
        <div className={style.content}>

            <div><img className={style.imgHead} alt={'head-img'}
                      src={props.imgProfile01}/></div>

            <div className={style.main}>
                <img className={style.imgProfile} alt={'ava'}
                      src={props.imgProfile02}/>
                <div className={style.description}>
                    <h2>Daria G.</h2>
                    <p>Date of Birth: 13 sept</p>
                    <p>City: Minsk</p>
                    <p>Education: BSU</p>
                    <p>Mobile: +375(29)236-64-04</p>
                </div>
            </div>
            <div className={style.title}>
                <h2>MyPosts</h2>
                <input placeholder={'Your news...'}/>
                <input type={'button'}/>
            </div>
            <div className={style.posts}>
                <div className={style.item}><p>Hey!</p></div>
                <div className={style.item}><p>It's our new program!</p></div>
            </div>
        </div>
    )
}