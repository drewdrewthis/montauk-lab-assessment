import config from "@/config";
import airports from "../../../pages/api/data/airports.json";

export async function fetchAirports() {
  try {
    return (await fetch(config.apis.airports_endpoint)).json();
  } catch (e) {
    // This loads it from local data
    return airports;
  }
}
