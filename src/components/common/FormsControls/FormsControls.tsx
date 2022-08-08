import React, {HTMLInputTypeAttribute} from 'react'
import {WrappedFieldInputProps, WrappedFieldMetaProps} from 'redux-form/lib/Field'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
}

export const Input: React.FC<FormsControls> = (
    {input, meta: {touched, error}, type, placeholder, autoFocus}) => {
    return (
        <div>
            <input {...input} type={type} placeholder={placeholder} autoFocus={autoFocus}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<FormsControls> = (
    {input, meta: {touched, error}, placeholder}) => {
    return (
        <div>
            <textarea {...input} placeholder={placeholder}/>
            {touched && error && <span>{error}</span>}
        </div>
    )
}