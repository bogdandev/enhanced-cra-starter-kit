import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL || '/api/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 25000
})

export default axiosInstance
