import React from "react";

import {
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
  Facebook,
  Twitch,
} from "../../assets";

import {
  FooterContainer,
  FooterHeader,
  MainInformationContainer,
  CompanyInfo,
  SocialMediaContainer,
  MiscInfoContainer,
  PrivacyPoliticsContainer,
  LastInfo,
} from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <MainInformationContainer>
        <CompanyInfo>
          <FooterHeader>Conheça a empresa</FooterHeader>
          <p>Quem somos</p>
          <p>O que oferecemos</p>
          <p>Carreiras</p>
          <p>Blog</p>
          <p>Newsletter</p>
        </CompanyInfo>

        <CompanyInfo>
          <FooterHeader>Conheça outros produtos da empresa</FooterHeader>
          <p>Telzir LigueMais</p>
          <p>Telzir OuçaMais</p>
          <p>Telzir VejaMais</p>
          <p>Telzir ComaMais</p>
        </CompanyInfo>

        <CompanyInfo>
          <FooterHeader>Conheça nossas redes sociais</FooterHeader>
          <SocialMediaContainer>
            <img src={Instagram} alt="Ícone do Instagram" />
            <img src={LinkedIn} alt="Ícone do LinkedIn" />
            <img src={Twitter} alt="Ícone do Twitter" />
            <img src={Youtube} alt="Ícone do Youtube" />
            <img src={Facebook} alt="Ícone do Facebook" />
            <img src={Twitch} alt="Ícone do Twitch" />
          </SocialMediaContainer>
        </CompanyInfo>
      </MainInformationContainer>

      <MiscInfoContainer>
        <p>
          Telzir Technologies Inc. | Telzir do Brasil Tecnologia Ltda | Av.
          Presidente Kennedy Kubitschek, nº 101909, Torre Leste, 25º andar,
          Recife/PE - CEP: 54.444.007-444 | CNPJ: 00.007.007/0070-01
        </p>

        <PrivacyPoliticsContainer>
          <p>Termos de serviço</p>
          <p>Política de privacidade</p>
        </PrivacyPoliticsContainer>
      </MiscInfoContainer>

      <LastInfo>
        <p>© 2020 Telzir Technologies Inc.</p>
        <p>Designed &amp; developed by Ricardo Morato</p>
      </LastInfo>
    </FooterContainer>
  );
}
