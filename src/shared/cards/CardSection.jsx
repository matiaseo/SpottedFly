import React from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import { Card } from "./Card";

export const CardSection = ({ title, description = "", cardsData }) => {
  return (
    <section>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <h2>{title}</h2>
        </div>
        <Link href="#" underline="hover">
          Show all
        </Link>
      </Stack>
      {description && <span>{description}</span>}
      <Stack direction="row" spacing={2}>
        {cardsData.map((cardData) => (
          <Card {...cardData} key={cardData.title} />
        ))}
      </Stack>
    </section>
  );
};
