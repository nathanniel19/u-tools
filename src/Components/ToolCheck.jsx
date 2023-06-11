//React
import { React, useState, useEffect } from 'react';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    Container,
    ThemeProvider,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    Button,
    FormControl,
    FormHelperText,
} from "@mui/material";
//RouteID
import { useParams } from 'react-router-dom';
//Theme
import Theme from '../Theme';
//Database
import { collection, doc, getDocs, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
//Component
import NavbarBack from './NavbarBack';


const initialValue = [{
    toolID: '',
    name: '',
    status: '',
    dateChecked: null,
}]

const ToolCheck = () => {
    //Routing
    const { toolID } = useParams();
    //State
    const [toolData, setToolData] = useState([]);
    const [statusTool, setStatusTool] = useState(true);
    const [dateData, setDate] = useState('');
    const [updateData, setUpdateData] = useState(initialValue);

    //Fetch Data
    useEffect(() => {
        const queryData = async () => {
            const toolListRef = collection(db, "toolData", toolID, "toolList")
            const querySnaphot = await getDocs(toolListRef);
            const date = new Date().toLocaleDateString("in");
            querySnaphot.forEach((doc) => {
                setToolData(current => [...current, doc.data()])
            })
        };
        const getDate = () => {
            const date = new Date().toLocaleDateString("in");
            setDate(date)
        }
        queryData();
        getDate();
        


    }, [])

    
    //Submit Button 
    const submitButton = (e) => {
        e.preventDefault();
        toolData.map((data) => data.dateChecked = dateData);
        toolData.map((data) => {
            const docRef = doc(db, "toolData", toolID, "toolList", data.toolRegistID);
            const updateData = async () => {
                try {
                    await updateDoc(docRef, data);
                    //window.alert("Document Updated");
                }
                catch (err) {
                    console.log(err)
                } 
            };
            updateData();
        });
        //window.location.reload();
    }
    
    
    return (
        <ThemeProvider theme={ Theme }>
            <NavbarBack />
            <Container sx={{ mt: 20 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" align="center">Tool Checklist {toolID}</Typography>
                        <Container sx={{ mt: 5, mr: 2, display: "flex", flexDisplay: "row", justifyContent: "right" }}>    
                            <Button variant="contained" onClick={ submitButton }>Submit</Button>
                        </Container>
                        <TableContainer component={ Paper } sx={{ mt: 5 }}>
                            <Table sx={{ minWidth: 600 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Tool ID</TableCell>
                                        <TableCell align="center">Tool Name</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { toolData.map((data, index) => (  
                                        <TableRow key={index}>
                                            <TableCell align="center">{ data.toolRegistID }</TableCell>
                                            <TableCell align="center">{ data.name }</TableCell>
                                            <TableCell align="center">
                                                <FormControl variant="standard" fullWidth>
                                                    <Select
                                                        defaultValue={ true }
                                                        onChange={(e) => {
                                                            data.status = e.target.value;
                                                            setToolData([...toolData]);
                                                        }}     
                                                        label='Select Status'
                                                    >
                                                        <MenuItem value={ true }> OK</MenuItem>
                                                        <MenuItem value={ false }>Not OK</MenuItem>
                                                    </Select>
                                                    <FormHelperText>Select the Status...</FormHelperText>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                          
                    </CardContent>
                </Card>
            </Container>
        </ThemeProvider>
    )
}

export default ToolCheck