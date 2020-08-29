import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { CATEGORIES } from '../data/tempData'
import Category from '../models/Category'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index'
import CustomHeaderButton from '../components/HeaderButton'

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const handleGoToMeals = (id: number) => {
    navigation.navigate({
      routeName: 'CategoryMeals',
      params: {
        categoryId: id,
      },
    })
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }: { item: Category }) => (
        <CategoryGridTile
          onSelect={() => handleGoToMeals(item.id)}
          item={item}
        />
      )}
      numColumns={2}
    />
  )
}
CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Meal categories',
    // eslint-disable-next-line react/display-name
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          // @ts-ignore
          onPress={() => navigation.toggleDrawer()}
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

export default CategoriesScreen
