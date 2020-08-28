import React from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack'
import { NavigationScreenComponent } from 'react-navigation'
import { CATEGORIES, MEALS } from '../data/tempData'
import MealItem from '../components/MealItem'
import Meal from '../models/Meal'

const CategoryMealsScreen: NavigationScreenComponent<
  NavigationStackOptions,
  NavigationStackScreenProps
> = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId')

  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  )
  const handleGoToDetails = (id: string) => {
    navigation.navigate({
      routeName: 'MealDetails',
      params: {
        mealId: id,
      },
    })
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        style={{ width: '98%' }}
        renderItem={({ item }: { item: Meal }) => (
          <MealItem onSelect={() => handleGoToDetails(item.id)} item={item} />
        )}
      />
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
