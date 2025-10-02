import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar"; // min kompontent har ju stort N i Navbar.tsx, konstigt det funkar ändå? 
import RecentData from "./components/RecentData";
import CurrentData from "./components/CurrentData";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/current-data" />} />
          <Route path="/current-data" element={<CurrentData />} />
          <Route path="/recent-data" element={<RecentData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;