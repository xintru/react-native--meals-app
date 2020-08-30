import React from 'react'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index'

import MealList from '../components/MealList'
import CustomHeaderButton from '../components/HeaderButton'
import { NavigationScreenComponent } from 'react-navigation'
import {
  NavigationDrawerOptions,
  NavigationDrawerProp,
} from 'react-navigation-drawer'
import { useSelector } from 'react-redux'
import { selectFavouriteMeals } from '../store/meals/meals.selectors'
import { StyleSheet, View } from 'react-native'
import TextWrap from '../components/TextWrap'

const FavouritesScreen: NavigationScreenComponent<
  NavigationStackOptions & NavigationDrawerOptions,
  NavigationStackProp & NavigationDrawerProp
> = ({ navigation }) => {
  const favMeals = useSelector(selectFavouriteMeals)

  return favMeals.length ? (
    <MealList meals={favMeals} navigation={navigation} />
  ) : (
    <View style={styles.content}>
      <TextWrap>No favourite meals found. Start adding some!</TextWrap>
    </View>
  )
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavouritesScreen
