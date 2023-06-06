import React from 'react';
import {
    Container,
    Box,
} from "@mui/material"

import Navbar from './Navbar';
import CardUnitDocs from './CardUnitDocs';
import CardSparepartDocs from './CardSparepartDocs';
import CardProblemDocs from './CardProblemDocs';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Container>
            <Box
                sx={{
                    pt: 4,
                    mt: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
                    justifyContent: "space-between",
                    gap: 1
                }}
            >
                <CardUnitDocs />
                <CardSparepartDocs />
                <CardProblemDocs />
            </Box>
        </Container>
    </div>
  )
}

export default Home