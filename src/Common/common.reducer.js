import * as actionTypes from './common.constants'

const ERR_DEFAULT_MESSAGE = 'Oops! Something went wrong!'

const initialState = {
  appStartedUp: false,
  apiFetching: false,
  error: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.APP_STARTUP_SUCCESS:
      return {
        ...state,
        appStartedUp: true
      }
    case actionTypes.SET_AJAX_LOADING:
      return {
        ...state,
        apiFetching: action.payload.type || false
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.message || ERR_DEFAULT_MESSAGE
      }
    case actionTypes.DISMISS_ERROR:
      return {
        ...state,
        error: ''
      }
    default:
      return state
  }
}
