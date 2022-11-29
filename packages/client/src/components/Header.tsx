import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Items>
        <Item onClick={() => navigate("/")}>Home</Item>
        <Item onClick={() => navigate("/transactions")}>Transactions</Item>
      </Items>
      <Items>
        <Item onClick={() => {
          localStorage.removeItem('token')
          navigate("/login")
        }}>
          Logout
        </Item>
      </Items>
    </Container>
  )
}

export default Header

const Container = styled.header`
  height: 100px;
  width: 100%;
  background-color: #D7FF61;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Items = styled.ul`
  display: flex;
  list-style: none;
`

const Item = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`