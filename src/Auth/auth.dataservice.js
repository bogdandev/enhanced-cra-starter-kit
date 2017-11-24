import $ from '../Config/dataservice'

export const loginUser = (email, password) =>
  $.post('/login', { email, password })

export const setAuthToken = token => {
  $.setHeader('token', token)
  localStorage.setItem('appToken', token)
}

export const resetAuthToken = () =>{
  $.setHeader('token', '')
  localStorage.removeItem('appToken')
}

export const getAuthToken = () => localStorage.getItem('appToken')

export const mockDelayed = () => $.get('/users?delay=1')
