import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Meal from '../models/Meal'
import MealItem from './MealItem'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

interface MealListProps {
  meals: Meal[]
  navigation: NavigationScreenProp<NavigationState>
}

const MealList: React.FC<MealListProps> = ({ meals, navigation }) => {
  const handleGoToDetails = (id: string) => {
    navigation.navigate({
      routeName: 'MealDetails',
      params: {
        mealId: id,
      },
    })
  }

  return (
    <View style={styles.list}>
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealList
