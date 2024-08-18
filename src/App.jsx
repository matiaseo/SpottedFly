import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

// import { SideBar } from "./shared/sidebar/SideBar";
// import { Yourelistening } from "./shared/yourelistening/yourelistening";
import { MusicPlayer } from "./shared/music-player/MusicPlayer";
import { AlbumPage } from "./pages/album/AlbumPage";
import { MainContainer } from "./shared/main-container/MainContainer";
import { MOCKED_PLAYLIST } from "./mocks/mockData";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});




const App = () => {

  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("http://localhost:4000/playlist/");
      data = await data.json();
      console.log(MOCKED_PLAYLIST)
      data = data.map(track => ({...track, song: new Audio(track.song)}));
      console.log('la data', data)

      setPlaylist(data);
      setLoading(false);
    }
    fetchData()
  },[])


  return (
    !loading &&
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline />
      <MainContainer /> */}
      <AlbumPage playlist={playlist}/>,
      <MusicPlayer playlist={playlist}/>
      {/* Here we should have the player component at some point */}
    </ThemeProvider>
  );
};

export default App;
