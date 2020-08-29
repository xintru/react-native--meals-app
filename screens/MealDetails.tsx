import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {
  NavigationStackOptions,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/tempData'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailsScreen: NavigationStackScreenComponent<
  NavigationStackOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  // @ts-ignore
  const mealId = navigation.getParam('mealId') as string

  const meal = MEALS.find((meal) => meal.id === mealId)

  const handleGoToIndex = () => {
    navigation.popToTop()
  }

  return (
    <View style={styles.screen}>
      <Text>{meal?.title || ''}</Text>
      <Button title="Go back to categories" onPress={handleGoToIndex} />
    </View>
  )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  // @ts-ignore
  const mealId = navigation.getParam('mealId') as string
  const meal = MEALS.find((meal) => meal.id === mealId)
  return {
    headerTitle: meal?.title || '',
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log('starred')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailsScreen
