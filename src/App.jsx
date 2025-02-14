import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Packages from "./pages/Package"
import Laptop from "./pages/Laptop";
import Sidebar from "./components/Sidebar"




function App() {
 

  return (
    <>
      <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/packages" element={<Packages />} />
            <Route path="/laptop" element={<Laptop />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
