import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

import { Header } from "../src/components/header/Header";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
