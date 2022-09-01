import config from "@/config";

export async function fetchAirports() {
  return (await fetch(config.apis.airports_endpoint)).json();
}
