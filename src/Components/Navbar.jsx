import React from 'react';
import {
    AppBar,
    Typography,
    Box,
    ThemeProvider
} from "@mui/material";
import Theme from '../Theme';

const Navbar = () => {
  return (
    <div>
        <ThemeProvider theme={ Theme }>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ pt: 2, pb: 2}}>
                    <Typography align="center" variant='h6'>U-Tools</Typography>
                </AppBar>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default Navbar