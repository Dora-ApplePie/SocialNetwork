import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profileReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: any
    status: string
    userID: number
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: string) => void
}

type DispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

type ParamPathType = {
    userId: string
}

type PropsType = RouteComponentProps<ParamPathType> & DispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : `${this.props.userID}`;
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus} />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userID: state.auth.id,
        // isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus})
    , withRouter
    , WithAuthRedirect
)(ProfileContainer)