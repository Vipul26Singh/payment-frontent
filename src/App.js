import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { ThemeProvider } from "styled-components/native";
import theme from "./theme/theme";

// assets
import { imageAssets } from 'theme/theme'
import { fontAssets } from 'theme/theme'
import Navigator from './navigator'


const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ThemeProvider>
  ) : (
    <View />
  )
}

export default App
