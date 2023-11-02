import React from "react";
import Fab from "@mui/material/Fab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const PlayButton = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Fab
      color="success"
      aria-label="add"
      sx={{
        backgroundColor: "#1ed760",
        position: "absolute",
        top: "110px",
        left: "120px",
      }}
      onClick={handleClick}
    >
      <PlayArrowIcon sx={{ fontSize: 35, color: "#000000" }} />
    </Fab>
  );
};
