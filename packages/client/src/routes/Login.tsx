import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Stack, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useLoginSessionMutation } from "../hooks";

type Submit = {
  email: string;
  password: string;
};

const Login = () => {
  const { mutateLoginSession } = useLoginSessionMutation();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = async ({ email, password }: Submit) => {
    mutateLoginSession({
      email,
      password,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(submit)}>
        <Title>Logar</Title>
        <Stack
          width={"100%"}
          spacing={2}
          direction={{ xs: "column", sm: "column", md: "column" }}
        >
          <Controller
            name={"email"}
            control={control}
            rules={{
              required: "Email é obrigatória",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Digite um email válido",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                label={"Email"}
              />
            )}
          />

          <Controller
            name={"password"}
            control={control}
            rules={{
              required: "Senha é obrigatória",
              minLength: {
                value: 3,
                message: "Digite pelo menos 3 caracteres",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                onChange={onChange}
                value={value}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!error}
                helperText={error ? error.message : null}
                fullWidth
                type="password"
                label={"Senha"}
              />
            )}
          />
        </Stack>
        <Stack
          width={"100%"}
          mt={2}
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Button
            sx={{ width: 160, height: 40 }}
            variant="contained"
            type="submit"
          >
            Entrar
          </Button>
          <Button variant="text" onClick={() => navigate("/register")}>
            Cadastrar
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Login;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #3b4d00;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  width: 25%;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 568px) {
    width: 78%;
  }

  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// export const Register = styled.button`
//   color: #363636;
//   background-color: transparent;
//   border: none;
//   font-size: 14px;
//   align-self: center;
//   font-weight: bold;
//   cursor: pointer;
// `;
