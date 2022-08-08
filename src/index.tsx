import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {App} from './App'
import {HashRouter} from 'react-router-dom'
import {store} from './redux/reduxStore'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
)
reportWebVitals()