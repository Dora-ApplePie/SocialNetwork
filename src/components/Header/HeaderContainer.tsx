import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/authRuducer";


class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
       return <Header {...this.props}
                      isAuth={this.props.isAuth}
                      login={this.props.login}/>
   }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);