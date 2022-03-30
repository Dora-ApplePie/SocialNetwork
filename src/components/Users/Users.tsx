import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/persons-img.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}
            {
                props.users.map(u => <div key={u.id} className={styles.block}>
            <span className={styles.block}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img alt={'avatar'} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
                <div className={styles.btnBlock}>
                    {u.followed

                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5fa5e884-bc01-4fa7-a760-a9be4c50cb3a",
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                        }}>Unfollow</button>

                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "5fa5e884-bc01-4fa7-a760-a9be4c50cb3a",
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });

                        }}>Follow</button>}

                </div>
            </span>
                </div>)}
        </div>)
}

export default Users;