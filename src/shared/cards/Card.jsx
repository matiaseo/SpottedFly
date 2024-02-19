import { Card as CardMui } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { PlayButton } from "../PlayButton";

export const Card = ({ picture, title, description }) => {
  return (
    <CardMui sx={{ width: 176 }}>
      <CardActionArea href={`/playlist/1`}>
        <CardMedia component="img" height="140" image={picture} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <PlayButton />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMui>
  );
};
