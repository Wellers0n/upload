import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../Home";
import Wrapper from "../../test/Wrapper";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

describe("Home", () => {
  it("should render home screen", () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    expect(
      screen.getByText(
        "Caso não tenha o arquivo .txt faça o download do arquivo teste"
      )
    ).toBeInTheDocument();
  });

  it("should render download test file", () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    expect(screen.getByText("Download arquivo teste")).toBeInTheDocument();
    expect(screen.getByText("Download arquivo teste")).toHaveAttribute(
      "href",
      "./sales.txt"
    );
  });

  it("should render file selected", async () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    const input = screen.getByLabelText("Arquivo");

    const str = JSON.stringify("file value");
    const blob = new Blob([str]);
    const file = new File([blob], "sales.txt", {
      type: "text/plain",
    });

    await userEvent.upload(input, file);

    expect(
      screen.getByDisplayValue("C:\\fakepath\\sales.txt")
    ).toBeInTheDocument();
  });
});
