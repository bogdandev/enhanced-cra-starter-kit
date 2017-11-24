import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'

export default (rootReducer, rootSaga, history, startUpFn) => {
  const middleWares = []

  const sagaMiddleWare = createSagaMiddleWare()
  middleWares.push(sagaMiddleWare)

  const routingMiddleWare = routerMiddleware(history)
  middleWares.push(routingMiddleWare)
  
  middleWares.push(logger)

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWares))
  )
  
  sagaMiddleWare.run(rootSaga)
  
  store.dispatch(startUpFn())

  return store
}
