import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import {AppDispatch, RootState} from "./redux/redux-store";
import {initializeAppTC} from "./redux/appReducer";
import {connect} from "react-redux";
import {compose} from "redux";

type AppPropsType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: RootState) => {
    return {
        isAppInitialized: state.app.isAppInitialized
    } as const
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        initializeApp: () => {
            dispatch(initializeAppTC());
        }
    } as const
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.isAppInitialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path={"/dialogs"}
                               render={() => <DialogsContainer/>}/> {/*Route exact path*/}
                        <Route path={"/profile/:userId?"}
                               render={() => <ProfileContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/feed"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(App);

