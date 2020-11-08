import React from "react";

import { Navbar, Footer } from "./Components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Footer />
    </AppContainer>
  );
}

export default App;
