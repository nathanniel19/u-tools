//React
import React from 'react';
//MUI
import {
    AppBar,
    Typography,
    Box,
    ThemeProvider,
    Toolbar,
} from "@mui/material";
//Theme
import Theme from '../Theme';

const Navbar = () => {
  return (
    <div>
        <ThemeProvider theme={ Theme }>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                    <Typography align="center" variant='h6' sx={{ flexGrow: 1, fontWeight: 700, color: "#212121" }}>U-Tools</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default Navbar