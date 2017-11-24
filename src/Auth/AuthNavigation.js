import { isAuthenticated } from './auth.selectors'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { loginRequest } from './auth.actions'
import * as selectors from './auth.selectors'
import Authorization from './AuthorizationHOC'

const AllowAll = Authorization(['admin', 'hr', 'employee', 'partner'])
const AllowPartner = Authorization(['partner'])

const Login = () => <h2>Login</h2>
const Header = () => <h2>Header</h2>
const Deals = () => <h2>Deals</h2>
const Profile = () => <h2>Profile</h2>
const Unauthorized = () => <h2>Unauthorized</h2>

class AuthNavigation extends Component {
  componentDidMount() {
    // this.props.loginRequest('a','b')
  }
  render() {
    const { isAuthenticated } = this.props
    console.log('isAuthenticated', isAuthenticated)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllowAll(Header)} />
          <Route exact path="/login" component={AllowAll(Login)} />
          <Route path="/deals" component={AllowAll(Deals)} />
          <Route path="/deals/add" component={AllowPartner(Deals)} />
          <Route path="/profile" component={AllowPartner(Profile)} />
          <Route path="*" component={AllowAll(Unauthorized)} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state)
})

export default connect(mapStateToProps, { loginRequest })(AuthNavigation)
