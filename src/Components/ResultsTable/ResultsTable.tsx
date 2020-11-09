import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

import { TableContainer } from "./ResultsTable.style";

interface TableItem extends Object {
  from: string;
  to: string;
  time: string;
  plan: string;
  withPlan: number | undefined;
  withoutPlan: number | undefined;
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

  // const tableData = rawTableData.map(
  //   ({ from, to, time, plan, withPlan, withoutPlan }) => {
  //     withPlan = getValueWithPlan(from, to, time, plan);
  //     withoutPlan = -1;
  //   }
  // );

  // console.log(tableData);

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
