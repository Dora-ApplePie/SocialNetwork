import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react'
import {updateStatus} from '../../../../../redux/profileReducer'
import {getStatus} from '../../../../../redux/profileSelectors'
import {useAppDispatch, useAppSelector} from '../../../../../hooks/hooks'

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()

    const status = useAppSelector(getStatus)

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = (e: FocusEvent<HTMLInputElement, Element>) => {
        dispatch(updateStatus(e.currentTarget.value))
        setEditMode(false)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    useEffect(() => {
        setValue(status)
    }, [status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No Status'}</span>
                </div>
            }
            {editMode &&
                <input value={value}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}/>
            }
        </div>
    )
}