import React from "react";

export const Profile = () => {
    return (
        <div className={'content'}>
            <div><img alt={'head-img'}
                      src={'https://www.iphones.ru/wp-content/uploads/2019/08/kubik_rubik-000_resize.jpg'}/></div>

            <div><img alt={'ava'}
                      src={'https://lh3.googleusercontent.com/proxy/8nqd4mYCEgxy57Lf0C_URtLc9o3G5EKBCVRNh-ZQQiZi4XUNdPk_rJk4HrC81AZYO1cSRXUYiZPvKt5KH5E4Pg'}/>ava+description
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