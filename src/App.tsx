import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Setting/Settings";
import {RootStateType} from "./redux/state";


type PropsType = {
    state: RootStateType
    addPost: () => void
    updNewPostText: (text: string) => void
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header imgHeader={props.state.header.logoImg}/>

                <Navbar navbar={props.state.navbar}/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogPage={props.state.dialogPage}/>}/>{/*Route exact path*/}
                    <Route path={"/profile"}
                           render={() => <Profile profilePage={props.state.profilePage} updNewPostText={props.updNewPostText} addPost={props.addPost}/>}/>
                    <Route path={"/feed"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
