import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator'
import { Provider } from 'react-redux'
import store from './store'

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  return fontLoaded ? (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  ) : (
    <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
