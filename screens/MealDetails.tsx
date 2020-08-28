import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { NavigationScreenComponent } from 'react-navigation'
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import { MEALS } from '../data/tempData'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailsScreen: NavigationScreenComponent<
  StackNavigationOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')

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
  const mealId = navigation.getParam('mealId')
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
