import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import RecentData from './components/RecentData'
import CurrentData from "./components/CurrentData";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/current-data" />} />
          <Route path="/current-data" element={<CurrentData />} />
          <Route path="/recent-data" element={<RecentData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App