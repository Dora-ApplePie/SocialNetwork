import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/persons-img.png";
import {NavLink} from 'react-router-dom';
import {UserDataType} from "../../api/api";

type UsersType = {
    users: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            {pages.map((p, index) => {
                return <span key={index} className={props.currentPage === p ? styles.selectedPage : ''}
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
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }
                        }>Unfollow</button>

                        : <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }
                        }>Follow</button>}
                </div>
            </span>
                </div>)}
        </div>)
}

export default Users;