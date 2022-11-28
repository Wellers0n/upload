import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import axios from '../axios'

// components
import Input from "../components/Input";
import Alert from "../components/Alert";
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

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Register = styled.button`
  color: #363636;
  background-color: transparent;
  border: none;
  font-size: 14px;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #D7FF61;
  height: 50px;
  border: none;
  width: 100%;
  margin-top: 60px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`