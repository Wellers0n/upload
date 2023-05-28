import React, { useState } from "react";

import styled from "styled-components";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import Header from "../components/Header";
import useUploadTransactionMutation from "../hooks/useUploadTransactionMutation";

const Home = () => {
  const [file, setFile] = useState<File | null>();
  const { mutateUploadTransaction } = useUploadTransactionMutation();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      file: "",
    },
  });

  const submit = async () => {
    if (!file) return;

    mutateUploadTransaction({
      file,
    });

    setFile(null);
    reset();
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Form onSubmit={handleSubmit(submit)}>
          <Typography mb={5} align="center">
            Caso não tenha o arquivo .txt faça o download do arquivo teste
          </Typography>
          <Stack spacing={3} direction={{ md: "row", sm: "column" }} mb={7}>
            <Controller
              name={"file"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChange(event);

                    if (!event.target.files) return;
                    setFile(event?.target?.files[0]);
                  }}
                  value={value}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  type="file"
                  label={"Arquivo"}
                />
              )}
            />
            <Button variant="text">
              <a href={"./sales.txt"} download>
                Download arquivo teste
              </a>
            </Button>
          </Stack>
          <Button
            sx={{ width: 170, height: 45 }}
            variant="contained"
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  flex: 2;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: black;
`;

export const Form = styled.form`
  width: 50%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Login = styled.button`
  color: #363636;
  background-color: transparent;
  border: none;
  font-size: 14px;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
`;
