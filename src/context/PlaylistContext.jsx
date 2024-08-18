import { useState, createContext } from 'react';

export const PlaylistContext = createContext();

export const PlaylistProvider = ({children}) => {

    const [playlist, setPlaylist] = useState([]);

    const addTrackToPlaylist = track => {
      setPlaylist([...playlist, track]);
    };

    const removeTrackFromPlaylist = ({id}) => {
      setPlaylist(playlist.filter(({item}) => item.id !== id));
    };

    return (
        <PlaylistContext.Provider
          value={{
            playlist,
            setPlaylist,
            removeTrackFromPlaylist,
            addTrackToPlaylist
          }}
        >
          {children}
        </PlaylistContext.Provider>
      );
};