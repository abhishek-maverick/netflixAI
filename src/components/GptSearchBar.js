import { useRef } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS, SEARCH_MOVIE_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(SEARCH_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggests some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
    if (!gptResults.choices) {
      //todo: handle error message
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // [a, b, c, d, e]
    //for each movie search TMDB api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    // add filter to remove duplicate movies with independent genre
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
