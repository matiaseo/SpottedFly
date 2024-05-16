import { routes } from "../../routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

export const MainContainer = () => {
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
