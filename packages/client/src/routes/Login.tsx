import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Stack, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useLoginSessionMutation } from "../hooks";

type Submit = {
  email: string;
  password: string;
};

const Login: React.FC = (props) => {
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
      <Box onSubmit={handleSubmit(submit)}>
        <Title>Log in</Title>
        <Stack
          width={"100%"}
          spacing={2}
          direction={{ xs: "column", sm: "column", md: "column" }}
        >
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
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
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                InputLabelProps={{
                  shrink: true,
                }}
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
            Register
          </Button>
        </Stack>
      </Box>
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

export const Box = styled.form`
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
