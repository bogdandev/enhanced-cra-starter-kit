import { isAuthenticated } from './auth.selectors'
import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { loginRequest } from './auth.actions'
import * as selectors from './auth.selectors'

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Profile = () => <h2>Profile</h2>

class AuthNavigation extends Component {
  render() {
    // const { isAuthenticated } = this.props
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Button
            type="primary"
            size="large"
            onClick={() => this.props.loginRequest()}
          >
            Login
          </Button>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state)
})

export default connect(mapStateToProps, { loginRequest })(AuthNavigation)
