import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import Wrapper from "../../test/Wrapper";
import userEvent from "@testing-library/user-event";
import { rest, server } from "@/test/server";
import { act } from "react-dom/test-utils";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

const url = process.env.BASE_URL || "http://localhost:3001";

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

  it("should render require file input", async () => {
    server.use(
      rest.post(`${url}/upload/transaction-file`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            message: "Arquivo enviado com sucesso!",
          })
        );
      })
    );
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    const submitBtn = screen.getByText("Enviar");

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Arquivo é obrigatória")).toBeInTheDocument();
  });

  it("should render file selected", async () => {
    server.use(
      rest.post(`${url}/upload/transaction-file`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            message: "Arquivo enviado com sucesso!",
          })
        );
      })
    );
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
