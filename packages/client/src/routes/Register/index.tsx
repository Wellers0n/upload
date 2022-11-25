import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Title,
  Box,
  Button,
  Login,
} from "./styles";

// components
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import Snackbar from '@mui/material/Snackbar';

import axios from '../../axios'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const submit = async () => {
    try {
      const response = await axios?.post('/session/register', {
        name,
        email,
        password
      })

      localStorage.setItem('token', response.data.token);

      navigate('/')

    } catch (error: any) {
      setSnackbarMessage(error?.response?.data?.message)
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
      <Wrapper>
        <Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
          <Title>Register</Title>
          <Input
            value={name}
            onChange={(value: string) => setName(value)}
            title={"Name"}
            type={"text"}
            placeholder={"Enter your name"}
          />
          <Input
            title={"Email"}
            value={email}
            onChange={(value: string) => setEmail(value)}
            type={"text"}
            placeholder={"joe@email.com"}
          />
          <Input
            value={password}
            onChange={(value: string) => setPassword(value)}
            title={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
          />
          <Login onClick={() => navigate("/login")}>
            Login
          </Login>
          <Button onClick={submit}>Register</Button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Register;