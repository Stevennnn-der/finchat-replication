import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search your next investment idea..."
        className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm bg-gradient-to-r from-yellow-200 to-orange-300 placeholder-gray-600 text-gray-700 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
