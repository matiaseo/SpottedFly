export const MOCKED_USER = {
  id: 1,
  name: "Pablo Martin Cappetta",
  email: "",
  bio: "",
  profilePicture:
    "https://i.scdn.co/image/ab6775700000ee8571687e7bf15e30955818fe80",
  playlists: [
    {
      id: 1,
      title: "Playlist Title",
      description: "",
      cover:
        "https://mosaic.scdn.co/300/ab67616d00001e02079d9d9af66424ef7d727c17ab67616d00001e0292d340dc3f1ec59ea23d341eab67616d00001e02c6b798ae0ee1a15dc527cb2eab67616d00001e02d64b294cc4a288c7a84c04bb",
      tracks: [
        {
          id: 1,
          title: "Track Title",
          artist: "Artist Name",
          album: "Album Title",
          duration: 0,
          cover: "",
        },
      ],
    },
    {
      id: 2,
      title: "Playlist Title",
      description: "",
      cover:
        "https://mosaic.scdn.co/300/ab67616d00001e02079d9d9af66424ef7d727c17ab67616d00001e0292d340dc3f1ec59ea23d341eab67616d00001e02c6b798ae0ee1a15dc527cb2eab67616d00001e02d64b294cc4a288c7a84c04bb",
      tracks: [],
    },
    {
      id: 3,
      title: "Playlist Title",
      description: "",
      cover:
        "https://mosaic.scdn.co/300/ab67616d00001e02079d9d9af66424ef7d727c17ab67616d00001e0292d340dc3f1ec59ea23d341eab67616d00001e02c6b798ae0ee1a15dc527cb2eab67616d00001e02d64b294cc4a288c7a84c04bb",
      tracks: [],
    },
  ],
  albums: [],
};

export const MOCKED_ALBUM = {
  id: 1,
  title: "Album Title",
  artist: "Artist Name",
  cover: "",
  tracks: [],
};

export const MOCKED_PLAYLIST = {
  id: 1,
  title: "Playlist Title",
  description: "",
  cover: "",
  tracks: [],
};

export const MOCKED_ARTIST = {
  id: 1,
  name: "Artist Name",
  bio: "",
  profilePicture: "",
  albums: [],
  tracks: [],
};
