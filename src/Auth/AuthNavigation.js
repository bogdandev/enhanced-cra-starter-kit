import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    )
  }
}

export default AuthNavigation
