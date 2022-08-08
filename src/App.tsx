import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Body} from './components/Body/Body'
import React, {useEffect} from 'react'
import {Header} from './components/Header/Header'
import {useAppDispatch, useAppSelector} from './hooks/hooks'
import Preload from './components/common/Preload/Preload'
import {getInitialized} from './redux/appSelectors'
import {initializeAppTC} from './redux/appReduser'

export const App = () => {
    const dispatch = useAppDispatch()

    const initialized = useAppSelector(getInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    return (
        !initialized ? <Preload/>
            : <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Body/>
            </div>

    )
}