import { Typography } from "@mui/material";

interface Props {
  distance: number;
}

export default function DistanceDisplay(props: Props) {
  const { distance } = props;
  return (
    <Typography className="w-full text-center truncate h-16" variant="h4">
      {formatDistance(distance)}
    </Typography>
  );
}

function formatDistance(distance: number) {
  if (!distance) return "";
  return distance.toFixed(2) + "km";
}
