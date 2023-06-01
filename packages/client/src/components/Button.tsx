import { ButtonProps } from "@mui/material";
import styled from "styled-components";
import ButtonMui from '@mui/material/Button';

const Button = (props: ButtonProps) => {

  return <Container {...props} />
}

export default Button

const Container = styled(ButtonMui)`
  height: 50px;
  border: none;
  margin-top: 60px;
  padding: 0 40px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 10px;
  cursor: pointer;
  background-color: #D7FF61;
  color: #363636;
  &:hover {
    background-color: #D7FF61;
  }
`