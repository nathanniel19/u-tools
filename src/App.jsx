//Route
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
//Pages
import PageHome from "./Pages/PageHome";
import PageUnitDocs from "./Pages/PageUnitDocs";
import PageToolDocs from "./Pages/PageToolDocs";
import PageToolData from "./Pages/PageToolData";
import PageToolsAdmin from "./Pages/PageToolsAdmin";

function App() {
  

  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={ <PageHome /> } />
            <Route path="/unitDocs" element={ <PageUnitDocs /> } />
            <Route path="/toolDocs" element={ <PageToolDocs /> } />
            <Route path="/toolDocs/Admin" element={ <PageToolsAdmin /> } />
            <Route path="/toolDocs/Admin/:toolID" element={ null } />
            <Route path="/toolDocs/:toolID" element={ <PageToolData /> } />
          </Routes>
        </Router>
      </>
  )
}

export default App
