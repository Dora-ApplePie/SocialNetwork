import React from "react";
import style from "./Posts.module.css"
import {PostType} from "../../../../redux/store";



export const Post = (props: PostType) => {
    return (
        <div className={style.post}>
            <div className={style.posts}>
                <div className={style.item}>
                    <img alt={"img-person"}
                         src={props.img}/>
                    <div>{props.text}</div>
                </div>
                <div><span>Like </span><span>{props.LikeCount}</span></div>
            </div>
        </div>
    )
}