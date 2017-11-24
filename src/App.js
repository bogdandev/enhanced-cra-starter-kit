import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SplashScreen from './Common/SplashScreen'
import AuthNavigation from './Auth/AuthNavigation'
import { isAuthenticated } from './Auth/auth.selectors'
import { appStartedUp } from './Common/common.selectors'

class App extends Component {
  render() {
    const { appIsLoaded, isAuth } = this.props
    return (
      <AppContainer>
        {!appIsLoaded ? (
          <SplashScreen />
        ) : (
          <AuthNavigation isAuthenticated={isAuth} />
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

const mapStateToProps = state => ({
  appIsLoaded: appStartedUp(state),
  isAuth: isAuthenticated(state)
})

export default connect(mapStateToProps)(App)
