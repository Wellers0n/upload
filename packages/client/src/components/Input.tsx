import * as React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  placeholder?: string;
  type: "text" | "password" | "description";
  value: string;
  onChange: Function;
};

const InputComponent = (props: Props) => {
  const { title, placeholder = "", type = "text", value, onChange } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default InputComponent;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 18px;
  color: #363636;
  margin-bottom: 8px;
`

const Input = styled.input`
  height: 50px;
  border: 1px solid #F2F2F2;
  padding-left: 8px;
  &::placeholder {
    color: #DFDFDF
  }
`