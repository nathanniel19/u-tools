//React
import { React, useState } from 'react';
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
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
//Router
import { Link, useNavigate } from "react-router-dom";
//Icon
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
//Theme
import Theme from '../Theme';

const AdminAction = () => {
    //Route
    const navigate = useNavigate();
    //State
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('')
    const user = "admin123"
    //Dialog Interaction
    const dialogOpen = () => {
        setOpen(true);
    };
    const dialogClose = () => {
        setOpen(false);
    };
    //Password Field
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    //Submit Button
    const buttonSubmit = (e) => {
        password === user ? 
            navigate("/toolDocs/Admin") : 
            window.alert("Wrong");
        
    }

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
                                <Button variant="contained" size="medium" endIcon={ <SupervisorAccountIcon /> } onClick={ dialogOpen }>
                                    Admin
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                    <Dialog open={ open } onClose={ dialogClose }>
                        <DialogTitle>Admin Page</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                You will direct open Admin Page. Please insert the password.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="password"
                                label="Insert Password"
                                type="password"
                                fullWidth
                                variant="standard"
                                onChange={ passwordChange }
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ dialogClose }>Cancel</Button>
                            <Button onClick={ buttonSubmit }>Enter</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminAction