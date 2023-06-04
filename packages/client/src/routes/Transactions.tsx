import { useState } from "react";

// components
import Header from "../components/Header";
import Card from "../components/Card";
import TransactionTable from "../components/TransactionTable";
import {
  Skeleton,
  Stack,
  Card as CardMui,
  CardContent,
  Typography,
} from "@mui/material";

import useTransactionsData from "../hooks/useTransactionsData";
import useTransactionAmountInfoData from "../hooks/useTransactionAmountInfoData";

const Transactions = () => {
  const [offset, setOffset] = useState(0);

  const { data, isLoading: isLoadingTransactions } = useTransactionsData({
    params: {
      offset,
      limit: 10,
    },
  });

  const {
    data: amount,
    isLoading: isLoadingAmount,
  } = useTransactionAmountInfoData({});

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
          loading={isLoadingAmount}
        />
        <Card
          title="Venda afiliado"
          variant="green"
          value={amount?.affiliateSelling || "R$ 0"}
          loading={isLoadingAmount}
        />
        <Card
          title="Venda produtor"
          variant="green"
          value={amount?.producerSale || "R$ 0"}
          loading={isLoadingAmount}
        />
        <Card
          title="Comissão paga"
          variant="red"
          value={amount?.commissionPaid || "R$ 0"}
          loading={isLoadingAmount}
        />
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <TransactionTable
          rows={data?.transactions || []}
          setOffset={setOffset}
          totalPages={data?.totalPages || 0}
          loading={isLoadingTransactions}
        />
      </Stack>
    </Stack>
  );
};

export default Transactions;
