import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { CardSection } from "../../shared/cards/CardSection";

const MOCK_DATA = [
  {
    title: "More like Éxitos Argentina",
    cardsData: [
      {
        picture: "https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all",
        title: "Viva Latino",
        description: "Todays top Latin, Todays top Latin, Todays top Latin, Todays top Latin,",
      },
      {
        picture: "https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all",
        title: "Viva Latino",
        description: "Todays top Latin, Todays top Latin, Todays top Latin, Todays top Latin,",
      },
    ],
  },
  {
    title: "More like USA",
    cardsData: [
      {
        picture: "https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all",
        title: "Viva Latino",
        description: "Todays top Latin",
      },
    ],
  },
  {
    title: "Top Hits",
    description: "Description",
    cardsData: [
      {
        picture: "https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all",
        title: "Viva Latino",
        description: "Todays top Latin",
      },
    ],
  },
];

const styles = { container: { width: "100%" } };

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Stack spacing={2}>
        {MOCK_DATA.map((cardsData) => (
          <CardSection {...cardsData} key={cardsData.title} />
        ))}
      </Stack>
    </Box>
  );
};
