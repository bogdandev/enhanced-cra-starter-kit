import React, { Component } from 'react'

const Authorization = allowedRoles => WrappedComponent => {
  return class WithAuthorization extends Component {
    constructor(props) {
      super(props)

      this.state = {
        user: {
          name: 'vcarl',
          role: 'admin'
        }
      }
    }

    render() {
      const { role } = this.state.user
      
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <h1>No page for you!</h1>
      }
    }
  }
}

export default Authorization
