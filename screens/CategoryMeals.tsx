import React from 'react'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { CATEGORIES, MEALS } from '../data/tempData'
import MealList from '../components/MealList'

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const categoryId = navigation.getParam('categoryId') as number

  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  )

  return <MealList meals={meals} navigation={navigation} />
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId') as number
  const category = CATEGORIES.find((c) => c.id === categoryId)

  return {
    headerTitle: category?.title || '',
  }
}

export default CategoryMealsScreen
