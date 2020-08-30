import { combineReducers, createStore } from 'redux'
import mealsReducer from './meals/meals.reducer'

const mainReducer = combineReducers({
  meals: mealsReducer,
})

const store = createStore(mainReducer)

export default store
