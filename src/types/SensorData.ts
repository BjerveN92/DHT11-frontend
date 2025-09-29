export interface SensorData {
  id: string;
  TEMP: number;        // Mappar till @JsonProperty("TEMP")
  FUKT: number;        // Mappar till @JsonProperty("FUKT") 
  timestamp: string;   // LocalDateTime kommer som sträng i formatet "yyyy-MM-dd HH:mm:ss"
}
