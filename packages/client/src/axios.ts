import axios from 'axios'
import auth from './auth'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = auth();

export default instance