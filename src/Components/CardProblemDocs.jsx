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
} from "@mui/material"

const CardProblemDocs = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 400, mt: 15, height: 350 }}>
            <CardMedia
                sx={{ height: 120 }}
                image="https://www.enago.com/academy/wp-content/uploads/2016/08/Abstract-749x430.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="#212121">
                    Problem Documentation
                </Typography>
                <Typography variant='body2' color="#616161">
                    Dokumentasi setiap permasalahan unit yang terjadi di customer beserta langkah langkah
                    penyelesaian terhadap permasalahan tersebut.
                </Typography>
            </CardContent>
            <CardActions sx={{ mb: 1 }}>
                <Button disabled size="small" variant="contained" sx={{ mt: 2, ml: 1, bgcolor: "#ff9800", ":hover": {bgcolor: "#f57c00"} }}>Lihat Selengkapnya</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default CardProblemDocs