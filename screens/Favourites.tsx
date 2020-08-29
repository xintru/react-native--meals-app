import React from 'react'
import {
  NavigationStackOptions,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from 'react-navigation-stack'

import MealList from '../components/MealList'
import { MEALS } from '../data/tempData'

const FavouritesScreen: NavigationStackScreenComponent<
  NavigationStackOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')

  return <MealList meals={favMeals} navigation={navigation} />
}

FavouritesScreen.navigationOptions = {
  headerTitle: 'Your Favourites',
}

export default FavouritesScreen
