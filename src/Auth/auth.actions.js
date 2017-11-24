import * as actionTypes from './auth.constants'

export const loginRequest = (email, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { email, password }
})

export const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: { error }
})

export const loginSuccess = profile => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { profile }
})

export const signupRequest = (email, password, firstName, lastName) => ({
  type: actionTypes.SIGNUP_REQUEST,
  payload: { email, password, firstName, lastName }
})

export const signupFailure = error => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload: { error }
})

export const signupSuccess = profile => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: { profile }
})

export const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
})

export const updateUserRequest = profile => ({
  type: actionTypes.UPDATE_USER_REQUEST,
  payload: { profile }
})

export const updateUserSuccess = profile => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  payload: { profile }
})