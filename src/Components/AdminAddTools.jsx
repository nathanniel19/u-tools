//React
import { React, useState } from 'react';
//Router
import { useParams, useNavigate } from 'react-router-dom';
//MUI
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    ThemeProvider,
    Button,
    TextField,
    Container,
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
    toolRegistID: "",
    name: "",
    status: true,
    dateChecked: null,
    remarks: "OK",
}

const AdminAddTools = () => {
    //Routing
    const { toolID } = useParams();
    const navigate = useNavigate();
    //State
    const [datas, setDatas] = useState(initialValue);
    //Input Change
    const inputChange = (e) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        });
    };
    //Submit Button
    const submitButton = (e) => {
        const addTool = async () => {
            try {
                await setDoc(doc(db, "toolData", toolID, "toolList", datas.toolRegistID ), datas);
                window.alert("Data Uploaded")
                navigate(-1);
            }
            catch (err) {
                console.log(err);
            }
        };
        addTool();
    }
    return (
        <div>
            <NavbarBack />
            <ThemeProvider theme={ Theme }>
                <Container sx={{ mt: 12 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" align="center">Tambahkan tools di { toolID }</Typography>
                            <Typography variant="body1" align="center">Masukan data tools yang ingin ditambahkan</Typography>
                            <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", mt: 2 }}>
                                <Button variant='contained' onClick={ submitButton }>Add Tools</Button>
                            </Container>
                            <Container sx={{ mt: 5 }}>
                                <TextField variant="outlined" label="Tool Code" name="toolRegistID" onChange={ inputChange } fullWidth />
                                <TextField variant='outlined' label="Tool Name" name="name" onChange={ inputChange } fullWidth sx={{ mt: 2 }} />
                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminAddTools