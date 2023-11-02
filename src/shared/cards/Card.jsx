import React from "react";
import { Card as CardMui, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { PlayButton } from "../PlayButton";
import { HoverableThing } from "../HoverableThing";

export const Card = ({ picture, title, description }) => {
  return (
    <CardMui>
      <CardActionArea sx={{ width: 200, padding: "18px" }}>
        <CardMedia
          component="img"
          height="155"
          image={picture}
          alt={title}
          sx={{ borderRadius: "8px" }}
        />
        <CardContent sx={{ position: "relative", padding: 0, margin: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginTop: "16px" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <HoverableThing
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <PlayButton />
        </HoverableThing>
      </CardActionArea>
    </CardMui>
  );
};
