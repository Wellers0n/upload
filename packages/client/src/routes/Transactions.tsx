import { useState } from "react";

// components
import Header from "../components/Header";
import Card from "../components/Card";
import TransactionTable from "../components/TransactionTable";
import { Stack } from "@mui/material";

import useTransactionsData from "../hooks/useTransactionsData";

const Transactions = () => {
  const [offset, setOffset] = useState(0);

  const { data } = useTransactionsData({
    params: {
      offset,
      limit: 10,
    },
  });

  return (
    <Stack>
      <Header />
      <Stack
        direction={"row"}
        spacing={2}
        mt={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          title="Saldo de entrada"
          variant="green"
          value={data?.totalPositiveAmount || "R$ 0"}
        />
        <Card
          title="Saldo de saída"
          variant="red"
          value={data?.totalNegativeAmount || "R$ 0"}
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
