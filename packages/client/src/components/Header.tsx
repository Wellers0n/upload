import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Items>
        <Item onClick={() => navigate("/")}>Início</Item>
        <Item onClick={() => navigate("/transactions")}>Transações</Item>
      </Items>
      <Items>
        <Item
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Sair
        </Item>
      </Items>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 100px;
  width: 100%;
  background-color: #3b4d00;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Items = styled.ul`
  display: flex;
  list-style: none;
  color: #fff;
`;

const Item = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
