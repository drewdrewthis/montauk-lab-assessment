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
    <form className="max-w-xl w-full">
      <div className={cx(styles.container, "gap-4 mb-4 w-full")}>
        <Autocomplete
          className="flex-1"
          control={control}
          isOptionEqualToValue={isOptionEqualToValue}
          label="Departure Airport"
          name="departureAirport"
          options={options}
          sx={{ minWidth: 150 }}
        />
        <Autocomplete
          className="flex-1"
          control={control}
          fullWidth
          isOptionEqualToValue={isOptionEqualToValue}
          label="Arrival Airport"
          name="arrivalAirport"
          options={options}
          sx={{ minWidth: 150 }}
        />
      </div>
      <div className={styles.info}>
        {!loading && error && (
          <Alert severity="error" className="max-w-sm mx-auto">
            {error.message}
          </Alert>
        )}
        {loading && <LoadingInfo />}
        {!loading && <DistanceDisplay distance={distance} />}
      </div>
    </form>
  );
}
