import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography, Slider,Stack } from "@mui/material"
import {
    PlayArrowRounded,
    PauseRounded,
    FastRewindRounded,
    FastForwardRounded,
    VolumeUpRounded,
    VolumeDownRounded
} from "@mui/icons-material";


const mainIconColor = 'dark'//theme.palette.mode === 'dark' ? '#fff' : '#000';

const step = 1//0.1;

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

export const MusicPlayer = ({ playlist }) => {

    const [track, setTrack] = useState(playlist[0].song)

    const [trackInfo, setTrackInfo] = useState({
        name: playlist[0].name,
        artist: playlist[0].artist
    })

    const [duration, setDuration ] = useState(0);

    track.addEventListener('loadedmetadata', (e) => {
        setDuration(Math.trunc(e.target.duration))
    });

    const [paused, setPaused] = useState(true);

    const [position, setPosition] = useState(0);

    const [volume, setVolume] = useState(100)
  
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
    track.volume = volume/100;
    const index = playlist.map(({song}) => song).indexOf(track);
    setTrackInfo({name: playlist[index].name, artist: playlist[index].artist});
  },[track])
  
    useEffect(() => {
      !paused ? track.play() : track.pause()
    }, [paused, track])
  
    const handleClick = () => setPaused(!paused);

    const handleForward = () => {
        const index = playlist.map(({song}) => song).indexOf(track);
        console.log('el index', index)
        if (index >= 0){
            track.pause();
            setVolume(track.volume*100);
            index < playlist.length -1 ? setTrack(playlist[index+1].song) : setTrack(playlist[0].song) 
        }
    }

    const handleRewind = () => {
        const index = playlist.map(({song}) => song).indexOf(track);
        if (index >= 0){
            track.pause();
            setVolume(track.volume*100);
            index > 0 ? setTrack(playlist[index-1].song) : setTrack(playlist[playlist.length-1].song) 
        }
    }
  
    const handleSliderPosition = (_, value) => {
      track.currentTime = value;
      setPosition(value)
    }

    const handleVolume = (_, value) => {
        track.volume = value/100
        setVolume(track.volume*100)
    }

    return (
        <Box sx={{ position: 'sticky', bottom: 10, width: '100%' }}>
            <Grid container spacing={6} alignItems="center" justifyContent="space-around">
                <Grid item xs={2}>
                    <TinyText>{trackInfo.name}</TinyText>
                    <TinyText>{trackInfo.artist}</TinyText>
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
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} onClick={handleRewind}/>
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
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} onClick={handleForward}/>
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
                        <VolumeDownRounded htmlColor={mainIconColor} />
                        <Slider
                            aria-label="Volume"
                            min={0}
                            step={step}
                            max={100}
                            defaultValue={100}
                            position={volume}
                            size="small"
                            onChange={handleVolume}
                        />
                        <VolumeUpRounded htmlColor={mainIconColor} />
                    </Stack>    
                </Grid>
            </Grid>
        </Box >
    )
}
