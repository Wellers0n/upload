import axios from "axios";
import auth from "../auth";

const authorization = auth() ? { Authorization: auth() } : null;

const url = process.env.BASE_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: url,
  headers: {
    ...authorization,
  },
});

export default api;
