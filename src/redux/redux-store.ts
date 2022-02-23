import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./usersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
})


export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

//@ts-ignore
window.store = store;

export default store;