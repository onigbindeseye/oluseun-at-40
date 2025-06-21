import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import About from "./components/About";

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: "Nunito",
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/about-oluseun" component={About} />
            <Route exact path="/my-gallery" component={Gallery} />
            <Route exact path="/rsvp" component={RSVP} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
