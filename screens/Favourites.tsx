import React from 'react'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index'

import MealList from '../components/MealList'
import { MEALS } from '../data/tempData'
import CustomHeaderButton from '../components/HeaderButton'
import { NavigationScreenComponent } from 'react-navigation'
import {
  NavigationDrawerOptions,
  NavigationDrawerProp,
} from 'react-navigation-drawer'

const FavouritesScreen: NavigationScreenComponent<
  NavigationStackOptions & NavigationDrawerOptions,
  NavigationStackProp & NavigationDrawerProp
> = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')

  return <MealList meals={favMeals} navigation={navigation} />
}

FavouritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Your Favourites',
    // eslint-disable-next-line react/display-name
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  }
}

export default FavouritesScreen
