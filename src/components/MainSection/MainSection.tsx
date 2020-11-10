import React, { useState } from "react";

import { InputSection, ResultsTable } from "../index";
import {
  SectionHeader,
  SectionContainer,
  CalculatorContainer,
} from "./MainSection.style";

export default function MainSection() {
  const [tableData, setTableData] = useState([]);

  return (
    <SectionContainer>
      <SectionHeader>
        Calculadora de custo de ligações com FaleMais
      </SectionHeader>

      <CalculatorContainer>
        <InputSection handleDataUpdate={setTableData} tableData={tableData} />
        <ResultsTable rawTableData={tableData} />
      </CalculatorContainer>
    </SectionContainer>
  );
}
