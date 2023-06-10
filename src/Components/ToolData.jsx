//React
import { React, useState, useEffect } from 'react';
//Route Page
import { useNavigate, Link } from "react-router-dom";
//MUI
import {
    Button,
    Card,
    CardActions,
    CardContent,
    ThemeProvider,
    Container,
    Typography,
    Box,
} from "@mui/material";
//Theme
import Theme from '../Theme';
//Firebase
import { db } from '../firebase/FirebaseConfig';
import { collection, doc, getDocs } from "firebase/firestore";


const ToolData = () => {
    //State
    const [toolData, setToolData] = useState([]);
    const [toolList, setToolList] = useState([]);
    //Route Navigate
    const navigate = useNavigate();

    useEffect(() => {
        //Query Data
        const getDataDb = async () => {
            try {
                const queryToolData = await getDocs(collection(db, "toolData"));
                queryToolData.forEach((doc) => {
                    setToolData(current => [...current, doc.data()]);
                });
            }
            catch (err) {
                console.log(err)
            }
        };
        getDataDb();
    }, []);

    
    return (
        <div>
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 2 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" align="center">Daftar Tools</Typography>
                            <Container sx={{ mt: 2 }}>
                                { toolData.map((data) => (
                                    <Card sx={{ mt: 2 }} key={data.toolCode}>
                                        <Box sx={{ display: "flex", flexDisplay: "row", justifyContent: "space-between",gap: 4 }}> 
                                            <CardContent>
                                                <Typography variant="body1">No: { data.toolCode }</Typography>
                                                <Typography sx={{ mr: 5 }}variant='body1'>{ data.name }</Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={ data.toolCode }>
                                                    <Button variant="contained">Check</Button>
                                                </Link>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                ))}
                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default ToolData