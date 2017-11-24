import apisauce from 'apisauce'

const baseURL = process.env.REACT_APP_API_URL || '/api/'

const requestInstance = apisauce.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token: ''
  },
  timeout: 25000
})

export default requestInstance
