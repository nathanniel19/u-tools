//React
import React from 'react';
//MUI
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    ThemeProvider,
    Container,
    Box,
} from "@mui/material";
//Theme
import Theme from "../Theme";
//Backend
import { storage } from "../firebase/FirebaseConfig";

const BrandList = () => {
    const url = "https://firebasestorage.googleapis.com/v0/b/u-tools-c6964.appspot.com/o/Logo%2FMagniLogo.png?alt=media&token=3630a2ed-8854-4f9e-acf6-32f9dea210e0&_gl=1*14og3al*_ga*MTY0MDQ2MjE2LjE2ODUwODE4MDk.*_ga_CW55HF8NVT*MTY4NjE1MjIyNC4xMS4xLjE2ODYxNTM5MDAuMC4wLjA."
    return (
        <div>
            <ThemeProvider theme={ Theme }>
                <Card sx={{ mt: 10 }}>
                    <CardContent>
                        <Typography variant="h4" align="center">Select Brand</Typography>
                        <Container>
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    gap: 0.2, 
                                    flexDirection: "row", 
                                    justifyContent: "space-around",
                                    mt: 4 
                                    }}
                            >
                                <img src={url} sx={{ maxWidth: 100 }}/>
                                <Typography variant="h6">Magni</Typography>
                                <img src={null} sx={{ maxWidth: 100 }}/>
                                <Typography variant="h6">Yale</Typography>
                                <img src={null} sx={{ maxWidth: 100 }}/>
                                <Typography variant="h6">Sennebogen</Typography>
                                <img src={null} sx={{ maxWidth: 100 }}/>
                                <Typography variant="h6">Hyster</Typography>
                            </Box>
                        </Container>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default BrandList