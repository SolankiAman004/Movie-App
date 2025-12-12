import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${encodeURIComponent(queryTerm)}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}