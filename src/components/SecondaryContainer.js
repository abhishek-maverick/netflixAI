import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-[350px] relative z-20 pl-12">
          <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
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
