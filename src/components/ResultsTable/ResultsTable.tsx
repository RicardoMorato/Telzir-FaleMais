import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

import { TableContainer } from "./ResultsTable.style";

interface TableItem extends Object {
  from: string;
  to: string;
  time: string;
  plan: string;
  withPlan: number | undefined | string;
  withoutPlan: number | undefined | string;
}

export default function ResultsTable({
  rawTableData,
}: {
  rawTableData: Array<TableItem>;
}) {
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

  return (
    <TableContainer>
      <Table
        columns={columns}
        pagination={false}
        dataSource={rawTableData}
      ></Table>
    </TableContainer>
  );
}
