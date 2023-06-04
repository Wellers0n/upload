import { useState } from "react";

// components
import Header from "../components/Header";
import Card from "../components/Card";
import TransactionTable from "../components/TransactionTable";
import { Stack } from "@mui/material";

import useTransactionsData from "../hooks/useTransactionsData";
import useTransactionAmountInfoData from "../hooks/useTransactionAmountInfoData";

const Transactions = () => {
  const [offset, setOffset] = useState(0);

  const { data } = useTransactionsData({
    params: {
      offset,
      limit: 10,
    },
  });

  const { data: amount } = useTransactionAmountInfoData({
    params: {
      offset,
      limit: 10,
    },
  });

  return (
    <Stack>
      <Header />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        mt={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          title="Comissão recebida"
          variant="green"
          value={amount?.commissionReceived || "R$ 0"}
        />
        <Card
          title="Venda afiliado"
          variant="green"
          value={amount?.affiliateSelling || "R$ 0"}
        />
        <Card
          title="Venda produtor"
          variant="green"
          value={amount?.producerSale || "R$ 0"}
        />
        <Card
          title="Comissão paga"
          variant="red"
          value={amount?.commissionPaid || "R$ 0"}
        />
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <TransactionTable
          rows={data?.transactions || []}
          setOffset={setOffset}
          totalPages={data?.totalPages || 0}
        />
      </Stack>
    </Stack>
  );
};

export default Transactions;
