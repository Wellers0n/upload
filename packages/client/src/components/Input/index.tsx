import * as React from "react";
import { Container, Title, Input } from "./styles";

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