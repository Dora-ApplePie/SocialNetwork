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
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "21450";
        }
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
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus})
    , withRouter
    , WithAuthRedirect
)(ProfileContainer)