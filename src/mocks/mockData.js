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

// We need access key to use the api directly and seems deezer is not giving them for now (we cannot register and app)
//so in the meantime we have the file directly accessed
export const MOCKED_PLAYLIST = [
  {
    title: "One More Time",
    artist: "Daft Punk",
    albumCover: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
    song: new Audio('https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3'),
    id: 1
  },
  {
    title: "Aerodynamic",
    artist: "Daft Punk",
    albumCover: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
    song: new Audio('https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-9.mp3'),
    id: 2
  },
  {
    title: "Harder Better Faster Stronger",
    artist: "Daft Punk",
    albumCover: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
    song: new Audio('https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3'),
    id: 3
  },
  {
    title: "Something About Us",
    artist: "Daft Punk",
    albumCover: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
    song: new Audio('https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-8.mp3'),
    id: 4
  }
];

export const MOCKED_ARTIST = {
  id: 1,
  name: "Artist Name",
  bio: "",
  profilePicture: "",
  albums: [],
  tracks: [],
};
