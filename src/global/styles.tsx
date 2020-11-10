import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&display=swap');
  @import '~antd/dist/antd.css';

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
    scroll-behavior: smooth;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  scroll-behavior: smooth;
`;

export const Colors = {
  redBackground: {
    color: "#FA1200",
    opacity: 0.6,
  },
  buttonHover: {
    color: "#E2E2E2",
  },
  white: {
    color: "#FFF",
  },
};
