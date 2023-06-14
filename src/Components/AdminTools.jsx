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
  Button,
} from "@mui/material";
//Routing
import { Link, useNavigate, useParams } from "react-router-dom";
//Theme
import Theme from "../Theme";
//Database
import { db } from "../firebase/FirebaseConfig";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
//Icon
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import CreateIcon from '@mui/icons-material/Create';
//Component
import NavbarBack from "../Components/NavbarBack";


const AdminTools = () => {
  //Route
  const navigate = useNavigate();
  const { toolID } = useParams();
  //State
  const [toolsData, setToolsData] = useState([]);
  //Load
  useEffect(() => {
    const fetchData = async () => {
      const getData = await getDocs(collection(db, "toolData"));
      getData.forEach((doc) => {
        setToolsData(current => [...current, doc.data()]);
      });
    };
    fetchData();
  }, [])
  return (
    <div>
      <NavbarBack />
      <ThemeProvider theme={ Theme }>
        <Container sx={{ mt: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">Tools Data Check</Typography>
              <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                Pengecekan Tools di PT. Universal Traktor Indonesia
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  flexDipslay: "row",
                  justifyContent: "flex-end",
                  mt: 2
                }} 
              >
                <Button 
                  variant="contained" 
                  sx={{ ml: 2 }} 
                  endIcon={ <CreateIcon />}
                  onClick={() => navigate("/toolDocs/Admin/registerTools")} 
                >
                  Register Tools
                </Button>
              </Container>
              <Container sx={{ mt: 2 }}>
                { toolsData.map((data, index) => (
                  <Card key={ index } sx={{ mt: 0.5   }}>
                    <CardContent sx={{ display: "flex", flexDipslay: "row", justifyContent: "space-between" }}>
                      <Container>
                        <Typography variant="h6">{ data.toolCode }</Typography>
                        <Typography variant="body2">{ data.name }</Typography>
                      </Container>
                      <Link to={ data.toolCode }>
                        <Button 
                          variant="contained" 
                          endIcon={ <VisibilityIcon /> } 
                          color="secondary"
                        >
                          Check
                        </Button>
                      </Link>
                      <Link>
                        <Button 
                          variant="contained" 
                          endIcon={ <DeleteIcon /> } 
                          sx={{ ml: 2 }} 
                          color="error"
                          onClick={async () => {
                            await deleteDoc(doc(db, "toolData", data.toolCode));
                            alert("Document Deleted");
                            window.location.reload();
                          }}
                        >
                          Delete
                        </Button>
                      </Link>
                    </CardContent>
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

export default AdminTools