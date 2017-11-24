import { combineReducers } from 'redux'
import storeConfig from './Config/store.config'
import { routerReducer } from 'react-router-redux'

import rootSaga from './App.saga'
import auth from './Auth/auth.reducer';
import app from './Common/common.reducer';

export const rootReducer = combineReducers({
  app,
  auth,
  router: routerReducer
})

export default (reducer = rootReducer, history, callback) => {
  return storeConfig(rootReducer, rootSaga, history, callback)
}
