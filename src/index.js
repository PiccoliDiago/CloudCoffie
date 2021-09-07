import React from 'react'

import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Main from './pages/Main'

import store from './store'

console.disableYellowBox = true;

if (!__DEV__ && Platform.OS !== "android") {
    try {
        console = {}
        console.assert = () => { }
        console.info = () => { }
        console.log = () => { }
        console.warn = () => { }
        console.error = () => { }
        console.time = () => { }
        console.timeEnd = () => { }

        global.console = console
    } catch (err) { }
}

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Provider store={store}>
                <Main />
            </Provider>
        </>
    )
}

export default App
