import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LiveData from './components/LiveData'
import Navbar from './components/navbar'
import RecentData from './components/RecentData'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/live" />} />
          <Route path="/live" element={<LiveData />} />
          <Route path="/recent-data" element={<RecentData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
