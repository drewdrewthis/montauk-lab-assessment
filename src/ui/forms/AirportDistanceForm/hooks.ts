import { useAirports } from "@/apis/Airports/hooks/useAirports";
import { FieldValues, useForm } from "react-hook-form";
import {
  calculateDistanceBetweenAirports,
  convertAiportsToOptions,
  extractAirportsFromValues,
} from "./utils";

function useDistance(values: FieldValues) {
  const { departureAirport, arrivalAirport } =
    extractAirportsFromValues(values);

  if (!departureAirport || !arrivalAirport) return {};

  const distance = calculateDistanceBetweenAirports(
    departureAirport,
    arrivalAirport
  );

  return {
    distance,
  };
}

export function useController() {
  const { airports, error, loading } = useAirports();
  const { control, watch } = useForm();
  const values = watch();
  const { distance } = useDistance(values);

  return {
    control,
    error,
    loading,
    options: airports ? convertAiportsToOptions(airports) : [],
    distance,
    isOptionEqualToValue: (option: { code: string }, value: { code: string }) =>
      option.code === value.code,
  };
}
