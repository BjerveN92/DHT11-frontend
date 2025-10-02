import { useEffect, useState } from "react";
import api from "../services/api";
import type { SensorData } from "../types/SensorData";

const CurrentData = () => {
  const [currentData, setCurrentData] = useState<SensorData | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchCurrentData = async () => {
      try {
        const res = await api.get<SensorData>("/api/sensordata/latest");
        if (mounted) setCurrentData(res.data ?? null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCurrentData();
    // varje halv sekund efter post-anropet så uppdaterar den automatisk
    // man får en realtids-känsla utan websocket med denna funktionalitet! 
    // samma sak händer inne på RecentData
    const id = setInterval(fetchCurrentData, 500); 
    return () => { mounted = false; clearInterval(id); };
  }, []);

  if (!currentData) return <p>Loading live data...</p>;

  return (
    <div className="just-a-container current-data">
      <h2 className="title">Latest SensorData</h2>
      <h5>sensor model: DHT11</h5>
      <p>Tid: {currentData.timestamp}</p>
      <p>Temp: {currentData.TEMP}°C</p>
      <p>Fukt: {currentData.FUKT}%</p>
    </div>
  );
};

export default CurrentData;
