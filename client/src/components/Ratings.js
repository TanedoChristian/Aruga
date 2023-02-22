import React from "react";
import Comment from "./Comment";

const Ratings = () => {
    return (
    <div className="flex flex-col gap-2  bg-white">
    <div className="ratings flex flex-col justify-center items-center mt-10">
    <div className="flex items-center">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <p className="ml-2 text-sm font-bold">4.95</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" className="text-sm font-medium underline hover:no-underline">73 reviews</a>
    </div>

    <div className="flex w-full items-center mt-4 justify-center">
    <span className="text-sm font-medium">5 star</span>
    <div className="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-4/5 bg-yellow-500 rounded"></div>
    </div>
    <span className="text-sm font-medium">70%</span>
    </div>

    <div className="flex w-full items-center mt-4 justify-center">
    <span className="text-sm font-medium">4 star</span>
    <div className="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/5 bg-yellow-500 rounded"></div>
    </div>
    <span className="text-sm font-medium">10%</span>
    </div>

    <div className="flex w-full items-center mt-4 justify-center">
    <span className="text-sm font-medium">3 star</span>
    <div className="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/5 bg-yellow-500 rounded"></div>
    </div>
    <span className="text-sm font-medium">10%</span>
    </div>

    <div className="flex w-full items-center mt-4 justify-center">
    <span className="text-sm font-medium">2 star</span>
    <div className="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/6 bg-yellow-500 rounded"></div>
    </div>
    <span className="text-sm font-medium">7%</span>
    </div>

    <div className="flex w-full items-center mt-4 justify-center">
    <span className="text-sm font-medium">1 star</span>
    <div className="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-1/5 bg-yellow-500 rounded"></div>
    </div>
    <span className="text-sm font-medium">3%</span>
    </div>
    </div>
   
    
    <Comment />
    


</div>
    )
}

export default Ratings;