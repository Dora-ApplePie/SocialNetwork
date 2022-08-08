import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import {profileReducer, ProfileReducerAT} from './profileReducer'
import {dialogsReducer, DialogsReducerAT} from './dialogsReducer'
import {usersReducer, UsersReducerAT} from './usersReducer'
import {authReducer, AuthReducerAT} from './authReduser'
import {appReducer, AppReducerAT} from './appReduser'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType =
    UsersReducerAT
    | ProfileReducerAT
    | DialogsReducerAT
    | AuthReducerAT
    | FormAction
    | AppReducerAT

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>



