import React from "react";

import { CompanyLogo, CompanyLogoNoSubtitle } from "./assets";
import { textHolder } from "./global/texts";
import { Navbar, Footer, MainSection, SecondarySection } from "./components";
import { AppContainer, GlobalStyles } from "./global/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <MainSection />
      <SecondarySection
        imgSrc={CompanyLogo}
        headerText="Conheça mais sobre a calculadora de preços"
        firstText={textHolder.firstTextFirstSection}
        secondText={textHolder.secondTextFirstSection}
        reverse={false}
        idNameForNavbar={"about-the-calculator"}
      />
      <SecondarySection
        imgSrc={CompanyLogoNoSubtitle}
        headerText="Conheça mais sobre a empresa e sua história"
        firstText={textHolder.firstTextSecondSection}
        secondText={textHolder.secondTextSecondSection}
        reverse
        idNameForNavbar={"about-the-company"}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
