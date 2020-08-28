import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'

import { CATEGORIES } from '../data/tempData'
import Category from '../models/Category'
import { NavigationScreenComponent } from 'react-navigation'
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen: NavigationScreenComponent<
  StackNavigationOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
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
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen
