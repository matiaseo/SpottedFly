import { routes } from '../../routes/Routes'
import { RouterProvider, } from "react-router-dom";
import { Container, Box } from '@mui/material';


export const MainContainer = () => {
    return (
        <Container fixed >
            <Box minHeight={'calc(100vh - 60px)'} >
                <RouterProvider router={routes} />
            </Box>
        </Container >
    )
}
