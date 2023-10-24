import React from "react";
import { Button, ListItemIcon, ListItem, ListItemButton } from "@mui/material";

const buttonStyles = {
  textTransform: "none",
  opacity: 0.65,
  color: "#FFF",
  fontSize: "16px",
  alignItems: "flex-start",
  "&:hover": { backgroundColor: "transparent", opacity: 1 },
};

export const SidebarButton = ({ label, isActive, isExpanded, handleClick, children }) => {
  return (
    // <Button startIcon={children} onClick={handleClick} sx={buttonStyles} disableElevation>
    //   {isExpanded && label}
    // </Button>
    <ListItem>
      <ListItemButton>
        < ListItemIcon > {children}</ ListItemIcon>
      </ListItemButton>
    </ListItem>

  );
};
