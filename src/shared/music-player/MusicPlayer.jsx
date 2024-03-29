import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography, Slider } from "@mui/material"
import {
    PlayArrowRounded,
    PauseRounded,
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

export const MusicPlayer = ({ track }) => {

    const [audio, setAudio] = useState(track)

    const [duration, setDuration ] = useState(0);

    audio.addEventListener('loadedmetadata', (e) => {
        setDuration(Math.trunc(e.target.duration))
    });

    const [paused, setPaused] = useState(true);

    const [position, setPosition] = useState(0);
  
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
  }, [paused, position, audio]);
  
    useEffect(() => {
      !paused ? audio.play() : audio.pause()
    }, [paused, audio])
  
    const handleClick = () => setPaused(!paused)
  
    const handleSliderPosition = (_, value) => {
      audio.currentTime = value;
      setPosition(value)
    }

    return (
        <Box sx={{ position: 'sticky', bottom: 10, width: '100%' }}>
            <Grid container spacing={6} alignItems="center" justifyContent="space-around">
                <Grid item >Whats being played?</Grid>
                <Grid item xs={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                    >
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
                <Grid item >Volume and +</Grid>
            </Grid>
        </Box >
    )
}
