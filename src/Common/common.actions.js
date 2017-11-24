import * as actionTypes from './common.constants'

export const appStartupRequest = () => ({
  type: actionTypes.APP_STARTUP_REQUEST
})

export const appStartupSuccess = () => ({
  type: actionTypes.APP_STARTUP_SUCCESS
})

export const setLoading = (value) => ({
  type: actionTypes.SET_AJAX_LOADING,
  payload: { value }
})

export const setError = (message) => ({
  type: actionTypes.SET_ERROR,
  payload: { message }
})

export const dismissError = () => ({
  type: actionTypes.DISMISS_ERROR
})