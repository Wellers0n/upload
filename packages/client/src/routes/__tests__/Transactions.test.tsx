import { render, screen, waitFor } from "@testing-library/react";
import Transactions from "../Transactions";
import Wrapper from "@/test/Wrapper";

import { rest, server } from "@/test/server";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

const url = process.env.BASE_URL || "http://localhost:3001";

describe("Transactionas", () => {
  beforeEach(() => {
    server.use(
      rest.get(`${url}/transaction/list`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            limit: "10",
            offset: "0",
            totalNegativeAmount: "R$ 1.000,00",
            totalPages: 1,
            totalPositiveAmount: "R$ 3.100,00",
            transactions: [
              {
                type: 1,
                product: "DOMINANDO INVESTIMENTOS",
                seller: "ELIANA NOGUEIRA",
                description: "Venda produtor",
                nature: "Entrada",
                signal: "+",
                amount: "R$ 1.550,00",
                date: "03/03/2022",
              },
              {
                type: 1,
                product: "CURSO DE BEM-ESTAR",
                seller: "ELIANA NOGUEIRA",
                description: "Venda produtor",
                nature: "Entrada",
                signal: "+",
                amount: "R$ 1.550,00",
                date: "03/03/2022",
              },
              {
                type: 3,
                product: "DESENVOLVEDOR FULL STACK",
                seller: "CELSO DE MELO",
                description: "Comissão paga",
                nature: "Saída",
                signal: "-",
                amount: "R$ 500,00",
                date: "04/02/2022",
              },
              {
                type: 3,
                product: "DESENVOLVEDOR FULL STACK",
                seller: "CAROLINA MACHADO",
                description: "Comissão paga",
                nature: "Saída",
                signal: "-",
                amount: "R$ 500,00",
                date: "03/02/2022",
              },
            ],
          })
        );
      })
    );
  });

  it("should render transaction screen", () => {
    render(
      <Wrapper>
        <Transactions />
      </Wrapper>
    );

    const card1 = screen.getByText("Saldo de entrada");
    const card2 = screen.getByText("Saldo de saída");

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });

  it("should render transaction titles and values", async () => {
    render(
      <Wrapper>
        <Transactions />
      </Wrapper>
    );

    const typeColumn = screen.getByText("Tipo");
    const dateColumn = screen.getByText("Data");
    const productColumn = screen.getByText("Produto");
    const valueColumn = screen.getByText("Valor");
    const sellerColumn = screen.getByText("Vendedor");
    const descriptionColumn = screen.getByText("Descrição");
    const natureColumn = screen.getByText("Natureza");
    const signalColumn = screen.getByText("Sinal");

    expect(typeColumn).toBeInTheDocument();
    expect(dateColumn).toBeInTheDocument();
    expect(productColumn).toBeInTheDocument();
    expect(valueColumn).toBeInTheDocument();
    expect(sellerColumn).toBeInTheDocument();
    expect(descriptionColumn).toBeInTheDocument();
    expect(natureColumn).toBeInTheDocument();
    expect(signalColumn).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByText("DESENVOLVEDOR FULL STACK")).toHaveLength(2);
      expect(screen.getAllByText("CURSO DE BEM-ESTAR")).toHaveLength(1);
      expect(screen.getAllByText("DOMINANDO INVESTIMENTOS")).toHaveLength(1);
      expect(screen.getAllByText("ELIANA NOGUEIRA")).toHaveLength(2);
      expect(screen.getAllByText("CAROLINA MACHADO")).toHaveLength(1);
      expect(screen.getAllByText("CELSO DE MELO")).toHaveLength(1);
      expect(screen.getAllByText("Entrada")).toHaveLength(2);
      expect(screen.getAllByText("Saída")).toHaveLength(2);
      expect(screen.getAllByText("-")).toHaveLength(2);
      expect(screen.getAllByText("+")).toHaveLength(2);
    });
  });
});
