import { useEffect, useState } from "react";
import api from "../services/api";
import type { SensorData } from "../types/SensorData";

const RecentData = () => {
  const [recentData, setRecentData] = useState<SensorData[]>([]);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const res = await api.get("/sensordata"); // backend endpoint
        setRecentData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecentData();
  }, []);

  return (
    <div className="recentSensorData-container">
      <h2>SensorData Recent</h2>
      <ul className="listOfSensorData">
        {recentData.map((entry, idx) => (
          <li key={idx}>
            Tid: {entry.timestamp} - 
            Temp: {entry.TEMP}°C, 
            Fukt: {entry.FUKT}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentData;
