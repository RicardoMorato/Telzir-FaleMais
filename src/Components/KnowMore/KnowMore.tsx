import React from "react";

import { CompanyLogo } from "../../assets";
import {
  SectionContainer,
  InfoContainer,
  TextContainer,
  SectionHeader,
} from "./KnowMore.style";

export default function KnowMore() {
  return (
    <SectionContainer>
      <SectionHeader>
        Conheça mais sobre a calculadora de preços
      </SectionHeader>
      <InfoContainer>
        <img src={CompanyLogo} alt="Logo da empresa" />

        <TextContainer>
          <p>
            Com o novo produto FaleMais da Telzir o cliente adquire um plano e
            pode <strong>falar de graça</strong> até um determinado tempo (em
            minutos) e <strong>só paga os minutos excedentes</strong>. Os minutos
            excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os
            planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e
            FaleMais 120 (120 minutos).
          </p>
          <p>
            A Telzir, preocupada com a transparência junto aos seus clientes,
            disponibilizou esta página na web onde você pode{" "}
            <strong>calcular o valor da sua ligação</strong>. Você só precisa pode
            escolher os códigos das cidades de origem e destino, o tempo da
            ligação em minutos e escolher qual o plano FaleMais. Depois é só
            comparar e descobrir qual plano melhor se encaixa com o seu você!
          </p>
        </TextContainer>
      </InfoContainer>
    </SectionContainer>
  );
}
