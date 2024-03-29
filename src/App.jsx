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


// We need access key to use the api directly and seems deezer is not giving them for now (we cannot register and app)
//so in the meantime we have the file directly accessed
const track = new Audio('https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3')

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainContainer />
      <MusicPlayer track={track}/>
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
