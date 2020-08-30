import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { CATEGORIES } from '../data/tempData'
import MealList from '../components/MealList'
import { selectMealsByCategory } from '../store/meals/meals.selectors'
import TextWrap from '../components/TextWrap'
import { StyleSheet, View } from 'react-native'

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const categoryId = navigation.getParam('categoryId') as number
  const meals = useSelector(selectMealsByCategory(categoryId))

  return meals.length ? (
    <MealList meals={meals} navigation={navigation} />
  ) : (
    <View style={styles.content}>
      <TextWrap>No meals found, maybe check your filters?</TextWrap>
    </View>
  )
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId') as number
  const category = CATEGORIES.find((c) => c.id === categoryId)

  return {
    headerTitle: category?.title || '',
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoryMealsScreen
