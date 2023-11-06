import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
};

export default useTopRatedMovies;
