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
import { setDoc } from 'firebase/firestore';

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
        const editTool = async () => {
            try {
                await setDoc(doc(db, "toolData", toolID, "toolList", datas.toolRegistID ), datas)
                window.alert("Data Edited");
                navigate(-1);
            }
            catch (err) {
                console.log(err);
            }
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
                            <Typography variant="h5" align="center">Edit Tools</Typography>
                            <Container sx={{ mt: 2 }}>
                                <TextField name="toolRegistID" label="Tool Code" onChange={ inputChange } fullWidth />
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