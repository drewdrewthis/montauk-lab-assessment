import MaterialAutocomplete from "@mui/material/Autocomplete";
import { FormLabel, TextField } from "@mui/material";
import { PropsOf } from "@emotion/react";

type AutoCompleteProps = PropsOf<typeof MaterialAutocomplete>;
type BaseProps = Partial<AutoCompleteProps> &
  Pick<AutoCompleteProps, "options">;

interface Props extends BaseProps {
  label: React.ReactNode;
  className?: string;
}

export default function Autocomplete(props: Props) {
  const { label, className } = props;

  return (
    <div className={props.className}>
      <FormLabel>{label}</FormLabel>
      <MaterialAutocomplete
        autoComplete
        autoHighlight
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        {...props}
      />
    </div>
  );
}
