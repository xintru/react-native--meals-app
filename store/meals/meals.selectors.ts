import { ReduxState } from '../store.types'

export const selectMeals = (state: ReduxState) => state.meals.meals
export const selectFilteredMeals = (state: ReduxState) =>
  state.meals.filteredMeals
export const selectFavouriteMeals = (state: ReduxState) =>
  state.meals.favouriteMeals

export const selectMealsByCategory = (categoryId: number) => (
  state: ReduxState,
) =>
  selectFilteredMeals(state).filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  )

export const selectMealById = (id: string) => (state: ReduxState) =>
  state.meals.meals.find((meal) => meal.id === id)

export const selectIfMealIsFav = (id: string) => (state: ReduxState) =>
  !!state.meals.favouriteMeals.find((meal) => meal.id === id)
