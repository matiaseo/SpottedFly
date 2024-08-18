import { useState, useEffect, useCallback, useContext } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography, Slider,Stack } from "@mui/material"
import {
    PlayArrowRounded,
    PauseRounded,
    SkipPreviousRounded,
    SkipNextRounded
} from "@mui/icons-material";
import { VolumeIcon } from "./VolumeIcon";
import { PlaylistContext } from "../../context/PlaylistContext";


const mainIconColor = 'dark'//theme.palette.mode === 'dark' ? '#fff' : '#000';

const step = 1//0.1;
const MAX_VOLUME = 1;
const VOLUME_STEP = 0.01
const formatDuration = value => {
    console.log('formateanding', value)
  const minute = Math.floor(value / 60);
  const secondLeft = Math.trunc(value - minute * 60);
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
}

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export const MusicPlayer = () => {

    const { playlist } = useContext(PlaylistContext);
    const [track, setTrack] = useState({})
    const [duration, setDuration ] = useState(0);

    track?.song?.addEventListener('loadedmetadata', (e) => {
        setDuration(Math.trunc(e.target.duration))
    });

    useEffect(() => {
        setTrack({
            song: playlist[0]?.song,
            title: playlist[0]?.title,
            albumCover: playlist[0]?.albumCover,
            artist: playlist[0]?.artist
        })
    },[playlist])

    const currentTrackIndex = useCallback(() => playlist.map(({song}) => song).indexOf(track.song), [playlist, track]);

    const handleUpcomingSong = useCallback((index, condition, songIndexIfTrue, songIndexIfFalse) => {
        if (index >= 0){
            track.song.pause();
            setVolume(track.song.volume);
            condition ? setTrack({...playlist[songIndexIfTrue]}) : setTrack({...playlist[songIndexIfFalse]}) 
        }
    }, [playlist, track]);

    const [paused, setPaused] = useState(true);

    const [position, setPosition] = useState(0);

    const [volume, setVolume] = useState(MAX_VOLUME)
  
    useEffect(() => {
      if (!paused){
        const timer = setInterval(() => {
          setPosition((oldProgress) => {
                if (oldProgress >= duration) {
                    setPaused(!paused);
                    setPosition(0);
                    return 0;
                }
                return oldProgress + step
            });
        }, 1000);//100);
  
        return () => {
          clearInterval(timer);
      };
      }
  }, [paused, position, track]);

  useEffect(() => {
    setPosition(0);
    if(track?.song){
        track.song.currentTime = 0;
        track.song.volume = volume;
    }
  },[track])
  
    useEffect(() => {
      !paused ? track?.song?.play() : track?.song?.pause()
    }, [paused, track])
  
    const handleClick = () => setPaused(!paused);

    const handleForward = () => {
        const index = currentTrackIndex()
        handleUpcomingSong(index, index < playlist.length -1, index+1, 0)
    }

    const handleRewind = () => {
        const index = currentTrackIndex()
        handleUpcomingSong(index, index > 0, index-1, playlist.length-1);
    }
  
    const handleSliderPosition = (_, value) => {
      track.song.currentTime = value;
      setPosition(value)
    }

    const handleVolume = (_, value) => {
        track.song.volume = value
        setVolume(track.song.volume)
    }

    return (
        <Box sx={{ position: 'sticky', bottom: 10, width: '100%' }}>
            <Grid container spacing={6} alignItems="center" justifyContent="space-around">
                <Grid container xs={2} spacing={2} justifyContent="space-around" marginTop={6}>
                <Grid item spacing={0.5} marginLeft={10}>
                <img
                    src={`${track.albumCover}?w=164&h=164&fit=crop&auto=format`}
                    loading="lazy"
                />
                </Grid>
                <Grid item xs={6}>
                    <TinyText>{track.title}</TinyText>
                    <TinyText>{track.artist}</TinyText>
                </Grid>
                </Grid>
                
                <Grid item xs={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                    >
                    <IconButton aria-label="previous song">
                        <SkipPreviousRounded fontSize="large" htmlColor={mainIconColor} onClick={handleRewind}/>
                    </IconButton>
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={handleClick}
                    >
                        {paused ? (
                        <PlayArrowRounded
                            sx={{ fontSize: '3rem' }}
                            htmlColor={mainIconColor}
                        />
                        ) : (
                        <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next song">
                        <SkipNextRounded fontSize="large" htmlColor={mainIconColor} onClick={handleForward}/>
                    </IconButton>
                </Box>      
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={step}
                    max={duration}
                    onChange={handleSliderPosition}
                    />
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                    >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration - position)}</TinyText>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Stack spacing={2} direction="row" sx={{ mt: 2, px: 1 }} alignItems="center">
                        <VolumeIcon volume={volume} htmlColor={mainIconColor} maxVolume={MAX_VOLUME}/>
                        <Slider
                            aria-label="Volume"
                            min={0}
                            step={VOLUME_STEP}
                            max={MAX_VOLUME}
                            defaultValue={MAX_VOLUME}
                            position={volume}
                            size="small"
                            onChange={handleVolume}
                        />
                        {/* <VolumeUpRounded htmlColor={mainIconColor} /> */}
                    </Stack>    
                </Grid>
            </Grid>
        </Box >
    )
}
