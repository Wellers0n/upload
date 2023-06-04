import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import getTransactionAmountInfo from "../services/getTransactionAmountInfo";

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

const useTransactionAmountInfoData = (props: Props) => {
  const { params = {} } = props;

  const { data, error, isLoading } = useQuery<Response, AxiosError<Error>>(
    ["transaction-amount-info", params],
    () =>
      getTransactionAmountInfo({
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
        "Algo deu errado ao buscar os valores da transação!",
      variant: "error",
    });
  }

  return { data, error, isLoading };
};

export default useTransactionAmountInfoData;
