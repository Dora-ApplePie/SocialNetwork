import {Navigate} from 'react-router-dom'
import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {AppRootStateType} from '../../redux/reduxStore'

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}