import { ActionType, createCustomAction } from 'typesafe-actions'
import { FilterSettings } from './meals.types'

export const toggleFavourite = createCustomAction(
  'Toggle favourite',
  (mealId: string) => ({
    mealId,
  }),
)

export const setFilters = createCustomAction(
  'Set filters',
  (settings: FilterSettings) => ({
    settings,
  }),
)

export type ActionsAll = ActionType<typeof toggleFavourite | typeof setFilters>
