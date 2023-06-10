//React
import React from 'react';
//Routing
import { useNavigate } from "react-router-dom"
//MUI
import {
    AppBar,
    Typography,
    Box,
    ThemeProvider,
    Button,
    Toolbar,
    Container,
    IconButton
} from "@mui/material";
//Icon
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
//Theme
import Theme from '../Theme';

const NavbarBack = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ThemeProvider theme={ Theme }>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}  
                            onClick={() => navigate(-1)}  
                            >
                                <KeyboardBackspaceIcon size="small"/>
                            </IconButton>
                            <Typography align="center" variant='h6' sx={{ flexGrow: 1, fontWeight: 700, color: "#212121" }}>U-Tools</Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default NavbarBack