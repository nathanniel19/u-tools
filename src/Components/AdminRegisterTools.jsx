//React
import { React, useState } from 'react';
//Routing
import { useNavigate } from 'react-router-dom';
//MUI
import {
    Container,
    Card,
    CardContent,
    CardActions,
    Typography,
    ThemeProvider,
    TextField,
    Button,
} from "@mui/material";
//Database
import { db } from '../firebase/FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";
//Theme
import Theme from '../Theme';
//Component
import NavbarBack from './NavbarBack';



//Initial Value
const initialValue = {
    toolCode: "",
    name: "",
}

const AdminRegisterTools = () => {
    //Routing
    const navigate = useNavigate();
    //State
    const [datas, setDatas] = useState(initialValue);
    //Input Change
    const handleInputChange = (e) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    };
    //Submit button
    const submitButton = (e) => {
        //Connect DB
        const writeDoc = async (e) => {
            try {
                await setDoc(doc(db, "toolData", datas.toolCode), datas);
                window.alert("Document Uploaded");
                navigate(-1);
            }
            catch (err) {
                console.log(err);
            };
        }
        writeDoc();
    }
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Register Tools</Typography>
                            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                                Register Tools Baru di Workshop PT. Universal Traktor Indonesia
                            </Typography>
                            <Container
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    mt: 2
                                }}
                            >
                                <Button variant="contained" onClick={ submitButton }>Submit Data</Button>
                            </Container>
                            <Container sx={{ mt: 4 }}>
                                <TextField label="Tool Code" variant="outlined" name="toolCode" fullWidth onChange={ handleInputChange }/>
                                <TextField label="Tool Name" variant="outlined" name="name" fullWidth sx={{ mt: 2 }} onChange={ handleInputChange } />
                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminRegisterTools