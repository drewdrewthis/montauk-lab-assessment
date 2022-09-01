import MaterialAutocomplete from "@mui/material/Autocomplete";
import { FormLabel, TextField } from "@mui/material";
import { PropsOf } from "@emotion/react";
import { Control, Controller } from "react-hook-form";

type AutoCompleteProps = PropsOf<typeof MaterialAutocomplete>;
type BaseProps = Partial<Omit<AutoCompleteProps, "renderInput">> &
  Pick<AutoCompleteProps, "options">;

interface Props extends BaseProps {
  label: React.ReactNode;
  className?: string;
  name: string;
  /** For use with react-hook-forms */
  control: Control;
}

export default function Autocomplete(props: Props) {
  const { label, className, control, name, ...rest } = props;

  return (
    <div className={className}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <MaterialAutocomplete
            autoComplete
            autoHighlight
            disableListWrap
            disableClearable
            fullWidth
            {...rest}
            onChange={(e, value) => field.onChange(value)}
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </div>
  );
}
