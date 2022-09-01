import { LinearProgress } from "@material-ui/core";

export default function LoadingInfo(props) {
  return (
    <div {...props}>
      <p className="w-100 text-center">Loading airports..</p>
      <LinearProgress />
    </div>
  );
}
