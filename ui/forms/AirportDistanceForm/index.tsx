import Autocomplete from "@/ui/components/forms/Autocomplete";
import cx from "classnames";
import styles from "./styles.module.scss";

const options = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];

export default function AirportDistanceForm() {
  const useController() { }
  return (
    <form className={cx(styles.container, "gap-x-4")}>
      <Autocomplete label="Starting Airport" options={options} />
      <Autocomplete label="Ending Airport" options={options} />
    </form>
  );
}
