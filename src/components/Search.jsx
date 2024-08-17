// Search.jsx
import React from 'react';

const Search = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center lg:px-32 px-5">
      <div className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search Food"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brightColor"
        />
      </div>
    </div>
  );
};

export default Search;