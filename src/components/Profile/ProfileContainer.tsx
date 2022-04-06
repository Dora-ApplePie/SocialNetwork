import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileData} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUserProfileData: (userId: string) => void
}

type DispatchPropsType = MapStateToPropsType & MapDispatchToPropsType

type ParamPathType = {
    userId: string
}

type PropsType = RouteComponentProps<ParamPathType> & DispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setUserProfileData(this.props.match.params.userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileData})(withUrlDataContainerComponent);