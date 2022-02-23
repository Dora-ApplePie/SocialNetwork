import React from 'react';
import {initialStateType} from "../../redux/usersReducer";



const Users = (props: initialStateType) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl}/>
                </div>
                <div>
                    <button>Follow</button>
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