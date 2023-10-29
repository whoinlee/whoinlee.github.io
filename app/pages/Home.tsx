import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/home.scss";
// import { themeSettings } from "./theme";

// import Topbar from "./components/Topbar";
// import { SiteContext } from './contexts/SiteState';

// import Home from "./Home";

// export type pages = "home" | "about" | "works";
const Home = () => {
  // const theme = createTheme(themeSettings);
  // const [selectedPage, setSelectedPage] = React.useState<pages>("home");

  return (
    <div className="home" style={{ position: "absolute", top: "100px" }}>
      <Typography variant="h4">
          Studio W+
      </Typography>
    </div>
  );
};

export default Home;
