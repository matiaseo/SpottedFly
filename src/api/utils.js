export const getUserProfile = async (userId) => {
  try {
    const response = await fetch(`https://your-api-url.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

// export const getPlaylistData = async (userId) => {
//   try {
//     const response = await fetch(
//       `https://your-api-url.com/users/${userId}/playlists`,
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const playlists = await response.json();
//     return playlists;
//   } catch (error) {
//     console.error("Error fetching user playlists:", error);
//     return null;
//   }
// };

export const getPlaylistData = async () => {
    try {
    const response = await fetch(
      "http://localhost:4000/playlist/",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let playlist = await response.json();
    playlist = playlist.map(track => ({...track, song: new Audio(track.song)}));
    return playlist;
  } catch (error) {
    console.error("Error fetching user playlists:", error);
    return null;
  }
}

export const getAlbumData = async (userId) => {
  try {
    const response = await fetch(
      `https://your-api-url.com/users/${userId}/albums`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.error("Error fetching user albums:", error);
    return null;
  }
};

export const getArtistData = async (userId) => {
  try {
    const response = await fetch(
      `https://your-api-url.com/users/${userId}/artists`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const artists = await response.json();
    return artists;
  } catch (error) {
    console.error("Error fetching user artists:", error);
    return null;
  }
};
