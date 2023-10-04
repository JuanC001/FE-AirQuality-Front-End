import React from "react";
import ReactDOM from "react-dom/client";
import AirQualityApp from "./AirQualityApp";

import { UserProvider } from "./Global/Context/UserProvider";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

import "./main.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EFF7FF",
      main: "#349ED2",
      dark: "#0071BC",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E5EFCE",
      main: "#BFD686",
      dark: "#7EB312",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>

      <ThemeProvider theme={theme}>
        <AirQualityApp />
      </ThemeProvider>
    </UserProvider>

  </React.StrictMode>
);
