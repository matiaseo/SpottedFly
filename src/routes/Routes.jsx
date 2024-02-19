import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { AlbumPage } from "../pages/album/AlbumPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PlaylistPage } from "../pages/playlist/PlaylistPage";
import { ArtistPage } from "../pages/artist/ArtistPage";
import { QueuePage } from "../pages/queue/QueuePage";
import { ErrorPage } from "../pages/error/ErrorPage";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "album/:albumId",
        element: <AlbumPage />,
        errorElement: <ErrorPage />,

    },
    {
        path: "profile/:userId",
        element: <ProfilePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "playlist/:playlistId",
        element: <PlaylistPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "artist/:artistId",
        element: <ArtistPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "queue",
        element: <QueuePage />,
        errorElement: <ErrorPage />,
    }
]);