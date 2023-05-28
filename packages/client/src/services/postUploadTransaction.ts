import Api from "./api";

type Data = {
  file: File;
};

type Props = {
  data?: Data;
};

type Response = {
  error: boolean;
  message: string;
};

const postUploadTransaction = async (props: Props): Promise<Response> => {
  const { data } = props;

  const api = Api();

  const response = await api.post<Response>("/upload/transaction-file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default postUploadTransaction;
