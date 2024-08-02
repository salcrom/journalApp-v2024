import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegan, consisten, and simple baseline theme */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
