import { useEffect, useState  } from "react";
import { useLocation, useParams} from "react-router-dom";


/**
 * useApartment utilise les hooks useState et useEffect pour récupérer les données 
 * d'un appartement à partir d'un fichier JSON basé sur l'ID spécifié dans l'emplacement actuel. 
 * Elle utilise également un AbortController pour gérer l'annulation de la requête.
 * @returns 
 */
function useApartment() {
  const {id} = useParams();
  const [flat, setFlat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError404, setIsError404] = useState(false); 

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
   
        if(flat){
          setFlat(flat);
        }else {
          setIsError404(true);
        }
        setIsLoading(false)
      })
      .catch(console.error);
    return () => {
    };
   
  }, []);
  return {isLoading, isError404, flat};
}

export { useApartment };