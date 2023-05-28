import axios from "axios";
import auth from "../auth";

function Api() {
  const authorization = auth() ? { Authorization: auth() } : null;

  const url = process.env.BASE_URL || "http://localhost:3001";

  return axios.create({
    baseURL: url,
    headers: {
      ...authorization,
    },
  });
}

export default Api;
