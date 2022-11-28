import React, { useEffect, useState } from "react"
import styled from "styled-components";

// components
import Header from "../components/Header";
import TransactionTable, { RowsType } from "../components/TransactionTable";


import axios from '../axios'
import auth from "../auth";

const Transactions = () => {
  const [rows, setRows] = useState<RowsType[]>([])
  const [offset, setOffset] = useState(1)


  const getData = async () => {
    const { data } = await axios.get('/transaction/list', {
      headers: {
        Authorization: auth()
      },
      params: {
        limit: offset * 10,

      }
    });

    setRows(data.transactions);
  };

  const loadMore = () => {
    setOffset(val => val + 1)
  }


  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <Container>
      <Header />
      <TransactionTable rows={rows} loadMore={loadMore} />
    </Container>
  )
};

export default Transactions

export const Container = styled.div`
  width: 100%;
`;

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