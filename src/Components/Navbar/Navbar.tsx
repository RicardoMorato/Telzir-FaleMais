import React from "react";

import Logo from "../../assets/logoSvgSubtitled.svg";
import { NavbarContainer, NavigationOptionsContainer } from "./Navbar.style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <img src={Logo} alt="Logotipo da empresa" />
      <NavigationOptionsContainer>
        <p>Calculadora de preços</p>
        <p>Sobre a empresa</p>
        <p>Saiba mais</p>
      </NavigationOptionsContainer>
    </NavbarContainer>
  );
}
