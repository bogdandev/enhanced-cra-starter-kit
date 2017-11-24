import createSagaMiddleWare from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default (rootReducer, rootSaga, history, startUpFn) => {
  const sagaMiddleWare = createSagaMiddleWare()
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  )
  
  sagaMiddleWare.run(rootSaga)
  
  store.dispatch(startUpFn())

  return store
}
