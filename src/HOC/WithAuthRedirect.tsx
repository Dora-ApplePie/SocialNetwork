import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToProps = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function WithAuthRedirect<T>(Component: ComponentType<T>){

    class RedirectComponent extends React.Component<MapStateToProps> {
        render() {
            let {isAuth, ...restProps} = this.props

            if(!isAuth) return <Redirect to={"/login"}/>

            return <Component {...restProps as T}/>
        }
    }


   let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);


    return ConnectedAuthRedirectComponent;

}