import axios from 'axios'
import auth from './auth'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export default instance