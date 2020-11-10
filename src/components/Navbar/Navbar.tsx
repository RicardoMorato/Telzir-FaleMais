/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { CompanyLogo } from "../../assets";
import { NavbarContainer, NavigationOptionsContainer } from "./Navbar.style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <a href="#">
        <img src={CompanyLogo} alt="Logotipo da empresa" />
      </a>
      <NavigationOptionsContainer>
        <a href="#">Calculadora de preços</a>
        <a href="#about-the-calculator">Sobre a calculadora</a>
        <a href="#about-the-company">Sobre a empresa</a>
      </NavigationOptionsContainer>
    </NavbarContainer>
  );
}
