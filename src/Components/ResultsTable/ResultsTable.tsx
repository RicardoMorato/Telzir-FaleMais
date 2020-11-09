import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

import { TableContainer } from "./ResultsTable.style";

export default function ResultsTable() {
  const columns = [
    {
      title: "Origem",
      dataIndex: "origem",
      key: "origem",
    },
    {
      title: "Destino",
      dataIndex: "destino",
      key: "destino",
    },
    {
      title: "Tempo",
      dataIndex: "tempo",
      key: "tempo",
    },
    {
      title: "Plano FaleMais",
      dataIndex: "plano",
      key: "plano",
    },
    {
      title: "Com FaleMais",
      dataIndex: "comPlano",
      key: "comPlano",
    },
    {
      title: "Sem FaleMais",
      dataIndex: "semPlano",
      key: "semPlano",
    },
  ];

  const staticData = [
    {
      key: "1",
      origem: "011",
      destino: "018",
      tempo: "120",
      plano: "FaleMais 30",
      comPlano: "R$15,00",
      semPlano: "R$25,00",
    },
    {
      key: "2",
      origem: "016",
      destino: "011",
      tempo: "220",
      plano: "FaleMais 60",
      comPlano: "R$5,00",
      semPlano: "R$55,00",
    },
    {
      key: "3",
      origem: "018",
      destino: "016",
      tempo: "20",
      plano: "FaleMais 120",
      comPlano: "R$0,00",
      semPlano: "R$85,00",
    },
  ];

  return (
    <TableContainer>
      <Table columns={columns} pagination={false} dataSource={staticData} ></Table>
    </TableContainer>
  );
}
