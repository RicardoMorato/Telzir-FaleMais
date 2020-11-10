import styled from "styled-components";

import { Colors } from "../../global/styles";

export const NavbarContainer = styled.header`
  height: 14%;
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
`;

export const NavigationOptionsContainer = styled.div`
  width: 27.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;

  p {
    font-family: "Heebo", sans-serif;
    cursor: pointer;
  }
`;
