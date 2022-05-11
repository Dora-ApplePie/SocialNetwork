import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profileReducer";
import {dialogsReducer, DialogsReducerType} from "./dialogsReducer";
import {userReducer, usersReducerType} from "./usersReducer";
import {authReducer, authReducerType} from "./authRuducer";
import thunkMiddleware  from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export  type AppActionsType = usersReducerType | DialogsReducerType | profileReducerType | authReducerType

//@ts-ignore
window.store = store;

export default store;