import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authRuducer";
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";
import style from "./../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={'Password'} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div className={style.formSummaryError}>Error</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm  = reduxForm<FormDataType>({

    form: 'login' // a unique name for the form
})(LoginForm)

type MapDispatchToPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void,
}
type MapStateToPropsType = {
    isAuth: boolean
}

type LoginType = MapDispatchToPropsType & MapStateToPropsType

const Login = (props: LoginType ) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    //коллбек который диспатчит вызов санки и передает туда параметры
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h2>LOGIN</h2>
        <LoginReduxForm onSubmit={onSubmit} />
        <p>Try this:</p>
        <p>Login: dasha-golenko@mail.ru</p>
        <p>Password: DashaGolenko1399</p>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator, })(Login);