import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack'
import { NavigationScreenComponent } from 'react-navigation'
import { CATEGORIES } from '../data/tempData'

const CategoryMealsScreen: NavigationScreenComponent<
  NavigationStackOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const handleGoToDetails = () => {
    navigation.push('MealDetails')
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.screen}>
      <Text>Category Meals screen!</Text>
      <Button title="Go to Details " onPress={handleGoToDetails} />
      <Button title="Go back" onPress={handleGoBack} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  // @ts-ignore
  const categoryId = navigation.getParam('categoryId')
  const category = CATEGORIES.find((c) => c.id === categoryId)

  return {
    headerTitle: category?.title || '',
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoryMealsScreen
