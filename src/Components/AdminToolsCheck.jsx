//React
import { React, useState, useEffect } from 'react';
//Routing
import { useParams, Link } from 'react-router-dom';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    ThemeProvider,
    Typography,
    Container,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    Button,
} from "@mui/material";
//Icon
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';
//Database
import { db } from '../firebase/FirebaseConfig';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';

const AdminToolsCheck = () => {
    //Router
    const { toolID } = useParams();
    //Data State
    const [toolList, setToolList] = useState([]);
    //Fetch data
    useEffect(() => {
        const fetchData = async () => {
            const toolListRef = collection(db, "toolData", toolID, "toolList");
            const toolSnapshot = await getDocs(toolListRef);
            toolSnapshot.forEach((doc) => {
                setToolList(current => [...current, doc.data()]);
            });
        };
        fetchData();
    }, []);
    //console.log(toolList)
    
    
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Tool List</Typography>
                            <Typography variant="body1" align="center">Data dari pengecekan tools { toolID }</Typography>
                            <Container
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Link to={ "add" }>
                                    <Button variant="contained" endIcon={ <CreateIcon /> }>Add Tools</Button>
                                </Link>
                            </Container>
                        </CardContent>
                        <TableContainer component={ Paper } sx={{ mt: 2 }}>
                            <Table sx={{ minWidth: 600 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Tools Id</TableCell>
                                        <TableCell align="center">Tools Name</TableCell>
                                        <TableCell align="center">Delete Tools</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { toolList.map((data, index) => (
                                        <TableRow key={ index }>
                                            <TableCell align="center">{ data.toolRegistID }</TableCell>
                                            <TableCell align="center">{ data.name }</TableCell>
                                            <TableCell align="center">
                                                <Button 
                                                    variant="contained"
                                                    onClick={async () => {
                                                        await deleteDoc(doc(db, "toolData", toolID, "toolList", data.toolRegistID));
                                                        alert("Document Deleted")
                                                        window.location.reload();
                                                    }}
                                                    endIcon={ <DeleteIcon />}
                                                    color="error"
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminToolsCheck