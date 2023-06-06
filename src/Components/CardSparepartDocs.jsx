import React from 'react';
import {
    Card,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Container,
    CardContent,
    Paper
} from "@mui/material"

const CardSparepartDocs = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 400, mt: 15, height: 350 }}>
            <CardMedia
                sx={{ height: 120 }}
                image="null"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="#212121">
                    Parts Documentation
                </Typography>
                <Typography variant='body2' color="#616161">
                    Dokumentasi part catalogue dari berbagai macam brand di PT. ULTI. Disini anda dapat menemukan berbagai macam
                    dokumen part catalogue unit.
                </Typography>
            </CardContent>
            <CardActions sx={{ mb: 1 }}>
                <Button size="small" variant="contained" sx={{ mt: 2, ml: 1, bgcolor: "#ff9800", ":hover": {bgcolor: "#f57c00"} }}>Lihat Selengkapnya</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default CardSparepartDocs