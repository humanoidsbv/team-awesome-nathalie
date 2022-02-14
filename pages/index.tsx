import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <SubHeader />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
