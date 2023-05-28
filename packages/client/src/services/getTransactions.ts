import Api from "./api";

type Params = {
  offset?: number;
  limit?: number;
};

type Props = {
  params?: Params;
};

type Transactions = {
  amount: string;
  date: string;
  description: string;
  nature: string;
  product: string;
  seller: string;
  signal: string;
  type: number;
};

type Response = {
  limit: number;
  offset: number;
  totalNegativeAmount: string;
  totalPages: number;
  totalPositiveAmount: string;
  transactions: Transactions[];
};

const getTransactions = async (props: Props): Promise<Response> => {
  const { params } = props;

  const api = Api();

  const response = await api.get<Response>("transaction/list", {
    params,
  });

  console.log({ response });

  return response.data;
};

export default getTransactions;
