import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import createStore from './App.reducer'

const store = createStore()

function render(Component, store) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render(App, store)

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp, store)
  })
}
