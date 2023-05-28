import axios from "axios";
import Cookies from "js-cookie";

const auth = Cookies.get("auth-token")
  ? { Authorization: `Bearer ${Cookies.get("auth-token")}` }
  : null;

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    ...auth,
  },
});

export default api;
