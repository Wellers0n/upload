import React, { useState } from "react"
import FormData from 'form-data'
import styled from "styled-components";

// components
import Button from "../components/Button";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

import axios from '../axios'
import auth from "../auth";

const Home = () => {
  const [file, setFile] = useState<{ name: string }>({ name: "" });
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const submit = async () => {
    try {

      const form = new FormData();

      form.append('file', file)

      const response = await axios?.post('/upload/transaction-file', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: auth()

        }
      })
      setError(false)

      setSnackbarMessage(response?.data?.message)

      handleClick()

      setFile({ name: "" })

    } catch (error: any) {
      setSnackbarMessage(error?.response?.data?.message)
      setError(true)
      handleClick()

    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Container>
      <Header />
      <Wrapper>
        <Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
          <Stack marginBottom={5}>
            File: {file?.name || "no content"}
          </Stack>
          <Stack direction={'row'}>
            <Button variant="contained" component="label">
              Upload
              <input
                onChange={(e: any) => setFile(e.target.files[0])}
                title="file"
                hidden
                accept="text/*"
                type="file" />
            </Button>
            <Button variant="contained" component="label">
              <a
                href={"./sales.txt"}
                download>
                Download test file
              </a>
            </Button>
          </Stack>
          <Button onClick={submit} >Submit</Button>
        </Box>
      </Wrapper>
    </Container>
  )
};

export default Home

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  flex: 2;
  height: 70vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: black;
`;

export const Box = styled.div`
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