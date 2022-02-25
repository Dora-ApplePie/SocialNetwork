import React from 'react';
import styles from './Users.module.css'
import {DispatchPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/img/persons-img.png'

class Users extends React.Component<DispatchPropsType, any> {

    constructor(props: DispatchPropsType) {
        super(props);
        alert('create new object');
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                this.props.setUser(response.data.items)
            });
    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id} className={styles.block}>
            <span className={styles.block}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
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
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
                </div>)}
        </div>
    }
}

export default Users;