import styled from "styled-components";

export const NavbarContainer = styled.header`
  height: 14%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 100px;
    cursor: pointer;
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
