import { createReducer } from 'typesafe-actions'
import { MEALS } from '../../data/tempData'
import { MealsReducerState } from './meals.types'
import { ActionsAll, setFilters, toggleFavourite } from './meals.actions'
import Meal from '../../models/Meal'

const initialState: MealsReducerState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
}

const mealsReducer = createReducer<MealsReducerState, ActionsAll>(initialState)
  .handleAction(toggleFavourite, (state, action) => {
    const exists =
      state.favouriteMeals.findIndex((meal) => meal.id === action.mealId) !== -1
    if (exists) {
      return {
        ...state,
        favouriteMeals: state.favouriteMeals.filter(
          (meal) => action.mealId !== meal.id,
        ),
      }
    }
    return {
      ...state,
      favouriteMeals: [
        ...state.favouriteMeals,
        state.meals.find((meal) => meal.id === action.mealId) as Meal,
      ],
    }
  })
  .handleAction(setFilters, (state, action) => ({
    ...state,
    filteredMeals: state.meals.filter((meal) => {
      // TODO: refactoring
      const { glutenFree, lactoseFree, vegan, vegetarian } = action.settings
      if (glutenFree && !meal.isGlutenFree) {
        return false
      }
      if (lactoseFree && !meal.isLactoseFree) {
        return false
      }
      if (vegan && !meal.isVegan) {
        return false
      }
      return !(vegetarian && !meal.isVegetarian)
    }),
  }))

export default mealsReducer
