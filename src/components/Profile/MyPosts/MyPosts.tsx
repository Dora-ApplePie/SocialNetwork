import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    updNewPostText: (newText: string) => void
    addPost: () => void
}

export const MyPosts = (props: PropsType) => { // эта компонента чистая не привязана к редаксу только вызывает колбеки

    let PostsElements =
        props.posts
            .map(p => <Post img={p.img} text={p.text} LikeCount={p.LikeCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPostText = () => {
        props.addPost();
    }
    let onPostChange = () => {
        if (newPostElement.current){
            let newText = newPostElement.current.value
            props.updNewPostText(newText);
        }

    }
    return (

        <div className={style.myPosts}>
            <div className={style.title}>
                <h3>MyPosts</h3>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} rows={4} cols={60}
                          placeholder={'Введите ваш месседж...'}/>
                <button onClick={onAddPostText}>Send</button>
            </div>
            {PostsElements} {/*Отрисовка компоненты Post*/}
        </div>
    )
}