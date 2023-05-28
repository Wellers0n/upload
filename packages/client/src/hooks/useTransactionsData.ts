import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import getTransactions from "../services/getTransactions";

type Params = {
  limit?: number;
  offset?: number;
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

const useTransactionsData = (props: Props) => {
  const { params = {} } = props;

  const { data, error, isLoading } = useQuery<Response, AxiosError<Error>>(
    ["transactions", params],
    () =>
      getTransactions({
        params,
      }),
    {
      refetchOnWindowFocus: true,
      refetchInterval: 30000,
    }
  );

  if (error) {
    enqueueSnackbar({
      message:
        error.response?.data?.message ||
        "Algo deu errado ao bustar as transações!",
      variant: "error",
    });
  }

  return { data, error, isLoading };
};

export default useTransactionsData;
