import Meal from '../../models/Meal'

export interface MealsReducerState {
  meals: Meal[]
  filteredMeals: Meal[]
  favouriteMeals: Meal[]
}

export interface FilterSettings {
  glutenFree: boolean
  lactoseFree: boolean
  vegan: boolean
  vegetarian: boolean
}
