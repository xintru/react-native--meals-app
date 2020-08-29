import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons/index'
import CustomHeaderButton from '../components/HeaderButton'
import { NavigationScreenComponent } from 'react-navigation'
import {
  NavigationDrawerOptions,
  NavigationDrawerProp,
} from 'react-navigation-drawer'
import TextWrap from '../components/TextWrap'
import FilterSwitch from '../components/FilterSwitch'

const FiltersScreen: NavigationScreenComponent<
  NavigationStackOptions & NavigationDrawerOptions,
  NavigationStackProp & NavigationDrawerProp
> = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false)
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false)
  const [isVegan, setIsVegan] = useState<boolean>(false)
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false)

  const saveFilters = useCallback(() => {
    const filters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log(filters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <TextWrap style={styles.title}>Available Filters / Restrictions</TextWrap>
      <FilterSwitch
        title="Gluten-free"
        value={isGlutenFree}
        setNewValue={setIsGlutenFree}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        setNewValue={setIsLactoseFree}
      />
      <FilterSwitch title="Vegan" value={isVegan} setNewValue={setIsVegan} />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        setNewValue={setIsVegetarian}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = ({ navigation }) => {
  const saveFilters = navigation.getParam('save')
  return {
    headerTitle: 'Filter Meals',
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
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={saveFilters()} />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
})

export default FiltersScreen
