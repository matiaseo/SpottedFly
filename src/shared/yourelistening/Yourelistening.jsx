import { Box, Stack } from '@mui/material'
import React from 'react'
import { Card } from '../cards/Card'

// This component is for the right side section which is rendered only if the user clicks the "You are listening View" button in the music player.
export const Yourelistening = () => {
    return (
        <Box sx={{ flexGrow: 0, p: 0 }}>
            <Stack direction='column'>
                <Card description='Test' picture="https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all"
                    title='TEST'
                ></Card>      <Card description='Test' picture="https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all"
                    title='TEST'
                ></Card>      <Card description='Test' picture="https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all"
                    title='TEST'
                ></Card>      <Card description='Test' picture="https://www.macworld.com/wp-content/uploads/2023/04/apple-music-spotify-graphic-2.jpg?quality=50&strip=all"
                    title='TEST'
                ></Card>
            </Stack>
        </Box>
    )
}
