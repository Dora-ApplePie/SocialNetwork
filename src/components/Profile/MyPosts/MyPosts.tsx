import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    updNewPostText: (text: string) => void
    newPostText: string
}

export const MyPosts = (props: PropsType) => {

    let PostsElements =
        props.posts
            .map(p => <Post img={p.img} text={p.text} LikeCount={p.LikeCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostText = () => {
        props.addPost();
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newPostElement.current) {
            props.updNewPostText(e.currentTarget.value);
        }
    }
    return (

        <div className={style.myPosts}>
            <div className={style.title}>
                <h3>MyPosts</h3>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} rows={4} cols={60}
                          placeholder={'Введите ваш месседж...'}></textarea>
                <button onClick={addPostText}>Send</button>
            </div>
            {PostsElements} {/*Отрисовка компоненты Post*/}
        </div>
    )
}