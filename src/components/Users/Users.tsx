import React from 'react';
import {initialStateType} from "../../redux/usersReducer";
import styles from './Users.module.css'
import {DispatchPropsType} from "./UsersContainer";


const Users = (props: DispatchPropsType) => {
    if (props.users.length === 0) {
        props.setUser([
            {
                id: 1,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
                followed: false,
                fullName: 'Rozalind',
                status: "I'm crazy",
                location: {city: 'Madrid', country: 'Spain'}
            },
            {
                id: 2,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
                followed: true,
                fullName: 'Polina',
                status: "I'm a boss girl",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
                followed: false,
                fullName: 'Mailo',
                status: "I'm a dog",
                location: {city: 'Bali', country: 'Indonesia'}
            },
            {
                id: 4,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8c011df-9831-4eaa-9eb7-7dc901a06b60/360',
                followed: true,
                fullName: 'Kevin',
                status: "I'm a children!",
                location: {city: 'Colorado', country: 'USA'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
            </div>)}
    </div>
}

export default Users;