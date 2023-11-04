import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang.hindi.gptSearchPlaceHolder}
        />
        <select className="p-2 m-2 bg-gray-500 text-white">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
