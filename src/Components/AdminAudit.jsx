//React
import { React, useState } from 'react';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    ThemeProvider,
    Button,
    Container,
    Paper,
} from "@mui/material";
//Router
import { useNavigate, Link, useParams } from "react-router-dom";
//Database
import { db } from '../firebase/FirebaseConfig';
import { getDoc, collection } from 'firebase/firestore';
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';

const AdminAudit = () => {
    //Route
    const { toolID } = useParams();
    const navigate = useNavigate();
    useState
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card component={ Paper }>
                        <CardContent>
                            <Typography variant="h5" align="center">Audit History</Typography>
                            <Typography variant="body1" align="center">History Pengecekan Tool { toolID }</Typography>
                            <Container sx={{ mt: 3 }}>
                                <CardContent>
                                    <Button 
                                        variant="contained" 
                                        fullWidth 
                                        onClick={(() => navigate("listTools"))}
                                    >
                                        List Tools
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        sx={{ mt: 2 }} 
                                        fullWidth
                                        onClick={() => navigate("historyDate")}
                                    >
                                        History Pengecekan Tools
                                    </Button>
                                </CardContent>
                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminAudit