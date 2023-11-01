import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-[400px] relative z-20 pl-12">
          <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        </div>
        {/**
         *
         * MovieList - Popular
         *                - MovieCard
         * MovieList - Now Playing
         * MovieList - Trending
         * MovieList - Horror
         */}
      </div>
    )
  );
};

export default SecondaryContainer;
