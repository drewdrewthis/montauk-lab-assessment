import { useEffect, useState } from "react";
import { fetchAirports } from "../airports";

export function useAirports() {
  const [airports, setAirports] = useState();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const airportsData = await fetchAirports().catch((e) => {
        console.error(e);
        setError(new Error("Failed to fetch airports"));
      });

      // Delaying the loading timer creates better UX
      setTimeout(() => setLoading(false), 1000);
      setAirports(airportsData);
    })();
  }, []);

  return {
    airports,
    error,
    loading,
  };
}
