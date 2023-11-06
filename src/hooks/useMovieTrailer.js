import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TRAILER_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, []);
  const getMoviesVideos = async () => {
    const data = await fetch(API_TRAILER_URL(movieId), API_OPTIONS);
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
