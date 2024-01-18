import { useState, useEffect } from "react";


const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);

    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);
  return apartments;
};

export { useApartments };