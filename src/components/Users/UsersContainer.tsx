import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followSuccess, unfollowSuccess,
    UserType, setCurrentPage,
    toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type DispatchPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<DispatchPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        //!!!!!!!????? this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(
        //     data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps,
    {
        follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage,
        toggleFollowingProgress, getUsers: getUsersThunkCreator
    })(UsersContainer);