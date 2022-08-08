import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {required} from '../../../utils/validators/validators'
import style from './Login.module.css'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import {login} from '../../../redux/authReduser'
import {Navigate} from 'react-router-dom'
import { Input } from '../../common/FormsControls/FormsControls'
import {getId, getIsAuth} from '../../../redux/authSelectors'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'}
                       component={Input}
                       placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}
                       component={Input}
                       type={'password'}
                       placeholder={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type={'checkbox'}/> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const dispatch = useAppDispatch()

    const authUserId = useAppSelector(getId)
    const isAuth = useAppSelector(getIsAuth)

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    return (
        <>
            {isAuth ? <Navigate to={"/profile/" + authUserId}/>
                : <>
                    <h1>LOGIN</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </>
            }
        </>
    )
}