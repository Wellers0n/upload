import Api from "./api";

type Data = {
  email: string;
  password: string;
};

type Props = {
  data?: Data;
};

type Response = {
  token: string;
  message: string;
};

const postLoginSession = async (props: Props): Promise<Response> => {
  const { data } = props;

  const api = Api();

  const response = await api.post<Response>("/session/login", data);

  return response.data;
};

export default postLoginSession;
