//React
import { React, useEffect, useState } from 'react';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
    ThemeProvider,
    Paper,
    Button,
} from "@mui/material";
//Route
import { useParams, Link } from "react-router-dom";
//Database
import { db } from '../firebase/FirebaseConfig';
import { collection, getDocs, getDoc } from "firebase/firestore";
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';

const AdminHistoryTools = () => {
    //Route
    const { toolID } = useParams();
    const { date } = useParams();
    //State
    const [historyDate, setHistoryDate] = useState([]);
    //Fetch Data
    useEffect(() => {
        const getHistoryData = async () => {
            const queryHistory = await getDocs(collection(db, "/toolData/", toolID, "toolChecked"));
            queryHistory.forEach((doc) => {
                setHistoryDate(current => [...current, doc.data()]);
                //console.log(doc.data())
            })
        }
        getHistoryData();
    }, []);
    //console.log(historyDate)
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card component={ Paper }>
                        <CardContent>
                            <Typography variant="h5" align="center">History { toolID }</Typography>
                            <Typography variant="body1" align="center">History Pengecekan dari { toolID }</Typography>                            
                            { historyDate.map((data, index) => (
                                <Card component={ Paper } sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={ index }>
                                    <CardContent>
                                        <Typography variant="body1">Date: { data.date }</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={ data.date }>
                                            <Button variant="contained">Check History</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            ))}        
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminHistoryTools