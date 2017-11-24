import * as actionTypes from './auth.constants'

const initialState = {
  profile: {},
  token: '',
  role: '',
  error: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.profile
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case actionTypes.LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}
