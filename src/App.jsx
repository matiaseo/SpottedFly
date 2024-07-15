import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

// import { SideBar } from "./shared/sidebar/SideBar";
// import { Yourelistening } from "./shared/yourelistening/yourelistening";
import { MusicPlayer } from "./shared/music-player/MusicPlayer";
import { MainContainer } from "./shared/main-container/MainContainer";
import { MOCKED_PLAYLIST } from "./mocks/mockData";

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
      <MusicPlayer playlist={MOCKED_PLAYLIST}/>
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
