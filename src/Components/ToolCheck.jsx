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
    TextField,
} from "@mui/material";
//RouteID
import { useParams, useNavigate } from 'react-router-dom';
//Theme
import Theme from '../Theme';
//Database
import { collection, doc, getDocs, setDoc, updateDoc, arrayUnion, addDoc } from "firebase/firestore";
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
    const navigate = useNavigate();
    //State
    const [toolData, setToolData] = useState([]);
    const [toolRegistID, setToolRegistID] = useState([]);
    const [statusTool, setStatusTool] = useState(true);
    const [dateData, setDate] = useState('');
    const [updateData, setUpdateData] = useState(initialValue);

    //Fetch Data
    useEffect(() => {
        const queryData = async () => {
            const toolListRef = collection(db, "toolData", toolID, "toolList")
            const querySnaphot = await getDocs(toolListRef);
            const date = new Date().toLocaleDateString("de");
            querySnaphot.forEach((doc) => {
                setToolData(current => [...current, doc.data()]);
                setToolRegistID(current => [...current, doc.data().toolRegistID]);
                //console.log(toolRegistID);
            })
        };
        const getDate = () => {
            const date = new Date().toLocaleDateString("de");
            setDate(date)
        }
        queryData();
        getDate();
        


    }, [])

    //Submit Button 
    const submitButton = (e) => {
        e.preventDefault();
        const id = toolRegistID.map((data) => data)
        toolData.map((data) => data.dateChecked = dateData);
        toolData.map((data) => {
            const docRef = collection(db, "/toolData/", toolID, "/toolChecked/", dateData, data.toolRegistID);
            const updateData = async () => {
                try {
                    
                    await setDoc(doc(db, "/toolData/", toolID, "/toolChecked/", dateData), { date: data.dateChecked });
                    await setDoc(doc(db, "toolData", toolID, "toolChecked", dateData, "toolList", data.toolRegistID), data)
                    
                }
                catch (err) {
                    console.log(err)
                } 
            };
            updateData();
        });
        window.alert("Document Submitted");
        navigate(-1);
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
                                        <TableCell align="center">Remarks</TableCell>
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
                                                        defaultValue=""
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
                                            <TableCell align="center">
                                                { data.status === true ?
                                                    <TextField label="-" disabled/> :
                                                    <TextField 
                                                        label="Insert Remarks" 
                                                        name={ data.remarks }
                                                        onChange={(e) => {
                                                            data.remarks = e.target.value;
                                                            setToolData([...toolData]);
                                                        }} 
                                                        required
                                                    />
                                                }
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