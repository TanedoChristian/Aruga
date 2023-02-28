import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center w-full search-bar-container gap-1 h-[5vh] mt-3">
      <div className="w-[98%] drop-shadow-xl bg-white rounded-full">
        <input
          type="search"
          className="
                    search-bar
                    form-control
                    w-full
                    h-full
                    px-2
                    py-1
                    text-base
                    font-normal
                    text-gray-700
                    bg-transparent bg-clip-padding
                    border border-solid border-gray-300
                    rounded-full
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
          id="exampleSearch2"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
