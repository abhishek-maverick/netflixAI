import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json?.results);
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
