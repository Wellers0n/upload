import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../Register";
import Wrapper from "@/test/Wrapper";
import { rest, server } from "@/test/server";
import { act } from "react-dom/test-utils";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

const url = process.env.BASE_URL || "http://localhost:3001";

describe("Register", () => {
  it("should render register screen", () => {
    render(
      <Wrapper>
        <Register />
      </Wrapper>
    );

    const [title] = screen.getAllByText("Cadastrar")

    expect(title).toBeInTheDocument();
  });

  it("should render require register inputs", async () => {
    render(
      <Wrapper>
        <Register />
      </Wrapper>
    );

    const [_, submitBtn] = screen.getAllByText("Cadastrar")

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Email é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Senha é obrigatório")).toBeInTheDocument();
  });

  it("should render require email valid", async () => {
    render(
      <Wrapper>
        <Register />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "admin@" } });

    const [_, submitBtn] = screen.getAllByText("Cadastrar")


    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Digite um email válido")).toBeInTheDocument();
    expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Senha é obrigatório")).toBeInTheDocument();
  });

  it("should render success message when register", async () => {
    server.use(
      rest.post(`${url}/session/register`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            message: "Usuário criado com sucesso!",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          })
        );
      })
    );
    render(
      <Wrapper>
        <Register />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");
    const nameInput = screen.getByLabelText("Nome");
    const passwordInput = screen.getByLabelText("Senha");

    fireEvent.change(nameInput, { target: { value: "admin" } });
    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });

    const [_, submitBtn] = screen.getAllByText("Cadastrar")

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Usuário criado com sucesso!")).toBeInTheDocument();
  });

  it("should render error message when register", async () => {
    server.use(
      rest.post(`${url}/session/register`, async (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            message: "Houve algum error ao registrar",
            token: null,
          })
        );
      })
    );
    render(
      <Wrapper>
        <Register />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");
    const nameInput = screen.getByLabelText("Nome");
    const passwordInput = screen.getByLabelText("Senha");

    fireEvent.change(nameInput, { target: { value: "admin" } });
    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });

    const [_, submitBtn] = screen.getAllByText("Cadastrar")


    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Houve algum error ao registrar")).toBeInTheDocument();
  });
});
