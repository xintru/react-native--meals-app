import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'
import COLORS from '../constants/colors'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/Categories'
import CategoryMealsScreen from '../screens/CategoryMeals'
import MealDetailsScreen from '../screens/MealDetails'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const navigator = createStackNavigator(
  {
    // TODO: fix later
    // @ts-ignore
    Categories: CategoriesScreen,
    // @ts-ignore
    CategoryMeals: CategoryMealsScreen,
    // @ts-ignore
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? COLORS.primaryColor : 'white',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
      headerBackTitle: 'Back',
    },
  },
)

export default createAppContainer(navigator)
