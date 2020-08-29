import React from 'react'
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../constants/colors'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/Categories'
import CategoryMealsScreen from '../screens/CategoryMeals'
import MealDetailsScreen from '../screens/MealDetails'
import FavouritesScreen from '../screens/Favourites'

const stackNavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? COLORS.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
    headerBackTitle: 'Back',
  },
}

// TODO: FIX SCREEN TYPES

const MealsNavigator = createStackNavigator(
  {
    // @ts-ignore
    Categories: CategoriesScreen,
    // @ts-ignore
    CategoryMeals: CategoryMealsScreen,
    // @ts-ignore
    MealDetails: MealDetailsScreen,
  },
  stackNavigatorOptions,
)

const FavNavigator = createStackNavigator(
  {
    // @ts-ignore
    Favourites: FavouritesScreen,
    // @ts-ignore
    MealDetails: MealDetailsScreen,
  },
  stackNavigatorOptions,
)

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // eslint-disable-next-line react/display-name
      tabBarIcon: (tabInfo: { tintColor: string }) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: COLORS.primaryColor,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      // eslint-disable-next-line react/display-name
      tabBarIcon: (tabInfo: { tintColor: string }) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: COLORS.accentColor,
    },
  },
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.accentColor,
        },
      })

export default createAppContainer(MealsFavTabNavigator)
