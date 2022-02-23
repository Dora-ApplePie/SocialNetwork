import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";


export const MyPosts = (props: PostPropsType) => { // эта компонента чистая не привязана к редаксу только вызывает колбеки

    let PostsElements =
        props.posts
            .map(p => <Post img={p.img} text={p.text} LikeCount={p.LikeCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPostText = () => {
        debugger;
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