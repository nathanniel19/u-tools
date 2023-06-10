//React
import { React, useEffect, useState } from 'react';
//Router
import { Link } from 'react-router-dom';
//MUI
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  ThemeProvider,
  Button
} from "@mui/material";
//Component
import NavbarBack from './NavbarBack';
//Theme
import Theme from "../Theme";
//Database
import { db } from '../firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const AdminTools = () => {
  const [toolsData, setToolsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const docRef = await getDocs(collection(db, "toolData"));
      docRef.forEach((doc) => {
        setToolsData(current => [...current, doc.data()])
      })
    };
    getData();
  }, [])


    return (
      <div>
          <NavbarBack />
          <ThemeProvider theme={ Theme }>
            <Container sx={{ mt: 10 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">Tool Data</Typography>
                  <Typography variant="body1" align="center" sx={{ mt: 2}}>Check audit data tool di PT. Universal Traktor Indonesia</Typography>
                  { toolsData.map((data) => (
                    <Card sx={{ mt: 2, display: "flex", flexDisplay: "row", justifyContent: "space-between" }}>
                      <CardContent>
                        <Typography variant="body1">{ data.toolCode }</Typography>
                        <Typography variant="body2">{ data.name }</Typography>
                      </CardContent>
                      <CardActions>
                        <Link to={ data.toolCode }>
                          <Button variant="contained">Check Tools</Button>
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

export default AdminTools