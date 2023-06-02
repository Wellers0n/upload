import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import Wrapper from "@/test/Wrapper";
import { rest, server } from "@/test/server";
import { act } from "react-dom/test-utils";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

const url = process.env.BASE_URL || "http://localhost:3001";

describe("Login", () => {
  it("should render login screen", () => {
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    expect(screen.getByText("Logar")).toBeInTheDocument();
  });

  it("should render require login inputs", async () => {
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    const submitBtn = screen.getByText("Entrar");

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Email é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Senha é obrigatório")).toBeInTheDocument();
  });

  it("should render require email valid", async () => {
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "admin@" } });

    const submitBtn = screen.getByText("Entrar");

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Digite um email válido")).toBeInTheDocument();
    expect(screen.getByText("Senha é obrigatório")).toBeInTheDocument();
  });

  it("should render success message when login", async () => {
    server.use(
      rest.post(`${url}/session/login`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            message: "Login com sucesso!",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          })
        );
      })
    );
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Senha");

    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });

    const submitBtn = screen.getByText("Entrar");

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Login com sucesso!")).toBeInTheDocument();
  });

  it("should render error message when login", async () => {
    server.use(
      rest.post(`${url}/session/login`, async (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            message: "Error ao logar",
            token: null,
          })
        );
      })
    );
    render(
      <Wrapper>
        <Login />
      </Wrapper>
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Senha");

    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });

    const submitBtn = screen.getByText("Entrar");

    await act(() => {
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText("Error ao logar")).toBeInTheDocument();
  });
});
