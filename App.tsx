import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './Sorce/Redux'
import Routes from './Sorce/routes'
import { LogBox } from 'react-native'

const App = () => {
  useEffect(() => {
    // Hide all warnings
    LogBox.ignoreAllLogs(true)
  }, [])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
