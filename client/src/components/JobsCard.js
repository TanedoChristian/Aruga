import React from "react";

const JobsCard = (props) => {
  const handleCardClick = () => {
    const data = {
      img: props.img,
      name: props.name,
      address: props.address,
    };

    const url = "/user-details?userid=" + props.userid;
    window.location.href = url;
  };

  return (
    <div
      href="#"
      class="flex flex-col drop-shadow-xl  rounded-xl w-full px-3 py-2 shadow-sm bg-white border border-gray-50 test"
      onClick={handleCardClick}
    >
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg font-bold tracking-wide text-slate-800 sm:text-xl">
            {props.name}
          </h3>
          <div className="flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-xs text-gray-500"></i>
            <p class="mt text-xs font-medium text-gray-600">{props.address}</p>
          </div>
        </div>

        <div class="sm:block sm:shrink-0">
          <img
            src={props.img}
            class="h-16 w-16 rounded-full object-cover shadow-sm"
          />
        </div>
      </div>

      <dl class="mt-3 flex justify-between">
        <div className="flex items-center mt-2">
          <p className="mr-2 text-slate-700 text-sm">5 stars</p>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>

        <button
          className=" rounded-xs text-sm font-medium text-rose-400"
          onClick={handleCardClick}
        >
          View Profile
        </button>
      </dl>
    </div>

    //     <div class="rounded-lg shadow-xl bg-gray-50  flex flex-col " onClick={handleCardClick}>
    //     <div className="h-[300px] w-[350px] flex">
    //         <img class="rounded-t-lg object-cover" src={props.img} alt="" />
    //     </div>
    //     <div class="p-6">
    //         <div className="flex justify-between items-center">
    //             <h5 class=" text-md font-bold tracking-wide text-gray-800">{props.name}</h5>
    //             <p className="text-gray-400 text-sm">{props.address}</p>
    //         </div>

    //     </div>
    // </div>

    /* <div className="rounded-xl card flex flex-col  test shadow-md" onClick={handleCardClick}>
  <div className="card-img">
    <img 
      src={props.img} 
      className="rounded-t-xl"
    />
  </div>
  
  <div className="inline-flex flex-col p-3  rounded-xl z-1 margin-negative bg-white">
    <div className="flex justify-between items-center">
      <h1 className="text-md font-bold tracking-wide">{props.name}</h1>
      <p className="text-slate-500  font-medium text-sm">{props.address}</p>
      </div>
      <div className="flex items-center gap-3 mt-2">
      <span className="secondary-clr text-white rounded-md px-3 py-1 text-sm">Full-time</span>
      <span className="secondary-clr text-white rounded-md px-3 py-1 text-sm">Student</span>

    </div>
  </div>

   </div> */
  );
};

export default JobsCard;
