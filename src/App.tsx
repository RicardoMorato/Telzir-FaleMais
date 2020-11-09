import React from "react";

import { Navbar, Footer, MainSection } from "./Components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <MainSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
