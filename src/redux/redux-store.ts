import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, profileReducerType} from "./profileReducer";
import {dialogsReducer, DialogsReducerType} from "./dialogsReducer";
import {userReducer, usersReducerType} from "./usersReducer";
import {authReducer, authReducerType} from "./authRuducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})


export type AppStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
let store = createStore(rootReducer,{}, applyMiddleware(thunkMiddleware));

export  type AppActionsType = usersReducerType | DialogsReducerType | profileReducerType | authReducerType

//@ts-ignore
window.store = store;

export default store;