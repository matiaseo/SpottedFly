import { useState, useEffect } from "react";
import { Box, Grid, LinearProgress } from "@mui/material"

export const MusicPlayer = (props) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ position: 'sticky', bottom: 0, width: '100%' }}>
            <Grid container spacing={6} alignItems="center" justifyContent="space-around">
                <Grid item >Whats being played?</Grid>
                <Grid item xs={4}>
                    {progress}

                    <Box item>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    {props.duration}
                </Grid>
                <Grid item >Volume and +</Grid>
            </Grid>
        </Box >
    )
}
