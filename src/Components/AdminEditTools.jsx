//React
import {React, useState} from 'react';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    ThemeProvider,
    Container,
    Typography,
    Button,
    TextField,
} from "@mui/material";
//Route
import { useNavigate, useParams } from "react-router-dom";
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';
//Database
import { setDoc, doc, collection, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';

const initialValue = {
    toolRegistID: '',
    name: '',
    status: true,
    dateChecked: null,
    remarks: "OK"
}

const AdminEditTools = () => {
    //Route
    const navigate = useNavigate();
    const { toolID } = useParams();
    const { idTools } = useParams();
    //State
    const [datas, setDatas] = useState(initialValue);
    //Input Change
    const inputChange = (e) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        });
    };
    //Edit Button
    const editButton = (e) => {
        e.preventDefault();
        const editTool = async () => {
            try {
                await updateDoc(doc(db, "toolData", toolID, "toolList", datas.toolRegistID ), datas)
                window.alert("Data Edited");
                //console.log(datas)
                navigate(-1);
            }
            catch (err) {
                console.log(err);
            }
            //console.log(datas)
        };
        editTool();
    }
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Edit Tools { idTools }</Typography>
                            <Container sx={{ mt: 2 }}>
                                <TextField name="toolRegistID" disabled fullWidth value={ datas.toolRegistID = idTools } />
                                <TextField sx={{ mt: 2 }} name="name" label="Tool Name" onChange={ inputChange } fullWidth />
                                <Button 
                                    variant="contained" 
                                    sx={{ mt: 2 }}
                                    onClick={ editButton }
                                >
                                    Edit
                                </Button>

                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminEditTools