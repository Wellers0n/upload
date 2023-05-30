import { enqueueSnackbar } from "notistack";
import {  postUploadTransaction } from "../services";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Data = {
  file: File;
};

type Response = {
  error: boolean;
  message: string;
};

type Error = {
  message: string;
};

const useUploadTransactionMutation = () => {
  const { mutate: mutateUploadTransaction } = useMutation({
    mutationFn: ({ file }: Data) =>
      postUploadTransaction({
        data: {
          file,
        },
      }),
    onSuccess: (data: Response) => {
      enqueueSnackbar({
        message: data.message,
        variant: "success",
      });
    },
    onError: (error: AxiosError<Error>) => {
      return enqueueSnackbar({
        message: error?.response?.data.message || "Error ao enviar o arquivo!",
        variant: "error",
      });
    },
  });

  return { mutateUploadTransaction };
};

export default useUploadTransactionMutation;
