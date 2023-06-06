import React from 'react';
import {
    Card,
    CardActions,
    CardMedia,
    Button,
    Typography,
    CardContent,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const CardUnitDocs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Card sx={{ maxWidth: 400, mt: 15, height: 350 }}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="null"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="#212121" align="left">
                        Unit Documentation
                    </Typography>
                    <Typography variant='body2' color="#616161">
                        Dokumentasi unit berbagai macam brand di PT. ULTI. Disini anda dapat menemukan berbagai macam
                        dokumen unit seperti electrical schematic, hydraulic schematic dan sebagainya.
                    </Typography>
                </CardContent>
                <CardActions sx={{ mb: 1 }}>
                    <Button 
                        size="small" 
                        variant="contained" 
                        sx={{ ml: 1, bgcolor: "#ff9800", ":hover": {bgcolor: "#f57c00"}}} 
                        onClick={ () => navigate("/unitDocs")}
                    >
                        Lihat Selengkapnya
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardUnitDocs