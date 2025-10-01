import { useState } from "react";
import type { SensorData } from "../types/SensorData";


const CurrentData = () => {
  const [data ] = useState<SensorData | null>(null);

  if (!data) return <p>Loading live data...</p>;

  return (
    <div className="just-a-container">
      <h2>Sensor data</h2>
      <h5>sensor model: DHT11</h5>
      <p>Tid: {data.timestamp} - </p>
      <p>Temp: {data.TEMP}°C</p>
      <p>Fukt: {data.FUKT}%</p>
    </div>
  );
};

export default CurrentData;
