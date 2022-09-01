import { FieldValues } from "react-hook-form";
import { AirportsApiReturnType, PointOnEarth } from "@/types";
import DistanceCalculator from "@/lib/DistanceCalculator";

export function extractAirportsFromValues(values: FieldValues) {
  const { departureAirport, arrivalAirport } = values;
  return {
    departureAirport: departureAirport?.value,
    arrivalAirport: arrivalAirport?.value,
  };
}

export function calculateDistanceBetweenAirports(
  airportA: AirportsApiReturnType,
  airportB: AirportsApiReturnType
) {
  const pointA = extractPointOnEarth(airportA);
  const pointB = extractPointOnEarth(airportB);
  return DistanceCalculator.calculate(pointA, pointB);
}

export function convertAiportsToOptions(airports: AirportsApiReturnType[]): {
  label: string;
  value: AirportsApiReturnType;
}[] {
  return airports.map((airport) => ({
    label: formatAirportLabel(airport),
    value: airport,
  }));
}

function formatAirportLabel(airport: AirportsApiReturnType) {
  return `${airport.name} (${airport.code})`;
}

function extractPointOnEarth(airport: AirportsApiReturnType): PointOnEarth {
  return [airport.lat, airport.lon];
}
