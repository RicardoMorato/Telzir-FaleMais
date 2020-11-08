import React from "react";

import { Navbar, Footer, InputSection } from "./Components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      {/* <Navbar /> */}
      <InputSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
