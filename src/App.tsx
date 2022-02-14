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
import {ActionsType, StoreType} from "./redux/state";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header imgHeader={props.store.getState().header.logoImg}/>

                <Navbar navbar={props.store.getState().navbar}/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogPage={props.store.getState().dialogPage}/>}/>{/*Route exact path*/}
                    <Route path={"/profile"}
                           render={() => <Profile profilePage={props.store.getState().profilePage}
                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={"/feed"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
