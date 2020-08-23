import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  return fontLoaded ? (
    <MealsNavigator />
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
