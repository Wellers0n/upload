import React, { useEffect, useState } from "react"
import styled from "styled-components";

// components
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';

import { Stack } from "@mui/material";

export type RowsType = {
  type: number
  date: string,
  product: string,
  amount: number,
  seller: string,
  description: string,
  nature: string,
  signal: string,

}

type Props = {
  rows: RowsType[],
  loadMore: () => void
}

const TransactionTable = ({ loadMore, rows }: Props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Seller</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Nature</TableCell>
            <TableCell align="left">Signal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
      {!rows.length &&
        <Stack alignItems={"center"} padding={5}>
          <div>No transaction data</div>
        </Stack>
      }
      <Button onClick={loadMore} >Load more</Button>
    </TableContainer>
  )
};

export default TransactionTable


export const Button = styled.button`
  background-color: #D7FF61;
  height: 50px;
  border: none;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`