//React
import React from 'react';
//MUI
import {
    Card,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Container,
    CardContent,
    Paper
} from "@mui/material";
//Router
import { useNavigate } from "react-router-dom";

const CardToolboxDocs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Card sx={{ maxWidth: 400, mt: 2, height: 350 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="null"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="#212121">
                        Toolbox Documentation
                    </Typography>
                    <Typography variant='body2' color="#616161">
                        Dokumentasi setiap penggunaan semua toolbox dan special tools yang terdapat di
                        PT. Universal Traktor Indonesia.
                    </Typography>
                </CardContent>
                <CardActions sx={{ mb: 1 }}>
                    <Button 
                        size="small" 
                        variant="contained" 
                        sx={{ mt: 2, ml: 1, bgcolor: "#ff9800", ":hover": {bgcolor: "#f57c00"} }}
                        onClick={ () => navigate("/toolDocs")}
                    >
                        Lihat Selengkapnya
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardToolboxDocs