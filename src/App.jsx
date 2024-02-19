import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

// import { SideBar } from "./shared/sidebar/SideBar";
// import { Yourelistening } from "./shared/yourelistening/yourelistening";
import { MusicPlayer } from "./shared/music-player/MusicPlayer";
import { MainContainer } from "./shared/main-container/MainContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainContainer />
      <MusicPlayer duration={100} />
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
