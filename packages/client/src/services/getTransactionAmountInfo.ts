import Api from "./api";

type Params = {};

type Props = {
  params?: Params;
};

type Response = {
  commissionPaid: string;
  commissionReceived: string;
  affiliateSelling: string;
  producerSale: string;
};

const getTransactions = async (props: Props): Promise<Response> => {
  const { params } = props;

  const api = Api();

  const response = await api.get<Response>("transaction/amount-info", {
    params,
  });

  return response.data;
};

export default getTransactions;
