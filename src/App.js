import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./routes/RouterConfig";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
