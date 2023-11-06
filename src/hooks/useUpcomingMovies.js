import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
};

export default useUpcomingMovies;
