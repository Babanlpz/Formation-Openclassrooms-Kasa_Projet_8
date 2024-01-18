import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, []);
  return flat;
}

export { useApartment };