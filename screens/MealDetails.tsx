import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { NavigationScreenComponent } from 'react-navigation'
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types'

const MealDetailsScreen: NavigationScreenComponent<
  StackNavigationOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const handleGoToIndex = () => {
    navigation.popToTop()
  }

  return (
    <View style={styles.screen}>
      <Text>MealDetails screen!</Text>
      <Button title="Go back to categories" onPress={handleGoToIndex} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailsScreen
