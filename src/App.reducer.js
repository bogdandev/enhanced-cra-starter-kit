import { combineReducers } from 'redux'
import storeConfig from './Config/store.config'
import rootSaga from './App.saga'

export const rootReducer = combineReducers({})

export default (reducer = rootReducer, history) => {
  return storeConfig(rootReducer, rootSaga, history)
}
