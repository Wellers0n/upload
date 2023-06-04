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
            totalPages: 1,
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
      }),
      rest.get(`${url}/transaction/amount-info`, async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            commissionPaid: "R$ 11.450,00",
            commissionReceived: "R$ 3.450,00",
            affiliateSelling: "R$ 2.450,00",
            producerSale: "R$ 5.450,00",
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

    const card1 = screen.getByText("Comissão recebida");
    const card2 = screen.getByText("Venda afiliado");
    const card3 = screen.getByText("Venda produtor");
    const card4 = screen.getByText("Comissão paga");

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
    expect(card4).toBeInTheDocument();
  });

  it("should render transaction amount information", async () => {
    render(
      <Wrapper>
        <Transactions />
      </Wrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("R$ 11.450,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 3.450,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 2.450,00")).toBeInTheDocument();
      expect(screen.getByText("R$ 5.450,00")).toBeInTheDocument();
    });
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
