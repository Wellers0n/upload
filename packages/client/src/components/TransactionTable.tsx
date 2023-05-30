import styled from "styled-components";

// components
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Pagination from "@mui/material/Pagination";

import { Stack } from "@mui/material";

export type RowsType = {
  amount: string;
  date: string;
  description: string;
  nature: string;
  product: string;
  seller: string;
  signal: string;
  type: number;
};

type Props = {
  rows: RowsType[];
  totalPages: number;
  setOffset: (offset: number) => void;
};

const TransactionTable = ({ totalPages, setOffset, rows }: Props) => {
  const handleChangePagination = (
    event: React.ChangeEvent<unknown> | null,
    value: number
  ) => {
    setOffset(value - 1);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell align="left">Data</TableCell>
              <TableCell align="left">Produto</TableCell>
              <TableCell align="left">Valor</TableCell>
              <TableCell align="left">Vendedor</TableCell>
              <TableCell align="left">Descrição</TableCell>
              <TableCell align="left">Natureza</TableCell>
              <TableCell align="left">Sinal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.seller}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.nature}</TableCell>
                <TableCell align="left">{row.signal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!rows.length && (
          <Stack alignItems={"center"} padding={5}>
            <div>Nenhum dado de transação</div>
          </Stack>
        )}
      </TableContainer>
      <Stack mt={2}>
        <Pagination
          onChange={handleChangePagination}
          count={totalPages}
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Container>
  );
};

export default TransactionTable;

export const Container = styled.div`
  width: 95%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
