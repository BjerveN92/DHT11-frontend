import { useEffect, useState } from "react";
import api from "../services/api";
import type { SensorData } from "../types/SensorData";

const CurrentData = () => {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await api.get<SensorData>("/api/sensordata/latest");
        if (mounted) setData(res.data ?? null);
      } catch (err) {
        console.error(err);
      }
    };

    load();
    const id = setInterval(load, 5000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  if (!data) return <p>Loading live data...</p>;

  return (
    <div className="just-a-container">
      <h2>Sensor data</h2>
      <h5>sensor model: DHT11</h5>
      <p>Tid: {data.timestamp}</p>
      <p>Temp: {data.TEMP}°C</p>
      <p>Fukt: {data.FUKT}%</p>
    </div>
  );
};

export default CurrentData;
