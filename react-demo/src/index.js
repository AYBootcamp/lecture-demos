import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './demos/ReduxDemo/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
const STRICT_MODE = false

root.render(
    <Provider store={store}>
        {STRICT_MODE ? (
            <React.StrictMode>
                <App />
            </React.StrictMode>
        ) : (
            <App />
        )}
    </Provider>
)
