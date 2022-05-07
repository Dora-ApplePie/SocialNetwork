import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
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
        this.props.getUserProfile(userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent));