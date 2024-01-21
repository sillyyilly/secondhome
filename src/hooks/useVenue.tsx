import { Mappedin, TGetVenueMakerOptions, getVenueMaker } from "@mappedin/mappedin-js";
import { useEffect, useState } from "react";

export default function useVenue(options: TGetVenueMakerOptions) {
  const [venue, setVenue] = useState<Mappedin | undefined>();

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const data = await getVenueMaker(options);
        if (!ignore) {
          setVenue(data);
        }
      } catch (e) {
        setVenue(undefined);
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [options]);

  return venue;
}

