import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: PropsType) => {

    let PostsElements =
        props.posts
            .map(p => <Post img={p.img} text={p.text} LikeCount={p.LikeCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPostText = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger;
        if (newPostElement.current) {
            //props.updNewText(e.currentTarget.value);
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});
        }
    }
    return (

        <div className={style.myPosts}>
            <div className={style.title}>
                <h3>MyPosts</h3>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} rows={4} cols={60}
                          placeholder={'Введите ваш месседж...'}/>
                          <button onClick={addPostText}>Send</button>
            </div>
            {PostsElements} {/*Отрисовка компоненты Post*/}
        </div>
    )
}