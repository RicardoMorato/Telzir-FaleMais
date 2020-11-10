import styled from "styled-components";

import { Colors } from "../../global/styles";

export const NavbarContainer = styled.header`
  height: 140px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 2;
  background-color: ${Colors.white.color};
  padding: 15px 0;

  img {
    margin-left: 100px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1440px) {
    img {
      width: 150px;
    }
  }

  @media only screen and (max-width: 1280px) {
    img {
      width: 125px;
    }
  }
`;

export const NavigationOptionsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;

  a {
    color: black !important;
    font-family: "Heebo", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    width: 60%;
  }
`;
