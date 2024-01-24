import { useState, useEffect } from "react";

/**
 * useApartments utilise les hooks useState et useEffect pour récupérer la 
 * liste des appartements à partir d'un fichier JSON ("db.json").
 *  Elle gère également l'annulation de la requête avec un AbortController et 
 * retourne la liste des appartements obtenue.
 * @returns 
 */
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