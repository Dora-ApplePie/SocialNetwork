import React from "react";

type PropsTypeGen = {
    imgProfile01: string
    imgProfile02: string
}

export const Profile = (props: PropsTypeGen) => {
    return (
        <div className={'content'}>
            <div><img alt={'head-img'}
                      src={props.imgProfile01}/></div>

            <div><img alt={'ava'}
                      src={props.imgProfile02}/>ava+description
            </div>
            <div>
                MyPosts
                <div>New post</div>
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    )
}