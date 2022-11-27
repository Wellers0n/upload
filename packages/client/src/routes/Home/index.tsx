import React, { useState } from "react"
import FormData from 'form-data'

import {
  Container,
  Wrapper,
  Button,
  Box
} from "./styles";

// components
import ButtonMui from '@mui/material/Button';
import Alert from "../../components/Alert";
import Header from "../../components/Header";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

import axios from '../../axios'
import auth from "../../auth";

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
          <Stack spacing={1} direction={'row'}>
            <ButtonMui variant="contained" component="label" style={{ backgroundColor: "#D7FF61", color: "#363636" }}>
              Upload
              <input
                onChange={(e: any) => setFile(e.target.files[0])}
                title="file"
                hidden
                accept="text/*"
                type="file" />
            </ButtonMui>
            <ButtonMui variant="contained" component="label" style={{ backgroundColor: "#D7FF61", color: "#363636" }}>
              <a
                href={"./sales.txt"}
                download>
                Download test file
              </a>
            </ButtonMui>
          </Stack>
          <Button onClick={submit} >Submit</Button>

        </Box>
      </Wrapper>
    </Container>
  )
};

export default Home