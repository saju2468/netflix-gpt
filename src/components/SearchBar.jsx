import { useState, useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchText);
    }
  };

  const handleClear = () => {
    setSearchText("");
    inputRef.current?.focus();
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center bg-black/60 border border-zinc-700/80 focus-within:border-white rounded-full px-3 py-1.5 transition-all duration-300 w-44 sm:w-64 focus-within:w-56 sm:focus-within:w-72"
    >
      {/* Search Icon */}
      <button
        type="submit"
        aria-label="Search"
        className="text-zinc-400 hover:text-white transition-colors mr-2 cursor-pointer flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Titles, people, genres..."
        className="w-full bg-transparent text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none"
      />

      {/* Clear Button (shown when text is entered) */}
      {searchText && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="text-zinc-400 hover:text-white transition-colors ml-1 cursor-pointer flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </form>
  );
};

export default SearchBar;

