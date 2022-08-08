import React, {Suspense} from 'react'
import s from './Body.module.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import {News} from './News/News'
import {Music} from './Music/Music'
import {Setting} from './Setting/Setting'
import {Login} from './Login/Login'
import {Users} from './Users/Users'
import {useAppSelector} from '../../hooks/hooks'
import {getId} from '../../redux/authSelectors'
import Preload from '../common/Preload/Preload'

const Profile = React.lazy(() => import('./Profile/Profile'))
const Dialogs = React.lazy(() => import('./Dialogs/Dialogs'))

export const Body = () => {

    const authUserId = useAppSelector(getId)

    return (
        <div className={s.content}>
            <Suspense fallback={<Preload/>}>
                <Routes>
                    <Route path={'*'} element={<Navigate to={'/profile/' + authUserId}/>}/>
                    <Route path="/profile/:userId" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
