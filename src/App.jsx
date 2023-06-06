import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import PageHome from "./Pages/PageHome";

function App() {
  

  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={ <PageHome /> } />
          </Routes>
        </Router>
      </>
  )
}

export default App
