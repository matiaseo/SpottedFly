import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/material";
import "./App.css";

import { Home } from "./pages/home/Home";
import { Navbar } from "./shared/sidebar/Navbar";
import { Yourelistening } from "./shared/yourelistening/yourelistening";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "stretch", gap: 10 }}>
        <Navbar />
        <Home /> {/* This shouldn't be Home but more like a MainContainer/MainBrowser where 
        we will have a toolbar at the top and below it the router (initialy pointing to home) */}
        <Yourelistening></Yourelistening>
      </Box>
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
