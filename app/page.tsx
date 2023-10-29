"use client";
import React, {useEffect, useState} from 'react';
import { 
  CssBaseline, 
  ThemeProvider,
  Container, 
  // Typography
 } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { createContext } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
// import * as All from './pages';

// const Components = {
//   "home": All.Home,
//   "about": All.About,
//   "works": All.Works
// };

export const SiteContext = createContext({});

export type Pages = "home" | "about" | "works";
export const WorksArr = ["Web", "Desktop", "TV App", "Kiosk", "Plugin"]

export default function App() {
  const theme = createTheme(themeSettings);
  const [selectedPage, setSelectedPage] = useState<Pages>('home');
  // const [selectedWork, setSelectedWork] = useState<pages>('home');
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(-1);

  // const [ComponentName, setComponentName] = useState(Components['home'])
  
  // useEffect(() => {
  //   setComponentName(Components[selectedPage]);
  // }, [selectedPage]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteContext.Provider value={{ selectedPage, setSelectedPage, selectedSubIndex, setSelectedSubIndex }}>
          <Container maxWidth="lg">
            <Topbar />
            {
              selectedPage === "home" ? <Home /> :
              selectedPage === "about" ? <About /> :
              <Works category={WorksArr[selectedSubIndex]} />
            }
          </Container>
        </SiteContext.Provider>
      </ThemeProvider>
    </div>
  );
}
