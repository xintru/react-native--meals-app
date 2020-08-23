import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'

import { CATEGORIES } from '../data/tempData'
import Category from '../models/category'
import { NavigationScreenComponent } from 'react-navigation'
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import COLORS from '../constants/colors'

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

  const renderGridItem = ({ item }: { item: Category }) => {
    return (
      <TouchableOpacity
        onPress={() => handleGoToMeals(item.id)}
        style={styles.gridItem}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})

export default CategoriesScreen
