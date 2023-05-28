import { enqueueSnackbar } from "notistack";
import { postRegisterSession } from "../services";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Data = {
  email: string;
  password: string;
  name: string;
};

type Response = {
  token: string;
};

type Error = {
  message: string;
};

const useRegisterSessionMutation = () => {
  const navigate = useNavigate();

  const { mutate: mutateRegisterSession } = useMutation({
    mutationFn: ({ email, password, name }: Data) =>
      postRegisterSession({
        data: {
          email,
          password,
          name,
        },
      }),
    onSuccess: (data: Response) => {
      enqueueSnackbar({
        message: "Registrado com sucesso!",
        variant: "success",
      });

      localStorage.setItem("token", data.token);

      navigate("/");
    },
    onError: (error: AxiosError<Error>) => {
      return enqueueSnackbar({
        message:
          error?.response?.data.message || "Houve algum erro ao registrar!",
        variant: "error",
      });
    },
  });

  return { mutateRegisterSession };
};

export default useRegisterSessionMutation;
