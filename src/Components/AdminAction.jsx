//React
import React from 'react';
//MUI
import {
    Container,
    Card,
    CardActions,
    CardContent,
    Typography,
    ThemeProvider,
    Button,
    Box,
} from "@mui/material";
//Router
import { Link } from "react-router-dom";
//Icon
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
//Theme
import Theme from '../Theme';

const AdminAction = () => {
    return (
        <div>
            <ThemeProvider theme={ Theme } >
                <Container sx={{ mt: 12 }}>
                    <Card>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1, 
                                flexDirection: "row", 
                                justifyContent: "space-around",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" align="left">Tool Documentation</Typography>
                                <Typography variant="body2">
                                    Dokumentasi pengecekan tools di PT. Universal Traktor Indonesia
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to="/toolDocs/Admin">
                                    <Button variant="contained" size="medium" endIcon={ <SupervisorAccountIcon /> }>
                                        Admin
                                    </Button>
                                </Link>
                            </CardActions>
                        </Box>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminAction