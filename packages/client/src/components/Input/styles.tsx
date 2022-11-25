import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0;
`;

export const Title = styled.div`
  font-size: 18px;
  color: #363636;
  margin-bottom: 8px;
`

export const Input = styled.input`
  height: 50px;
  border: 1px solid #F2F2F2;
  padding-left: 8px;
  &::placeholder {
    color: #DFDFDF
  }
`
