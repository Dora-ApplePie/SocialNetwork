import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={style.title}>
                <h2>MyPosts</h2>
                <textarea rows={4} cols={60} placeholder={'Your news...'}></textarea>
                <button>Send</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}