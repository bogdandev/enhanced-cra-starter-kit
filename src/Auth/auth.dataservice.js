import $ from '../Config/dataservice'

export const loginUser = (email, password) =>
  $.post('/login', { email, password })

export const setAuthToken = token => $.setHeader('token', token)

export const resetAuthToken = () => $.setHeader('token', '')

export const mockDelayed = () => $.get('/users?delay=1')
