import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logoutThunkCreator} from "../../redux/authRuducer";

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    isAuth: boolean
    login: string
    logoutThunkCreator: () => void
}
export type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, AppStateType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
                       logoutTC={this.props.logoutThunkCreator}
        />

    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logoutThunkCreator})(HeaderContainer);