import React from "react"
import { Container, Item, Items } from "./styles"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Items>
        <Item onClick={() => navigate("/")}>Home</Item>
        <Item onClick={() => navigate("/transaction")}>Transaction</Item>
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