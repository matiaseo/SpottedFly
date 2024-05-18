import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { MOCKED_USER } from "../../mocks/mockData.js";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export const ProfilePage = () => {
  const { userId } = useParams();
  const user = MOCKED_USER;
  return (
    <>
      <Box>
        <Stack style={{ padding: 16 }}>
          <Box style={{ height: 80 }}>TOP BUTTONS PLACEHOLDER</Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Avatar
              src={user.profilePicture}
              alt={user.name}
              sx={{
                boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
                height: 140,
                width: 140,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography style={{ fontSize: "14px" }}>Profile</Typography>
              <span>
                <Typography
                  style={{
                    fontSize: 56,
                    margin: 0,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                  variant={"h1"}
                >
                  {user.name}
                </Typography>
              </span>
              <span style={{ fontSize: "14px" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  <Typography variant={"inherit"}>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Public Playlists: {user.playlists?.length}
                    </a>
                  </Typography>
                  <span style={{ fontSize: 8, alignContent: "center" }}>•</span>
                  <Typography variant={"inherit"}>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Followers: {user.followers?.length ?? 0}
                    </a>
                  </Typography>
                  <span style={{ fontSize: 8, alignContent: "center" }}>•</span>
                  <Typography variant={"inherit"}>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Following: {user.following?.length ?? 0}
                    </a>
                  </Typography>
                </div>
              </span>
            </div>
          </div>
        </Stack>
      </Box>
      <Box>
        <Stack style={{ display: "flex", gap: 16, padding: 16 }}>
          <Typography
            variant={"h2"}
            style={{ fontSize: 24, fontWeight: "bold" }}
          >
            Public Playlists
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {user.playlists.map((playlist) => (
              <div
                key={playlist.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
                  width: "220px",
                  height: "288px",
                }}
              >
                <img
                  src={playlist.cover}
                  alt={playlist.name}
                  style={{
                    width: "220px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <Typography
                    sx={{ padding: "2px 12px", fontSize: 16 }}
                    variant={"h6"}
                  >
                    {playlist.title}
                  </Typography>
                  <Typography
                    sx={{
                      paddingLeft: "12px",
                      fontSize: 14,
                      color: "#999",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    variant={"subtitle1"}
                  >
                    By {user.name}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Box>
    </>
  );
};
