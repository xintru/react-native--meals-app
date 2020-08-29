import React, { ReactNode, ReactNodeArray } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { MEALS } from '../data/tempData'
import CustomHeaderButton from '../components/HeaderButton'
import TextWrap from '../components/TextWrap'
import Meal from '../models/Meal'

const ListItem = ({
  children,
  index,
}: {
  children: ReactNode | ReactNodeArray
  index?: number
}) => (
  <View style={styles.listItem}>
    <TextWrap style={{}}>{index ? `${index})` : '\u2022'}</TextWrap>
    <TextWrap style={styles.listItemContent}>{children}</TextWrap>
  </View>
)

const MealDetailsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const mealId = navigation.getParam('mealId') as string

  const meal = MEALS.find((meal) => meal.id === mealId) as Meal

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <TextWrap>{meal.duration} minutes</TextWrap>
        <TextWrap>{meal.complexity.toUpperCase()}</TextWrap>
        <TextWrap>{meal.affordability.toUpperCase()}</TextWrap>
      </View>
      <TextWrap style={styles.title}>Ingredients</TextWrap>
      {meal.ingredients.map((ing, i) => (
        <ListItem key={ing}>{ing}</ListItem>
      ))}
      <TextWrap style={styles.title}>Steps</TextWrap>
      {meal.steps.map((step, i) => (
        <ListItem key={step} index={i + 1}>
          {step}
        </ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId') as string
  const meal = MEALS.find((meal) => meal.id === mealId)
  return {
    headerTitle: meal?.title || '',
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log('starred')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  listItemContent: {
    flex: 1,
    paddingLeft: 5,
  },
})

export default MealDetailsScreen
