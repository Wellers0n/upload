import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
  width: 100%;
  background-color: #D7FF61;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Items = styled.ul`
  display: flex;
  list-style: none;
`

export const Item = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`