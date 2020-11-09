import React, { useState } from "react";

import { InputSection, ResultsTable } from "../index";
import {
  SectionHeader,
  SectionContainer,
  CalculatorContainer,
} from "./MainSection.style";

export default function MainSection() {
  const [inputInformation, setInputInformation] = useState([]);

  return (
    <SectionContainer>
      <SectionHeader>
        Calculadora de custo de ligações com FaleMais
      </SectionHeader>

      <CalculatorContainer>
        <InputSection
          setInformation={setInputInformation}
          inputInformation={inputInformation}
        />
        <ResultsTable />
      </CalculatorContainer>
    </SectionContainer>
  );
}
