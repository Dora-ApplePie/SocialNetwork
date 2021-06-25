import React from "react";
import style from "./Posts.module.css"

export const Post = () => {
    return (
        <div>
            <div className={style.posts}>
                <div className={style.item}>
                    <img alt={"img-person"}
                         src={"https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg"}/>
                    Post 1
                </div>
                <div><span>Like</span></div>
            </div>
        </div>
    )
}