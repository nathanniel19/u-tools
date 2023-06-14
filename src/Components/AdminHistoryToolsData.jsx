//React
import { React, useState, useEffect } from 'react';
//MUI
import {
    ThemeProvider,
    Card,
    CardContent,
    CardActions,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Container,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
//Route
import { useParams } from "react-router-dom";
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';
//Database
import { db } from '../firebase/FirebaseConfig';
import { getDocs, collection } from "firebase/firestore";

const AdminHistoryToolsData = () => {
    //Route
    const { date } = useParams();
    const { toolID } = useParams();
    //State
    const [datas, setDatas] = useState([]);
    //Fetch Data
    useEffect(() => {
        const getHistoryData = async () => {
            const queryHistory = await getDocs(collection(db, "toolData", toolID, "toolChecked", date, "toolList"));
            queryHistory.forEach((doc) => {
                setDatas(current => [...current, doc.data()])
            })
        };
        getHistoryData();
    }, [])
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme = { Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">History { toolID }</Typography>
                            <Typography variant="body1" align="center">Tanggal { date }</Typography>
                            <TableContainer component={ Paper } sx={{ mt: 2 }}>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">ID Tools</TableCell>
                                            <TableCell align="center">Tools Name</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Remarks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        { datas.map((data, index) => (
                                            <TableRow key={ index }>
                                                <TableCell align="center">{ data.toolRegistID }</TableCell>
                                                <TableCell align="center">{ data.name }</TableCell>
                                                { data.status ?
                                                    <TableCell align="center">OK</TableCell> :
                                                    <TableCell align="center">Not OK</TableCell>
                                                }
                                                <TableCell align="center">{ data.remarks }</TableCell>
                                            </TableRow> 
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminHistoryToolsData