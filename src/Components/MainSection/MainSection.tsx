import React from "react";

import { InputSection, ResultsTable } from "../index";
import {
  SectionHeader,
  SectionContainer,
  CalculatorContainer,
} from "./MainSection.style";

export default function MainSection() {
  return (
    <SectionContainer>
      <SectionHeader>
        Calculadora de custo de ligações com FaleMais
      </SectionHeader>

      <CalculatorContainer>
        <InputSection />
        <ResultsTable />
      </CalculatorContainer>
    </SectionContainer>
  );
}
