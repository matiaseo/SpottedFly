import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

// import { SideBar } from "./shared/sidebar/SideBar";
// import { Yourelistening } from "./shared/yourelistening/yourelistening";
import { MusicPlayer } from "./shared/music-player/MusicPlayer";
import { MainContainer } from "./shared/main-container/MainContainer";
import { PlaylistProvider } from './context/PlaylistContext';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <PlaylistProvider>
        <CssBaseline />
        <MainContainer />
        <MusicPlayer/>
        {/* Here we should have the player component at some point */}
      </PlaylistProvider>
    </ThemeProvider>
  );
};

export default App;
