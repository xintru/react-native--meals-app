import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/Categories'
import CategoryMealsScreen from '../screens/CategoryMeals'
import MealDetailsScreen from '../screens/MealDetails'
import FavouritesScreen from '../screens/Favourites'

import COLORS from '../constants/colors'
import FiltersScreen from '../screens/Filters'

const stackNavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? COLORS.primaryColor : 'white',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
    headerBackTitle: 'Back',
  },
}

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
  },
  stackNavigatorOptions,
)

const FavNavigator = createStackNavigator(
  {
    // @ts-ignore
    Favourites: FavouritesScreen,
    MealDetails: MealDetailsScreen,
  },
  stackNavigatorOptions,
)

const FiltersNavigator = createStackNavigator(
  {
    // @ts-ignore
    Filters: FiltersScreen,
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals'
        ),
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favourites</Text>
        ) : (
          'Favourites'
        ),
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
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
        },
      })

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  },
)

export default createAppContainer(MainNavigator)
