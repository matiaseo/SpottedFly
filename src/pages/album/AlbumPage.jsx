import React from "react";
import { Box, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { DataGrid } from "@mui/x-data-grid";
import { MOCKED_PLAYLIST } from "../../mocks/mockData";

const COLUMNS = [
  { field: "id", headerName: "#", width: 70 },
  { field: "title", headerName: "Title", width: 1200 },
  { field: "duration", headerName: "Clock", width: 100 },
];

const rows = MOCKED_PLAYLIST.map(track => ({...track, duration: '00:30'}))

export const AlbumPage = () => {
  return (
    <>
      <div style={{ height: 54, position: "sticky" }}>DUMMY HEADER</div> {/* TODO: Add header */}
      <Stack>
        <Stack direction="row" sx={{ margin: 3, gap: "1.5%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe1Ndhz2F8YJj7ESLqO4reD707eqi0uDaP-yrHfFN6g&s"
            alt="Abbey Road (Remastered)"
            style={{ width: 232, height: 232, borderRadius: "4px", boxShadow: "0 4px 60px rgba(0,0,0,.5)" }}
          />
          <Stack sx={{ alignSelf: "end" }}>
            <Typography variant="body2" gutterBottom>
              Album
            </Typography>
            <Typography variant="h1" gutterBottom sx={{ marginBottom: 1 }}>
              Abbey Road (Remastered)
            </Typography>
            <Stack direction={"row"} sx={{ gap: "3px" }}>
              <Avatar alt="Band" src="https://i.scdn.co/image/ab6761610000f178e9348cc01ff5d55971b22433" sx={{ width: 24, height: 24 }} />
              <Stack direction={"row"} sx={{ gap: "3px", alignItems: "center" }}>
                <Link href="#" variant="body2" color="inherit">
                  The Beatles
                </Link>
                <Typography variant="body2" gutterBottom sx={{ alignItems: "center", marginBottom: 0 }}>
                  • 1969 • 17 songs, 47 min 29 sec
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Box style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <Box style={{ margin: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Stack direction="row">
                <IconButton aria-label="play" size="large">
                  <PlayCircleIcon fontSize="large" style={{ color: "#1ED760" }} />
                </IconButton>
                <IconButton aria-label="add" size="medium">
                  <AddCircleIcon fontSize="medium" />
                </IconButton>
                <IconButton aria-label="more" size="medium">
                  <MoreHorizIcon fontSize="medium" />
                </IconButton>
              </Stack>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="body2" gutterBottom>
                  List
                </Typography>
                <IconButton aria-label="list">
                  <FormatListBulletedIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Box sx={{ margin: "5px 16px" }}>
              <DataGrid rows={rows} columns={COLUMNS} />
            </Box>
            <Stack sx={{ margin: 3, alignSelf: "end", color: "#B3B3B3" }}>
              <Typography variant="body2">September 26, 1969</Typography>
              <Typography variant="caption">© 2015 Apple Corps Ltd</Typography>
              <Typography variant="caption">℗ 2015 Calderstone Productions Limited (a division of Universal Music Group)</Typography>
            </Stack>
            <Stack>
              <div>Merch</div>
              <div>More by The Beatles</div>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
};
