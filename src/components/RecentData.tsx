import { useEffect, useState } from "react";
import api from "../services/api";
import type { SensorData } from "../types/SensorData";

const RecentData = () => {
  const [recentData, setRecentData] = useState<SensorData[]>([]);

  useEffect(() => {
    let mounted = true;

    const fetchRecentData = async () => {
      try {
        const res = await api.get<SensorData[]>("/api/sensordata");
        if (mounted) setRecentData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecentData();
    const id = setInterval(fetchRecentData, 2000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return (
    <div className="just-a-container">
      <h2 className="title">SensorData Logg</h2>
      <ul className="sensorData-list">
        {recentData.map((entry, idx) => (
          <li key={idx}>
            Tid: {entry.timestamp} — Temp: {entry.TEMP}°C — Fukt: {entry.FUKT}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentData;
