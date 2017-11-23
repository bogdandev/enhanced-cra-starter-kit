import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL || '/api/'

const axiosInstance = axios.create({
  baseURL,
  timeout: 15000
})

export default axiosInstance
