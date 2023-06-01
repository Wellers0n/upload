import Api from "./api";

type Data = {
  email: string;
  password: string;
  name: string;
};

type Props = {
  data?: Data;
};

type Response = {
  token: string;
  message: string;
};

const postRegisterSession = async (props: Props): Promise<Response> => {
  const { data } = props;

  const api = Api();

  const response = await api.post<Response>("/session/register", data);

  return response.data;
};

export default postRegisterSession;
