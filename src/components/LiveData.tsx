import { useEffect, useState } from "react";
import { connectWebSocket, disconnectWebSocket } from "../services/websocket";
import type { SensorData } from "../types/SensorData";


const LiveData = () => {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    connectWebSocket((msg) => {
      setData(msg);
    });

    return () => disconnectWebSocket();
  }, []);

  if (!data) return <p>Loading live data...</p>;

  return (
    <div className="liveSensorData-container">
      <h2>Sensor data</h2>
      <h5>sensor model: DHT11</h5>
      <p>Tid: {data.timestamp} - </p>
      <p>Temp: {data.TEMP}°C</p>
      <p>Fukt: {data.FUKT}%</p>
    </div>
  );
};

export default LiveData;
