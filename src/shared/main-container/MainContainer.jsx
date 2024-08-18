import { routes } from "../../routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { PlaylistContext } from '../../context/PlaylistContext';
import { getPlaylistData } from "../../api/utils";


export const MainContainer = () => {

  const { setPlaylist } = useContext(PlaylistContext)

  useEffect(() => {
    const fetchData = async () => {
      const playlistData = await getPlaylistData();
      setPlaylist(playlistData);
    }
    fetchData()
  },[setPlaylist])

  return (
    <Box sx={{ display: "flex", padding: 1 }}>
      <div style={{ width: 420, marginRight: 1, backgroundColor: "black" }}>DUMMY SIDEBAR</div> {/* TODO: Add sidebar */}
      <Box minHeight={"calc(100vh - 60px)"} sx={{ background: "linear-gradient(to bottom, #639DCC, #121212 60%)", borderRadius: "8px", flexGrow: 1 }}>
        {/* TODO: gradient color should be handled by a context or something, taking a different color for each album/playlist/etc */}
        <RouterProvider router={routes} />
      </Box>
    </Box>
  );
};
