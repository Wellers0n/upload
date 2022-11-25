import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Box,
  Register,
  Button,
} from "./styles";

import axios from '../../axios'


// components
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import Snackbar from '@mui/material/Snackbar';

const Login: React.FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    try {
      const response = await axios?.post('/session/login', {
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
      <Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <Title>Log in</Title>
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
        <Register onClick={() => navigate("/register")}>
          Register
        </Register>
        <Button onClick={submit}>Login</Button>
      </Box>
    </Container>
  );
};

export default Login;