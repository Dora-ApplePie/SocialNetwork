import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

let store: StoreType = createStore(rootReducer);

export default store;