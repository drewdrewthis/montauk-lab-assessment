import Autocomplete from "src/ui/components/forms/Autocomplete";
import LoadingInfo from "./LoadingInfo";
import cx from "classnames";
import styles from "./styles.module.scss";
import { Alert } from "@mui/material";
import { useController } from "./hooks";
import DistanceDisplay from "./DistanceDisplay";

export default function AirportDistanceForm() {
  const { control, error, loading, options, distance, isOptionEqualToValue } =
    useController();

  return (
    <form className="w-full">
      <div className={cx(styles.container, "gap-4 mb-5 w-full")}>
        <Autocomplete
          className="w-1/3"
          control={control}
          isOptionEqualToValue={isOptionEqualToValue}
          label="Departure Airport"
          name="departureAirport"
          options={options}
        />
        <Autocomplete
          className="w-1/3"
          control={control}
          fullWidth
          isOptionEqualToValue={isOptionEqualToValue}
          label="Arrival Airport"
          name="arrivalAirport"
          options={options}
        />
      </div>
      {error && <Alert severity="error">{error.message}</Alert>}
      {<LoadingInfo className={cx(!loading && "invisible")} />}
      <DistanceDisplay distance={distance} />
    </form>
  );
}
