import { enqueueSnackbar } from "notistack";
import { postLoginSession } from "../services";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Data = {
  email: string;
  password: string;
};

type Response = {
  token: string;
};

type Error = {
  message: string
}

const useLoginSessionMutation = () => {
  const navigate = useNavigate();

  const { mutate: mutateLoginSession } = useMutation({
    mutationFn: ({ email, password }: Data) =>
      postLoginSession({
        data: {
          email,
          password,
        },
      }),
    onSuccess: (data: Response) => {
      enqueueSnackbar({
        message: "Logado com sucesso!",
        variant: "success",
      });

      localStorage.setItem("token", data.token);

      navigate("/");
    },
    onError: (error: AxiosError<Error>) => {
      return enqueueSnackbar({
        message: error?.response?.data.message || "Houve algum erro ao logar!",
        variant: "error",
      });
    },
  });

  return { mutateLoginSession };
};

export default useLoginSessionMutation;
