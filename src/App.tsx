import React from "react";

import { Navbar, Footer, MainSection, KnowMore } from "./Components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <MainSection />
      <KnowMore />
      <Footer />
    </AppContainer>
  );
}

export default App;
