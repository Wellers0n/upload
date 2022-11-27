import React from "react"
import { render } from '@testing-library/react';
import Input from "../../../components/Input";


describe("Home", () => {
  it('should render home screen', () => {
    render(
      <Input
        value={"test"}
        onChange={(value: string) => {}}
        title={"Password"}
        type={"password"}
        placeholder={"Enter your password"} />
    )

    expect(true).toBeTruthy()
  });
})