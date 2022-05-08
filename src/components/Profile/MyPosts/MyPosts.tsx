import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const MyPosts = (props: PostPropsType) => { // эта компонента чистая не привязана к редаксу только вызывает колбеки

    let PostsElements =
        props.posts
            .map((p,index) => <Post key={index} img={p.img} text={p.text} LikeCount={p.LikeCount} id={p.id}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addNewPostText = (values: FormDataType) => {
        props.addPost(values.newPostText);
    }
    return (

        <div className={style.myPosts}>
            <div className={style.title}>
                <h3>MyPosts</h3>
                <AddPostFormRedux onSubmit={addNewPostText} />
            </div>
            {PostsElements} {/*Отрисовка компоненты Post*/}
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={'textarea'} name={'newPostText'} placeholder={"Enter your post text..."} rows={4} cols={60}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddPostFormRedux  = reduxForm<FormDataType>({
    form: 'addNewPostTextForm' // a unique name for the form
})(AddPostForm)

// <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} rows={4} cols={60}
//           placeholder={'Введите ваш месседж...'}/>
// <button onClick={onAddPostText}>Send</button>