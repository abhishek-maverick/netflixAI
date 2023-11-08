import { BACKGROUND_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="background"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
