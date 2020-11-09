import React from "react";

import { Navbar, Footer, InputSection, ResultsTable } from "./Components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      {/* <Navbar /> */}
      <InputSection />
      <ResultsTable />
      <Footer />
    </AppContainer>
  );
}

export default App;
