import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
