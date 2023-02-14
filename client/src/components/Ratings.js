import React from "react";


const Ratings = () => {
    return (
    <div className="flex flex-col gap-2">
    <div className="ratings flex flex-col justify-center items-center mt-10">
    <div class="flex items-center">
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <p class="ml-2 text-sm font-bold">4.95</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" class="text-sm font-medium underline hover:no-underline">73 reviews</a>
    </div>

    <div class="flex w-full items-center mt-4 justify-center">
    <span class="text-sm font-medium">5 star</span>
    <div class="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-4/5 bg-yellow-500 rounded"></div>
    </div>
    <span class="text-sm font-medium">70%</span>
    </div>

    <div class="flex w-full items-center mt-4 justify-center">
    <span class="text-sm font-medium">4 star</span>
    <div class="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/5 bg-yellow-500 rounded"></div>
    </div>
    <span class="text-sm font-medium">10%</span>
    </div>

    <div class="flex w-full items-center mt-4 justify-center">
    <span class="text-sm font-medium">3 star</span>
    <div class="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/5 bg-yellow-500 rounded"></div>
    </div>
    <span class="text-sm font-medium">10%</span>
    </div>

    <div class="flex w-full items-center mt-4 justify-center">
    <span class="text-sm font-medium">2 star</span>
    <div class="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-2/6 bg-yellow-500 rounded"></div>
    </div>
    <span class="text-sm font-medium">7%</span>
    </div>

    <div class="flex w-full items-center mt-4 justify-center">
    <span class="text-sm font-medium">1 star</span>
    <div class="w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 flex">
        <div className="w-1/5 bg-yellow-500 rounded"></div>
    </div>
    <span class="text-sm font-medium">3%</span>
    </div>
    </div>
   
    
<article className="px-5 rounded-lg border-slate-400 mt-2">
    <div class="flex items-center mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div class="space-y-1 font-medium">
            <p>Josephine <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Verified Parent</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        
    </div>
    <footer class="text-sm text-gray-500 dark:text-gray-400"><p>Verified Parent</p></footer>
    <p class="font-light text-gray-500 dark:text-gray-400">She was nice and helpful.</p>
    
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
</article>


</div>
    )
}

export default Ratings;