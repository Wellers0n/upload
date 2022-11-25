import styled from "styled-components";

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

export const Button = styled.button`
  background-color: #D7FF61;
  height: 50px;
  border: none;
  width: 200px;
  margin-top: 60px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

`
export const Login = styled.button`
  color: #363636;
  background-color: transparent;
  border: none;
  font-size: 14px;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
`;