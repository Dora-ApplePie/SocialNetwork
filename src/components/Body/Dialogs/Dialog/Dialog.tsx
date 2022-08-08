import React from 'react'
import s from './Dialog.module.css'
import {NavLink} from 'react-router-dom'
import {DialogType} from '../../../../redux/dialogsReducer'

export const Dialog: React.FC<DialogType> = React.memo(({id, name}) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
})