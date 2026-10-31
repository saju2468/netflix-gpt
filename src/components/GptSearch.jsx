import { useRef } from "react";

const GptSearch = ({
  placeholder = "What would you like to watch today?",
  buttonText = "Search",
  onSearch,
}) => {
  const searchText = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchText.current?.value.trim();
    if (query && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center px-4">
      <form
        onSubmit={handleSearchSubmit}
        className="w-full max-w-2xl bg-black/80 backdrop-blur-md rounded-xl p-3 grid grid-cols-12 gap-3 border border-zinc-800 shadow-2xl"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={placeholder}
          className="col-span-8 sm:col-span-9 px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-700/60 focus:border-red-600 focus:outline-none placeholder:text-zinc-500 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="col-span-4 sm:col-span-3 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
