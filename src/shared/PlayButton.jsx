import React from "react";
import Fab from "@mui/material/Fab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const PlayButton = () => {
  return (
    <Fab color="success" aria-label="add" sx={{ backgroundColor: "#1ed760" }}>
      <PlayArrowIcon sx={{ fontSize: 35, color: "#000000" }} />
    </Fab>
  );
};
