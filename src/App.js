import React from "react";
import { ThemeProvider } from "styled-components";
import AppRouter from "./components/AppRouter/AppRouter";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./theme/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
