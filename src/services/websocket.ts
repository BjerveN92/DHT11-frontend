import { Client } from "@stomp/stompjs";

let stompClient: Client;

export const connectWebSocket = (onMessage: (msg: any) => void) => {
  stompClient = new Client({
    brokerURL: "ws://localhost:8080/sensor-stream", // samma endpoint hittar man i WebSocketConfig i backenden
    reconnectDelay: 5000,
    debug: (str) => console.log(str),
  });

  stompClient.onConnect = () => {
    console.log("Connected to WebSocket!");
    stompClient.subscribe("/topic/sensordata", (message) => {
      onMessage(JSON.parse(message.body));
    });
  };

  stompClient.activate();
};

export const disconnectWebSocket = () => {
  if (stompClient) stompClient.deactivate();
};
