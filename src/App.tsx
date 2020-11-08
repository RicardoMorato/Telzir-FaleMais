import React from "react";

import Navbar from "./Components/Navbar";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
    </AppContainer>
  );
}

export default App;
