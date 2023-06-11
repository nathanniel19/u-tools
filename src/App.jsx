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
import PageToolsAdminCheck from "./Pages/PageToolsAdminCheck";
import PageToolsAdminRegister from "./Pages/PageToolsAdminRegister";
import PageToolsAdminAdd from "./Pages/PageToolsAdminAdd";

function App() {
  

  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={ <PageHome /> } />
            <Route path="/unitDocs" element={ <PageUnitDocs /> } />
            <Route path="/toolDocs" element={ <PageToolDocs /> } />
            <Route path="/toolDocs/Admin" element={ <PageToolsAdmin /> } />
            <Route path="/toolDocs/Admin/registerTools" element={ <PageToolsAdminRegister />} />
            <Route path="/toolDocs/Admin/:toolID" element={ <PageToolsAdminCheck /> } />
            <Route path="/toolDocs/Admin/:toolID/add" element={ <PageToolsAdminAdd />} />
            <Route path="/toolDocs/:toolID" element={ <PageToolData /> } />
          </Routes>
        </Router>
      </>
  )
}

export default App
