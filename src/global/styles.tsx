import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
  }
`;

export const AppContainer = styled.div`
  position: relative;
`;

export const Colors = {
  redBackground: {
    color: "#FA1200",
    opacity: 0.6,
  },
  inputPlaceholders: {
    color: "#4E4E4E",
  },
  inputBorder: {
    color: "#4E4E4E",
    stroke: 0.5,
  },
  white: {
    color: "#FFF",
  },
};
