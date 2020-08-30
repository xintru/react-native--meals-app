import React, { ReactNode, ReactNodeArray, useCallback, useEffect } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import TextWrap from '../components/TextWrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectIfMealIsFav,
  selectMealById,
} from '../store/meals/meals.selectors'
import { toggleFavourite } from '../store/meals/meals.actions'
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
  const meal = useSelector(selectMealById(mealId)) as Meal
  const isFavourite = useSelector(selectIfMealIsFav(mealId))

  const dispatch = useDispatch()

  const toggleFavHandler = useCallback(
    () => dispatch(toggleFavourite(mealId)),
    [dispatch, mealId],
  )

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavHandler })
  }, [toggleFavHandler])

  useEffect(() => {
    navigation.setParams({ isFavourite })
  }, [isFavourite])

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
  const mealTitle = navigation.getParam('mealTitle') as string
  const isFavourite = navigation.getParam('isFavourite') as boolean
  const toggleFavourite = navigation.getParam('toggleFav')
  return {
    headerTitle: mealTitle,
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavourite}
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
