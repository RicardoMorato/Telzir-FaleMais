import React from "react";

import { CompanyLogo } from '../../assets';
import { NavbarContainer, NavigationOptionsContainer } from "./Navbar.style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <img src={CompanyLogo} alt="Logotipo da empresa" />
      <NavigationOptionsContainer>
        <p>Calculadora de preços</p>
        <p>Sobre a empresa</p>
        <p>Saiba mais</p>
      </NavigationOptionsContainer>
    </NavbarContainer>
  );
}
