import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AuthNavigation from './Auth/AuthNavigation'

class App extends Component {
  render() {
    const isLoading = false
    const isAuthenticated = false
    return (
      <AppContainer>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <AuthNavigation isAuthenticated={isAuthenticated} />
        )}
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  border: 1px solid salmon;
`

export default connect(null, null)(App)
