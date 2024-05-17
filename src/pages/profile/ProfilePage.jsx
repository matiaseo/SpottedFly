import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { MOCKED_USER } from "../../mocks/Profile.js";

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
            <img
              src={user.profilePicture}
              alt={user.name}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "100%",
                objectFit: "cover",
                boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: "14px" }}>Profile</span>
              <span>
                <h1
                  style={{
                    fontSize: 56,
                    margin: 0,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  {user.name}
                </h1>
              </span>
              <span style={{ fontSize: "14px" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  <span>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Public Playlists: {user.playlists?.length}
                    </a>
                  </span>
                  <span style={{ fontSize: 8, alignContent: "center" }}>•</span>
                  <span>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Followers: {user.followers?.length ?? 0}
                    </a>
                  </span>
                  <span style={{ fontSize: 8, alignContent: "center" }}>•</span>
                  <span>
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href={"#"}
                    >
                      Following: {user.following?.length ?? 0}
                    </a>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </Stack>
      </Box>
    </>
  );
};
