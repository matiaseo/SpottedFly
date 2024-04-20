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
const playlist = [
  {
    name: "One More Time",
    artist: "Daft Punk",
    song: new Audio('https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3')
  },
  {
    name: "Aerodynamic",
    artist: "Daft Punk",
    song: new Audio('https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-9.mp3')
  },
  {
    name: "Harder Better Faster Stronger",
    artist: "Daft Punk",
    song: new Audio('https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3')
  },
  {
    name: "Something About Us",
    artist: "Daft Punk",
    song: new Audio('https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-8.mp3')
  }
];

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainContainer />
      <MusicPlayer playlist={playlist}/>
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
